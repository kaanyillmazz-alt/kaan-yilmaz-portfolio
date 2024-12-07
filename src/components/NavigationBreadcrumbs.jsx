import * as React from 'react';
import Breadcrumbs from '@mui/material/Breadcrumbs';
import Link from '@mui/material/Link';
import Stack from '@mui/material/Stack';
import HomeIcon from '@mui/icons-material/Home';
import BuildIcon from '@mui/icons-material/Build';
import AssignmentIcon from '@mui/icons-material/Assignment';
import PermContactCalendarIcon from '@mui/icons-material/PermContactCalendar';



export default function NavigationBreadcrumbs({aboutDisplay, skillsDisplay, contactDisplay, projectsDisplay, setAboutDisplay ,setContactDisplay, setProjectsDisplay, setSkillsDisplay}) {

    function handleClick(event) {
        event.preventDefault();
        if(event.target.id === "about") {
            setAboutDisplay("flex");
            setSkillsDisplay("none");
            setProjectsDisplay("none");
            setContactDisplay("none");
        } else if (event.target.id === "skills") {
            setAboutDisplay("none");
            setSkillsDisplay("flex");
            setProjectsDisplay("none");
            setContactDisplay("none");
        } else if (event.target.id === "projects") {
            setAboutDisplay("none");
            setSkillsDisplay("none");
            setProjectsDisplay("flex");
            setContactDisplay("none");
        } else if (event.target.id === "contact") {
            setAboutDisplay("none");
            setSkillsDisplay("none");
            setProjectsDisplay("none");
            setContactDisplay("flex");
        }
    }

    const stackStyle = {
        position: 'fixed',
        top: '2%',
        left: '50%',
        transform: 'translateX(-50%)'
    };


    return (
        <Stack style={stackStyle}>
            <Breadcrumbs separator="-" aria-label="breadcrumb" >
                <Link underline="none"
                      id={"about"}
                      sx={{ display: 'flex', alignItems: 'center' }}
                      color="inherit"
                      href="/material-ui/getting-started/installation/"
                      onClick={handleClick}>
                    <HomeIcon sx={{ mr: 0.5 }} fontSize="inherit"/>
                    About
                </Link>
                <Link underline="none"
                      id={"skills"}
                      sx={{ display: 'flex', alignItems: 'center' }}
                      color="inherit"
                      href="/material-ui/getting-started/installation/"
                      onClick={handleClick}>
                    <BuildIcon sx={{ mr: 0.5 }} fontSize="inherit"/>
                    Skills
                </Link>
                <Link underline="none"
                      id={"projects"}
                      sx={{ display: 'flex', alignItems: 'center' }}
                      color="inherit"
                      href="/material-ui/getting-started/installation/"
                      onClick={handleClick}>
                    <AssignmentIcon sx={{ mr: 0.5 }} fontSize="inherit"/>
                    Projects
                </Link>
                <Link underline="hover"
                      id={"contact"}
                      sx={{ display: 'flex', alignItems: 'center' }}
                      color="inherit"
                      href="/material-ui/getting-started/installation/"
                      onClick={handleClick}>
                    <PermContactCalendarIcon sx={{ mr: 0.5 }} fontSize="inherit"/>
                    Contact
                </Link>
            </Breadcrumbs>
        </Stack>
    );
}