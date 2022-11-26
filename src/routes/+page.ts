import type { PageLoad } from "./$types";

export const load: PageLoad = () => {
    return {
        title: 'Up And Adam',
        active_item: 'home',
    }
}