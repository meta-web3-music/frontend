import {useState,useEffect} from 'react'
// antd imports
import {Typography,Button} from 'antd'
const {Title} = Typography;

//utils
import {transformIpfsUri} from './SongList.utils'


interface TitleProps {
    name: string;
    ownerAddress: string;
    metadataUri: string
  }
  
  const TitleNode: React.FC<TitleProps> = ({ metadataUri, name, ownerAddress }) => {
  
    const [metadata, setMetaData] = useState({})
    
  
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
          {`${ownerAddress.substring(0, 4)}...${ownerAddress.substring(
            ownerAddress.length - 4
          )}`}
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
  
  export {TitleNode, SongNode}