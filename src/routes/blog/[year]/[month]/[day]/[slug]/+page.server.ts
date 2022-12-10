import type { PageServerLoad } from './$types'
import data from '$lib/server/data'

export const load: PageServerLoad = ({ params }) => {
    return data.getPost(params.slug)
}