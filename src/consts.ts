// 既存の定数
export const SITE_TITLE = 'Engineer Log';
export const SITE_DESCRIPTION = '新社会人エンジニアの学びと日常の記録。';

// ▼▼▼ 新しく追加するカテゴリ設定 ▼▼▼

// カテゴリの情報をここで一元管理します
// 将来カテゴリを変更・追加したい場合は、このリストを編集するだけでOKです。
export const CATEGORIES = [
	{
		// slug: URLや記事のフロントマターで使う英数字の名前
		slug: 'technical-growth',
		// label: 画面に表示する実際のタイトル
		label: 'Technical',
		// description: ホーム画面のカードに表示する説明文
		description: '日々の業務で触れる技術や、実務で役立つプログラミング手法をアウトプットします。',
	},
	{
		slug: 'ai',
		label: 'AI',
		description: '趣味でおこなう技術系の挑戦を記録します。',
	},
	{
		slug: 'lifestyle',
		label: 'Lifestyle',
		description: 'お気に入りのガジェットや旅行、QOLを高めるモノ・コトについて。',
	},
    // 新しいカテゴリを追加したい場合は、ここに同じ形式で追記するだけ！
] as const;

// (TypeScript用の便利な型定義。気にしなくてOKです)
export type CategoryData = typeof CATEGORIES[number];
export type CategorySlug = CategoryData['slug'];