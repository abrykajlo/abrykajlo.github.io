export type Config = {
    title: string
    description: string
    me: {
        email: string
        author: string
        linkedin: string
        github: string
    }
}

export type MenuItem = {
    name: string
    path: string
}

export type Image = {
    name: string
    path: string
    thumbnail: string
    alt: string
}

export type PostData = {
    title: string
    date: Date
}

export type ArtData = PostData & {
    images: Image[]
}

export type PostCardData = {
    title: string
    date: string
    slug: string
    type: string
    description: string
    taxonomies: {
        tags: string[]
        categories: string[]
    }
}

export type ArtPostCardData = PostCardData & {
    images: Image[]
}