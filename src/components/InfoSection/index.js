import React from 'react'
import { CUSButton } from '../ButtonElements'
import { BtnWrap, Column1, Column2, Heading, Img, ImgWrap, InfoContainer, InfoRow, InfoWrapper, Subtitile, TextWrapperr, TopLine } from './infoElements'

const InfoSection = ({
    lightBg,
    id,
    imgStart,
    topLine,
    lightText,
    headline,
    darkText,
    description,
    buttonLabel,
    img,
    alt,
    primary,
    dark,
    dark2}) => {
    
    return (
        <>
            <InfoContainer lightBg ={lightBg} id ={id}>
                <InfoWrapper>
                    <InfoRow imgStart = {imgStart}>
                        <Column1>
                        <TextWrapperr>
                            <TopLine>{topLine}</TopLine>
                            <Heading lightText = {lightText}>{headline}</Heading>
                            <Subtitile darkText ={darkText}>{description}</Subtitile>
                            <BtnWrap>
                                <CUSButton to = "home" 
                                smooth ={true}
                                duration={500}
                                spy={true}
                                exact ="true"
                                offset ={-80}
                                primary  ={primary ? 1: 0}
                                dark ={dark ? 1 : 0}
                                dark2={dark2 ? 1 : 0}
                                >{buttonLabel}</CUSButton>
                            </BtnWrap>
                        </TextWrapperr>
                        </Column1>
                        <Column2>
                        <ImgWrap>
                            <Img src={img} alt={alt} />
                        </ImgWrap>
                        </Column2>
                    </InfoRow>
                </InfoWrapper>
            </InfoContainer>
        </>
    );
};

export default InfoSection
