分割版サンプル
==========

プロダクトコードとテストコードを分離した場合のサンプルです。こちらのほうがAWS Device Farm等にアップロードする用途には適しています。

Setup app
----------

```
$ git clone git@github.com:Nkzn/WdioCordovaSample.git
$ cd WdioCordovaSample/separated/app
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

Setup test
----------

```
$ cd ../test-runner
$ npm i
```

Test app
----------

```
$ npm test
```

シミュレータが起動し、 `test/specs/*.js` に記述されたテストが実施されます。


