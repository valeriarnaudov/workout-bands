import {
    ServicesCard,
    ServicesContainer,
    ServicesH1,
    ServicesH2,
    ServicesIcon,
    ServicesP,
    ServicesWrapper,
} from "../styles/ServicesElements";

function Services() {
    return (
        <>
            <ServicesContainer id="services">
                <ServicesH1>Our services</ServicesH1>
                <ServicesWrapper>
                    <ServicesCard>
                        <ServicesIcon src={process.env.PUBLIC_URL + "/images/train.png"} />
                        <ServicesH2>Make you feel better</ServicesH2>
                        <ServicesP>
                            We help you to get ideas for your workouts, get
                            better health and feel you better!
                        </ServicesP>
                    </ServicesCard>
                    <ServicesCard>
                        <ServicesIcon src={process.env.PUBLIC_URL + "/images/work.png"} />
                        <ServicesH2>See other people videos</ServicesH2>
                        <ServicesP>
                            See other people videos, comment, and like them.
                        </ServicesP>
                    </ServicesCard>
                    <ServicesCard>
                        <ServicesIcon src={process.env.PUBLIC_URL + "/images/uploadvid.png"} />
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
