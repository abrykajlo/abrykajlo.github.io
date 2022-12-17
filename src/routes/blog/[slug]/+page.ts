import type { PageLoad } from './$types'
import data from '$lib/data'
import config from '$lib/config';

export const load: PageLoad = ({ params }) => {
    const post = data.getPost(params.slug)
    post.metadata.author = config.me.author
    if (post.metadata.images) {
        post.metadata.images = data.getImages(post.metadata.images)
    }
    return post
}