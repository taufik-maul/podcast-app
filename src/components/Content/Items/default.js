import React from "react";
import { LazyLoadImage } from "react-lazy-load-image-component";
import "react-lazy-load-image-component/src/effects/blur.css";
import { Link } from "react-router-dom";
import { ReactComponent as Mic } from "../../../icons/mic.svg";

const Item = ({ podcast }) => {
  return (
    <div className="podcast-item">
      <Link to={`/podcast/${podcast.id}`}>
        <div className="podcast-thumbnail">
          <LazyLoadImage
            effect="blur"
            src={podcast.thumbnail}
            alt={podcast.title}
            width="100%"
            height="200px"
          />
        </div>
        <div className="podcast-info">
          <h2>{podcast.title}</h2>
          <span className="podcast-track-count"><Mic />
            {typeof podcast.episodes != "undefined"
              ? podcast.episodes.length
              : 0}{" "}
            Episode
            {typeof podcast.episodes != "undefined"
              ? podcast.episodes.length > 1
                ? "s"
                : ""
              : ""}
          </span>
        </div>
      </Link>
    </div>
  );
};

export default Item;
