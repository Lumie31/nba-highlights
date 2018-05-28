import React from "react";
import Slider from "react-slick";

const settings = {
  arrow: false,
  dots: true,
  infinite: true,
  speed: 500,
  slidesToShow: 1,
  slidesToScroll: 1
};

const generateSlides = ({ slides }) => {
  if (slides) {
    return (
      <Slider {...settings}>
        {slides.map(function(item) {
          return (
            <div key={item.id} className="item-slider" ba>
              <img src={`/images/covers/${item.cover}`} alt="" />
              <span className="caption">
                <h4>{item.topic}</h4>
                <p>{item.title}</p>
              </span>
            </div>
          );
        })}
      </Slider>
    );
  }
};

const Featured = props => {
  // console.log(props);
  return <div>{generateSlides(props)}</div>;
};

export default Featured;
