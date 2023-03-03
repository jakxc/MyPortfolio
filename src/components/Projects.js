import {useState} from "react";
import {Col, Row, Container, Nav, Tab} from "react-bootstrap";
import ProjectCard from "./ProjectCard";
import lowpolygirl from "../assets/img/lowpolygirl.png"
import lowpolyplane from "../assets/img/lowpolyplane.png"
import memegenerator from "../assets/img/memegenerator.png"
import tenzies from "../assets/img/tenzies.png"
import quizzical from "../assets/img/quizzical.png"
import spaceshooter from "../assets/img/spaceshooter.png"
import "animate.css";
import TrackVisibility from "react-on-screen";

function Projects()
{
    const reactProjects = [
        {
            title: "Meme Generator",
            desc: "A simple meme generator created with React. It allows customised text to be placed on a random meme image.",
            link: "https://github.com/jakxc/Meme-Generator",
            linkDesc: "Github link to Meme Generator",
            imgUrl: memegenerator
        },
        {
            title: "Tenzies",
            desc: "A simple dice game created with React. The goal of the game is to have each die display the same number in as few rolls as possible.",
            link: "https://github.com/jakxc/Tenzies-Game",
            linkDesc: "Github link to Tenzies",
            imgUrl: tenzies
        },
        {
            title: "Quizzical",
            desc: "A trivia quiz game created with React. It contains 5 questions related to Anime/Japanese Managa with multiple choice options.",
            link: "https://github.com/jakxc/Quizzical",
            linkDesc: "Github link to Quizzical",
            imgUrl: quizzical
        }
    ]

    const blenderProjects = [
        {
            title: "Low Poly Plane",
            desc: "A simple low poly plane created with Blender. One of my first projects using Blender.",
            link: "",
            linkDesc: "",
            imgUrl: lowpolyplane
        },
        {
            title: "Low Poly Girl",
            desc: "A low poly girl created with Blender. Inspiration from the movie Coraline.",
            link: "",
            linkDesc: "",
            imgUrl: lowpolygirl
        }
    ]

    const unityProjects = [
        {
            title: "Space Shooter - Defend The Galaxy",
            desc: "An arcade style space shooter game made with Unity. To try the game out, click the following link: ",
            link: "https://sharemygame.com/@jakxc/space-shooter-by-jakxc",
            linkDesc: "Space Shooter - Defend The Galaxy by jakxc",
            imgUrl: spaceshooter
        }
        // {
        //     title: "RPG Game",
        //     desc: "In the works...",
        //     imgUrl: ""
        // }
    ]

    const [key, setKey] = useState("react");

    function handleTabSelection(key)
    {
        setKey(key);
    }


    return(
        <section className="projects" id="projects">
            <Container>
                <Row>
                    <Col>
                    <TrackVisibility>
                        {({isVisible}) =>
                            <div className={isVisible ? "animate__animated animate__pulse" : ""}>
                                <h2>Projects</h2>
                                <p>A somewhat organised collection of all my personal projects made in React, Blender and Unity.</p>
                            </div>}
                        </TrackVisibility>
                        <Tab.Container id="projects-tabs" defaultActiveKey="react" onSelect={handleTabSelection}>
                            <Nav variant="pills" className="nav-pills mb-5 justify-content-center align-items-center" id="pills-tab">
                                <Nav.Item>
                                    <Nav.Link eventKey="react">React Projects</Nav.Link>
                                </Nav.Item>
                                <Nav.Item>
                                    <Nav.Link eventKey="blender">Blender Projects</Nav.Link>
                                </Nav.Item>
                                <Nav.Item>
                                    <Nav.Link eventKey="unity">Unity Projects</Nav.Link>
                                </Nav.Item>
                            </Nav>
                            <Tab.Content>
                                <Tab.Pane eventKey={key}>
                                    {key === "react" && <Row>
                                        {
                                            reactProjects.map((project, index) => {
                                                return (
                                                    <ProjectCard
                                                        key={index}
                                                        {...project}
                                                    />
                                                )
                                            })
                                        }
                                    </Row>}
                                    {key === "blender" && <Row>
                                        {
                                            blenderProjects.map((project, index) => {
                                                return (
                                                    <ProjectCard
                                                        key={index}
                                                        {...project}
                                                    />
                                                )
                                            })
                                        }
                                    </Row>}
                                    {key === "unity" && <Row>
                                        {
                                            unityProjects.map((project, index) => {
                                                return (
                                                    <ProjectCard
                                                        key={index}
                                                        {...project}
                                                    />
                                                )
                                            })
                                        }
                                    </Row>}
                                </Tab.Pane>
                            </Tab.Content>
                        </Tab.Container>
                    </Col>
                </Row>
            </Container>
            {/* <img className="background-img-right" src={colorSharp2} alt="Background Right"/> */}
        </section>
    )
}

export default Projects