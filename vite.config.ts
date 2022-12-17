import { sveltekit } from '@sveltejs/kit/vite';
import type { UserConfig } from 'vite';
import yaml from '@rollup/plugin-yaml'

const config: UserConfig = {
	plugins: [sveltekit(), yaml()],
};

export default config;
