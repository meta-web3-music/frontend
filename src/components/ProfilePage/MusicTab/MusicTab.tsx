// antd imports
import {List,Typography,Button} from 'antd'
const {Title} = Typography;


// custom-components imports
import ListItem from '../../Shared/ListItem/ListItem';
import useFetchExpiredAds from '../hooks/useFetchExpiredAds';


// custom-hooks imports
import useFetchUserMusic from '../hooks/useFetchUserMusic';


const MusicTab: React.FC = () =>{

    return(
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
            renderItem={(item) =><ListItem extra={<Button>List</Button>} item={item}/> }/>
        
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
            {/* <List
            loading={isLoading}
            className={"self-center p-4 max-w-3xl rounded-xl border-slate-800"}
            itemLayout="horizontal"
            dataSource={ads}
            renderItem={(item) =><ListItem extra={<Button>List</Button>} item={item}/> */}
             {/* }/> */}
        
    </div>
  )
}

