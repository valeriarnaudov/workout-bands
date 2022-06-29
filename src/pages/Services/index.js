import React from "react";
import Icon1 from "../../assets/images/train.png";
import Icon2 from "../../assets/images/work.png";
import Icon3 from "../../assets/images/uploadvid.png";
import {
    ServicesCard,
    ServicesContainer,
    ServicesH1,
    ServicesH2,
    ServicesIcon,
    ServicesP,
    ServicesWrapper,
} from "./ServicesElements";

function Services() {
    return (
        <>
            <ServicesContainer id="services">
                <ServicesH1>Our services</ServicesH1>
                <ServicesWrapper>
                    <ServicesCard>
                        <ServicesIcon src={Icon1} />
                        <ServicesH2>Make you feel better</ServicesH2>
                        <ServicesP>
                            We help you to get ideas for your workouts, get
                            better health and feel you better!
                        </ServicesP>
                    </ServicesCard>
                    <ServicesCard>
                        <ServicesIcon src={Icon2} />
                        <ServicesH2>See other people videos</ServicesH2>
                        <ServicesP>
                            See other people videos, comment, and like them.
                        </ServicesP>
                    </ServicesCard>
                    <ServicesCard>
                        <ServicesIcon src={Icon3} />
                        <ServicesH2>Upload your own videos</ServicesH2>
                        <ServicesP>
                            Upload your own videos and get more views, comments,
                            and likes.
                        </ServicesP>
                    </ServicesCard>
                </ServicesWrapper>
            </ServicesContainer>
        </>
    );
}

export default Services;
