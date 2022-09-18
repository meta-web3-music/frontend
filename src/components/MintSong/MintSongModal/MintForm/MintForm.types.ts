import { UploadFile } from "antd"
export type MintMusicWAdFormValues = {
  songName: string;
  artistName: string;
  adDurationDays: number;
  adSpacePrice: number;
  artWorkFile: UploadFile[];
  songFile: UploadFile[];
};

interface FormProps {
  onHandleMintForm: (value: MintMusicWAdFormValues) => void;
  isMinting: boolean;
}

export type { FormProps }