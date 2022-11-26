import type { RequestHandler } from "./$types";

import RSS from 'rss'


export const GET: RequestHandler = ({ setHeaders }) => {
    const feed = new RSS({
        title: 'Adam Brykajlo\'s Blog',
        site_url: 'https://www.adambrykajlo.ca',
        feed_url: 'https://www.adambrykajlo.ca/atom.xml'
    })
    setHeaders({
        'Content-Type': 'application/xml'
    })
    return new Response(feed.xml())
}