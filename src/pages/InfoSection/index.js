import React from "react";
import { Button } from "react-scroll";
import { BtnWrap, Column1, Column2, Heading, Img, ImgWrapper, InfoContainer, InfoRow, InfoWrapper, Subtitle, TextWrapper, TopLine } from "./InfoElement";

function InfoSection() {
    return (
        <>
            <InfoContainer>
                <InfoWrapper>
                    <InfoRow>
                        <Column1>
                            <TextWrapper>
                                <TopLine>TopLine</TopLine>
                                <Heading>Heading</Heading>
                                <Subtitle>Subtitle</Subtitle>
                                <BtnWrap>
                                    <Button to='home'/>
                                </BtnWrap>
                            </TextWrapper>
                        </Column1>
                        <Column2>
                            <ImgWrapper>
                                <Img />
                            </ImgWrapper>
                        </Column2>
                    </InfoRow>
                </InfoWrapper>
            </InfoContainer>
        </>
    );
}

export default InfoSection;
