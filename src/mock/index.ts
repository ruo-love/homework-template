export enum ModeMap {
  FC_APQT_VFC2 = "FC_APQT_VFC2", // FC_APQT_VFC2 录音单词卡 DsrFlashCard
}

export async function getExercises(mode: ModeMap) {
  return (await import(`./data/${mode}.ts`)).default;
}
