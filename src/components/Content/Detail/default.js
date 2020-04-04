import React from "react";
import { LazyLoadImage } from "react-lazy-load-image-component";
import Track from "./Track";
import { ReactComponent as Mic } from "../../../icons/mic.svg";
import { Head } from "react-static";

const DetailPodcast = ({ data }) => {
  const checkEpisodes = () => {
    return typeof data.episodes != "undefined";
  }
  return (
    <>
      <Head>
        <title>{data.title}</title>
      </Head>
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
              data.episodes.map((episode, i) => (
                <div className="podcast-track" key={i}>
                  <h3>{`Episode-${episode.id}`}</h3>
                  <Track url={episode.audio} />
                </div>
              ))
            ) : (
              <div className="no-track">No Podcast Found</div>
            )}
          </div>
        </div>
      </div>
    </>
  );
};

export default DetailPodcast;
