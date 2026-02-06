import { config, fields, collection } from '@keystatic/core';

export default config({
  storage: {
    kind: 'github',
    repo: { owner: 'ryo320', name: 'engineer-log' },
  },
  collections: {
    blog: collection({
      label: 'Blog Posts',
      // ファイル名には 'slug' フィールドの値を使用するように設定
      slugField: 'slug',
      path: 'src/content/blog/*',
      format: { contentField: 'content' },
      entryLayout: 'content',
      schema: {
        // 1. 表示用のタイトル（記事の中に表示される文字）
        title: fields.text({ label: 'Title' }),
        // 2. URL用のスラッグ（Titleから自動生成される設定）
        slug: fields.slug({ 
          from: 'title', 
          label: 'Slug (URL)',
          description: 'URLになる文字列です。タイトルを入力すると自動で生成されます。' 
        }),
        description: fields.text({ label: 'Description', multiline: true }),
        pubDate: fields.date({ label: 'Published Date' }),
        // 3. カテゴリの選択肢を4つに修正
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