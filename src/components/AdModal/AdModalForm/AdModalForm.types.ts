import { UploadFile } from "antd";

export type AdModalFormValues = {
  bannerImage: UploadFile[];
  adUrl: string;
  advAudioFile: UploadFile[];
};
interface AdModalFormProps {
  onHandleAdForm: (values: AdModalFormValues) => void;
  isCreatingAd: boolean;
}

export type { AdModalFormProps }