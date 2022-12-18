import { useConnectModal } from "@rainbow-me/rainbowkit";
import { DownOutlined } from "@ant-design/icons";
import { Menu, Radio, Space, Dropdown } from "antd";
import { useState } from "react";
import { useSigner } from "wagmi";
import AdListItem from "./AdListItem";
import BuyAdModal from "../AdModal/BuyAdModal";
import { AdvNFTAddr } from "../../env";
import { GET_UNSOLD } from "../../graph-ql/queries/GET_UNSOLD/getUnsold";
import {
  GetUnsold,
  GetUnsold_marketItems,
} from "../../graph-ql/queries/GET_UNSOLD/__generated__/GetUnsold";
import { AdModalFormValues } from "../AdModal/AdModalForm/AdModalForm.types";
import { buyAdvNft } from "../../services/smart-contract/buyAdvNft";
import { useQuery } from "@apollo/client";

export const AdList: React.FC = () => {
  const [showModal, setShowModal] = useState<boolean>(false);
  const { data: signer } = useSigner();
  const [selectedAdv, setSelectedAdv] = useState<GetUnsold_marketItems>();
  const handleAdForm = async (formData: AdModalFormValues) => {
    if (!selectedAdv || !signer) {
      return;
    }
    setIsCreatingAd(true);
    try {
      await buyAdvNft(formData, selectedAdv, signer);
    } catch (err) {
      console.log(err);
      setIsCreatingAd(false);
    } finally {
      setShowModal(false);
      setIsCreatingAd(false);
    }
  };
  const handleRentClick = (advNft: GetUnsold_marketItems) => {
    setSelectedAdv(advNft);
    setShowModal(true);
  };
  const [isCreatingAd, setIsCreatingAd] = useState<boolean>(false);

  const { data: allAsksConnection } = useQuery<GetUnsold>(GET_UNSOLD, {
    variables: {
      nftContractAddr: AdvNFTAddr.toLowerCase(),
    },
  });
  // add useState hooks here
  const [price, setPrice] = useState("100MATIC");
  const [views, setViews] = useState("100kViews");

  const { openConnectModal } = useConnectModal();

  return (
    <>
      <BuyAdModal
        isCreatingAd={isCreatingAd}
        onHandleAdForm={handleAdForm}
        onCancelModal={() => setShowModal(false)}
        isVisible={showModal}
      />

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
            <Space className="inline-block px-6 py-2 border shadow text-black dark:text-white font-medium text-xs leading-tight uppercase rounded-full ml-4">
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
            <Space className="inline-block px-6 py-2 border shadow text-black  dark:text-white font-medium text-xs leading-tight uppercase rounded-full ml-4">
              Views
              <DownOutlined />
            </Space>
          </a>
        </Dropdown>
      </div>
      {/* end dropdowns */}
      <div className="flex flex-wrap justify-center mb-4">
        {allAsksConnection?.marketItems.map((e) => (
          <AdListItem
            key={e.itemId}
            marketItem={e}
            onBuyClick={!signer ? openConnectModal : () => handleRentClick(e)}
          />
        ))}
      </div>
    </>
  );
};
