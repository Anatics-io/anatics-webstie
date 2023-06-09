import adapter from '@sveltejs/adapter-static';
import { vitePreprocess } from '@sveltejs/kit/vite';


/** @type {import('@sveltejs/kit').Config} */
const config = {
  // Consult https://kit.svelte.dev/docs/integrations#preprocessors
  // for more information about preprocessors
  preprocess: vitePreprocess(),

  kit: {
    target: '#svelte',
    adapter: adapter({
      pages: 'build',  // path to public directory
      assets: 'build',  // path to public directory
      fallback: null
    })
  }
};

export default config;
