"use client";
import { UsersIcon } from "@heroicons/react/24/outline";
import { UserPlusIcon } from "@heroicons/react/24/outline";
import { FaceSmileIcon } from "@heroicons/react/24/outline";

interface AddClientPanelProps {
  activeState: string;
}

export const ClientDashboardPanel: React.FC<AddClientPanelProps> = (props) => {
  return (
    <>
      <div className="flex flex-col w-full mt-36">
        <div
          className={
            props.activeState === "client-dashboard"
              ? "flex flex-col w-full bg-blue-500  justify-center mt-20 content-center items-center rounded-r-full"
              : "flex flex-col w-full justify-center content-center items-center rounded-r-full"
          }
        >
          <UsersIcon className="flex w-24 h-20  pt-5 text-gray-300"/>
          <div className="flex text-lg text-gray-300 pb-5">
            Client Dashboard
          </div>
        </div>
        <div className="h-12"></div>
        <div
          className={
            props.activeState === "add"
              ? "flex flex-col w-full bg-blue-500 justify-center mt-20 content-center items-center rounded-r-full"
              : "flex flex-col w-full justify-center content-center items-center rounded-r-full  "
          }
        >
        </div>
        <div className="h-12"></div>
        <div
          className={
            props.activeState === "improve"
              ? "flex flex-col w-full bg-blue-500 justify-center mt-20 content-center items-center rounded-r-full"
              : "flex flex-col w-full justify-center content-center items-center rounded-r-full "
          }
        >
         
        </div>
      </div>
    </>
  );
};
