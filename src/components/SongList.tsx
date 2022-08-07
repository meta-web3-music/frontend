import { useQuery } from "@apollo/client";
import { List, Typography } from "antd";
import { GET_ALL_MUSIC } from "../graph-ql/queries/GET_ALL_MUSIC/getAllMusic";
import { GetAllMusic } from "../graph-ql/queries/GET_ALL_MUSIC/__generated__/GetAllMusic";
import { DownOutlined } from "@ant-design/icons";
import { Button, Dropdown, Menu, Space, Radio } from "antd";
import type { RadioChangeEvent } from "antd";
import React, { useState } from "react";

const { Title } = Typography;

// const listData = [
//   {
//     name: "Call me by name",
//     ownerAddress: "0x34...7463",
//     artist: "Mujahid",
//     adSpacePrice: "0.2",
//     music: "ipfs url string to be ste to source",
//     thumbnail: "music thumbnail string if it exists",
//     noOfViews: "3M",
//   },
//   {
//     name: "Last Last",
//     ownerAddress: "0x34...7463",
//     artist: "Burna Boy",
//     adSpacePrice: "0.2",
//     music: "ipfs url string to be ste to source",
//     thumbnail: "music thumbnail string if it exists",
//     noOfViews: "360K",
//   },
//   {
//     name: "Girls like us",
//     ownerAddress: "0x34...7463",
//     artist: "Zoe wooes",
//     adSpacePrice: "0.2",
//     music: "ipfs url string to be ste to source",
//     thumbnail: "music thumbnail string if it exists",
//     noOfViews: "430K",
//   },
// ];

const NftSongList: React.FC = () => {
  const {
    loading: isLoadingAllMusic,
    data: allMusicConnection,
    error: allMusicError,
  } = useQuery<GetAllMusic>(GET_ALL_MUSIC);

  // add useState hooks here
  const [price, setPrice] = useState("100MATIC");
  const [views, setViews] = useState("100kViews");

  const onChangePrice = (e: RadioChangeEvent) => {
    console.log("radio checked", e.target.value);
    setPrice(e.target.value);
  };

  // dropdown menu price code
  const menuPrice = (
    <Menu
      items={[
        {
          label: (
            <Radio.Group onChange={onChangePrice} value={price}>
              <Space direction="vertical">
                <Radio value={"100MATIC"}>100 MATIC and under</Radio>
                <Radio value={"200MATIC"}>200 MATIC and under</Radio>
                <Radio value={"300MATIC"}>500 MATIC and under</Radio>
              </Space>
            </Radio.Group>
          ),
          key: "1",
        },
      ]}
    />
  );

  const onChangeViews = (e: RadioChangeEvent) => {
    console.log("radio checked", e.target.value);
    setViews(e.target.value);
  };

  // dropdown menu code
  const menuViews = (
    <Menu
      items={[
        {
          label: (
            <Radio.Group onChange={onChangeViews} value={views}>
              <Space direction="vertical">
                <Radio value={"1000Views"}>1000 views and under</Radio>
                <Radio value={"10kViews"}>10K views and under</Radio>
                <Radio value={"50kViews"}>50K views and under</Radio>
                <Radio value={"100kViews"}>100K views and under</Radio>
                <Radio value={"1MViews"}>1 million+ views</Radio>
              </Space>
            </Radio.Group>
          ),
          key: "1",
        },
      ]}
    />
  );

  return (
    <>
      {/* start dropdowns */}
      <div className="flex flex-row items-center mb-3">
        <span>Filter by</span>
        <Dropdown overlay={menuPrice} trigger={["click"]}>
          <a onClick={(e) => e.preventDefault()}>
            <Space className="inline-block px-6 py-2 border shadow text-black font-medium text-xs leading-tight uppercase rounded-full ml-4">
              Price
              <DownOutlined />
            </Space>
          </a>
        </Dropdown>
        <Dropdown overlay={menuViews} trigger={["click"]}>
          <a onClick={(e) => e.preventDefault()}>
            <Space className="inline-block px-6 py-2 border shadow text-black font-medium text-xs leading-tight uppercase rounded-full ml-4">
              Views
              <DownOutlined />
            </Space>
          </a>
        </Dropdown>
      </div>
      {/* end dropdowns */}
      <List
        loading={isLoadingAllMusic}
        style={{
          width: "700px",
          alignSelf: "center",
          border: "1px solid #e5e5e5",
          borderRadius: "20px",
          padding: "1em",
        }}
        itemLayout="horizontal"
        dataSource={allMusicConnection?.musicNFTs}
        renderItem={(item) => (
          <List.Item>
            <List.Item.Meta
              // avatar={<Avatar src="https://joeschmoe.io/api/v1/random" />}
              title={
                <TitleNode name={"someone"} ownerAddress={item.owner.id} />
              }
              description={`Burna Boy`}
            />
            <SongNode assetUri={item.assetUri} />
          </List.Item>
        )}
      />
    </>

  );
};

export default NftSongList;

interface TitleProps {
  name: string;
  ownerAddress: string;
}

// helper function to transform uri with this format: ipfs://
const transformIpfsUri = (uri: string) => {
  const ipfsPrefix = "https://ipfs.io/ipfs/";
  const uriWithRemovedIpfsPrefix = uri.substring(7);
  const correctIpfsUri = ipfsPrefix.concat(uriWithRemovedIpfsPrefix);
  return correctIpfsUri;
};

const TitleNode: React.FC<TitleProps> = ({ name, ownerAddress }) => {
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

interface SongNodeProps {
  assetUri: string;
}

const SongNode: React.FC<SongNodeProps> = ({ assetUri }) => {
  const correctAssetUri = transformIpfsUri(assetUri);
  return (
    <audio controls>
      <source src={correctAssetUri && correctAssetUri} type="audio/mpeg" />
    </audio>
  );
};
