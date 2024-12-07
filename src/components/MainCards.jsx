import * as React from 'react';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import aboutDesktop from '/src/assets/aboutDesktop.jpg';
import skillsDesktop from '/src/assets/skillsDesktop.jpg';
import './animations.css';
import Rating from '@mui/material/Rating';


export default function MainCards({aboutDisplay, skillsDisplay, contactDisplay, projectsDisplay, setAboutDisplay ,setContactDisplay, setProjectsDisplay, setSkillsDisplay}) {




    const cardStyle = {
        height: '520px',
        width: '860px',
        position: 'fixed',
        top: '20%',
        left: '50%',
        transform: 'translateX(-50%)'
    };

    return (
        <>
            <Card sx={{
                display: aboutDisplay,
                backgroundColor: 'rgba(255, 255, 255, 0.1)',
                backdropFilter: 'blur(10px)',
                borderRadius: '16px',
                boxShadow: '0 4px 30px rgba(0, 0, 0, 0.1)',
                animation: "fadeInScale 1s linear"
            }} style={cardStyle} >

                    <CardMedia
                        style={{padding: "8px", borderRadius: "24px"}}
                        component="img"
                        height="505"
                        image={aboutDesktop}
                        alt="AboutMe"
                    />
                    <CardContent style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center' }}>
                        <Typography gutterBottom variant="h5" component="div" style={{ textAlign: 'center' }} sx={{
                            color: 'text.secondary',
                            textAlign: 'left',
                            fontFamily: 'Roboto, sans-serif',
                            fontSize: '1.9rem',
                            lineHeight: 1.8,
                            letterSpacing: '0.5px',
                            fontWeight: '600',
                            textShadow: '0.5px 0.5px 3px rgba(0, 0, 0, 0.2)',
                            marginBottom: '10px',
                        }}>
                            About Me
                        </Typography>
                        <Typography variant="body2" sx={{
                            color: 'text.secondary',
                            textAlign: 'center',
                            fontFamily: 'Roboto, sans-serif',
                            fontSize: '1.2rem',
                            lineHeight: 1.3,
                            letterSpacing: '0.5px',
                            fontWeight: '400',
                            textShadow: '0.5px 0.5px 3px rgba(0, 0, 0, 0.2)',
                            marginBottom: '10px',
                            '&:hover': {
                                color: 'rgba(255,255,255,0.68)',
                            }
                        }}>
                            I hold a degree in Computer Science from Özyeğin University. My primary expertise lies in React and Java, and I have experience working with a diverse set of technologies, including C, C++, C#, ASP.NET, Azure, Unreal Engine, Verilog, Angular, JavaScript, HTML, CSS, Bootstrap, Redux, Material-UI, Node.js, and Spring Boot. I am passionate about exploring and mastering new technologies. Feel free to reach out with any questions!
                        </Typography>
                    </CardContent>

            </Card>



            <Card sx={{
                display: skillsDisplay,
                backgroundColor: 'rgba(255, 255, 255, 0.1)',
                backdropFilter: 'blur(10px)',
                borderRadius: '16px',
                boxShadow: '0 4px 30px rgba(0, 0, 0, 0.1)',
                animation: "fadeInScale 1s linear"
            }} style={cardStyle} >

                <CardMedia
                    style={{padding: "8px", borderRadius: "24px", maxWidth: '505px'}}
                    component="img"
                    height="505"
                    image={skillsDesktop}
                    alt="skills"
                />
                <CardContent style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center', width: '100%' }}>
                    <Typography gutterBottom component="div" style={{textAlign: 'center'}} sx={{
                        color: 'text.secondary',
                        textAlign: 'left',
                        fontFamily: 'Roboto, sans-serif',
                        fontSize: '1.9rem',
                        lineHeight: 1.8,
                        letterSpacing: '0.5px',
                        fontWeight: '600',
                        textShadow: '0.5px 0.5px 3px rgba(0, 0, 0, 0.2)',
                        marginBottom: '10px',
                    }}>
                      Skills
                    </Typography>
                    <Typography variant="body2"  sx={{
                        color: 'text.secondary',
                        textAlign: 'left',
                        fontFamily: 'Roboto, sans-serif',
                        fontSize: '1.2rem',
                        lineHeight: 1.8,
                        letterSpacing: '0.5px',
                        fontWeight: '400',
                        textShadow: '0.5px 0.5px 3px rgba(0, 0, 0, 0.2)',
                        marginBottom: '10px',
                        '&:hover': {
                            color: 'rgba(255,255,255,0.68)',
                        }
                    }}>
                        <ul style={{listStyleType: 'none', paddingLeft: '20px'}}>
                            <li><Rating precision={0.5} name="read-only" value={4.5} readOnly style={{paddingBottom: '5px', display: 'inline-flex', verticalAlign: 'middle'}}
                                        sx={{
                                color: 'primary.main',
                                '& .MuiRating-iconEmpty': {
                                    color: 'rgba(255,255,255,0.68)',
                                },
                                '& .MuiRating-iconFilled': {
                                    color: '#4e1518',
                                }
                            }}/> React.js</li>
                            <li><Rating precision={0.5} name="read-only" value={3} readOnly style={{paddingBottom: '5px', display: 'inline-flex', verticalAlign: 'middle'}} sx={{
                                color: 'primary.main',
                                '& .MuiRating-iconEmpty': {
                                    color: 'rgba(255,255,255,0.68)',
                                },
                                '& .MuiRating-iconFilled': {
                                    color: '#4e1518',
                                }
                            }}/> React Native</li>
                            <li><Rating precision={0.5} name="read-only" value={3} readOnly style={{paddingBottom: '5px', display: 'inline-flex', verticalAlign: 'middle'}} sx={{
                                color: 'primary.main',
                                '& .MuiRating-iconEmpty': {
                                    color: 'rgba(255,255,255,0.68)',
                                },
                                '& .MuiRating-iconFilled': {
                                    color: '#4e1518',
                                }
                            }}/> Angular</li>
                            <li><Rating precision={0.5} name="read-only" value={4} readOnly style={{paddingBottom: '5px', display: 'inline-flex', verticalAlign: 'middle'}} sx={{
                                color: 'primary.main',
                                '& .MuiRating-iconEmpty': {
                                    color: 'rgba(255,255,255,0.68)',
                                },
                                '& .MuiRating-iconFilled': {
                                    color: '#4e1518',
                                }
                            }}/> Spring Boot</li>
                            <li><Rating precision={0.5} name="read-only" value={4} readOnly style={{paddingBottom: '5px', display: 'inline-flex', verticalAlign: 'middle'}} sx={{
                                color: 'primary.main',
                                '& .MuiRating-iconEmpty': {
                                    color: 'rgba(255,255,255,0.68)',
                                },
                                '& .MuiRating-iconFilled': {
                                    color: '#4e1518',
                                }
                            }}/> Java</li>
                            <li><Rating precision={0.5} name="read-only" value={4.5} readOnly style={{paddingBottom: '5px', display: 'inline-flex', verticalAlign: 'middle'}} sx={{
                                color: 'primary.main',
                                '& .MuiRating-iconEmpty': {
                                    color: 'rgba(255,255,255,0.68)',
                                },
                                '& .MuiRating-iconFilled': {
                                    color: '#4e1518',
                                }
                            }}/> JavaScript</li>
                            <li><Rating precision={0.5} name="read-only" value={5} readOnly style={{paddingBottom: '5px', display: 'inline-flex', verticalAlign: 'middle'}} sx={{
                                color: 'primary.main',
                                '& .MuiRating-iconEmpty': {
                                    color: 'rgba(255,255,255,0.68)',
                                },
                                '& .MuiRating-iconFilled': {
                                    color: '#4e1518',
                                }
                            }}/> HTML</li>
                            <li><Rating precision={0.5} name="read-only" value={4} readOnly style={{paddingBottom: '5px', display: 'inline-flex', verticalAlign: 'middle'}} sx={{
                                color: 'primary.main',
                                '& .MuiRating-iconEmpty': {
                                    color: 'rgba(255,255,255,0.68)',
                                },
                                '& .MuiRating-iconFilled': {
                                    color: '#4e1518',
                                }
                            }}/> CSS</li>
                            <li><Rating precision={0.5} name="read-only" value={3} readOnly style={{paddingBottom: '5px', display: 'inline-flex', verticalAlign: 'middle'}} sx={{
                                color: 'primary.main',
                                '& .MuiRating-iconEmpty': {
                                    color: 'rgba(255,255,255,0.68)',
                                },
                                '& .MuiRating-iconFilled': {
                                    color: '#4e1518',
                                }
                            }}/> C++</li>
                            <li><Rating precision={0.5} name="read-only" value={2} readOnly style={{paddingBottom: '5px', display: 'inline-flex', verticalAlign: 'middle'}} sx={{
                                color: 'primary.main',
                                '& .MuiRating-iconEmpty': {
                                    color: 'rgba(255,255,255,0.68)',
                                },
                                '& .MuiRating-iconFilled': {
                                    color: '#4e1518',
                                }
                            }}/> .Net</li>
                        </ul>
                    </Typography>
                </CardContent>

            </Card>


            <Card sx={{
                display: projectsDisplay,
                backgroundColor: 'rgba(255, 255, 255, 0.1)',
                backdropFilter: 'blur(10px)',
                borderRadius: '16px',
                boxShadow: '0 4px 30px rgba(0, 0, 0, 0.1)',
                animation: "fadeInScale 1s linear"
            }} style={cardStyle} >

                <CardMedia
                    style={{padding: "8px", borderRadius: "24px"}}
                    component="img"
                    height="505"
                    image={aboutDesktop}
                    alt="AboutMe"
                />
                <CardContent style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center' }}>
                    <Typography gutterBottom variant="h5" component="div" style={{ textAlign: 'center' }}>
                        in progress
                    </Typography>
                    <Typography variant="body2" sx={{ color: 'text.secondary', textAlign: 'center' }}>
                        in progress
                    </Typography>
                </CardContent>

            </Card>




            <Card sx={{
                display: contactDisplay,
                backgroundColor: 'rgba(255, 255, 255, 0.1)',
                backdropFilter: 'blur(10px)',
                borderRadius: '16px',
                boxShadow: '0 4px 30px rgba(0, 0, 0, 0.1)',
                animation: "fadeInScale 1s linear"
            }} style={cardStyle} >

                <CardMedia
                    style={{padding: "8px", borderRadius: "24px"}}
                    component="img"
                    height="505"
                    image={aboutDesktop}
                    alt="AboutMe"
                />
                <CardContent style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center' }}>
                    <Typography gutterBottom variant="h5" component="div" style={{ textAlign: 'center' }}>
                        in progress
                    </Typography>
                    <Typography variant="body2" sx={{ color: 'text.secondary', textAlign: 'center' }}>
                       in progress
                    </Typography>
                </CardContent>

            </Card>


        </>

    );
}