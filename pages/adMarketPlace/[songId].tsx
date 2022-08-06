import {useEffect,useState} from 'react'
import { useRouter } from "next/router"
import { Typography,Button } from 'antd'
import AdModal from '../../src/components/AdModal'

const {Title, Text} = Typography;

const SongAdPage: React.FC = () =>{
    const router = useRouter()
    
    const [selectedSong,setSelectedSong] =useState<object>()
    const [showModal, setShowModal] = useState<boolean>(false)

    useEffect(() => {
      const {songId} = router.query;
      const songObject = listData.find(song=>song.id === Number(songId))
      // fetch data for this particular song
      // use graphql to do this.

      //update state
      setSelectedSong(songObject);
    }, [])


    const handleAdModal = () =>{
        setShowModal(!showModal);
    }

    const navigateBack = () =>{
        router.push('/adMarketPlace')
    }

    const handleAdForm = (formData:Object) =>{
    
        // query IPFS and store music
        // take back returned music CID
        // create an object payload, stringify and pass as argument to contract function
        console.log(formData);
    
        // close modal
        handleAdModal()
      }

    return(
        <div className="flex flex-col align-center justify-center w-full md:w-4/5 lg:w-2/3 m-2 md:m-auto px-2 text-left">
            <Button type='link' style={{marginBottom:'1em'}} onClick={navigateBack} >Back to marketplace</Button>

            <Title level={2}>{selectedSong && selectedSong.name}</Title>

            <div style={{display:'flex', flexDirection:'column',alignItems:'center', border:'1px dashed #e5e5e5',padding:'1.5em'}}>
                <Title level={5}>Mint Song NFT</Title>
                <Text type='secondary'>
                    Increase your business outreach by renting an adspace here
                </Text>
                <Button onClick={handleAdModal} >
                    Mint
                </Button>

                <AdModal onHandleAdForm={handleAdForm} onHandleModal={handleAdModal} isVisible={showModal}/>

             </div>
        </div>
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