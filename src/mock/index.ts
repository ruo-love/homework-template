export enum ModeMap {
  FC_APQT_VFC2 = "FC_APQT_VFC2", // FC_APQT_VFC2 录音单词卡 DsrFlashCard
  RA_IQA_SRA = "RA_IQA_SRA", // RA_IQA_SRA 跟读练习 DsrReadAloud
  RA_IQA_DRA = "RA_IQA_DRA", // RA_IQA_DRA 跟读对话 DsrReadAndDialogue
  RAR_IQA_PRA = "RAR_IQA_PRA", // RAR_IQA_PRA 口译朗读 ReadAndRecord
  RAR_IQ_SECT = "RAR_IQ_SECT", // RAR_IQ_SECT 口译句子英中 SoundControllerRecording
  RAR_IQ_PFR2 = "RAR_IQ_PFR2", // RAR_IQ_PFR2 口语录音 SoundRecording
  LA_IA_SCR = "LA_IA_SCR", // LA_IA_SCR 听音回答
  SA_IAQ_PLC = "SA_IAQ_PLC", //SA_IAQ_PLC 听音多题选择 ChooseByListening
  TF_IQ_STF = "TF_IQ_STF", // TF_IQ_STF 句子判断 SentenceJudgment
}

export async function getExercises(mode: ModeMap) {
  return (await import(`./data/${mode}.ts`)).default;
}
