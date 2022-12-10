import fs from 'fs';
import toml from 'toml';
import strftime from 'strftime';
import {marked} from 'marked';
import type { MenuItem, Image, Post, PostData } from '$lib/types';

/* Exported Functions */

function getMenuItems(): MenuItem[] {
    const data = fs.readFileSync(`./data/menu.toml`, 'utf-8')
    const parsed = toml.parse(data.toString())
    return parsed.menu
}

function getImages(imageNames?: string[]): Image[] {
    const data = fs.readFileSync(`./data/images.toml`, 'utf-8')
    const parsed = toml.parse(data.toString())
    const gallery: Image[] = parsed.images
    return imageNames?.map((name) => {
        const image = gallery.find((image) => image.name == name);
        return image || { name: '', alt: '', thumbnail: '', path: '' };
      }) || gallery;
}

function getPost(slug: string): Post {
    const filename = fs.readdirSync('./posts')
        .find((filename) => filename.startsWith(slug))
    const filepath = `./posts/${filename}`
    return parsePost(filepath)
}

function getPosts(): PostData[] {
    return fs.readdirSync('./posts').map((post) => {
        return parsePostData(`./posts/${post}`)
    }).sort((post1, post2) => {
        return post2.date.getTime() - post1.date.getTime()
    })
}

/* Helper Types */

type PostToml = {
    title: string;
    slug: string;
    date: string;
    type: string;
    images?: string[];
    taxonomies?: {
        tags: string[];
        categories: string[];
    };
}

type Markdown = {
    frontMatter: string;
    markdown: string;
}

/* Helper Functions */

function splitMarkdown(str: string): Markdown {
    const split = str.split('+++')
    return {
        frontMatter: split[1],
        markdown: split[2],
    }
}

function deriveDescription(markdown: string): string {
    let description = ''
    const lines = markdown.split('\n')
    const descriptionRegex = /^[a-zA-Z]+/
    for (let i = 0; i < lines.length; i++) {
        if (descriptionRegex.test(lines[i])) {
            description = lines[i].substring(0, 400).trimEnd() + '...'
            break
        }
    }
    return description
}

function parsePostToml(tomlStr: string): PostToml {
    return toml.parse(tomlStr)
}

function parsePost(filepath: string): Post {
    const fileString = fs.readFileSync(filepath).toString()
    let content = undefined
    let postToml: PostToml | undefined
    if (filepath.endsWith('md')) {
        const markdown = splitMarkdown(fileString)
        content = marked.parse(markdown.markdown)
        postToml = parsePostToml(markdown.frontMatter)
    } else if (filepath.endsWith('toml')) {
        postToml = parsePostToml(fileString)
    }
    const title = postToml?.title || ''
    const type = postToml?.type || ''
    const date = postToml ? new Date(postToml?.date) : new Date()
    const images = postToml?.images ? getImages(postToml?.images) : undefined

    return {
        title,
        date,
        type,
        content,
        images,
    }
}

function parsePostData(filepath: string): PostData {
    const fileString = fs.readFileSync(filepath).toString()
    let description = undefined
    let postToml: PostToml | undefined
    if (filepath.endsWith('toml')) {
        postToml = parsePostToml(fileString)
    } else if (filepath.endsWith('md')) {
        const markdown = splitMarkdown(fileString)
        postToml = parsePostToml(markdown.frontMatter)
        description = deriveDescription(markdown.markdown)
    }
    const title = postToml?.title || ''
    const type = postToml?.type || ''
    const date = postToml ? new Date(postToml?.date) : new Date()
    const path = strftime(`/blog/%Y/%m/%d/${postToml?.slug}`, date)
    const images = postToml?.images ? getImages(postToml?.images) : undefined

    return {
        title,
        type,
        date,
        description,
        path,
        images,
        taxonomies: postToml?.taxonomies,
    }
}

export default {
    getMenuItems,
    getImages,
    getPosts,
    getPost,
}