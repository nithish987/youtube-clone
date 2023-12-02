import React from "react";

const VideoCard=({info})=>{
    //console.log(info);
    
    
    const { snippet,statistics }=info;
    const { title,channelTitle,thumbnails } = snippet;
    //const{title}={localized}

    //const {channelTitle}=snippet;
    //const{title}=localized;

    //console.log(snippet.channelTitle);
    
    
    return (
        <div className="p-2 m-2 w-60 shadow-lg">
          <img className="rounded-lg" alt="thumbnail" src={thumbnails.medium.url} />
            <ul>
                <li className="font-bold">{title}</li>
                <li>{channelTitle}</li>
                <li>{statistics.viewCount} Views</li>
            </ul>
        </div>
    );
};

export const AdVideoCard=({info})=>{
  return (
    <div className="p-1 m-1 border border-red-900">
        <VideoCard info={info}/>
    </div>
  );
};
export default VideoCard;