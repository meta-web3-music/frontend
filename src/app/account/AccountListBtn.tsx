import OButton from "@/components/OButton/OButton";
import React from "react";

const AccountListBtn = ({
  monetizeId,
  onList,
  onUnlist,
}: {
  // monetizeId should be -1 when it is non existence
  monetizeId: bigint;
  onList: () => void;
  onUnlist: (monetizeId: bigint) => void;
}) => {
  return (
    <OButton
      $color={(monetizeId ?? -1) > -1 ? "gray" : "yellow"}
      btnType="fill"
      className="w-full mt-2"
      onClick={() => {
        (monetizeId ?? -1) > -1 ? onUnlist(monetizeId) : onList();
      }}
    >
      {(monetizeId ?? -1) > -1 ? "Unlist" : "List"}
    </OButton>
  );
};

export default AccountListBtn;
