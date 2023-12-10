import React, { useEffect, useState } from "react";
import { YOUTUBE_VIDEOS_API } from "../utils/constants";
import VedioImages from "./VedioImages";
import { Link } from "react-router-dom";

const VideoContainer = () => {
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
    <div className="flex flex-wrap">
      {video.map((ele, index) => (
        // <link to="/watch"><link></link>
        <Link to={'/watch?v=' + ele.id}>
          <VedioImages key={ele.id} video={ele} />
        </Link>        
      ))}
    </div>
  );
};

export default VideoContainer;
