import React from "react";

const LeftVideoImage = ({ video }) => {
  if (
    !video ||
    !video.snippet ||
    !video.snippet.thumbnails ||
    !video.statistics
  ) {
    // Handle cases where the video object or its properties are undefined
    return <div>Video data not available</div>;
  }

  const { publishedAt, title, channelTitle } = video.snippet;
  const { url } = video.snippet.thumbnails.medium;
  const { viewCount } = video.statistics;

  return (
    <div className="w-[32rem] ml-4 mb-3 flex mr-5">
      <img className="rounded-lg w-[13rem] h-[8rem]" alt="ImageContent" src={url} />
      <div className="mt-2 ml-2">
        <div className="font-bold text-sm">{title}</div>
        <div className="text-xs mt-3">{publishedAt}</div>
        <div className="text-xs">{channelTitle}</div>
        <div className="text-xs">{viewCount} views</div>
      </div>
    </div>
  );
};

export default LeftVideoImage;
