import { useState, useEffect } from "react";
import { useQuery } from "@apollo/client";
import { GET_ALL_MUSIC } from "../../graph-ql/queries/GET_ALL_MUSIC/getAllMusic";
import { GetAllMusic } from "../../graph-ql/queries/GET_ALL_MUSIC/__generated__/GetAllMusic";

// antd imports

// antd imports
import { DownOutlined } from "@ant-design/icons";
import { Button, Dropdown, Menu, Space, Radio, Typography, List } from "antd";
import type { RadioChangeEvent } from "antd";
import { MusicNftMetaData } from "../../types/MusicNFTData";
import { fetchIpfs } from "../../ipfs/fetchIpfs";
// antd component extracts
const { Title } = Typography;

// types
import { SongListProps } from "./SongList.types";

// custom-component imports
import { TitleNode, SongNode } from "./ListItemNodes";

const SongList: React.FC<SongListProps> = ({ playSong }) => {
  const {
    loading: isLoadingAllMusic,
    data: allMusicConnection,
    error: allMusicError,
  } = useQuery<GetAllMusic>(GET_ALL_MUSIC, {
    variables: {
      currentTime: Math.floor(Date.now() / 1000).toString(),
    },
  });

  // add useState hooks here
  const [price, setPrice] = useState("100MATIC");
  const [views, setViews] = useState("100kViews");

  const onChangePrice = (e: RadioChangeEvent) => {
    console.log("radio checked", e.target.value);
    setPrice(e.target.value);
  };

  //  menu items for price dropdown filter
  const priceFilterMenu = (
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

  // menu items for number of view dropdown filter
  const viewsFilterMenu = (
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
        <Dropdown overlay={priceFilterMenu} trigger={["click"]}>
          <a onClick={(e) => e.preventDefault()}>
            <Space className="inline-block px-6 py-2 border shadow text-black font-medium text-xs leading-tight uppercase rounded-full ml-4">
              Price
              <DownOutlined />
            </Space>
          </a>
        </Dropdown>
        <Dropdown overlay={viewsFilterMenu} trigger={["click"]}>
          <a onClick={(e) => e.preventDefault()}>
            <Space className="inline-block px-6 py-2 border shadow text-black font-medium text-xs leading-tight uppercase rounded-full ml-4">
              Views
              <DownOutlined />
            </Space>
          </a>
        </Dropdown>
      </div>
      {/* end dropdowns */}

      {/* songlist */}
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
              title={<TitleNode musicItem={item} />}
              description={`Burna Boy`}
            />
            <SongNode musicItem={item} playSong={playSong} />
          </List.Item>
        )}
      />
    </>
  );
};

export default SongList;
