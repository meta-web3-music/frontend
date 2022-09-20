import {useState} from 'react';

// antd imports
import {List,Typography,Button} from 'antd'
const {Title} = Typography;

// apollo imports
import {useQuery} from '@apollo/client';

// wagmi imports
import { useAccount, useSigner } from 'wagmi';

// contract imports
import { AdvNFT__factory, MarketPlace__factory } from '../../../contracts';
import { AdvNFTAddr, MarketPlaceAddr } from '../../../env';

// custom-components imports
import ListItem from '../../Shared/ListItem/ListItem';
import MusicListItem from './MusicListItem';

// custom-hooks imports
import useFetchExpiredAds from '../hooks/useFetchExpiredAds';
import useFetchUserMusic from '../hooks/useFetchUserMusic';
import { GET_USER_UNLISTED_ADS, GET_USER_UNSOLD } from '../../../graph-ql/queries/GET_UNSOLD/getUnsold';
import { GetUserUnsold } from '../../../graph-ql/queries/GET_UNSOLD/__generated__/GetUserUnsold';
import { GetUserUnlisted } from '../../../graph-ql/queries/GET_UNSOLD/__generated__/GetUserUnlisted';


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
        <UnListedCategory />
        <ExpiredCategory dataSource={expired} />
      </>
    )
}

export default MusicTab






const ListedCategory: React.FC= ()=>{

    const {music,isLoading,error} = useFetchUserMusic() 
  const [isRemovingSale, setIsRemovingSale] = useState(false)

    const {data:signer} = useSigner()
    
    const removeAdSpace= async(item)=>{

      // call add removing service here.
      const market = MarketPlace__factory.connect(MarketPlaceAddr, signer)
      try{
        setIsRemovingSale(true)
        const res = await market.removeFromSale(item.itemId);
        setIsRemovingSale(false)
        console.log(res)
      }catch(err){
        console.log(err)
        setIsRemovingSale(false)
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
            renderItem={(item) =><MusicListItem extra={<Button disabled={item.sold?true:false} loading={isRemovingSale} onClick={()=>removeAdSpace(item)}>Unlist</Button>} item={item}/> }/>
    </div>
  )
}


// UNLISTED CATEGORY
const UnListedCategory: React.FC = ()=>{

const {data:signer} = useSigner()
const [isRemovingSale, setIsRemovingSale] = useState(false)


const {address} = useAccount()
  
const {
    loading: isLoading,
    data: allAsk,
    error: error,
  } = useQuery<GetUserUnlisted>(GET_USER_UNLISTED_ADS,{
    variables: {
      sellerAddress:address?.toLowerCase()
    },
  });

  const music = allAsk?.marketItems

  

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
    <Title level={3}>Un-Listed</Title>

          <List
          loading={isLoading}
          className={"self-center p-4 max-w-3xl rounded-xl border-slate-800"}
          itemLayout="horizontal"
          dataSource={music}
          renderItem={(item) =><MusicListItem extra={<Button loading={isRemovingSale} onClick={()=>renewAdSpace(item)}>List</Button>} item={item}/> }/>
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





