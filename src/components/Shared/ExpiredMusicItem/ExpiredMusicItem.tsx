
// antd imports
import {List,Typography} from 'antd';
const {Text,Title} = Typography;

// hooks imports
import { useMusicMetadata } from '../../../hooks/useMetadata/useMetadata';

// types imports
import { GetUserExpiredAdspaces_advNFTs, } from '../../../graph-ql/queries/GET_ALL_ADS/__generated__/GetUserExpiredAdspaces';
import { ReactNode } from 'react';

interface ListItemProps{
    item: GetUserExpiredAdspaces_advNFTs
    extra: ReactNode
}

const ExpiredMusicItem: React.FC<ListItemProps> = ({item,extra=null})=>{

    // const music = useMusicMetadata(item);
    console.log(item)

    return (
        <List.Item
        extra={extra}
        >
            <List.Item.Meta
            // title={<Title level={5}>{music?.body.title}</Title>}
            // description={ <Text>{`${Number(item?.advNfts[0].expirationDuration)/86400} Days Left`}</Text>  }
            />
      </List.Item>
     )
}

export default ExpiredMusicItem