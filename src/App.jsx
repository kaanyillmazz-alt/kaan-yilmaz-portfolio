import * as React from 'react';
import NavigationBreadcrumbs from "./components/NavigationBreadcrumbs.jsx";
import MainCards from "./components/MainCards.jsx";
import {useEffect, useRef, useState} from "react";
import './App.css';

import snowflake from './assets/snowflake1.webp';

export default function App() {
    const [aboutDisplay, setAboutDisplay] = useState("none");
    const [skillsDisplay, setSkillsDisplay] = useState("none");
    const [projectsDisplay, setProjectsDisplay] = useState("none");
    const [contactDisplay, setContactDisplay] = useState("none");

    const flake = useRef(null);
    const container = useRef(null);



    useEffect(() => {
        function createFlake() {

            const clone = flake.current.cloneNode(true);

            clone.style.paddingLeft = Math.random() * 10 + "px";

            clone.style.animationDuration = Math.random() * 5 + 3 + "s";
            clone.style.opacity = Math.random();
            container.current.append(clone);
        }


        const flakeCreator = setInterval(createFlake, 50);


        setTimeout(() => {
            clearInterval(flakeCreator);
        }, 4000);
    }, []);



    return (
        <>
            <div className="container"  ref={container}>
                <img src={snowflake} style={{maxWidth: "10px", maxHeight: "10px"}} className="flake" ref={flake} alt={"flake"}></img>
            </div>
            <NavigationBreadcrumbs aboutDisplay={aboutDisplay} setAboutDisplay={setAboutDisplay}
                                   skillsDisplay={skillsDisplay} setSkillsDisplay={setSkillsDisplay}
                                   projectsDisplay={projectsDisplay} setProjectsDisplay={setProjectsDisplay}
                                   contactDisplay={contactDisplay} setContactDisplay={setContactDisplay}/>
            <MainCards aboutDisplay={aboutDisplay} setAboutDisplay={setAboutDisplay}
                       skillsDisplay={skillsDisplay} setSkillsDisplay={setSkillsDisplay}
                       projectsDisplay={projectsDisplay} setProjectsDisplay={setProjectsDisplay}
                       contactDisplay={contactDisplay} setContactDisplay={setContactDisplay}/>
        </>
    );
}