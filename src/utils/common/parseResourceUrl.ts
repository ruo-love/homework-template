function _checkIfKellis(filename: string) {
  return filename.startsWith("http");
}
// 解析静态资源路径
export function parseAssetsPath(path: string) {
  const host = `https://course-assets.saybot.net/generate/pieces/`;

  if (_checkIfKellis(path)) {
    // kellis 中 返回的资源已经是完成路径
    return path;
  } else {
    const folderName = path.slice(0, 3);
    return `${host}${folderName}/${path}`;
  }
}

export default (resource: any) => {
  let url = "";
  switch (resource.mime) {
    case "mp3":
      if (resource["audio-path"]) {
        url = parseAssetsPath(resource["audio-path"]);
      }
      break;

    case "mp4":
      if (resource["video-path"]) {
        url = parseAssetsPath(resource["video-path"]);
      }
      break;

    case "swf":
      if (resource["image-path"]) {
        if (_checkIfKellis(resource["image-path"])) {
          url = resource["image-path"];
        } else {
          const match = resource["image-path"].match(/(\S+)\.png/)[1];
          url = `${parseAssetsPath(match)}/1024x768/img.png`;
        }
      }
      break;

    default:
      break;
  }

  return url;
};
