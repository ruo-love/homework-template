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
  const urls: Array<any> = [];
  function getUrl(source: any) {
    let url = "";
    switch (source.mime) {
      case "mp3":
        if (source["audio-path"]) {
          url = parseAssetsPath(source["audio-path"]);
        }
        break;

      case "mp4":
        if (source["video-path"]) {
          url = parseAssetsPath(source["video-path"]);
        }
        break;

      case "swf":
        if (source["image-path"]) {
          if (_checkIfKellis(source["image-path"])) {
            url = source["image-path"];
          } else {
            const match = source["image-path"].match(/(\S+)\.png/)[1];
            url = `${parseAssetsPath(match)}/1024x768/img.png`;
          }
        }
        break;

      default:
        break;
    }
    return url;
  }
  resource.forEach((item:any) => {
    urls.push(getUrl(item));
  });
  return urls;
};
