import React, { useState } from "react";
import {Image} from 'antd'

// types imports
import { AdBannerProps } from "./AdBanner.types";


const AdBanner: React.FC<AdBannerProps> = ({ imageUrl=''}) => {
 

  return (
    <Image
        width={800}
        height={150}
        style={{margin:'1em'}}
        src={imageUrl}
        // placeholder={
        //     <Image
        //     preview={false}
        //     src="https://zos.alipayobjects.com/rmsportal/jkjgkEfvpUPVyRjUImniVslZfWPnJuuZ.png?x-oss-process=image/blur,r_50,s_50/quality,q_1/resize,m_mfit,h_200,w_200"
        //     width={300}
        //   />
        // }
        />   
  );
}

export default AdBanner;