import * as React from 'react';
import NavigationBreadcrumbs from "./components/NavigationBreadcrumbs.jsx";
import MainCards from "./components/MainCards.jsx";
import {useState} from "react";


export default function App() {

    const [aboutDisplay, setAboutDisplay] = useState("none");
    const [skillsDisplay, setSkillsDisplay] = useState("none");
    const [projectsDisplay, setProjectsDisplay] = useState("none");
    const [contactDisplay, setContactDisplay] = useState("none");

    return (
        <>
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