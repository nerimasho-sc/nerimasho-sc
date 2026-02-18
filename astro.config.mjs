import { defineConfig } from 'astro/config';
import tailwindv4 from '@tailwindcss/vite';

/**
 * GitHub Pages 設定
 * 必要に応じて以下の値を変更してください。
 */
const SITE_URL = 'https://nerimasho-sc.github.io';
const BASE_PATH = '/nerimasho-sc/';

// https://astro.build/config
export default defineConfig({
  site: SITE_URL,
  base: BASE_PATH,
  vite: {
    plugins: [tailwindv4()],
  },
});