export type Config = {
    title: string;
    description: string;
    me: {
        email: string;
        author: string;
        linkedin: string;
        github: string;
    }
}

export type MenuItem = {
    item: string;
    path: string;
}

export type Image = {
    name: string;
    path: string;
    thumbnail: string;
    alt: string;
}

export type Post = {
    title: string;
    date: Date;
    content?: string;
    images?: Image[];
    type: string;
}

export type PostData = {
    id?: number;
    title: string;
    date: Date;
    path: string;
    type: string;
    description?: string;
    images?: Image[];
    taxonomies?: {
        tags: string[];
        categories: string[];
    };
}