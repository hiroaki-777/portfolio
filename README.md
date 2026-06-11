# Hiroaki Sasaki — Portfolio（管理画面つき）

今までのHTMLサイトのデザインはそのままに、**ブラウザの管理画面から作品を追加・編集・削除**できるようにしたものです。
仕組みは「Eleventy（サイト自動生成）＋ Decap CMS（管理画面）＋ Netlify（無料ホスティング）」。
**月額0円**で運用できます。

---

## 全体の流れ（最初の1回だけ）

1. このフォルダ一式を GitHub にアップロードする
2. Netlify に GitHub を連携して公開する
3. Netlify Identity（ログイン機能）を有効にする
4. 自分を管理者として招待する

これで `https://（あなたのサイト）/admin/` にアクセスすると管理画面が開き、
以後は**コードを一切触らずに作品を追加**できます。

---

## セットアップ手順

### 1. GitHub にアップロード
- GitHub（https://github.com）でアカウントを作り、「New repository」で新しいリポジトリを作成（名前は何でもOK、Public推奨）。
- このフォルダの中身一式をアップロード（ドラッグ&ドロップ可）。
  - `node_modules` と `_site` フォルダがもしあれば、それは**上げなくてOK**です（`.gitignore`で除外されます）。

### 2. Netlify で公開
- Netlify（https://www.netlify.com）に GitHub アカウントでログイン。
- 「Add new site」→「Import an existing project」→ GitHub → さきほどのリポジトリを選択。
- ビルド設定は自動で読み込まれます（`netlify.toml` に記載済み）。
  - Build command: `npm run build`
  - Publish directory: `_site`
- 「Deploy」を押すと数十秒で公開されます。

### 3. ログイン機能（Netlify Identity）を有効化
- Netlify のサイト管理画面 →「Integrations」または「Identity」→「Enable Identity」。
- 続けて「Identity」→「Services」→「Git Gateway」→「Enable Git Gateway」。
  - ※これで管理画面からの保存内容がGitHubに自動コミットされます。

### 4. 自分を招待
- 「Identity」→「Invite users」で自分のメールアドレスを入力。
- 届いたメールのリンクからパスワードを設定。
- 以後、`https://（あなたのサイト）/admin/` でログインできます。

---

## 作品の追加方法（2回目以降は毎回これだけ）

1. `https://（あなたのサイト）/admin/` を開いてログイン。
2. 左の「作品 (Works)」→「New 作品」。
3. 各項目を入力：
   - **タイトル** … 作品名
   - **カテゴリ** … Flyer / Shop Card / Logo / Banner / SNS から選択
   - **表示順** … 数字が小さいほどページの先頭に表示
   - **レイアウト** … 見せ方を選択（下の表を参照）
   - **説明文** … 作品の説明
   - **担当** … Concept, Design など（Enterで複数追加）
   - **画像** … アップロード（facesは1枚目=表/2枚目=裏）
   - その他は任意
4. 「Publish」を押すと、1〜2分後に自動でサイトへ反映されます。

### レイアウトの選び方
| レイアウト | 使う場面 | 画像の枚数 |
|---|---|---|
| **faces** | フライヤーなど表・裏の2枚組 | 2枚（1枚目=表/2枚目=裏） |
| **single** | ショップカードなど1枚もの | 1枚 |
| **banner** | Webバナーを縦に並べる | 複数枚 |
| **logo** | ロゴ（明・暗の展開つき） | 1枚 |
| **sns** | SNS紹介（リンクボタンつき） | 1枚 |

新しいカテゴリ（例：Poster）を増やしたい場合だけ、`src/_data/categories.js` の編集が必要です。

---

## 手元で確認したいとき（任意）
```
npm install
npm start
```
→ ブラウザで http://localhost:8080 が開きます。

---

## フォルダ構成（参考）
```
src/
  index.njk            … トップページ
  categorypage.njk     … カテゴリ別ページ（自動生成）
  _includes/           … 共通テンプレート
  _data/categories.js  … カテゴリ定義
  works/*.md           … 作品データ（管理画面が読み書きする場所）
  images/              … 画像
  admin/               … 管理画面（Decap CMS）
  style.css / site.js  … 元サイトのデザイン・動き（そのまま）
```
