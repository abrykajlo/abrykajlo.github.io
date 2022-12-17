import type { Image } from "./types";

import images from '$lib/data/images.yaml';
import menu from '$lib/data/menu.yaml';
const posts = import.meta.glob('./**/*.svx', { eager: true });

function getMenuItems() {
    return menu.items
}

function getImages(imageNames?: string[]): Image[] {
    const gallery: Image[] = images.images
    return imageNames?.map((name) => {
        const image = gallery.find((image) => image.name == name);
        return image || { name: '', alt: '', thumbnail: '', path: '' };
      }) || gallery;
}

function getPost(slug: string) {
    for (const path in posts) {
        const post = posts[path]
        if (slug === post.metadata.slug) {
            return post
        }
    }
}

function getPosts() {
    const metadatas = []
    for (const path in posts) {
        metadatas.push(posts[path].metadata)
    }
    return metadatas
}

export default {
    getMenuItems,
    getImages,
    getPosts,
    getPost,
}