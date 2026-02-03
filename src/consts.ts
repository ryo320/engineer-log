// 既存の定数
export const SITE_TITLE = 'Engineer Log';
export const SITE_DESCRIPTION = '新社会人エンジニアの学びと日常の記録。';

// ▼▼▼ カテゴリ設定の一括管理 ▼▼▼

export const CATEGORIES = [
	{
		slug: 'journal',
		label: 'Journal',
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
	{
		slug: 'other', // URL: /blog/other
		label: 'Other', // 表示: Other
		description: 'その他',
	},
] as const;

export type CategoryData = typeof CATEGORIES[number];
export type CategorySlug = CategoryData['slug'];