import type { PageServerLoad } from "./$types";
import data from '$lib/data'

export const load: PageServerLoad = () => {
    return {
        title: 'Gallery of Adam Brykajlo',
        active_item: 'gallery',
        gallery: data.getImages()
    }
}