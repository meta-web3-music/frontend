
// antd imports
import {List,Typography} from 'antd';
const {Text,Title} = Typography;

// hooks imports
import { useMusicMetadata } from '../../../hooks/useMetadata/useMetadata';

// types imports
import { GetAllMusic_musicNFTs } from '../../../graph-ql/queries/GET_ALL_MUSIC/__generated__/GetAllMusic';

interface ListItemProps{
    item: GetAllMusic_musicNFTs
}

const ListItem: React.FC<ListItemProps> = ({item})=>{

    const music = useMusicMetadata(item);

    return (
        <List.Item>
            <List.Item.Meta
            title={<Title level={3}>{music?.body.title}</Title>}
            description={ <Text>{`${Number(item.advNfts[0].expirationDuration)/86400} Days Left`}</Text>  }
            />
            {/* <SongNode musicItem={item} playSong={playSong} /> */}
      </List.Item>
     )
}

export default ListItem