# Eleanor

[![Built by Devin](https://raw.githubusercontent.com/club-cog/built-by-devin/main/badges/built-by-devin.svg)](https://devin.ai)

React と TanStack Router を使った SPA です。

## ローカル開発

Node.js 24 と npm が必要です。nvm を使う場合は `nvm use` でバージョンを切り替えられます。

```sh
npm ci
npm run dev
```

- `npm run typecheck`: TypeScript の型チェック
- `npm run build`: 型チェックと本番ビルド（出力先: `dist/`）
- `npm run preview`: ビルド結果をローカルで確認
- `npm run lint`: oxlint による静的解析（警告もエラー扱い）
- `npm run format`: oxfmt でコードを整形
- `npm run format:check`: 整形済みかを確認

## ルーティング

`src/routes/` にルートを追加します。最初のルートは `/` と `/about` です。
`src/routeTree.gen.ts` は Vite のルータープラグインが生成します。直接編集せず、ルート変更時は生成結果もコミットしてください。

静的ホスティングでは、アセット以外のリクエストを `index.html` にフォールバックさせてください。これにより、`/about` への直接アクセスやリロードでもルーターが URL を解決できます。
