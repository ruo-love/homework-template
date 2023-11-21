#### task

1. 关于后面新模板的一些方案准备 @qiancheng
   1. audio 的相关 api 测试 ios/android 常用设置验证；目前先以 js-audio-recorder 来
   2. howler.js 播放的验证，就以最新版做 demo
   3. 找到原来的题型数据，做一个简单的题型出来(react 组件)

## template

```js
{
  "type": "template_k1",
  "disabled": true,
  "model": {},
  "value": {},
  "onChange": noop
}
```

#### 录音、音频播兼容目标
- ios 14
- android

### js-audio-recorder

1. ios14： safari支持；chrome113不支持,无法安装更高版本
2. ios15:  safari支持；chrome118不支持

#### 题型数据
1. FC_APQT_VFC2 录音单词卡 DsrFlashCard
2. 
