
export type BuyAdFormValues = {
  bannerImage: FileList;
  adUrl: string;
  advAudioFile: FileList;
  advTitle: string;
  advDesc: string;
};
interface AdModalFormProps {
  onHandleAdForm: (values: BuyAdFormValues) => void;
  isCreatingAd: boolean;
}

export type { AdModalFormProps }