import styled from "styled-components";
import { MdKeyboardArrowRight, MdArrowForward } from "react-icons/md";

export const HeroContainer = styled.div`
  //background: rgb(22,74,65);
  //background: linear-gradient(90deg, rgba(22,74,65,1) 0%, rgba(77,119,78,1) 44%, rgba(157,200,141,1) 100%);
  // background: #0c0c0c;
  display: flex;
  justify-content: center;
  align-items: center;
  /* padding: 0 20px; */
  height: 100vh;
  //width: 800px;
  position: relative;
  z-index: 1;
  margin-top: -80px;
`;
export const HeroBg = styled.div`
  position: absolute;
  width: 100%;
  height: 100%;
  overflow: hidden;
  @media screen and (max-width: 768px) {
    display: none;
  }
`;
export const PhotosBg = styled.img`
  width: 100%;
  height: 100%;
  /* -o-object-fit: cover;
    object-fit: cover; */
`;
export const HeroContent = styled.div`
  z-index: 3;
  max-width: 1200px;
  position: absolute;
  padding: 8px;
  margin-left: -52%;
  margin-top: -15%;
  display: flex;
  flex-direction: column;
  align-items: center;
  @media screen and (max-width: 768px) {
    margin-left: 0%;
    margin-top: 0%;
  }
`;

export const HeroH1 = styled.h1`
  color: rgb(22, 74, 65);
  font-size: 4vw;

  text-align: center;

  @media screen and (max-width: 768px) {
    font-size: 40px;
  }

  @media screen and (max-width: 480px) {
    font-size: 32px;
  }
`;
export const HeroP = styled.p`
  margin-top: 20px;
  color: rgb(22, 74, 65);
  font-size: 2.3vw;
  text-align: center;
  max-width: 600px;

  @media screen and (max-width: 768px) {
    font-size: 24px;
  }

  @media screen and (max-width: 480px) {
    font-size: 18px;
  }
`;
export const HeroBtnWrapper = styled.div`
  margin-top: 25px;
  display: flex;
  flex-direction: column;
  text-align: center;
`;
export const ArrowForward = styled(MdArrowForward)`
  margin-top: 1px;
  margin-left: 3px;
  font-size: 24px;
`;

export const ArrowRight = styled(MdKeyboardArrowRight)`
  margin-top: 1px;
  margin-left: 3px;
  font-size: 24px;
`;
