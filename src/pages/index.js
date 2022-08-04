import InfoSection from "./HomePageInfoSection";
import { homeObjOne, homeObjThree, homeObjTwo } from "../sources/Data";
import Services from "./HomePageServices";
import WorkOutSection from "./HomePage";

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
