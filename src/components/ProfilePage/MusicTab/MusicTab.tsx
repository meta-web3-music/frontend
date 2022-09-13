// antd imports
import {List,Typography} from 'antd'
const {Text,Title} = Typography;

// graphql imports
import { useQuery } from "@apollo/client";
import { GET_ALL_MUSIC, GET_ALL_MUSIC_WITH_ADSPACE } from "../../../graph-ql/queries/GET_ALL_MUSIC/getAllMusic";
import { GetAllMusic } from "../../../graph-ql/queries/GET_ALL_MUSIC/__generated__/GetAllMusic";
import { fetchIpfs } from "../../../services/ipfs/fetchIpfs";

// custom-components imports
import ListItem from '../../Shared/ListItem/ListItem';

// wagmi imports
import {useAccount} from 'wagmi'


const MusicTab: React.FC = () =>{

    const {address} = useAccount()

    const {
        loading: isLoadingAllMusic,
        data: allMusicConnection,
        error: allMusicError,
      } = useQuery<GetAllMusic>(GET_ALL_MUSIC_WITH_ADSPACE);


      const userOwnedMusic = allMusicConnection?.musicNFTs?.filter(music=>{
        // alphabets in music.creator.id ( address ) are 
        // returned as lowercase for reasons I don't know
        return music.creator.id === address?.toLowerCase()
      })


    return(
        <div>
            <Title level={2}>Listed</Title>
            <List
            loading={isLoadingAllMusic}
            style={{
            width: "700px",
            alignSelf: "center",
            border: "1px solid #e5e5e5",
            borderRadius: "20px",
            padding: "1em",
            }}
            itemLayout="horizontal"
            dataSource={userOwnedMusic}
            renderItem={(item) =><ListItem item={item}/> }/>
        </div>
    )
}

export default MusicTab