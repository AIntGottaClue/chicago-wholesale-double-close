import { defineConfig } from 'astro/config';
import cloudflare from '@astrojs/cloudflare';

export default defineConfig({
  site: 'https://chicago.wholesaledoubleclose.click',
  output: 'server',
  adapter: cloudflare({ imageService: 'passthrough' }),
  session: false,
  trailingSlash: 'always',
  build: { format: 'directory' }
});
