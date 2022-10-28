import React, { Component } from "react";
import { Link } from "react-router-dom";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { imageUrl } from "../util/api";

export default class ImageSlider extends Component {
  render() {
    const settings = {
      dots: true,
      infinite: false,
      speed: 500,
      slidesToShow: 1,
      slidesToScroll: 1,
    };
    return (
      <Slider {...settings}>
        {this.props.images.length > 0 &&
          this.props.images?.map((img, index) => (
            <div
              className="form-group position-relative mt-1"
              // style={{ height: "100%" }}
            >
              {this.props.enable_delete && (
                <img
                  onMouseEnter={this.props.handleMouseEnter} // Or onMouseOver
                  onMouseLeave={this.props.handleMouseLeave}
                  style={{
                    margin: 10,
                    width: "25px",
                    height: "25px",
                    ...(this.props.hover && {
                      transform: `translate(${3}px, ${2}px)`,
                      cursor: "pointer",
                    }),
                  }}
                  src="images/cross-icon.png"
                  onClick={() => this.props.handleDeleteImage(index)}
                  alt=""
                />
              )}
              <img
                src={`${imageUrl}${img}`}
                draggable={true}
                style={{
                  width: 190,
                  height: 168,
                }}
              />
            </div>
          ))}
      </Slider>
    );
  }
}
