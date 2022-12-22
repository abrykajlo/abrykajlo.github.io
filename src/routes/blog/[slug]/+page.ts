import type { PageLoad } from './$types'
import { slugPostMap } from '$lib/data/posts'
import { MenuItem } from '$lib/types'

export const load: PageLoad = async ({ params }) => {
    const post = slugPostMap[params.slug]
    return {
        title: post.metadata.title,
        activeMenuItem: MenuItem.Home,
        post
    }
}