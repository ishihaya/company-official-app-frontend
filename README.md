# Company-Official-App-Frontend

## アプリ起動方法

初回およびモジュールを更新したい時
```
$ make up-build
```

2回目以降
```
$ make up
```

## 補足

huskyのインストール
```
$ make install-husky
```

/.vscode/setting.json設定例
editor.defaultFormatter デフォルトのlintのformatを指定
editor.formatOnSave...ファイル保存時にlintのformatを実行
```
{
  "editor.defaultFormatter": "esbenp.prettier-vscode",
  "editor.formatOnSave": true,
  "editor.fontLigatures": null,
  "editor.codeActionsOnSave": {
    "source.fixAll.eslint": true
  },
  "stylelint.autoFixOnSave": true,
  "typescript.preferences.importModuleSpecifier": "non-relative"
}
```


## memo
アプリを作った方法
```
$ docker-compose run --rm web yarn create next-app --ts
```

huskyの設定は普通にインストールするだけ
```
$ yarn add husky -D
```

環境変数について

.env ... 通常の閲覧可能な環境変数。`NEXT_PUBLIC`をプレフィックスに付けることでブラウザ上で閲覧可能。つけていないやつはサーバーでだけ使うシークレットな値なのでここには記載しない（KEYだけ記載しておく）

.env.local ... シークレットを入れるgitにコミットしないファイル。ローカルでは基本的に不要、デプロイ時に各値を設定しておく。

lint対象ディレクトリを増やすときはnext.config.jsを修正する

vscode
eslintパッケージをインストールでリアルタイムlint解析

.prettierrc.jsにlint formatの設定を記述

makefileとpackage.jsonの使い分け

package.jsonは基本的なものを書いておく

makefileはdockerや複数行にわたる複雑なタスクを書いておく

prettierでformatを実行(他のformatと競合しないようにしている)してnext lintでlintのチェックをする
理由はprettierにはデフォルトのスタイル（整形ルール）が存在するから使いやすいとかなんとか