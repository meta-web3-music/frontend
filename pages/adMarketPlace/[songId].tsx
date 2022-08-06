import {useEffect,useState} from 'react'
import { useRouter } from "next/router"

const SongAdPage: React.FC = () =>{
    const router = useRouter()

    useEffect(() => {
      const {songId} = router.query;
      console.log(songId)
      const songObject = listData.find(song=>song.id === Number(songId))
      console.log(songObject)
    }, [])
    // fetch data for this particular song
    return(
        <div>Ad page</div>
    )
}

export default SongAdPage

const listData = [
    {
      id:1,
      name: 'Call me by name',
      ownerAddress: '0x34...7463',
      artist: 'Mujahid',
      adSpacePrice: '0.2',
      music:'ipfs url string to be ste to source',
      thumbnail: 'music thumbnail string if it exists',
      noOfViews:'3M'
    },
    {
      id:2,
      name: 'Last Last',
      ownerAddress: '0x34...7463',
      artist: 'Burna Boy',
      adSpacePrice: '0.2',
      music:'ipfs url string to be ste to source',
      thumbnail: 'music thumbnail string if it exists',
      noOfViews:'360K'
    },
    {
      id:3,
      name: 'Girls like us',
      ownerAddress: '0x34...7463',
      artist: 'Zoe wooes',
      adSpacePrice: '0.2',
      music:'ipfs url string to be ste to source',
      thumbnail: 'music thumbnail string if it exists',
      noOfViews:'430K'
    },
  
  ]