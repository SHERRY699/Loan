import { ArrowLeft, ArrowRight } from "@mui/icons-material";
import { Button } from "@mui/material";
import { size } from "lodash";
import Link from "next/link";
import React from "react";

interface SubFormFooterProps {
  content: {
    content?: string;
    previous?: boolean;
    next?: boolean;
    url?: string;
    preUrl?: string;
  };
}

export const SubFormFooter: React.FC<SubFormFooterProps> = (props) => {
  return (
    <>
      <div className="flex flex-row w-full mt-8 business-page-btn-group-mobileview">
        <div className="business-page-gray-btn mt-2">
          <Link href={"#"}>{props.content.content}</Link>
        </div>
        <div className="flex w-full justify-end mr-4 mt-2 ">
          {props.content.previous && (
            <div className="flex w-36 mr-6 business-page-previous-btn">
              <Button
                href={props.content.preUrl}
                variant="outlined"
                startIcon={<img src={"/previous-icon.png"} alt="Next" />}
              >
                Previous
              </Button>
            </div>
          )}
          {props.content.next && (
            <div className="green-btn">
              {/* <Link href={"/step1/build-business-credit"} > */}
              <Button
                variant="outlined"
                href={props.content.url}
                endIcon={<img src={"/next-icon.png"} alt="Next" />}
                color="success"
                sx={{
                  fontSize: "16px !important",
                  fontWeight: "700 !important",
                }}
              >
                Next
              </Button>
              {/* </Link> */}
            </div>
          )}
        </div>
      </div>
    </>
  );
};
