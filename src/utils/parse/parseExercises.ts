/**
 * Created by wenbozhao on 2017/10/11.
 */
import _ from "lodash";

export default (exercise: any) => {
  const id = exercise.data.id;
  const resources = exercise.included
    .filter((item: any) => item.type === "resources")
    .map((item: any) => item.attributes);
  const options = exercise.included
    .filter((item: any) => item.type === "options")
    .map((item: any) => item.attributes);
  const templates = exercise.included.find(
    (item: any) => item.type === "templates"
  ).attributes;
  const questions = exercise.included
    .filter((item: any) => item.type === "questions")
    .map((item: any) => item.attributes);
  const text = questions[0].text;
  const hint = questions[0].hint;
  const mp3 = parseResource(resources, "mp3");
  const img = parseResource(resources, "swf");
  return {
    id,
    text,
    hint,
    mp3,
    img,
    options,
    questions,
    templates,
  };
};

function parseResource(arr: any, type: string) {
  const results: Array<any> = [];
  arr.forEach((item: any) => {
    if (item.mime === type) {
      results.push(item);
    }
  });

  return results.length ? parseResourceUrl(results) : [];
}

export function _checkIfKellis(filename: string) {
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

export function parseResourceUrl(resource: any) {
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
  resource.forEach((item: any) => {
    urls.push(getUrl(item));
  });
  return urls;
}
