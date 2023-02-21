import { Col, Row, Container, Nav, Tab} from "react-bootstrap";
import ProjectCard from "./ProjectCard";
import colorSharp2 from "../assets/img/color-sharp2.png";
import lowpolygirl from "../assets/img/lowpolygirl.png"
import lowpolyplane from "../assets/img/lowpolyplane.png"
import "animate.css";
import TrackVisibility from 'react-on-screen';

function Projects()
{
    const projects = [
        {
            title: "Low Poly Plane",
            desc: "A simple low poly plane created with Blender. One of my first projects using Blender.",
            imgUrl: lowpolyplane
        },
        {
            title: "Low Poly Girl",
            desc: "A low poly girl created with Blender. Inspiration from the movie Coraline.",
            imgUrl: lowpolygirl
        }
    ]
    return(
        <section className="projects" id="projects">
            <Container>
                <Row>
                    <Col>
                    <TrackVisibility>
                        {({isVisible}) =>
                            <div className={isVisible ? "animate__animated animate__pulse" : ""}>
                                <h2>Projects</h2>
                                <p>Project description goes here</p>
                            </div>}
                        </TrackVisibility>
                        <Tab.Container id="projects-tabs" defaultActiveKey="first">
                        <Nav variant="pills" className="nav-pills mb-5 justify-content-center align-items-center" id="pills-tab">
                            <Nav.Item>
                                <Nav.Link eventKey="first">React Projects</Nav.Link>
                            </Nav.Item>
                            <Nav.Item>
                                <Nav.Link eventKey="second">Blender Projects</Nav.Link>
                            </Nav.Item>
                            <Nav.Item>
                                <Nav.Link eventKey="third">Unity Projects</Nav.Link>
                            </Nav.Item>
                        </Nav>
                        <Tab.Content>
                            <Tab.Pane eventKey="second">
                                <Row>
                                    {
                                        projects.map((project, index) => {
                                            return (
                                                <ProjectCard
                                                    key={index}
                                                    {...project}
                                                />
                                            )
                                        })
                                    }
                                </Row>
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