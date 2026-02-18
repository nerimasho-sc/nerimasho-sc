### 目的
練馬小SCのホームページ刷新。近隣強豪クラブに対し、「地域密着・楽しさ・入りやすさ」を訴求し、児童募集を強化する。

### 技術スタック
- Framework: Astro (Static Site Generation)
- Styling: Tailwind CSS
- Deployment: GitHub Pages (GitHub Actionsによる自動デプロイ構成)
- Data: Markdown または JSON (Content Collectionsを利用)

### 構成の指示
1. 既存サイト (https://nerimasho-sc.amebaownd.com/) の課題（情報が埋もれている、スマホで表が見にくい等）を解消したモダンな1カラムデザインにする。
2. 「初めての方へ」「指導方針」「練習日程（Googleカレンダー埋め込み）」「お問い合わせ（Googleフォーム連携）」を独立させつつ、導線を強化する。
3. スマホ閲覧時に、常に「体験入団のお問い合わせ」ができるUIを実装する。

### 実装の要望
- 共通パーツ（ヘッダー、フッター、ボタン、カード）をコンポーネント化すること。
- GitHub Pages公開用の `deploy.yml` を作成すること。
- 写真が少なくても寂しく見えないよう、配色とタイポグラフィでスポーツ感を出すこと。
- クラブカラーは黄色なので、それをベースにしてほしい。
- ユニフォームは1stが黄・青・黄、2stが赤・黒・黒

「Astroの astro.config.mjs で、GitHub Pages用の site 属性（URL）と base 属性（リポジトリ名）を正しく設定したコードを出力してください。」