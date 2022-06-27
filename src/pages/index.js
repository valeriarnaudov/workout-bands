import React, { useState } from "react";
import NavBar from "./NavBar";
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
        </>
    );
}

export default Home;
