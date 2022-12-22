import type { PageLoad } from "./$types";

import { MenuItem } from "$lib/types";

export const load: PageLoad = () => {
    return {
        title: 'About Me',
        activeMenuItem: MenuItem.About,
    }
}