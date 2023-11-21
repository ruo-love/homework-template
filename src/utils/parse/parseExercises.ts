/**
 * Created by wenbozhao on 2017/10/11.
 */
import _ from "lodash";
import parseResourceUrl from "../common/parseResourceUrl";

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
