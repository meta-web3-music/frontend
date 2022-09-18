// antd imports
import {List,Typography,Button} from 'antd'
const {Title} = Typography;

// wagmi imports
import { useSigner } from 'wagmi';

// contract imports
import { AdvNFT__factory, MarketPlace__factory } from '../../../contracts';
import { AdvNFTAddr, MarketPlaceAddr } from '../../../env';

// custom-components imports
import ListItem from '../../Shared/ListItem/ListItem';
import useFetchExpiredAds from '../hooks/useFetchExpiredAds';

// custom-hooks imports
import useFetchUserMusic from '../hooks/useFetchUserMusic';


const MusicTab: React.FC = () =>{
    return (
      <>
        <ListedCategory />
        <ExpiredCategory />
      </>
    )
}

export default MusicTab



const ListedCategory: React.FC = ()=>{

    const {music,isLoading,error} = useFetchUserMusic() 
    console.log(music)

    const {data:signer} = useSigner()
    
    const removeAdSpace=()=>{
      // call add removing service here.

      // connect to music nft smart-contract
      // const adNft = AdvNFT__factory.connect(AdvNFTAddr, signer);
      // adNft.createAdSpace()
      // const market = MarketPlace__factory.connect(MarketPlaceAddr, signer)
      // market.removeFromSale()
    }

  // TODO: Create error-boundary to catch error when thrown
  if(error){
    throw new Error('Problem caught while fetching music Category')
  }

  return(
    <div className='mt-7'>
      <Title level={3}>Listed</Title>
            {/* <List
            loading={isLoading}
            className={"self-center p-4 max-w-3xl rounded-xl border-slate-800"}
            itemLayout="horizontal"
            dataSource={music}
            renderItem={(item) =><ListItem extra={<Button onClick={removeAdSpace}>De-List</Button>} item={item}/> }/> */}
        
    </div>
  )
}

const ExpiredCategory: React.FC = ()=>{

    const {ads,isLoading,error} = useFetchExpiredAds()  
  console.log(ads)

  // TODO: Create error-boundary to catch error when thrown
  if(error){
    throw new Error('Problem caught while fetching expired ads')
  }


  return(
    <div className='mt-7'>
      <Title level={3}>Expired</Title>
            <List
            loading={isLoading}
            className={"self-center p-4 max-w-3xl rounded-xl border-slate-800"}
            itemLayout="horizontal"
            dataSource={ads}
            renderItem={(item) =><ListItem extra={<Button>De-List</Button>} item={item}/>
              }/>
        
    </div>
  )
}



