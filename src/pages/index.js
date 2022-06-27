import React, { useState } from "react";
import NavBar from "../NavBar";
import Sidebar from "../SideBar";

function Home() {
    const [isOpen, setIsOpen] = useState(false);

    const toogle = () => {
        setIsOpen(!isOpen);
    };

    return (
        <>
            <Sidebar isOpen={isOpen} toogle={toogle} />
            <NavBar toogle={toogle} />
        </>
    );
}

export default Home;
