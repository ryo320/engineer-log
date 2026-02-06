import { config, fields, collection } from '@keystatic/core';

export default config({
  storage: {
    kind: 'github',
    repo: { owner: 'ryo320', name: 'engineer-log' },
  },
  collections: {
    blog: collection({
      label: 'Blog Posts',
      // 'title' フィールドを記事の識別子（ファイル名）として使用します
      slugField: 'title',
      path: 'src/content/blog/*',
      // data: 'yaml' を追加することで、Astroが読み取りやすい形式で保存します
      format: { data: 'yaml', contentField: 'content' },
      entryLayout: 'content',
      schema: {
        // 【解決】fields.slug を使うことで、これ一つで「タイトル入力」と「URL自動生成」の両方を行います
        title: fields.slug({ 
          name: { 
            label: 'Title',
            description: 'タイトルを入力すると、自動的にURL用の文字列（Slug）が生成されます。'
          } 
        }),
        description: fields.text({ label: 'Description', multiline: true }),
        pubDate: fields.date({ label: 'Published Date' }),
        // 【修正】カテゴリを4つの選択肢に変更
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