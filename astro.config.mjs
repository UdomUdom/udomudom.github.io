// @ts-check
import { defineConfig } from 'astro/config';
import tailwindcss from '@tailwindcss/vite';

import icon from 'astro-icon';
import mdx from '@astrojs/mdx';
const SERVER_PORT = 4321;
// the url to access your blog during local development
const LOCALHOST_URL = `http://localhost:${SERVER_PORT}`;
// the url to access your blog after deploying it somewhere (Eg. Netlify)
const LIVE_URL = "https://udomudom.github.io";
// this is the astro command your npm script runs
const SCRIPT = process.env.npm_lifecycle_script || "";
const isBuild = SCRIPT.includes("astro build");
let BASE_URL = LOCALHOST_URL;
// When you're building your site in local or in CI, you could just set your URL manually
if (isBuild) {
  BASE_URL = LIVE_URL;
}
// https://astro.build/config
export default defineConfig({
  output: 'static',
  vite: {
    plugins: [tailwindcss()]
  },

  server: { port: SERVER_PORT },
  site: BASE_URL,
  integrations: [icon(), mdx()],
});