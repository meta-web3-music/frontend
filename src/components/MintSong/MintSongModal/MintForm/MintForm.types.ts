export type MintMusicWAdFormValues = {
  songName: string;
  artistName: string;
  adDurationDays: number;
  adSpacePrice: number;
  artWorkFile: FileList;
  songFile: FileList;
};

interface FormProps {
  onHandleMintForm: (value: MintMusicWAdFormValues) => void;
  isMinting: boolean;
}

export type { FormProps }