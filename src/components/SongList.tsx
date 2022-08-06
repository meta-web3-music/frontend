import {List,Typography} from 'antd'

const {Title} =Typography;


const listData = [
    {
      name: 'Call me by name',
      ownerAddress: '0x34...7463',
      artist: 'Mujahid',
      adSpacePrice: '0.2',
      music:'ipfs url string to be ste to source',
      thumbnail: 'music thumbnail string if it exists',
      noOfViews:'3M'
    },
    {
      name: 'Last Last',
      ownerAddress: '0x34...7463',
      artist: 'Burna Boy',
      adSpacePrice: '0.2',
      music:'ipfs url string to be ste to source',
      thumbnail: 'music thumbnail string if it exists',
      noOfViews:'360K'
    },
    {
      name: 'Girls like us',
      ownerAddress: '0x34...7463',
      artist: 'Zoe wooes',
      adSpacePrice: '0.2',
      music:'ipfs url string to be ste to source',
      thumbnail: 'music thumbnail string if it exists',
      noOfViews:'430K'
    },
  
  ]
  
  const NftSongList: React.FC =()=>{
    return(
      <List
      style={{width:'700px',alignSelf:'center',border:'1px solid #e5e5e5',borderRadius:'20px',padding:'1em'}}
      itemLayout="horizontal"
      dataSource={listData}
      renderItem={item => (
        <List.Item>
          <List.Item.Meta
            // avatar={<Avatar src="https://joeschmoe.io/api/v1/random" />}
            title={<TitleNode name={item.name} ownerAddress={item.ownerAddress}/>}
            description={`${item.artist} · ${item.noOfViews} Plays`}
          />
        </List.Item>
      )}
    />
    )
  }

export default NftSongList


  
  interface TitleProps{
    name: string,
    ownerAddress: string
  }
  
  const TitleNode: React.FC<TitleProps> = ({name, ownerAddress}) =>{
    return(
      <div style={{display:'flex',alignItems:'center'}}>
        <Title style={{marginRight:'5px'}} level={5}>{name}</Title>
        <span style={{background:'#f4f4f4',padding:'2px 6px' ,'borderRadius':'20px'}}>{ownerAddress}</span>
      </div>
    )
  }