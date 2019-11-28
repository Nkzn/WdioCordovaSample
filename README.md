WebdriverIO + Cordova Sample
==========

[WebdriverIO + AppiumでCordova製iOSアプリをテストする（前編） - agri-note inside](https://watercelldev.hatenablog.jp/entry/2019/11/27/175942)のサンプルコードです。

Requirements
----------

- Cordova CLI
    - `$ npm install -g cordova`
- Xcode 11.2

Setup
----------

```
$ git clone git@github.com:Nkzn/WdioCordovaSample.git
$ cd WdioCordovaSample
$ npm i
$ cordova prepare
```

ここまでで、 `platforms` や `plugins` といったフォルダが生成されます。

Build app
----------

```
$ cordova build ios
```

`platforms/ios/build/emulator/HelloCordova.app` にデバッグ用のアプリが生成されます。アプリを編集したら、テストする前に必ずこの手順を実施してください。

Test app
----------

```
$ npm test
```

シミュレータが起動し、 `test/specs/*.js` に記述されたテストが実施されます。


