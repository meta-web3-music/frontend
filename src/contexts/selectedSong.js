import React, {createContext,useState} from 'react'

export const SelectedSongContext = createContext();



export function SelectedSongProvider({children}){
    const [isPlaying,setIsPlaying] = useState(false);
    const [currentSong,setCurrentSong] = useState({});

    const playSong = async(songId) =>{
        console.log(songId)
        setIsPlaying(true);
        try{
        //   setIsFetchingBanner(true);
          //set local state
          setCurrentSong({
            name:'Last last',
            artist: 'Burna Boy',
            url: songId
          })
        }catch(err){
        //   setIsFetchingBanner(false);
        }
          // set selected Song state
          // set banner place holder to start loading while fetching image from ipfs
    
    }

    const value ={
        isPlaying,
        currentSong,
        playSong
    }

    return <SelectedSongContext.Provider value={value}>
        {children}
        </SelectedSongContext.Provider>
}

