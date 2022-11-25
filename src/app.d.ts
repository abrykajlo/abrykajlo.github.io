// See https://kit.svelte.dev/docs/types#app
// for information about these interfaces

import type { HeaderItem } from "$lib/Header.svelte";
import type { Socials } from "$lib/Footer.svelte";

// and what to do when importing types
declare namespace App {
	// interface Locals {}
	interface PageData {
		active_item: string
		header_items: HeaderItem[]
		me: Socials
	}
	// interface Error {}
	// interface Platform {}
}
