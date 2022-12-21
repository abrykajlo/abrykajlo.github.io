import { config } from '$lib/data/config'
import { MenuItem } from '$lib/types'

import type { PageLoad } from './$types'

export const load: PageLoad = () => {
    return {
        activeMenuItem: MenuItem.Home,
    }
}