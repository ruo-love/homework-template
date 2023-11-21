import { useEffect, useState } from "react";
import { ModeMap, getExercises } from "./mock";
import { A7Record } from "./components/A7Record";
import { A7WordCard } from "./components/A7WordCard";
import PARSE_FC_APQT_VFC2 from "./utils/parse/PARSE_FC_APQT_VFC2";
function App() {
  const [data, setData] = useState<any>([]);
  useEffect(() => {
    getData();
  }, []);
  async function getData() {
    let _data = await getExercises(ModeMap.FC_APQT_VFC2);
    _data = PARSE_FC_APQT_VFC2(_data);
    setData(_data);
  }
  function onprogress(params: any) {
    console.log("onprogress", params);
  }
  function change(value: any) {
    console.log("change", value);
  }

  return (
    <>
      <div className="flex items-center  absolute top-1/2 left-1/2 -translate-y-1/2 -translate-x-1/2 shadow-md p-8">
        <A7WordCard img={data.img} text={data.text} hint={data.hint} />
        <A7Record
          onprogress={(params: any) => onprogress(params)}
          change={(value: any) => change(value)}
          type={data?.templates?.module}
          model={data}
        />
      </div>
    </>
  );
}

export default App;
