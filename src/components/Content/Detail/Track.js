import React from 'react';
import AudioPlayer from "react-h5-audio-player";
import "react-h5-audio-player/lib/styles.css";

const Track = ({url}) => {
    return (
        <div className="audio-player">
            <AudioPlayer src={url} />
        </div>
    );
}

export default Track;
