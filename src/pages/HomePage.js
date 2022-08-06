import { useState } from "react";
import {
    WorkoutBg,
    WorkoutContainer,
    VideoBg,
    WorkoutContent,
    WorkoutH1,
    WorkoutP,
    WorkoutBtnWrapper,
    ArrowForward,
    ArrowRight,
} from "../styles/WorkoutElements";
import { Button } from "../styles/buttonElement";

const WorkOutSection = () => {
    const [hover, setHover] = useState(false);

    const onHover = () => {
        setHover(!hover);
    };

    return (
        <WorkoutContainer id="home">
            <WorkoutBg>
                <VideoBg autoPlay loop muted src={process.env.PUBLIC_URL + "/videos/video.mp4"} type="video/mp4" />
            </WorkoutBg>
            <WorkoutContent>
                <WorkoutH1>Working out makes you feel better</WorkoutH1>
                <WorkoutP>
                    Sign up today to see and share posts with elastic bands.
                </WorkoutP>
                <WorkoutBtnWrapper>
                    <Button
                        to="/signup"
                        onMouseEnter={onHover}
                        onMouseLeave={onHover}
                        primary="true"
                        dark="true"
                        duration={500}
                        exact="true"
                        offset={-80}
                    >
                        Get started {hover ? <ArrowForward /> : <ArrowRight />}
                    </Button>
                </WorkoutBtnWrapper>
            </WorkoutContent>
        </WorkoutContainer>
    );
};

export default WorkOutSection;
