import React, { useEffect } from "react";
import { useDispatch } from "react-redux";
import { closeHum } from "../utils/appSlice";
import { useSearchParams } from "react-router-dom";
import CommentsContainer from "./CommentsContainer";
import VideoLeftContainer from "./VideoLeftContainer";
// import LiveChat from "./LiveChat";

const WatchPage = () => {
  let [searchParams] = useSearchParams();
  console.log(searchParams.get("v"));
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(closeHum());
  });
  return (
    <div className="flex">
      <div className="px-5 rounded-lg flex-col">
        <iframe
          width="1000"
          height="500"
          src={"https://www.youtube.com/embed/" + searchParams.get("v")}
          title="YouTube video player"
          frameborder="0"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
          allowFullScreen
        ></iframe>
        <div>
          <CommentsContainer />
        </div>
      </div>
      <VideoLeftContainer />
    </div>
  );
};

export default WatchPage;
