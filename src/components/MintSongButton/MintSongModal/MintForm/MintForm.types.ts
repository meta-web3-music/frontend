export type MintMusicFormValues = {
  songName: string;
  artistName: string;
  artWorkFile: FileList;
  songFile: FileList;
};

export type MintAdFormValues = {
  price: string;
  duration: number;
}

interface FormProps {
  onHandleMintForm: (value: MintMusicFormValues) => void;
  isMinting: boolean;
}

export type { FormProps }