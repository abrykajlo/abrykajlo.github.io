import { config } from "$lib/data/config";
import type { LayoutLoad } from "./$types";

export const prerender = true;
export const trailingSlash = 'always';

export const load: LayoutLoad = () => {
    return {
        title: config.title,
    }
}