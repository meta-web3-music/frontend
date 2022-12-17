import { useQuery } from "@apollo/client";
import { useConnectModal } from "@rainbow-me/rainbowkit";
import { DownOutlined } from "@ant-design/icons";
import { RadioChangeEvent, Menu, Radio, Space, Dropdown } from "antd";
import { useState } from "react";
import { useSigner } from "wagmi";
import AdListItem from "../../src/components/AdMarketPlace/AdListItem";
import AdModal from "../../src/components/AdModal/AdModal";
import { AdvNFTAddr } from "../../src/env";
import { GET_UNSOLD } from "../../src/graph-ql/queries/GET_UNSOLD/getUnsold";
import {
  GetUnsold,
  GetUnsold_marketItems,
} from "../../src/graph-ql/queries/GET_UNSOLD/__generated__/GetUnsold";
import { AdModalFormValues } from "../../src/components/AdModal/AdModalForm/AdModalForm.types";
import { buyAdvNft } from "../../src/services/smart-contract/buyAdvNft";

export const Adlist: React.FC = () => {
  const [showModal, setShowModal] = useState<boolean>(false);
  const { data: signer } = useSigner();
  const [selectedAdv, setSelectedAdv] = useState<GetUnsold_marketItems>();
  const handleAdForm = async (formData: AdModalFormValues) => {
    if (!selectedAdv || !signer) {
      return;
    }
    setIsCreatingAd(true);
    try {
      buyAdvNft(formData, selectedAdv, signer);
    } catch (err) {
      console.log(err);
      setIsCreatingAd(false);
      handleAdModal();
    } finally {
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

  const onChangePrice = (e: RadioChangeEvent) => {
    setPrice(e.target.value);
  };

  const onChangeViews = (e: RadioChangeEvent) => {
    setViews(e.target.value);
  };

  const handleAdModal = () => setShowModal(!showModal);
  const { openConnectModal } = useConnectModal();

  return (
    <>
      <AdModal
        isCreatingAd={isCreatingAd}
        onHandleAdForm={(d) => handleAdForm(d)}
        onHandleModal={handleAdModal}
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
