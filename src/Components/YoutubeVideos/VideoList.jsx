import React from 'react';
import VideoItem from "./VideoItem";

const VideoList = ({videos,OnVideoSelect}) => {
    
     let videoList = videos.map(video=>{
              return (
              <VideoItem key={video.id} video={video} OnVideoSelect={OnVideoSelect}/>
              );
       });
    
        return videoList;
}

export default VideoList;
