// See https://kit.svelte.dev/docs/types#app
// for information about these interfaces

import type { HeaderData } from "$lib/Header.svelte";

// and what to do when importing types
declare namespace App {
	// interface Locals {}
	interface PageData {
		headerData: HeaderData
	}
	// interface Error {}
	// interface Platform {}
}
