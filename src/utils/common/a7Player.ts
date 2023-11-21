import { Howl } from "howler";

export default function player(options: any, audioBlob?: Blob) {
  let _src = "";
  const _options = options;
  if (audioBlob) {
    // 将 Blob 对象转换为可播放的 URL
    _src = URL.createObjectURL(audioBlob);

    _options.src = _src;
  }

  // 创建 Howl 实例
  const sound = new Howl({
    ...options,
  });

  return sound;
}
