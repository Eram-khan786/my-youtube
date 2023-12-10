import React from 'react';

const VedioImages = ({ video }) => {
  // if (!video || !video.snippet || !video.snippet.thumbnails || !video.statistics) {
  //   // Handle cases where the video object or its properties are undefined
  //   return <div>Video data not available</div>;
  // }

  const { publishedAt, title, channelTitle } = video.snippet;
  const { url } = video.snippet.thumbnails.medium;
  const { viewCount } = video.statistics;

  return (
    <div className='w-80 ml-9 mb-8'>
      <img className='rounded-lg' alt="ImageContent" src={url}/>
      <div className="font-bold">{title}</div>
      <div>{publishedAt}</div>
      <div>{channelTitle}</div>
      <div>{viewCount} views</div>
    </div>
  );
};

export default VedioImages;
