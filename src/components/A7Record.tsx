import React, { useEffect, useState } from "react";
import Recorder from "js-audio-recorder";
import { ModeMap } from "../mock";
type Props = {
  type: ModeMap;
  disabled?: boolean;
  model: any;
  value?: any;
  change?: (value: any) => void;
  onprogress?: (value: any) => void;
};
export const A7Record: React.FC<Props> = (props: Props) => {
  console.log(props);
  const [recorder, setRecorder] = useState<any>();
  const [recording, setRecording] = useState(false);
  useEffect(() => {
    const recorder = new Recorder();
    console.log(recorder);
    recorder.onprogress = function (params) {
      props.onprogress && props.onprogress(params);
    };
    getPermission();
    setRecorder(recorder);
    return () => {
      destroy();
    };
  }, []);
  // 获取权限
  function getPermission() {
    // @ts-ignore
    Recorder.getPermission().then(
      () => {
        console.log("给权限了");
      },
      // @ts-ignore
      (error) => {
        alert(`${error.name} : ${error.message}`);
      }
    );
  }
  // 开始录音
  function start() {
    setRecording(true);
    recorder?.start();
  }

  // 结束录音
  function stop() {
    setRecording(false);
    recorder?.stop();
    props.change && props.change(recorder?.getWAVBlob());
  }
  // 播放录音
  function play() {
    recorder?.play();
  }
  // 暂停播放
  function pausePlay() {
    recorder?.pausePlay();
  }
  // 销毁录音器
  function destroy() {
    recorder?.destroy();
  }
  function handleRecord() {
    if (recording) {
      stop();
    } else {
      start();
    }
  }
  return (
    <div className="flex relative rounded-md overflow-hidden">
      {props.disabled && (
        <div className="absolute z-10 left-0 top-0 w-full h-full  bg-black opacity-30 text-center text-white"></div>
      )}

      <label htmlFor="play">
        <img
          onClick={play}
          className="w-16 h-16"
          id="play"
          src="https://sandbox-learn-h5-beta.saybot.net/learn-h5/img/icon-trumpet.ef033f83e3b76e2433e07845ae2f4ab8.png"
          alt=""
        />
      </label>
      <label htmlFor="start">
        <img
          onClick={handleRecord}
          className="w-16 h-16"
          id="start"
          src={
            recording
              ? "https://sandbox-learn-h5-beta.saybot.net/learn-h5/img/icon-recording.261a92167b82e545c655fac0e54c31d6.png"
              : "https://sandbox-learn-h5-beta.saybot.net/learn-h5/img/icon-record.b1dccba9163b93305b13a7515f9ab98e.png"
          }
          alt=""
        />
      </label>
      <label htmlFor="pausePlay">
        <img
          onClick={pausePlay}
          className="w-16 h-16"
          id="pausePlay"
          src={
            recorder?.size > 0
              ? "https://sandbox-learn-h5-beta.saybot.net/learn-h5/img/icon-replay.033bafd1679379ba4a8ec1432b716694.png"
              : "https://sandbox-learn-h5-beta.saybot.net/learn-h5/img/icon-replay-disabled.9a09017eb700344e90a538bf91ec9f96.png"
          }
          alt=""
        />
      </label>
    </div>
  );
};
