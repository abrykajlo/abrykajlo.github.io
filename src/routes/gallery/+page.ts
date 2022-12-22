import { MenuItem } from "$lib/types";

import type { PageLoad } from "./$types";

export const load: PageLoad = () => {
    return {
        title: 'Gallery of Adam Brykajlo',
        activeMenuItem: MenuItem.Gallery,
    }
}