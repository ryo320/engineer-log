// 既存の定数
export const SITE_TITLE = 'Engineer Log';
export const SITE_DESCRIPTION = '新社会人エンジニアの学びと日常の記録。';

// ▼▼▼ 新しく追加するカテゴリ設定 ▼▼▼

// カテゴリの情報をここで一元管理します
// 将来カテゴリを変更・追加したい場合は、このリストを編集するだけでOKです。
export const CATEGORIES = [
	{
		slug: 'journal', // URLになる名前
        label: 'Journal', // 画面に表示される名前
        description: '日々の仕事での学びや、ちょっとした気づきの記録。'
	},
	{
		slug: 'technical',
		label: 'Technical',
		description: '趣味でおこなう技術系の挑戦を記録します。',
	},
	{
		slug: 'lifestyle',
		label: 'Lifestyle',
		description: 'ガジェットや旅行、QOLを高めるモノ・コトについて。',
	},
    // 新しいカテゴリを追加したい場合は、ここに同じ形式で追記するだけ！
] as const;

// (TypeScript用の便利な型定義。気にしなくてOKです)
export type CategoryData = typeof CATEGORIES[number];
export type CategorySlug = CategoryData['slug'];