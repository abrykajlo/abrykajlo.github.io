import type { LayoutServerLoad } from "./$types";
import data from '$lib/data'

export const prerender = true;

export const load: LayoutServerLoad = async () => {
    return {
        title: 'Up And Adam',
        menu_items: data.getMenuItems(),
        me: {
            linkedin: 'abrykajlo',
            github: 'abrykajlo',
        },
    }
}