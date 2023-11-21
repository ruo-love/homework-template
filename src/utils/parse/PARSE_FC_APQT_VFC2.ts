/**
 * Created by wenbozhao on 2017/10/11.
 */
import _ from "lodash";
import parseTitle from "../common/parseTitle";
import parseResourceUrl from "../common/parseResourceUrl";

export default (exercise: any) => {
  const id = exercise.data.id;
  const questions = exercise.included.filter(
    (item: any) => item.type === "questions"
  );
  const resources = exercise.included
    .filter((item: any) => item.type === "resources")
    .map((item: any) => item.attributes);
  const templates = exercise.included.find(
    (item: any) => item.type === "templates"
  ).attributes;
  const text = questions[0].attributes.text;
  const hint = questions[0].attributes.hint;
  const mp3 = parseResource(resources, "mp3");
  const img = parseResource(resources, "swf");
  return {
    id,
    text,
    hint,
    mp3,
    img,
    templates,
  };
};

function parseResource(arr: any, type: string) {
  let result = null;
  arr.forEach((item: any) => {
    if (item.mime === type) {
      result = item;
    }
  });
  return parseResourceUrl(result);
}
