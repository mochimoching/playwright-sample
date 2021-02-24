## Node.jsのインストール
- [Node.js公式サイト](https://nodejs.org/ja/)

## playwrightのインストール
``npm i playwright --save``

## 環境変数の設定(.env1)
```
USERNAME_PROXY=hoge // プロキシ認証がある場合、ユーザ名
PASSWORD_PROXY=hoge // プロキシ認証がある場合、パスワード
URL=http://www.exmple.com/ // ログイン対象WebサービスのURL
USERNAME_APP=hoge // ログイン対象Webサービスのユーザ名
PASSWORD_APP=hoge // ログイン対象Webサービスのパスワード
```

## playwrightの実行
``node .``
