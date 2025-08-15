import React from "react";

const VideoCard = ({ info }) => {
    const { snippet, statistics, contentDetails } = info;
    const { channelTitle, title, thumbnails } = snippet;
    // console.log(snippet);
    return (
        <div className="p-2 transition-all duration-300 
            hover:bg-[rgb(235,231,221)] 
            hover:shadow-[rgb(235,231,221)_0px_0px_0px_10px] rounded-lg cursor-pointer">
            <img className="rounded-lg w-full" src={thumbnails.medium.url} alt="thumbnail" />
            <ul>
                <li className="font-bold py-1">{title}</li>
                <li>{channelTitle}</li>
                <li>{statistics.viewCount} views</li>
            </ul>
        </div>
    )
}

export default VideoCard;