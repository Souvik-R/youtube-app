import React, { useEffect } from 'react';
import { YOUTUBE_VIDEOS_API } from "../utils/constants";

const VideoContainer = () => {

    useEffect(() => {
        getVideos();
    }, [])

    const getVideos = async () => {
        const data = await fetch(YOUTUBE_VIDEOS_API);
        const videos = await data.json();
        console.log(videos);
    }
    return (
        <div>Video Container</div>
    )
}


export default VideoContainer;