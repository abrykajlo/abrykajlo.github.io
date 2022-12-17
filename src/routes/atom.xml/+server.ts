import type { RequestHandler } from "./$types";

import RSS from 'rss'
import data from "$lib/data";

export const prerender = true

export const GET: RequestHandler = ({ setHeaders }) => {
    const website = 'https://www.adambrykajlo.ca'
    const feed = new RSS({
        title: 'Adam Brykajlo\'s Blog',
        site_url: `${website}`,
        feed_url: `${website}/atom.xml`
    })
    const posts = data.getPosts()
    posts.forEach((post) => {
        feed.item({
            title: post.title,
            url: `${website}${post.path}`,
            date: post.date,
            description: post.description ?? '',
            author: 'Adam Brykajlo',
            categories: post.taxonomies?.categories,
        })
    })
    setHeaders({
        'Content-Type': 'application/xml'
    })
    return new Response(feed.xml())
}