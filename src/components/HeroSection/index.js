import React, { useState } from "react";
import { CUSButton } from "../ButtonElements";
import image from "../../images/check2.png";

import {
  ArrowForward,
  ArrowRight,
  HeroBg,
  HeroBtnWrapper,
  HeroContainer,
  HeroContent,
  HeroH1,
  HeroP,
  PhotosBg,
} from "./HeroElements";

const HeroSection = () => {
  const [hover, setHover] = useState(false);

  const onHover = () => {
    setHover(!hover);
  };
  return (
    <HeroContainer id="home">
      <HeroBg>
        <PhotosBg src={image} alt="Photo"></PhotosBg>
      </HeroBg>
      <HeroContent>
        <HeroH1 className="fw">Helping the needful</HeroH1>
        <HeroP>Kind based donation platform.</HeroP>
        <HeroBtnWrapper>
          <CUSButton
            to ="/products"
            onMouseEnter={onHover}
            onMouseLeave={onHover}
            primary="true"
            dark="true"
          >
            Donations {hover ? <ArrowForward /> : <ArrowRight />}
          </CUSButton>
        </HeroBtnWrapper>
      </HeroContent>
    </HeroContainer>
  );
};

export default HeroSection;
