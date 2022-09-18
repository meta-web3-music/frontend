import {useState} from 'react';

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
import MusicListItem from './MusicListItem';

// custom-hooks imports
import useFetchExpiredAds from '../hooks/useFetchExpiredAds';
import useFetchUserMusic from '../hooks/useFetchUserMusic';


const MusicTab: React.FC = () =>{

  const [expired,setExpired] = useState([])

  const moveToExpired=(item)=>{
    console.log(item)
    const copyState = expired.slice()
    copyState.push(item);
    setExpired(copyState)
  }

    return (
      <>
        <ListedCategory onExpire={moveToExpired} />
        <ExpiredCategory dataSource={expired} />
      </>
    )
}

export default MusicTab


interface ListedProps{
  onExpire: (item:object)=>void
}

const ListedCategory: React.FC<ListedProps> = ({onExpire})=>{

    const {music,isLoading,error} = useFetchUserMusic() 
  const [isRemovingSale, setIsRemovingSale] = useState(false)

    const {data:signer} = useSigner()
    
    const removeAdSpace= async(item)=>{

      // call add removing service here.
      const market = MarketPlace__factory.connect(MarketPlaceAddr, signer)
      try{
        setIsRemovingSale(true)
        const res = await market.removeFromSale(item.itemId);
        onExpire(item)
        setIsRemovingSale(false)
        console.log(res)
      }catch(err){
        console.log(err)
        setIsRemovingSale(false)
      }

    }

    const renewAdSpace = async(item)=>{
      // call add removing service here.
      console.log(item)
      const market = MarketPlace__factory.connect(MarketPlaceAddr, signer)
      try{
        const res = await market.createMarketSale(MarketPlaceAddr,item.itemId);
        console.log(res)
      }catch(err){
        console.log(err)
      }
    }
  // TODO: Create error-boundary to catch error when thrown
  if(error){
    throw new Error('Problem caught while fetching music Category')
  }

  return(
    <div className='mt-7'>
      <Title level={3}>Listed</Title>

            <List
            loading={isLoading}
            className={"self-center p-4 max-w-3xl rounded-xl border-slate-800"}
            itemLayout="horizontal"
            dataSource={music}
            renderItem={(item) =><MusicListItem extra={<Button loading={isRemovingSale} onClick={()=>renewAdSpace(item)}>{`${item?.forSale?'De-list':'List'}`}</Button>} item={item}/> }/>
    </div>
  )
}

interface ExpiredProps{
  dataSource: Array<object>
}

const ExpiredCategory: React.FC<ExpiredProps> = ({dataSource})=>{

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
            dataSource={dataSource}
            renderItem={(item) =><MusicListItem extra={<Button>De-List</Button>} item={item}/>
              }/>
        
    </div>
  )
}





