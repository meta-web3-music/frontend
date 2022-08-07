import {useState,useEffect} from 'react'
import { useQuery } from "@apollo/client";
import { List, Typography,Button } from "antd";
import { GET_ALL_MUSIC } from "../graph-ql/queries/GET_ALL_MUSIC/getAllMusic";
import { GetAllMusic } from "../graph-ql/queries/GET_ALL_MUSIC/__generated__/GetAllMusic";

const { Title } = Typography;


interface Props{
  playSong:(uri:string)=>void
}
const NftSongList: React.FC<Props> = ({playSong}) => {
  const {
    loading: isLoadingAllMusic,
    data: allMusicConnection,
    error: allMusicError,
  } = useQuery<GetAllMusic>(GET_ALL_MUSIC);

  return (
    <List
    loading={isLoadingAllMusic}
      style={{
        width: "700px",
        alignSelf: "center",
        border: "1px solid #e5e5e5",
        borderRadius: "20px",
        padding: "1em",
        margin: '2em'
      }}
      itemLayout="horizontal"
      dataSource={allMusicConnection?.musicNFTs}
      renderItem={(item) => (
        <List.Item
        >
          <List.Item.Meta
            // avatar={<Avatar src="https://joeschmoe.io/api/v1/random" />}
            title={<TitleNode metadataUri={item.metaDataUri} name={'someone'} ownerAddress={item.owner.id} />}
            description={`Burna Boy`}
            />
            <SongNode assetUri={item.assetUri} playSong={playSong}/>
        </List.Item>
      )}
    />
  );
};

export default NftSongList;


// helper function to transform uri with this format: ipfs://
const transformIpfsUri = (uri:string) =>{
  const ipfsPrefix = 'https://ipfs.io/ipfs/';
  const uriWithRemovedIpfsPrefix = uri.substring(7);
  const correctIpfsUri = ipfsPrefix.concat(uriWithRemovedIpfsPrefix);
  return correctIpfsUri
}

interface TitleProps {
  name: string;
  ownerAddress: string;
  metadataUri: string
}

const TitleNode: React.FC<TitleProps> = ({ metadataUri, name, ownerAddress }) => {

  const [metadata, setMetaData] = useState({})

  const fetchMetaData = async() =>{
    const metadataUrl = transformIpfsUri(metadataUri);
    let result;
    fetch(metadataUrl,{
      method:'GET'
    }).then(res=>{
      res.json().then(data=>{
        return data.body;
      })
    }).catch(err=>{
      console.log(err)
    })

  }
  

  useEffect(() => {

    const fetchMetaData = async() =>{
      const metadataUrl = transformIpfsUri(metadataUri);
      const data = await fetch(metadataUrl)
      const json = await data.json();
       console.log(json.body)
      // fetch(metadataUrl,{
      //   method:'GET'
      // }).then(res=>{
      //   res.json().then(data=>{
      //     return data.body;
      //   })
      // }).catch(err=>{
      //   console.log(err)
      // })
    }

    fetchMetaData()
    
  }, [])

  return (
    <div style={{ display: "flex", alignItems: "center" }}>
      <Title style={{ marginRight: "5px" }} level={5}>
        {name}
      </Title>
      <span
        style={{
          background: "#f4f4f4",
          padding: "2px 6px",
          borderRadius: "20px",
        }}
      >
        {`${ownerAddress.substring(0,4)}...${ownerAddress.substring(ownerAddress.length - 4)}`}
      </span>
    </div>
  );
};

interface SongNodeProps{
  assetUri: string,
  playSong: (uri:string)=>void
}

const SongNode: React.FC<SongNodeProps> = ({assetUri,playSong}) =>{
  const correctAssetUri = transformIpfsUri(assetUri);
  return(
    <Button onClick={()=>playSong(correctAssetUri)} type='primary'>Play song</Button>
  )
}