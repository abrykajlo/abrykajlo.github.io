export type Socials = {
    email: string
    author: string
    linkedin: string
    github: string
}

export type Config = {
    title: string
    description: string
    me: Socials
}

export enum MenuItem {
    Home = 'home',
    Gallery = 'gallery',
    About = 'about',
}

type MenuItemPathMap = {
    [key in MenuItem]: string
}

export type MenuData = {
    menu: MenuItem[]
    menu_item_path_map: MenuItemPathMap
}

type ImageAltMap = {
    [key: string]: string
}

export type ImageData = {
    gallery: string[]
    image_alt_map: ImageAltMap
}

type CommonMetaData = {
    title: string
    slug: string
    date: string
    taxonomies: {
        tags: string[]
        categories: string[]
    }
}

export enum Layout {
    Art = 'art',
    Post = 'post',
}

export type PostMetaData = CommonMetaData & {
    layout: Layout.Post
    description: string
}

export type ArtMetaData = CommonMetaData & {
    layout: Layout.Art
    images: string[]
}

export type MetaData = PostMetaData | ArtMetaData
