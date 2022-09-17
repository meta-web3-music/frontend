export type MintMusicWAdFormValues = {
  songName: string;
  artistName: string;
  adDurationDays: number;
  adSpacePrice: string;
  songFile: File[];
};

interface FormProps {
  onHandleMintForm: (value: MintMusicWAdFormValues) => void;
  isMinting: boolean;
}

export type { FormProps }