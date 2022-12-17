import type { PageLoad } from "./$types";
import data from '$lib/data'

export const load: PageLoad = () => {
    return {
        title: 'Gallery of Adam Brykajlo',
        active_item: 'gallery',
        gallery: data.getImages()
    }
}