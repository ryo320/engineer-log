# 🧑🏻‍💻 Engineer Log

A minimalist, high-performance personal blog platform built with **Astro**. This project is designed to document an engineer's journey, focusing on a premium reading experience and fluid interaction design.

## ✨ Key Features

- **Fluid Animation Engine**: Custom scroll-linked focus logic implemented in Vanilla JavaScript. Items transition smoothly as they enter the focus zone using high-end easing for a professional feel.
- **Typography Optimization**: Advanced CSS layout techniques including `word-break: auto-phrase` and `text-wrap: balance/pretty` to ensure natural line breaks, specifically optimized for Japanese and CJK languages.
- **Visual Centering Logic**: A unique layout hack that ensures perfect visual centering for icon-text combinations in the hero section across all screen sizes.
- **Static Search**: Integrated with **Pagefind** for lightning-fast, full-text search without a heavy backend requirement.
- **Interactive Components**: Includes a lightweight "Like" system and a seamless comment section integration.
- **Performance First**: Zero-dependency animations and optimized script execution to maintain high Lighthouse scores and smooth scrolling.

## 🚀 Project Structure

```text
├── public/              # Static assets (images, fonts, favicons)
├── src/
│   ├── components/      # UI components (Header, Footer, Search, etc.)
│   ├── content/
│   │   └── blog/        # Blog posts (Markdown / MDX)
│   ├── layouts/
│   │   └── BlogPost.astro # Article layout with typography optimizations
│   ├── pages/
│   │   ├── index.astro   # Homepage with scroll-linked focus logic
│   │   └── blog/         # Category and list pages
│   ├── styles/          # Global CSS and utility styles
│   └── consts.ts        # Site configuration and constants
├── astro.config.mjs     # Astro configuration
└── package.json         # Dependencies and scripts