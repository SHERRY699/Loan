"use client";
import { TypeofServices } from "@/components/service_type/Typeof.services";
import { Back, Login } from "iconsax-react";
import Link from "next/link";
import { Button } from "antd";
import { useRouter } from "next/navigation";
import { useEffect, useState } from "react";
import { useAuth } from "@/context/guard/guard.context";
import Cookies from "js-cookie";

export const TypeofServiceScreen = () => {
  const router = useRouter();
  const { isSignIn, onLogout } = useAuth();

  const handleLogout = () => {
    Cookies.remove("id");
    Cookies.remove("id1");
    Cookies.remove("email");
    Cookies.remove("email1");
    onLogout();
  };

  return (
    <div className={"bg-[#FDFCFC] flex  justify-center items-center md:p-16"}>
      <div
        className={
          "md:rounded-[32px] flex flex-col justify-center items-center  gap-12 md:px-20 md:py-16  p-[1.5rem] bg-[#F7F9F8] md:ring-2  md:ring-[#2684ff] md:w-fit md:h-fit w-full h-auto "
        }
      >
        <div
          className={"w-full flex flex-row gap-5 items-center justify-center"}
        >
          <Button
            onClick={() => router.back()}
            className={"text-sm flex items-center gap-2 rounded-full"}
            color={"blue"}
          >
            <Back size="20" color="#2684ff" />
            BACK
          </Button>
          {!isSignIn ? (
            <Button
              onClick={() => router.push("/authentication/sign-in")}
              className={
                "text-sm flex items-center gap-2 rounded-full bg-blue-400 text-white"
              }
              color={"blue"}
            >
              <Login size="20" color="blue" />
              SIGN IN
            </Button>
          ) : (
            <Button
              onClick={handleLogout}
              className={"text-sm flex items-center gap-2 rounded-full"}
              color={"blue"}
            >
              <Login size="20" color="#FFFFFF" />
              LOGOUT
            </Button>
          )}
        </div>
        <div className={"mt-2 mb-5 flex flex-col text-center gap-3"}>
          <h4 className={"text-2xl font-semibold"}>
            What service are you interested in?
          </h4>
          <p className={"text-base text-slate-500"}> Choose Account Type</p>
        </div>
        <TypeofServices />
        <div className={"mt-4 flex flex-col text-center gap-2"}>
          <p className={"capitalize text-sm font-medium text-slate-400"}>
            personal accounts cannot be used for business purposes
          </p>
          <div className={"flex flex-row gap-5 items-center justify-center "}>
            <Link
              href={"#"}
              className={"hover:underline text-sm text-blue-500"}
            >
              Terms & conditions
            </Link>
            <Link
              href={"#"}
              className={"hover:underline text-sm text-blue-500"}
            >
              Privacy policy
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};
