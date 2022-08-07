import React, { useState } from "react";
import {Image} from 'antd'

interface BannerShape{
    imageUrl: string;
    isFetchingImage: boolean;
}

const AdBanner: React.FC<BannerShape> = ({ imageUrl='', isFetchingImage=false }) => {
 
    if(isFetchingImage) return(
        <div style={{width:'800px',height:'200px',margin:'1em 0'}} className="border-2 border-dashed border-[#d2d2d2] rounded-md text-center my-8 p-4 bg-[#f5f5f5]">
                Fetching Ad for current song
        </div>
    )

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