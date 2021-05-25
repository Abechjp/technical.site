# SBクラウドによる Alibaba Cloud Technical site
このテクニカルサイトは、SBクラウドによるAlibaba Cloudのベストプラクティスなどをまとめたリポジトリです。

## 🔗 サイト

Here's [https://ohiro18.github.io/technical.site/](https://ohiro18.github.io/technical.site/)

## 概要
Alibaba Cloudの初心者から、開発者向けに照らしつつ、Alibaba Cloudをどのように使用するか、プロダクトサービスの説明、シナリオに応じた構築方法を技術的に理解するためのサイトです。
Alibaba Cloud初心者向けにアカウントの契約、プロダクトサービスのセットアップ、およびAlibaba Cloudを使ったアプリケーションを開発するのに役に立ちます。

### よくある質問
Alibaba Cloudを使った構築でよくある不明点について回答します。
ここには載っていない・足りないものがあればSBクラウドのTSSサポートセンターへ問い合わせると良いです。

## 🔧 メンテナンス
このテクニカルサイトでの作業・質疑などサポートが必要な場合は、SBクラウドの問い合わせフォームから相談してみてください。


## 🚀 編集

以下、コマンドを実行してください（node、npm、yarnがインストールされていることが前提）

```
$ git clone https://github.com/ohiro18/technical.site.git
$ npm install -g gatsby-cli
$ yarn
$ gatsby develop
```

Visit `http://localhost:8000/` to view the app.

途中からの編集展開時は以下コマンドです。

```
$ rd ./.cache -Recurse ; rd ./public/* -Recurse ; rd ./node_modules -Recurse ; rd ./docs/ -Recurse; mkdir docs
$ rd yarn.lock
$ npm cache clean --force
$ yarn install
$ gatsby clean
$ gatsby develop
```

何かトラブルが起きた場合は以下コマンドで対処します。
https://stackoverflow.com/questions/39293636/npm-err-error-eperm-operation-not-permitted-rename/43987591

```
$ npm cache clean --force
$ npm install -g npm@latest --force
$ npm cache clean --force
$ gatsby clean
$ gatsby develop
```

## 🤖 SEO 対策

Markdownファイルごとにtitleやdescriptionなどのmetaタグを設定することができます。

```markdown
---
title: "タイトル名"
metaTitle: "metaタイトル名"
metaDescription: "meta詳細"
date: "作成日"
author: "作成者"
---
```
## ☁️ Deploy

Just push to Github :)


---
## ライセンス
このテクニカルサイトはすべての人が閲覧できるように公開されています。
ライセンスはなく、プルリクエストの承認者はSBクラウドの貢献者によって判断できます。

