/**
 * Created by byrne on 2017/8/29.
 */
import _ from "lodash";

export default (exercise: any) => {
  const instruction = `instruction-cn`;
  let title = _.get(exercise, `${instruction}`, "");
  if (!title) {
    title = _.get(exercise, `template.${instruction}`, "");
  }
  return title;
};
