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

deployにはVercelを使用
Vercelには環境がproductionとdevelopment(previewもあるが環境変数はproductionのものが使われる)があるが、柔軟に対応する場合（環境を3つ作りたいなど）
は各環境ごとでプロジェクトを作成して-devなどで同じGitリポジトリに接続して各種設定を対応
現在はdevのみのためmainブランチにdeployした段階でdevのproductionへのdeployが走るようになる、また全てのpushに対してpreviewがデプロイされる

デプロイのCDが不要なので便利

VercelのGUIを操作するだけであとはGitと連携してデプロイが可能

他の対応としては、AWS Amplifyとかでもいいらしい(ISRなどの機能が失われず)。Firebase Hostingでも可能だが、デプロイのしやすさと相性の良さ、ISRなど
の機能が失われる点を見るとVercelを選んでおけばよさそう

料金面は未検討、少なくとも個人開発ではほぼ無料

BaseUrlはsrc/にしている、tsconfig.jsonで設定済み

srcディレクトリにモジュールをどんどん作っていくイメージ
全ページ共通で行う処理は_app.tsxに記述する(コメントにも記述)
グローバルで適用したいcssは_global.scss

エントリポイントはどれか、app.tsxならpagesから出して制御する
glocals.scssとかも出す

styles/やtest/ディレクトリは作成せず各ディレクトリの中で対応させて行う形にする

→必要であればE2Eテストなどはまた別でディレクトリを作成する、そのあたりは考え中

docsを整備する際、各ディレクトリの役割も書いておく

コンポーネント設計はatomic designを使用する(templetesは現時点でとりあえず必要なのかわかっていないので除く)が、基本的にはatomsとorganismsを使えば良い。
本当に使い回しまくる場合はmoleculesに入れて色々やるが、迷うならorganismsに入れる形にする。

→理由: moleculesかorganismsか迷うコストが面倒なので。本当はなくてもいいが、明らかにmoleculesとして活用できそうな場合は使ってあげたほうが良さそうなので一応採用している