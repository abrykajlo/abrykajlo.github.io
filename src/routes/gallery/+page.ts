import type { PageLoad } from "./$types";

export const load: PageLoad = () => {
    return {
        title: 'Gallery of Adam Brykajlo',
        active_item: 'gallery',
    }
}