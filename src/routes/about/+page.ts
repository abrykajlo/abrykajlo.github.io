import type { PageLoad } from "./$types";

export const load: PageLoad = () => {
    return {
        active_item: 'about',
    }
}