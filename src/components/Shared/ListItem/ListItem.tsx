
// antd imports
import {List,Typography} from 'antd';
const {Text,Title} = Typography;

// hooks imports
import { useMusicMetadata } from '../../../hooks/useMetadata/useMetadata';

// types imports
import { GetUserListedMusic_musicNFTs, } from '../../../graph-ql/queries/GET_ALL_MUSIC/__generated__/GetUserListedMusic';
import { ReactNode } from 'react';

interface ListItemProps{
    item: GetUserListedMusic_musicNFTs
    extra: ReactNode
}

const ListItem: React.FC<ListItemProps> = ({item,extra=null})=>{

    console.log('music data',item);
    const music = useMusicMetadata(item);

    return (
        <List.Item
        extra={extra}
        >
            <List.Item.Meta
            title={<Title level={5}>{music?.body.title}</Title>}
            description={ <Text>{`${Number(item?.advNfts[0].expirationDuration)/86400} Days Left`}</Text>  }
            />
            {/* <SongNode musicItem={item} playSong={playSong} /> */}
      </List.Item>
     )
}

export default ListItem