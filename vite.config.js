import { sveltekit } from '@sveltejs/kit/vite';
import path from 'path';
import { defineConfig } from 'vite';
import { enhancedImages } from '@sveltejs/enhanced-img';
import svg from '@poppanator/sveltekit-svg';

// /** @type {import('vite').UserConfig} */
export default defineConfig({
	plugins: [
		enhancedImages(),
		sveltekit(),
		svg({
      includePaths: ['./src/lib/icons/logo/'],
      svgoOptions: {
        multipass: true,
        plugins: [
          {
            name: 'preset-default',
            // by default svgo removes the viewBox which prevents svg icons from scaling
            // not a good idea! https://github.com/svg/svgo/pull/1461
            params: { overrides: { removeViewBox: false } },
          },
          { name: 'removeAttrs', params: { attrs: '(fill|stroke)' } },
        ],
      },
    })],
	resolve: {
		alias: {
			$routes: path.resolve('./src/routes')
		}
	}
});

// export default config;
