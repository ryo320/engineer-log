import { config, fields, collection } from '@keystatic/core';

export default config({
  storage: {
    kind: 'github',
    repo: { owner: 'ryo320', name: 'engineer-log' },
  },
  collections: {
    blog: collection({
      label: 'Blog Posts',
      slugField: 'title',
      path: 'src/content/blog/*',
      format: { contentField: 'content' },
      schema: {
        title: fields.slug({ name: { label: 'Title' } }),
        description: fields.text({ label: 'Description', multiline: true }),
        pubDate: fields.date({ label: 'Published Date' }),
        updatedDate: fields.date({ label: 'Updated Date' }),
        heroImage: fields.text({ label: 'Hero Image Path' }), // 文字列入力
        content: fields.markdoc({ label: 'Content' }), // リッチエディタ
      },
    }),
  },
});