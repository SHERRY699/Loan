import {
  PlayCircleFilledOutlined,
  PlayCircleOutline,
} from "@mui/icons-material";
import { IconButton } from "@mui/material";
import Image from "next/image";


// interface VideoCardProps {
//   videoContent: {
//     title: string;
//     videoUrl: string;
//     content: string;
//     src:string;
//   };
//   multiVideoCard?: string;
// }

interface VideoCardProps {
  title: string;
  videoUrl: string;
  content: string;
  src: string;
}

export const VideoCard: React.FC<VideoCardProps> = (props) => {
  return (
    <>
      <div className="flex w-full justify-center m-4">
        <div
          className={`flex flex-col w-80 h-[208px] justify-center ${
           "videoCard"
          } business-page-videocard-mobileview`}
        >
          <h2 className="flex text-xs font-semibold business-page-text-color-green  mb-3">
            {props.title}
          </h2>
          <div className=" relative w-full h-[185px] rounded-2xl ">
            <Image
              src={props.videoUrl}
              layout="fill"
              objectFit="cover"
              alt=""
              className=" rounded-xl"
            />
            <div className="flex flex-col h-full justify-center  content-center items-center w-full relative gap-[10px]">
              {/* <div className="flex w-[80%]  text-center text-base font-semibold justify-center items-center business-page-bg-blue p-2 rounded-lg mx-[12] text-white">
                {props.videoContent.content}
              </div>
            
              <IconButton aria-label="play video" color="primary">
                <img src="/playButton.png" alt="" height={61} width={64} />
    
              </IconButton> */}
              <video width="600" controls>
             <source src={props.src} type="video/mp4" />
              </video>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};
