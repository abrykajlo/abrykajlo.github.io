import type { PageLoad } from "./$types";
import data from "$lib/data";

export const load: PageLoad = () => {
    return {
        title: 'Up And Adam',
        active_item: 'home',
        posts: data.getPosts(),
        gallery: data.getImages(),
    }
}