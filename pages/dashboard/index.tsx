import React from "react";
import MintSongButton from "../../src/components/MintSongButton/MintSongButton";
import { SmartLink } from "../../src/components/SmartLink/SmartLink";
import { NextPageWithLayout } from "../_app";

const DashboardPage: NextPageWithLayout = () => <></>;
const DashboardLayout: React.FC<React.PropsWithChildren> = (p) => {
  return (
    <>
      <div className="flex font-figtree overflow-hidden h-screen">
        <div className="flex flex-col bg-white dark:bg-[rgb(26,26,26)] h-[90vh] w-4/12 p-4 pt-20 pl-8">
          <p>Artist</p>
          <div className="ml-4">
            <SmartLink
              href="/dashboard/artist/unlisted-spaces"
              activeClass="text-[#969324]"
            >
              <p>Unlisted spaces</p>
            </SmartLink>
            <SmartLink
              href="/dashboard/artist/listed-spaces"
              activeClass="text-[#969324]"
            >
              <p>Listed spaces</p>
            </SmartLink>
            <p>Expired spaces</p>
          </div>
          <p>Brands</p>
          <div className="ml-4">
            <SmartLink
              href="/dashboard/brands/active-spaces"
              activeClass="text-[#969324]"
            >
              <p>Active spaces</p>
            </SmartLink>
          </div>
          <MintSongButton />
        </div>
        <div className="bg-gray-100 dark:bg-[#121212] pl-10 h-full overflow-scroll w-full">
          {p.children}
        </div>
      </div>
    </>
  );
};

export const DashboardPageLayout = (page: React.ReactNode) => (
  <DashboardLayout>{page}</DashboardLayout>
);
DashboardPage.getLayout = DashboardPageLayout;
export default DashboardPage;
