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
      // 保存形式を .mdoc から .mdx に変更（Astroのテンプレートに合わせるため）
      path: 'src/content/blog/*',
      format: { contentField: 'content' },
      entryLayout: 'content',
      schema: {
        title: fields.slug({ name: { label: 'Title' } }),
        description: fields.text({ label: 'Description', multiline: true }),
        pubDate: fields.date({ label: 'Published Date' }),
        // 【修正1】カテゴリ選択を追加（これがないと一覧に出ない場合があります）
        category: fields.select({
          label: 'Category',
          options: [
            { label: 'Drone', value: 'drone' },
            { label: 'Engineering', value: 'engineering' },
            { label: 'Daily', value: 'daily' },
          ],
          defaultValue: 'engineering',
        }),
        // 【修正2】画像をドラッグ＆ドロップできるように変更
        heroImage: fields.image({
          label: 'Hero Image',
          directory: 'src/assets/images/blog', // 画像の保存先
          publicPath: '../../assets/images/blog/', // 記事からの相対パス
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