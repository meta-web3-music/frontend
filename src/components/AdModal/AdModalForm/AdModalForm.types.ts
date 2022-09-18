<<<<<<< HEAD
type AdModalFormValues = {
  bannerImage: File[];
=======
import { UploadFile } from "antd";

export type AdModalFormValues = {
  bannerImage: UploadFile[];
  adUrl: string;
>>>>>>> main
};

interface AdModalFormProps {
  onHandleAdForm: (values: AdModalFormValues) => void;
  isCreatingAd: boolean;
}

export type { AdModalFormProps, AdModalFormValues}