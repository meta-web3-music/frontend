
import type { NextPage } from "next";
import Header from "../src/components/Header/header";
import {Tabs} from 'antd'

// component imports
import MusicTab from "../src/components/ProfilePage/MusicTab/MusicTab";
import AdvertisementTab from "../src/components/ProfilePage/AdvertisementTab/AdvertismentTab";



const Profile: NextPage = () => {


  return (
    <div style={{ width: "100%", display: "flex", flexDirection: "column" }}>
      <Header />
      <div className="w-3/6 mx-80">
      <Tabs>
        <Tabs.TabPane  tab="Music" key="music">
            <MusicTab/>
        </Tabs.TabPane>
        <Tabs.TabPane  tab="Advertisement" key="adverstisment">
            <AdvertisementTab/>
        </Tabs.TabPane>
        <Tabs.TabPane  tab="Subscription" key="subscription">
            Subscription
        </Tabs.TabPane>
     </Tabs>
      </div>
    </div>
  );
};

export default Profile;


const Advertisment: React.FC = () =>{
    console.log('render advertisement')
    return(
        <div>
            Advertisement Content tab
        </div>
    )
}

