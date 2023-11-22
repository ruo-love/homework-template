import {
  createBrowserRouter,
  createRoutesFromElements,
  Route,
} from "react-router-dom";
import App from "../App";
import { FC_APQT_VFC2 } from "../template/FC_APQT_VFC2";
import { RA_IQA_SRA } from "../template/RA_IQA_SRA";
import { RA_IQA_DRA } from "../template/RA_IQA_DRA";
import { RAR_IQA_PRA } from "../template/RAR_IQA_PRA";
import { RAR_IQ_SECT } from "../template/RAR_IQ_SECT";
import {RAR_IQ_PFR2} from "../template/RAR_IQ_PFR2";
import {LA_IA_SCR} from "../template/LA_IA_SCR";
import { SA_IAQ_PLC } from "../template/SA_IAQ_PLC";
import { TF_IQ_STF } from "../template/TF_IQ_STF";
import { TAS_IAQ_SGF2 } from "../template/TAS_IAQ_SGF2";
import {TAS_IAP_PLC} from "../template/TAS_IAP_PLC";
import { TF_IAQ_STF } from "../template/TF_IAQ_STF";

const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path="/" element={<App />}>
      <Route path="FC_APQT_VFC2" element={<FC_APQT_VFC2 />} />
      <Route path="RA_IQA_DRA" element={<RA_IQA_DRA />} />
      <Route path="RA_IQA_SRA" element={<RA_IQA_SRA />} />
      <Route path="RAR_IQA_PRA" element={<RAR_IQA_PRA />} />
      <Route path="RAR_IQ_SECT" element={<RAR_IQ_SECT/>} />
      <Route path="RAR_IQ_PFR2" element={<RAR_IQ_PFR2/>} />
      <Route path="LA_IA_SCR" element={<LA_IA_SCR/>} />
      <Route path="SA_IAQ_PLC" element={<SA_IAQ_PLC/>} />
      <Route path="TF_IQ_STF" element={<TF_IQ_STF/>} />
      <Route path="TAS_IAQ_SGF2" element={<TAS_IAQ_SGF2/>} />
      <Route path="TAS_IAP_PLC" element={<TAS_IAP_PLC />} />
      <Route path="TF_IAQ_STF" element={<TF_IAQ_STF />} />
      <Route path="*" element={<div>404</div>} />
    </Route>
  )
);
export default router;
