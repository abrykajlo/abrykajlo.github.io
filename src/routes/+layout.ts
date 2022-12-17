import type { LayoutLoad } from "./$types";
import data from '$lib/data'
import config from '$lib/config'

export const prerender = true;

export const load: LayoutLoad = () => {
    return {
        title: config.title,
        menu_items: data.getMenuItems(),
        me: config.me,
    }
}