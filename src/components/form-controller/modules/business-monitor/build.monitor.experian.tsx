"use client";
// @ts-ignore
import React, { useState } from "react";
import { MonitorReportForm } from "@/components/business-account-elements/monitor.report.form";
import { LineAxis } from "@mui/icons-material";
import { SubHeader } from "@/components/business-account-elements/sub.header";
import { ArrowLineText } from "@/components/business-account-elements/arrow.line.text";
import { VideoCard } from "@/components/cards/video-card";
import { ImportantInformation } from "@/components/business-account-elements/important.imformation";
import {  Input } from "@mui/material";
import { GeneralCard } from "@/components/cards/general.cad";
import { GotoWebsiteCard } from "@/components/cards/goto.website.card";
import { SubFooter } from "@/components/footer/footer";
import { SubFormFooter } from "@/components/business-account-elements/sub.form.footer";
import { BlogCustomCardLeft } from "@/components/cards/blog.card";
import { DownloadCard } from "@/components/business-account-elements/dwonload.card";
import { PaymentCard } from "@/components/cards/payment.card";
import { Button } from "antd";
// @ts-ignore
import useForm from "new-react-use-form";
import { useRouter } from "next/navigation";
import { ApiCalls } from "@/api/calls/calls";
import { Calls } from "@/api/calls/type";
import { useMutation } from "@tanstack/react-query";
import toast from "react-hot-toast";
import video from '@/video/step4.mp4'

const headerContent = {
  step: "Step 4",
  title: "Moniter Business Reports",
  subTitle: "MONITOR EXPERIAN",
};

const arrowLineCotent = "DOES YOUR BUSINESS HAVE BUSINESS EXPERIAN MONITORING?";

const videoContent = {
  title: "Watch Video Transcript:",
  videoUrl: "/report/reports/v-3.png",
  content: "READ YOUR BUSINESS CREDIT REPORT",
  src:video
};

const videoConten1 = {
  title: "Watch Video Transcript:",
  videoUrl: "/report/reports/v-4.png",
  content: "MONITOR BUSINESS EXPERIAN",
};

const blogCustomContent = {
  picture: "/report/reports/b-2.svg",
  title: "SET UP BUSINESS EXPERIAN MONITORING",
  contents: [
    {
      dataString:
        "monitor your buisness experian report every buisness credit burea has their own monitoring and scoring models . its important to monitor your buisness credit reports regularly so you are aware of any changes. . we have our  free feed that tells you how many  trade accounts are reporting but to see the full detail including whetehr payents are on time or not experian requires that you purchase monitoring.",
      dataColor: "text-gray-500",
      dataSize: "",
    },
    {
      dataString:
        "Be practive. What are your goals with your business credit reports > Increase credit limits?",
      dataColor: "text-gray-500",
      dataSize: "text-sm",
    },
  ],
};

const paymentTitle =
  "Want To Obtain Monitoring With Experian? Experian Offers Multiple Plans And You Can Choose To Set Up Per Monthly Or For A Lower Cost If Annually.";
const paymentCard1 = {
  title: "Olny Pay One",
  price: "69",
  recommeded: true,
  contents: [
    {
      record: "Integrated D & B & Experian",
    },
    {
      record: "Least Expensive Report",
    },
    {
      record: "including Paydex score",
    },
    {
      record: "Monitoring Through Bureau Insights",
    },
  ],
};
const paymentCard2 = {
  title: "Extra Charges",
  price: "85",
  recommeded: false,
  contents: [
    {
      record: "Monitoring directly with Experian",
    },
    {
      record: "Choose To Set Up Per Monthly",
    },
    {
      record: "For A Lower Cost If Annually.",
    },
  ],
};

const informationResuorce = {
  title: "RESOURCES",
  content:
    "We hope you love the products and services we recommend! We research and update these on a regular basis. Just so you know, we may receive a commission from links on this page. We are diligent to ensure any compensation we receive does not affect the price or level of service offered to you.",
  color: "blue",
};

