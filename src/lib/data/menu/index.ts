import type { MenuData } from '$lib/types'
import data from './data.yaml'
export const menu = (data as MenuData).menu
export const menuItemPathMap = (data as MenuData).menu_item_path_map