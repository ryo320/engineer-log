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
      format: { data: 'yaml', contentField: 'content' },
      entryLayout: 'content',
      schema: {
        title: fields.slug({ 
          name: { 
            label: 'Title',
            description: 'タイトルを入力すると、自動的にURL（Slug）が生成されます。',
            // 【追加】タイトルを必須項目（1文字以上）に設定
            validation: { length: { min: 1 } }
          } 
        }),
        description: fields.text({ label: 'Description', multiline: true }),
        // 【修正】datetimeを使用し、defaultValueを正しく設定。これで秒まで自動入力されます。
        pubDate: fields.datetime({ 
          label: 'Published Date',
          defaultValue: { kind: 'now' },
          // 【追加】公開日時の入力を必須に設定
          validation: { isRequired: true }
        }),
        category: fields.select({
          label: 'Category',
          options: [
            { label: 'Journal', value: 'journal' },
            { label: 'Technical', value: 'technical' },
            { label: 'Lifestyle', value: 'lifestyle' },
            { label: 'Other', value: 'other' },
          ],
          defaultValue: 'journal',
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