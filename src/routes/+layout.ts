import type { LayoutLoad, PageData } from "./$types";

export const prerender = true;

export const load: LayoutLoad = function (params): PageData {
    return {
        headerData: {
            items: [
                {
                    name: 'home',
                    path: '/',
                },
                {
                    name: 'about',
                    path: '/about',
                },
                {
                    name: 'gallery',
                    path: '/gallery',
                },
            ],
            active: 'home',
        }
    }
}