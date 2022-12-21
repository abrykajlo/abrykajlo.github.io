import type { PageLoad } from './$types'
import { slugPostMap } from '$lib/data/posts'

export const load: PageLoad = async ({ params }) => {
    return slugPostMap[params.slug]
}