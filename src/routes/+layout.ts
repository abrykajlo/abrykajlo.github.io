import type { LayoutLoad } from "./$types";

export const prerender = true;

export const load: LayoutLoad = () => {
    return {
        header_items: [
            {
                name: 'home',
                path: '/',
            },
            {
                name: 'gallery',
                path: '/gallery',
            },
            {
                name: 'about',
                path: '/about',
            },
        ],
        me: {
            linkedin: 'abrykajlo',
            github: 'abrykajlo',
        },
    }
}