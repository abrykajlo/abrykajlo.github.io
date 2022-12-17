import adapter from '@sveltejs/adapter-static';
import preprocess from 'svelte-preprocess';
import { mdsvex } from 'mdsvex';

/** @type {import('@sveltejs/kit').Config} */
const config = {
	// Consult https://github.com/sveltejs/svelte-preprocess
	// for more information about preprocessors
	extensions: ['.svelte', '.svx'],
	preprocess: [
		preprocess({
			postcss: true,
		}), 
		mdsvex({
			layout: {
				post: './src/lib/layouts/Post.svelte',
				art: './src/lib/layouts/Art.svelte',
			}
		}),
	],

	kit: {
		adapter: adapter({
			pages: 'build',
			assets: 'build',
		})
	}
};

export default config;
