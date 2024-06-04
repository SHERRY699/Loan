import React from "react";
import { Metadata } from "next";
import { AddClientPanel } from "@/context/business-credit/panel/add.client.panel";
import { AccountBanner } from "@/components/business-account-elements/account.banner";
import { PersonalDetailsPanel } from "@/context/business-credit/panel/personal.details.panel";
export const metadata: Metadata = {
  title: "Payment Form",
  description: "Generated by create next app",
};

let activeState = "";

export default function Layout({ children }: { children: React.ReactNode }) {
  return (
    <>
      <div className="grid grid-cols-12 justify-between">
        <div className="flex flex-col col-start-1 col-span-5 w-full mt-10 pl-10">
          <PersonalDetailsPanel activeState={activeState} />
        </div>
        <div className="flex col-start-6 col-span-7 justify-start mt-10 pl-10">
          {children}
        </div>
      </div>
      <p className="flex w-full justify-center content-center items-center text-red-400 py-4">@2024. Official  Website</p>

    </>

  );
}
