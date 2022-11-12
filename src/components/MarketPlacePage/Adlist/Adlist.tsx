import {useEffect,useState} from 'react'

// proptype imports
import {AdlistProp} from './Adlist.types'

// wagmi & rainbowkit imports
import { useConnectModal } from '@rainbow-me/rainbowkit';
import { useAccount } from 'wagmi';

// antd imports
import {Button, List, Typography} from 'antd'
const {Title, Text} = Typography;

// utility imports
import { fetchIpfs } from '../../../services/ipfs/fetchIpfs';

// graphql imports
import { useQuery } from '@apollo/client';
import { GetAllAsks, GetAllAsks_asks } from '../../../graph-ql/queries/GET_ALL_ASKS/__generated__/GetAllAsks';
import { AdvNFTAddr } from '../../../env';
import { GET_ALL_ASKS } from '../../../graph-ql/queries/GET_ALL_ASKS/getAllAsks';

// types imports
import { AdvNftMetaData } from '../../../types/AdvNFTData';


const Adlist: React.FC<AdlistProp> = ({ onRentClick }) => {

    const { openConnectModal } = useConnectModal();
    const {  isConnected } = useAccount()
    
    const {
      loading: isLoadingAllAsks,
      data: allAsksConnection,
      error: allAskError,
    } = useQuery<GetAllAsks>(GET_ALL_ASKS, {
      variables: {
        nftContractAddr: AdvNFTAddr.toLowerCase(),
      },
    });
  
    return (
      <>
  
      <List
        loading={isLoadingAllAsks}
        style={{
          width: "700px",
          alignSelf: "center",
          border: "1px solid #e5e5e5",
          borderRadius: "20px",
          padding: "1em",
        }}
        itemLayout="horizontal"
        dataSource={allAsksConnection?.asks}
        renderItem={(item) => {
          return (
            <List.Item
            extra={
              <Button onClick={isConnected  ?  () => onRentClick(item) : openConnectModal}>Rent Ad Space</Button>
            }
            >
              <List.Item.Meta
                title={<TitleNode item={item} />}
                description="TODO: fetch desc from ipfs"
              />
            </List.Item>
          );
        }}
      />
        </>
    );
  };
  
  interface TitleProps {
    item: GetAllAsks_asks;
  }
  
  const TitleNode: React.FC<TitleProps> = ({ item }) => {
    const [metaData, setMetaData] = useState<AdvNftMetaData>();
    
    console.log(metaData)
  
    const fetchMetaData = async () => {
      const advMetaData = await fetchIpfs<AdvNftMetaData>(
        item.token.metaDataHash
      );
      console.log(advMetaData)
      setMetaData(advMetaData);
    };

    useEffect(() => {
      fetchMetaData();
    }, [item]);

    return (
      <div style={{ display: "flex", alignItems: "center" }}>
        <Title style={{ marginRight: "5px", marginBottom: "0px" }} level={5}>
          {metaData?.name}
        </Title>
        <span
          style={{
            background: "#f4f4f4",
            padding: "2px 6px",
            borderRadius: "20px",
          }}
        >
          {item.token.id}
        </span>
      </div>
    );
  };
  

  export default Adlist