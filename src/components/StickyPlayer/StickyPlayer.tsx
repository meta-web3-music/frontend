// antd imports
import {Typography} from 'antd'
const {Text,Title} = Typography;

// type imports
import {songShape,StickyPlayerProps} from './StickyPlayer.types'

  
  const StickyPlayer: React.FC<StickyPlayerProps> = ({selectedSong}) =>{
    console.log(selectedSong)
    return(
      <div style={{background:'#ffffff',boxShadow:'1px 0px 12px 1px rgba(0,0,0,0.35)',zIndex:'2',position:'fixed',bottom:'1em',left:'1em',display:'flex',maxWidth:'500px',flexDirection:'column',padding:'.7em 1em'}}>
       <div style={{display:'flex',flexDirection:'column'}}>
        <Title style={{margin:'0'}} level={5}>{selectedSong?.name}</Title>
        <Text type="secondary">{selectedSong?.artist}</Text>
        </div> 
        <audio autoPlay loop controls src={`${selectedSong?.url}`}>
        </audio>
      </div>
    )
  }

  export default StickyPlayer