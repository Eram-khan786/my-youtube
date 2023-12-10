
import React, { useEffect, useState } from "react";
import { YOUTUBE_VIDEOS_API } from "../utils/constants";
// import VedioImages from "./VedioImages";
import { Link } from "react-router-dom";
import LeftVideoImage from "./LeftVideoImage";

const VideoLeftContainer = () => {
  const [video, setVideos] = useState([]);
  useEffect(() => {
    fetchData();
  }, []);

  const fetchData = async () => {
    const FetchedDATA = await fetch(YOUTUBE_VIDEOS_API);
    const DATAJSON = await FetchedDATA.json();
    // console.log(DATAJSON);
    setVideos(DATAJSON.items);
  };

  return (
    <div className="w-[34rem]">
      {video.map((ele, index) => (
        // <link to="/watch"><link></link>
        <Link to={'/watch?v=' + ele.id}>
          {/* <VedioImages key={ele.id} video={ele} /> */}
           <LeftVideoImage key={ele.id} video={ele}/>
        </Link>        
      ))}
    </div>
  );
};

export default VideoLeftContainer
