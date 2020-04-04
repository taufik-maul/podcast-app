import React from "react";
import { LazyLoadImage } from "react-lazy-load-image-component";
import Track from "./Track";
import { ReactComponent as Mic } from "../../../icons/mic.svg";


const DetailPodcast = ({ data }) => {
  const checkEpisodes = () => {
    return typeof data.episodes != "undefined";
  }
  return (
    <div className="podcast-detail">
      <div className="podcast-wrapper">
        <div className="podcast-track-count">
          <Mic /> {checkEpisodes() ? data.episodes.length : 0} Episode
          {checkEpisodes() ? (data.episodes.length > 1 ? "s" : "") : ""}
        </div>
        <LazyLoadImage effect="blur" src={data.thumbnail} alt={data.title} />
        <div className="podcast-info">
          <h1>{data.title}</h1>
          <small>
            <a href={data.url} className="url-link">
              {data.url}
            </a>
          </small>
        </div>
      </div>
      <div className="podcast-track-list">
        <div className="podcast-tracks">
          {checkEpisodes() ? (
            data.episodes.map((episodes, i) => (
              <Track url={episodes.audio} key={i} />
            ))
          ) : (
            <div className="no-track">No Podcast Found</div>
          )}
        </div>
      </div>
    </div>
  );
};

export default DetailPodcast;
