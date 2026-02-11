// astro.config.mjs
import { defineConfig } from 'astro/config';
import mdx from '@astrojs/mdx';
import sitemap from '@astrojs/sitemap';
import react from '@astrojs/react';
import keystatic from '@keystatic/astro';
import vercel from '@astrojs/vercel';
import markdoc from '@astrojs/markdoc';

export default defineConfig({
    site: 'https://engineer-log.vercel.app/',
    integrations: [mdx(), sitemap(), react(), keystatic(), markdoc()],
    // ▼ここを強化：Shikiが各行をspan.lineで囲むように強制します
    markdown: {
        shikiConfig: {
            theme: 'github-light',
            wrap: true,
        },
    },
    output: 'static',
    adapter: vercel(),
});

