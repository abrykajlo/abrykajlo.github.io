import type { PageServerLoad } from "./$types";

export const load: PageServerLoad = () => {
    return {
        title: 'About Me',
        active_item: 'about',
    }
}