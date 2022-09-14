// antd imports
import {List,Typography,Button} from 'antd'
const {Title} = Typography;


// custom-components imports
import ListItem from '../../Shared/ListItem/ListItem';


// custom-hooks imports
import useFetchUserMusic from '../hooks/useFetchUserMusic';


const MusicTab: React.FC = () =>{

    return(
        <MusicCategory/>
    )
}

export default MusicTab


const MusicCategory: React.FC = ()=>{

  const {music,isLoading,error} = useFetchUserMusic()

  // TODO: Create error-boundary to catch error when thrown
  if(error){
    throw new Error('Problem caught while fetching music Category')
  }

  return(
    <div className='mt-7'>
      <Title level={3}>Expired</Title>
            <List
            loading={isLoading}
            className={"self-center p-4 max-w-3xl rounded-xl border-slate-800"}
            itemLayout="horizontal"
            dataSource={music}
            renderItem={(item) =><ListItem extra={<Button>List</Button>} item={item}/> }/>
        
    </div>
  )
}

