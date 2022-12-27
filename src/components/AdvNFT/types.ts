export type CommonProps = {
    expirationDuration: number;
    onArtWorkClick: () => void;
    onBtnClick?: () => void;
    btnType?: "outline" | "fill";
    buttonText?: string;
    price?: string;
    status?: "filled" | "open"
    isLoading?: boolean
    CustomButton?: React.ReactNode
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