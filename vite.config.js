import { sveltekit } from '@sveltejs/kit/vite';
import path from 'path';
import { defineConfig } from 'vite';
import { enhancedImages } from '@sveltejs/enhanced-img';

// /** @type {import('vite').UserConfig} */
export default defineConfig({
	plugins: [
		enhancedImages(),
		sveltekit()],
	resolve: {
		alias: {
			$routes: path.resolve('./src/routes')
		}
	}
});

// export default config;
