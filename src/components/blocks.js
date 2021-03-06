import React from "react";
import { Link } from "react-router-dom";
import Reveal from "react-reveal";
import "animate.css/animate.css";

const generateBlocks = ({ block }) => {
  if (block) {
    return block.map(item => {
      return (
        <Reveal
          key={item.id}
          effect="animated fadeInUp"
          className={`item ${item.type}`}
        >
          <div className="veil" />
          <div
            className="image"
            style={{
              background: `url(/images/blocks/${item.image}) no-repeat`
            }}
          />
          <div className="title">
            <Link to={item.link}>{item.title}</Link>
          </div>
        </Reveal>
      );
    });
  }
};

const Blocks = props => {
  // console.log(props);
  return <div className="home_blocks">{generateBlocks(props)}</div>;
};

export default Blocks;
