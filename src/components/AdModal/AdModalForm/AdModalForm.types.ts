type AdModalFormValues = {
  bannerImage: File[];
};

interface AdModalFormProps {
  onHandleAdForm: (values: AdModalFormValues) => void;
  isCreatingAd: boolean;
}

export type { AdModalFormProps, AdModalFormValues}