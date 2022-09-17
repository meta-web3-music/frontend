import { UploadFile } from "antd"
export type MintMusicWAdFormValues = {
  songName: string;
  artistName: string;
  adDurationDays: number;
  adSpacePrice: string;
  artWorkFile: UploadFile[];
  songFile: UploadFile[];
};

interface FormProps {
  onHandleMintForm: (value: MintMusicWAdFormValues) => void;
  isMinting: boolean;
}

export type { FormProps }