import { createContext, useEffect, useState } from "react";
import { ModeMap, getExercises } from "./mock";
import parseExercises from "./utils/parse/parseExercises";
import { Outlet, useNavigate } from "react-router-dom";

export const modeContext = createContext<any>({});
function App() {
  const [data, setData] = useState<any>([]);
  const [mode, setMode] = useState<ModeMap>(ModeMap.RA_IQA_DRA);
  const navigate = useNavigate();
  useEffect(() => {
    mode && getData(mode);
  }, [mode]);
  async function getData(modeValue: ModeMap) {
    let _data = await getExercises(modeValue);
    _data = parseExercises(_data);
    console.log("_data", _data);
    setData(_data);
  }

  return (
    <>
      <select
        placeholder="请选择模式"
        onChange={(v) => {
          setMode(v.target.value as ModeMap);
          navigate(v.target.value);
        }}
      >
        <option value="">请选择题模板</option>
        {Object.keys(ModeMap).map((item) => (
          <option key={item} value={item}>
            {item}
          </option>
        ))}
      </select>

      {/* 模板预览 👇 */}
      <div className="flex-col justify-center items-center  absolute top-1/2 left-1/2 -translate-y-1/2 -translate-x-1/2 shadow-md p-8">
        <modeContext.Provider value={data}>
          <Outlet />
        </modeContext.Provider>
      </div>
    </>
  );
}

export default App;
