export type CommonProps = {
    expirationDuration: number;
    onArtWorkClick: () => void;
    onBtnClick?: () => void;
    btnType?: "outline" | "fill";
    buttonText?: string;
    price?: string;
    status?: "filled" | "open" | "expired"
    isLoading?: boolean
    CustomButton?: React.ReactNode
    disabled?: boolean
}

export type AdvNFTUIProps = {
    artist: string;
    title: string;
    views: string;
    artWorkUri: string;
} & CommonProps;

export type AdvNftProps = {
    musicMetaDataUri: string;
} & CommonProps;