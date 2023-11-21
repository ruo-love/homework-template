import React, { useEffect, useState } from "react";
import Recorder from "js-audio-recorder";
import { A7Volume } from "./A7Volume";
import { ModeMap } from "../mock";
import a7Player from "../utils/common/a7Player";
import { A7Image } from "./A7Image";
type Props = {
  type: ModeMap;
  disabled?: boolean;
  model: any;
  value?: any;
  change?: (value: any) => void;
  onprogress?: (value: any) => void;
};
export const A7Record: React.FC<Props> = (props: Props) => {
  const [recorder, setRecorder] = useState<any>();
  const [recording, setRecording] = useState(false);
  const [playing, setPlaying] = useState(false);
  const [volume, setVolume] = useState(0);
  const [player, setPlayer] = useState<any>();
  useEffect(() => {
    const recorder = new Recorder();
    recorder.onprogress = function (params) {
      setVolume(params.vol);
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
      () => {},
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
    setVolume(-1);
    const _blob = recorder?.getWAVBlob();

    props.change && props.change(_blob);
  }
  // 播放录音
  function play() {
    setVolume(-1);
    const _blob = recorder?.getWAVBlob();
    const _player = a7Player(
      {
        format: ["wav"],
        onend: function () {
          setPlaying(false);
        },
      },
      _blob
    );
    setPlayer(_player);
    _player.play();
    setPlaying(true);
  }
  // 暂停播放
  function pausePlay() {
    player.stop();
    setPlaying(false);
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
    <div className="flex flex-col">
      <div className="flex relative rounded-md overflow-hidden">
        {props.disabled && (
          <div className="absolute z-10 left-0 top-0 w-full h-full  bg-black opacity-30 text-center text-white"></div>
        )}
        <A7Image
          onClick={play}
          class="w-16"
          src="https://sandbox-learn-h5-beta.saybot.net/learn-h5/img/icon-trumpet.ef033f83e3b76e2433e07845ae2f4ab8.png"
        />
        <A7Image
          onClick={handleRecord}
          active={recording}
          class="w-16"
          src="https://sandbox-learn-h5-beta.saybot.net/learn-h5/img/icon-record.b1dccba9163b93305b13a7515f9ab98e.png"
          activeSrc="https://sandbox-learn-h5-beta.saybot.net/learn-h5/img/icon-recording.261a92167b82e545c655fac0e54c31d6.png"
        />
        <A7Image
          onClick={pausePlay}
          active={playing}
          class="w-16"
          src="https://sandbox-learn-h5-beta.saybot.net/learn-h5/img/icon-replay-disabled.9a09017eb700344e90a538bf91ec9f96.png"
          activeSrc="https://sandbox-learn-h5-beta.saybot.net/learn-h5/img/icon-replay.033bafd1679379ba4a8ec1432b716694.png"
        />
      </div>
      <A7Volume volume={volume} />
    </div>
  );
};
