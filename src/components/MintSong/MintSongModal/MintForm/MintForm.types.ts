export type MintMusicWAdFormValues = {
  songName: string;
  artistName: string;
  adDurationDays: number;
  adSpacePrice: number;
  songFile: File[];
};

interface FormProps {
  onHandleMintForm: (value: MintMusicWAdFormValues) => void;
  isMinting: boolean;
}

export type { FormProps }