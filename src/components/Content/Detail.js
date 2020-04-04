import React from "react";
import { useParams, Link } from "react-router-dom";
import { MyContext } from "../../DataProvider";
import DetailPodcast from "./Detail/default";
import {ReactComponent as Back} from '../../icons/back.svg';
import './detail.css';

const Detail = () => {
  const { podcastid } = useParams();
  return (
    <MyContext.Consumer>
      {context => (
        <div className="detail-podcast">
        
          {!context.loading ? (
            <>
              <Link to={`/`} className="back-to-main">
                <span className="back"><Back /> Back</span>
              </Link>
            <DetailPodcast data={context.findById(podcastid)} />
            </>
          ) : (
            <div>Loading</div>
          )}
        </div>
      )}
    </MyContext.Consumer>
  );
};

export default Detail;
