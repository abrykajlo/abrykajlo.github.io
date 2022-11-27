import fs from 'fs'
import toml from 'toml'
import strftime from 'strftime';

export type MenuItem = {
    item: string;
    path: string;
}

function getMenuItems(): MenuItem[] {
    const data = fs.readFileSync(`./data/menu.toml`, 'utf-8')
    const parsed = toml.parse(data.toString())
    return parsed.menu
}

export type Image = {
    name: string;
    path: string;
    thumbnail: string;
    alt: string;
}

function getImages(): Image[] {
    const data = fs.readFileSync(`./data/images.toml`, 'utf-8')
    const parsed = toml.parse(data.toString())
    return parsed.images
}

export class Post {
    id?: number;
    title = '';
    type = '';
    path = '';
    date = new Date();
    description?: string;
    images?: string[];
    taxonomies?: {
        tags: string[];
        categories: string[];
    };
}

function parseTomlPostData(filepath: string): Post {
    const parsed = toml.parse(fs.readFileSync(filepath).toString())
    return parsed
}

function parseMarkdownPostData(filepath: string): Post {
    const split = fs.readFileSync(filepath).toString().split('+++')
    const parsed = toml.parse(split[1])
    const lines = split[2].split('\n')
    const descRegex = /^[a-zA-Z]+/
    for (let i = 0; i < lines.length; i++) {
        if (descRegex.test(lines[i])) {
            parsed.description = lines[i].substring(0, 400).trimEnd() + '...'
            break
        }
    }
    return parsed
}

function getPosts(): Post[] {
    return fs.readdirSync('./posts').map((post) => {
        const filepath = `./posts/${post}`
        let parsed = new Post()
        if (post.endsWith('toml')) {
            parsed = parseTomlPostData(filepath)
        } else if (post.endsWith('md')) {
            parsed = parseMarkdownPostData(filepath)
        }
        parsed.date = new Date(parsed.date)
        parsed.path = strftime(`/blog/%Y/%m/%d/${post.split('.')[0]}`, parsed.date)
        return parsed
    }).sort((post1, post2) => {
        return post2.date.getTime() - post1.date.getTime()
    })
}

export default {
    getMenuItems,
    getImages,
    getPosts,
}