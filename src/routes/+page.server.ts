import type { PageServerLoad } from "./$types";
import data from "$lib/server/data";

export const load: PageServerLoad = () => {
    return {
        title: 'Up And Adam',
        active_item: 'home',
        posts: data.getPosts(),
        gallery: data.getImages(),
    }
}