type MintMusicAdFormValues = {
  songName: string;
  artistName: string;
  adDurationDays: number;
  adSpacePrice: string;
  songFile: File[];
};

interface FormProps {
  onHandleMintForm: (value: MintMusicAdFormValues) => void;
  isMinting: boolean;
}

export type { FormProps, MintMusicAdFormValues }