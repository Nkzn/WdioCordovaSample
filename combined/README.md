統合版サンプル
==========

プロダクトコードとテストコードを同居させた場合のサンプルです。

Setup
----------

```
$ git clone git@github.com:Nkzn/WdioCordovaSample.git
$ cd WdioCordovaSample/combined
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


