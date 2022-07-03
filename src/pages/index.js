import React, { useState } from "react";
import Footer from "./Footer";
import InfoSection from "./InfoSection";
import { homeObjOne, homeObjThree, homeObjTwo } from "./InfoSection/Data";
import NavBar from "./NavBar";
import Services from "./Services";
import Sidebar from "./SideBar";
import WorkOutSection from "./WorkOutSection";

function Home() {
    const [isOpen, setIsOpen] = useState(false);

    const toogle = () => {
        setIsOpen(!isOpen);
    };

    return (
        <>
            <Sidebar isOpen={isOpen} toogle={toogle} />
            <NavBar toogle={toogle} />
            <WorkOutSection />
            <InfoSection {...homeObjOne} />
            <InfoSection {...homeObjTwo} />
            <InfoSection {...homeObjThree} />
            <Services />
            <Footer />
        </>
    );
}

export default Home;
