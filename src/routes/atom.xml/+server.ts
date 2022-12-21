import type { RequestHandler } from "./$types";

import RSS from 'rss'
import { metadatas } from "$lib/data/posts";
import type { PostMetaData } from "$lib/types";

export const prerender = true

export const GET: RequestHandler = ({ setHeaders }) => {
    const website = 'https://www.adambrykajlo.ca'
    const feed = new RSS({
        title: 'Adam Brykajlo\'s Blog',
        site_url: `${website}`,
        feed_url: `${website}/atom.xml`
    })
    metadatas.forEach((metadata) => {
        feed.item({
            title: metadata.title,
            url: `${website}/blog/${metadata.slug}`,
            date: metadata.date,
            description: (metadata as PostMetaData).description ?? '',
            author: 'Adam Brykajlo',
            categories: metadata.taxonomies?.categories,
        })

    })
    setHeaders({
        'Content-Type': 'application/xml'
    })
    return new Response(feed.xml())
}