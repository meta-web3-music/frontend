
type songShape={
    name:string,
    artist:string,
    url:string
  }
  
  interface StickyPlayerProps{
    selectedSong:songShape
  }

  export type {songShape,StickyPlayerProps}