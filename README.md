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

### js-audio-recorder、 howler 兼容性测试


| 安卓版本   | QQ 浏览器        | 百度浏览器       | 华为浏览器 | chrome 118 |
| ---------- | ---------------- | ---------------- | ---------- | ---------- |
| android-9  | 本地服务加载失败 | 本地服务加载失败 | √          | √          |
| android-10 |                  |                  |            | √          |
| android-11 |                  |                  |            | √          |
| android-12 | √                | √                | √          | √          |
| android-13 | √                | √                | √          | √          |

| 鸿蒙版本 | QQ 浏览器 | 百度浏览器 | 华为浏览器 | chrome 118 |
| -------- | --------- | ---------- | ---------- | ---------- |
| 鸿蒙3    | √         | √          | √          | √          |
|          |           |            |            |            |

| ios版本 | safari | chrome 118                            |
| ------- | ------ | ------------------------------------- |
| 14      | √      | 无法安装118，最高安装113，但113不支持 |
| 15      | √      | √                                     |
| 16      | √      | √                                     |

#### 题型数据

```
  FC_APQT_VFC2 = "FC_APQT_VFC2", // FC_APQT_VFC2 录音单词卡 DsrFlashCard
  RA_IQA_SRA = "RA_IQA_SRA", // RA_IQA_SRA 跟读练习 DsrReadAloud
  RA_IQA_DRA = "RA_IQA_DRA", // RA_IQA_DRA 跟读对话 DsrReadAndDialogue
  RAR_IQA_PRA = "RAR_IQA_PRA", // RAR_IQA_PRA 口译朗读 ReadAndRecord
  RAR_IQ_SECT = "RAR_IQ_SECT", // RAR_IQ_SECT 口译句子英中 SoundControllerRecording
  RAR_IQ_PFR2 = "RAR_IQ_PFR2", // RAR_IQ_PFR2 口语录音 SoundRecording
  LA_IA_SCR = "LA_IA_SCR", // LA_IA_SCR 听音回答
  SA_IAQ_PLC = "SA_IAQ_PLC", //SA_IAQ_PLC 听音多题选择 ChooseByListening
  TF_IQ_STF = "TF_IQ_STF", // TF_IQ_STF 句子判断 SentenceJudgment

```
