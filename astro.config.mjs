// @ts-check
import { defineConfig } from 'astro/config';
import mdx from '@astrojs/mdx';
import sitemap from '@astrojs/sitemap';
import react from '@astrojs/react';
import keystatic from '@keystatic/astro';
import vercel from '@astrojs/vercel';

import markdoc from '@astrojs/markdoc';

// https://astro.build/config
export default defineConfig({
    site: 'https://engineer-log.vercel.app/',
    integrations: [mdx(), sitemap(), react(), keystatic(), markdoc()],
    // 'hybrid' を削除し、'static' に戻します（これが現在の推奨設定です）
    output: 'static',
    // アダプターは引き続き必要です
    adapter: vercel(),
});