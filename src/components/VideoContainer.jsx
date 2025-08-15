import React, { useEffect, useState } from 'react';
import { YOUTUBE_VIDEOS_API } from "../utils/constants";
import VideoCard from './VideoCard';

const VideoContainer = () => {
    const [videos, setVideos] = useState([]);

    useEffect(() => {
        getVideos();
    }, [])

    const getVideos = async () => {
        const data = await fetch(YOUTUBE_VIDEOS_API);
        const json = await data.json();
        console.log(json.items);
        setVideos(json?.items);
    }
    return (
        <div className="grid gap-1 gap-y-5 p-4 sm:grid-cols-2 lg:grid-cols-3">
            {videos.map(video => <VideoCard key={video.id} info={video} />)}
        </div>
    )
}


export default VideoContainer;