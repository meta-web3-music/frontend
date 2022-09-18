import { UploadFile } from "antd";

export type AdModalFormValues = {
  bannerImage: UploadFile[];
};
interface AdModalFormProps {
  onHandleAdForm: (values: AdModalFormValues) => void;
  isCreatingAd: boolean;
}

export type { AdModalFormProps }