import {useContext} from 'react'

// antd imports
import {Typography} from 'antd'
const {Text,Title} = Typography;

//context imports
import {SelectedSongContext} from '../../contexts/selectedSong'

// type imports
import {songShape,StickyPlayerProps} from './StickyPlayer.types'

  
  const StickyPlayer: React.FC<StickyPlayerProps> = ({selectedSong}) =>{

    const {isPlaying,currentSong} = useContext(SelectedSongContext);

    if(!isPlaying) return <div></div>

    return(
      <div style={{background:'#ffffff',boxShadow:'1px 0px 12px 1px rgba(0,0,0,0.35)',zIndex:'2',position:'fixed',bottom:'1em',left:'1em',display:'flex',maxWidth:'500px',flexDirection:'column',padding:'.7em 1em'}}>
       <div style={{display:'flex',flexDirection:'column'}}>
        <Title style={{margin:'0'}} level={5}>{currentSong.name}</Title>
        <Text type="secondary">{currentSong?.artist}</Text>
        </div> 
        <audio autoPlay loop controls src={`${currentSong?.url}`}>
        </audio>
      </div>
    )
  }

  export default StickyPlayer