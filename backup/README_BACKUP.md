# バックアップファイル説明

## 概要
このフォルダには、プロジェクトの重要なファイルのバックアップが保存されています。
修正でぐちゃぐちゃになった場合に、これらのファイルを使用して元の状態に戻すことができます。

## バックアップファイル一覧

### ソースコード
- `src_YYYYMMDD_HHMMSS/` - srcディレクトリの完全なバックアップ
  - App.tsx
  - main.tsx
  - index.css
  - vite-env.d.ts

### 設定ファイル
- `package.json_YYYYMMDD_HHMMSS` - 依存関係とスクリプト設定
- `tailwind.config.js_YYYYMMDD_HHMMSS` - Tailwind CSS設定
- `vite.config.ts_YYYYMMDD_HHMMSS` - Vite設定
- `README.md_YYYYMMDD_HHMMSS` - プロジェクト説明書

## 復元方法

### 1. ソースコードの復元
```bash
# 最新のバックアップを確認
ls src_*

# 最新のバックアップでsrcディレクトリを置き換え
rm -rf src
cp -r src_最新のタイムスタンプ src
```

### 2. 設定ファイルの復元
```bash
# 各設定ファイルを復元
cp package.json_最新のタイムスタンプ package.json
cp tailwind.config.js_最新のタイムスタンプ tailwind.config.js
cp vite.config.ts_最新のタイムスタンプ vite.config.ts
cp README.md_最新のタイムスタンプ README.md
```

### 3. 依存関係の再インストール
```bash
npm install
```

## 注意事項
- バックアップは日時付きで保存されているため、最新のものを確認してから復元してください
- 復元前に現在の作業内容を別途保存することをお勧めします
- 復元後は必ず `npm install` を実行して依存関係を更新してください

## バックアップ作成日時
- 2024年12月19日: 初期バックアップ作成 