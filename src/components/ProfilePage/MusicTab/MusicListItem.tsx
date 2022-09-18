
// antd imports
import {List,Typography} from 'antd';
const {Text,Title} = Typography;

// hooks imports
import { useMusicMetadata } from '../../../hooks/useMetadata/useMetadata';

// types imports
import { GetUserUnsold_marketItems } from '../../../graph-ql/queries/GET_UNSOLD/__generated__/GetUserUnsold';
import { ReactNode } from 'react';
import { useMarketMetadata } from '../../../hooks/useMetadata/useMarketMetadata';


interface ListItemProps{
    item: GetUserUnsold_marketItems
    extra: ReactNode
}

const MusicListItem: React.FC<ListItemProps> = ({item,extra=null})=>{

    console.log('from musiclistitem',item)
    const music = useMarketMetadata(item);

    return (
        <List.Item
        extra={extra}
        >
            <List.Item.Meta
            title={<Title level={5}>{music?.body.title}</Title>}
            description={ <Text>{`${Number(item?.token.expirationDuration)/86400} Days Left`}</Text>  }
            />
            {/* <SongNode musicItem={item} playSong={playSong} /> */}
      </List.Item>
     )
}

export default MusicListItem