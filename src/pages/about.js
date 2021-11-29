import React from "react";
import { Carousel } from "react-bootstrap";
import Navbar from "../components/navbar";
import image1 from "../images/1st.png";
import image2 from "../images/2nd.png";
import image3 from "../images/3rd.png";
import image4 from "../images/4th.png";
import image5 from "../images/5th.png";
import image6 from "../images/6th.png";
import image7 from "../images/7th.png";

const About = () => {
  return (
    <>
      <div>
        <Navbar />
        <Carousel variant="dark">
          <Carousel.Item>
            <img
              style={{ marginTop: "3vh", height: "82vh" }}
              className="d-block w-100"
              src={image1}
              alt="First slide"
            />
          </Carousel.Item>
          <Carousel.Item>
            <img
              style={{ marginTop: "3vh", height: "82vh" }}
              className="d-block w-100"
              src={image2}
              alt="Second slide"
            />
          </Carousel.Item>
          <Carousel.Item>
            <img
              style={{ marginTop: "3vh", height: "82vh" }}
              className="d-block w-100"
              src={image3}
              alt="Third slide"
            />
          </Carousel.Item>
          <Carousel.Item>
            <img
              style={{ marginTop: "3vh", height: "82vh" }}
              className="d-block w-100"
              src={image4}
              alt="Fourth slide"
            />
          </Carousel.Item>
          <Carousel.Item>
            <img
              style={{ marginTop: "3vh", height: "82vh" }}
              className="d-block w-100"
              src={image5}
              alt="Fifth slide"
            />
          </Carousel.Item>
          <Carousel.Item>
            <img
              style={{ marginTop: "3vh", height: "82vh" }}
              className="d-block w-100"
              src={image6}
              alt="Sixth slide"
            />
          </Carousel.Item>
          <Carousel.Item>
            <img
              style={{ marginTop: "3vh", height: "82vh" }}
              className="d-block w-100"
              src={image7}
              alt="Seventh slide"
            />
          </Carousel.Item>
        </Carousel>
      </div>
    </>
  );
};

export default About;
