import { DownOutlined } from "@ant-design/icons";
import { Menu, Radio, Space, Dropdown } from "antd";
import { useState } from "react";
import { AdvNFTAddr } from "../../env";
import { GET_UNSOLD } from "../../graph-ql/queries/GET_UNSOLD/getUnsold";
import { GetUnsold } from "../../graph-ql/queries/GET_UNSOLD/__generated__/GetUnsold";
import { useQuery } from "@apollo/client";
import AdvNFT from "../AdvNFT/AdvNFT";
import { MusicPlayerSub } from "../../subs/MusicPlayerSub";
import RentSpaceButton from "../../../pages/ad-marketplace/RentSpaceButton";

export const AdList: React.FC = () => {
  const { data: allAsksConnection } = useQuery<GetUnsold>(GET_UNSOLD, {
    variables: {
      nftContractAddr: AdvNFTAddr.toLowerCase(),
    },
  });
  // add useState hooks here
  const [price, setPrice] = useState("100MATIC");
  const [views, setViews] = useState("100kViews");
  return (
    <>
      {/* start dropdowns */}
      <div className="flex flex-row items-center mb-3">
        <span>Filter by</span>
        <Dropdown
          overlay={
            <Menu
              items={[
                {
                  label: (
                    <Radio.Group
                      onChange={(e) => setPrice(e.target.value)}
                      value={price}
                    >
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
          }
          trigger={["click"]}
        >
          <a onClick={(e) => e.preventDefault()}>
            <Space className="inline-block px-6 py-2 border shadow text-black font-medium text-xs leading-tight uppercase rounded-full ml-4">
              Price
              <DownOutlined />
            </Space>
          </a>
        </Dropdown>

        <Dropdown
          overlay={
            <Menu
              items={[
                {
                  label: (
                    <Radio.Group
                      onChange={(e) => setViews(e.target.value)}
                      value={views}
                    >
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
          }
          trigger={["click"]}
        >
          <a onClick={(e) => e.preventDefault()}>
            <Space className="inline-block px-6 py-2 border shadow text-black font-medium text-xs leading-tight uppercase rounded-full ml-4">
              Views
              <DownOutlined />
            </Space>
          </a>
        </Dropdown>
      </div>
      {/* end dropdowns */}
      <div className="flex flex-wrap justify-center mb-4">
        {allAsksConnection?.marketItems.map((e) => (
          <AdvNFT
            key={e.itemId}
            expirationDuration={e.token.expirationDuration}
            musicMetaDataUri={e.token.musicNFT.metaDataUri}
            price={e.price}
            onArtWorkClick={() => {
              MusicPlayerSub.next(e.token.musicNFT);
            }}
            CustomButton={
              <RentSpaceButton
                marketItemId={e.itemId}
                adNftId={e.token.id}
                price={e.price}
              />
            }
            buttonText="Rent space now"
          />
        ))}
      </div>
    </>
  );
};
