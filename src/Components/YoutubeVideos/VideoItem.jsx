import React from 'react';
import "./video.css";
import Moment from "react-moment";


const VideoItem = ({video,OnVideoSelect}) => {

    console.log(video);
 
    
    return (
        <div>

         <section id="videoItemBlock">
             <article>
             <div className="innerBlock" onClick={()=>OnVideoSelect(video)}>
                <div className=" video_thumbail">
                <img src={video.snippet.thumbnails.medium.url} alt={video.title}/>
                   
                </div>
                <div className="video_descriptions">
    <h2>{video.snippet.title}</h2>
    <p>{video.snippet.channelTitle}</p>
    <p><Moment fromNow >{video.snippet.publishedAt}</Moment></p>
                </div>
            </div>
             </article>
         </section>


            
        </div>
    )
}

export default VideoItem;
