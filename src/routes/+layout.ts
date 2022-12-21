import { config } from "$lib/data/config";
import type { LayoutLoad } from "./$types";

export const prerender = true;

export const load: LayoutLoad = () => {
    return {
        title: config.title,
    }
}