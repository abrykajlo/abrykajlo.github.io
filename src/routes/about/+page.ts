import type { PageLoad } from "./$types";

export const load: PageLoad = () => {
    return {
        title: 'About Me',
        active_item: 'about',
    }
}