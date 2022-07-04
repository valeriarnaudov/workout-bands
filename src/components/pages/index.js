import React from "react";

import InfoSection from "./InfoSection";
import { homeObjOne, homeObjThree, homeObjTwo } from "./InfoSection/Data";
import Services from "./Services";
import WorkOutSection from "./WorkOutSection";

function Home() {
    return (
        <>
            <WorkOutSection />
            <InfoSection {...homeObjOne} />
            <InfoSection {...homeObjTwo} />
            <InfoSection {...homeObjThree} />
            <Services />
        </>
    );
}

export default Home;
