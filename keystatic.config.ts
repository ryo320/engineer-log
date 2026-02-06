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
      // 'extension' を削除し、有効なプロパティのみにします
      format: { data: 'yaml', contentField: 'content' },
      entryLayout: 'content',
      schema: {
        title: fields.slug({ 
          name: { 
            label: 'Title',
            description: 'タイトルを入力すると、自動的にURL（Slug）が生成されます。'
          } 
        }),
        description: fields.text({ label: 'Description', multiline: true }),
        pubDate: fields.date({ label: 'Published Date' }),
        category: fields.select({
          label: 'Category',
          options: [
            { label: 'Journal', value: 'journal' },
            { label: 'Technical', value: 'technical' },
            { label: 'Lifestyle', value: 'lifestyle' },
            { label: 'Other', value: 'other' },
          ],
          defaultValue: 'other',
        }),
        heroImage: fields.image({
          label: 'Hero Image',
          directory: 'src/assets/images/blog',
          publicPath: '../../assets/images/blog/',
        }),
        content: fields.markdoc({ 
          label: 'Content',
          options: {
            image: {
              directory: 'src/assets/images/blog',
              publicPath: '../../assets/images/blog/',
            }
          }
        }),
      },
    }),
  },
});