const footerContent = {
  content: "Return To Business Credit Builder",
  previous: true,
  next: true,
  url: "/step4/equifax",
  preUrl: "/step4/dun-bradstreet",
};
interface Option {
  label: string;
}
export const BuildMonitorExperian = () => {
  const router = useRouter();
  const form = useForm({
    monitorExperianFile: null,
  });
  const [fileUploaded, setFileUploaded] = useState(false);

  const handleFileChange = (event: any) => {
    const fileList = event.target.files;
    const file = fileList[0];
    form.set("monitorExperianFile", file);
    setFileUploaded(true);
  };
  console.log(form, fileUploaded);

  const handleImage = () => {
    const fileInput = document.getElementById("myFile");

    if (fileInput) {
      fileInput.click(); // Trigger file input click
    }
  };

  const informationResourceProps = "Information Resource";
  const { mutateAsync: image, isPending: pending } = useMutation<
    Calls.IResponse.BusinessFile,
    Error,
    Calls.IRequest.ModulesBusinessExperianFile
  >({
    mutationFn: (variables) => ApiCalls.Module.monitorExperianFile(variables),
    onSuccess: (r) => {
      toast.success(r.message);
      if (r?.urlPath != null) {
        router.replace(r?.urlPath);
      }
    },
    onError: (e) => {
      toast.error(e?.message);
    },
  });
  const handleOnSave = async (e: any) => {
    e.preventDefault();
    const formData = await image(form.data());
    return formData;
  };
  return (
    <>
      <div className="flex flex-row w-[80%] ml-[10%] mt-10 justify-center border-2 border-blue-400 p-6 rounded-2xl  gap-6 business-main business-page-rightsection-mobileview">
        <div className="flex flex-col w-[76%] justify-start mt-6 business-page-inner-mobileview">
          <SubHeader content={headerContent} />
          <div
            className="flex flex-col w-full p-9 justify-center items-center content-center mt-6 bg-white  business-page-namesection-mobileview"
            style={{ boxShadow: "2px 4px 12px 0px #a3a3a324" }}
          >
            <ArrowLineText
              type="flex flex-col w-[auto] text-center text-gray-700"
              content={arrowLineCotent}
            />
            {/* Vidio card */}
            <div className="flex flex-row w-full flex-wrap justify-center">
              <div className="flex  justify-start">
              <VideoCard
              title={videoContent.title}
              videoUrl={videoContent.videoUrl}
              content={videoContent.content}
              src={videoContent.src}
                  />
              </div>
              
            </div>

            {/* blog section */}

            <BlogCustomCardLeft content={blogCustomContent} />

            {/*  */}
            <div
              className="flex w-[80%] justify-center text-center text-md text-gray-500 my-6"
              style={{ color: "#737373" }}
            >
              <p>
                DO YOU HAVE EXPERIAN MONITORING ALREADY? IF SO PLEASE UPLOAD
                YOUR REPORT HERE SO A BUSINESS CREDIT ADVISOR CAN REVIEW IT WITH
                YOU.
              </p>
            </div>

            {/* download section */}
            <DownloadCard
              handleFileChange={handleFileChange}
              handleImage={handleImage}
              fileUploaded={fileUploaded}
            />

            {/* save buttong */}
            <div className="flex  max-w-xs  w-full business-save-btn  my-16  mt-12 ">
             

              <Button
              className="bg-green-600 w-[350px] h-[50px] text-white"
                // placeholder="save the address"
                // loading={true}
                onClick={handleOnSave}
              >
                  SAVE
              </Button>
            </div>

            <div className="flex w-full my-14 flex-col">
              <PaymentCard
                title={paymentTitle}
                paymentContents1={paymentCard1}
                paymentContents2={paymentCard2}
              />
            </div>

            {/* Resuouces importante */}
            <div className="flex w-full my-12">
              <ImportantInformation
                information={informationResuorce}
                informationResourceProps={informationResourceProps}
              />
            </div>

            {/* Website cards */}
            <div className="flex flex-row w-full mt-12 justify-center">
              <GotoWebsiteCard
                content="Varies"
                icon="/report/init/experianVideoCard.svg"
              />
            </div>

            {/* footer  */}
            <SubFormFooter content={footerContent} />
          </div>
        </div>
        <div className="flex w-[24%] business-page-mobileview-width">
          <MonitorReportForm />
        </div>
      </div>
    </>
  );
};
