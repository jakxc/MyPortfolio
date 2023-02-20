import { Col, Row, Container, Nav, Tab} from "react-bootstrap";
import ProjectCard from "./ProjectCard";
import colorSharp2 from "../assets/img/color-sharp2.png";
import projImg1 from "../assets/img/project-img1.png"
import "animate.css";
import TrackVisibility from 'react-on-screen';

function Projects()
{
    const projects = [
        {
            title: "Project title",
            desc: "Project desc",
            imgUrl: projImg1
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
                            <Nav.Link eventKey="first">Tab 1</Nav.Link>
                            </Nav.Item>
                            <Nav.Item>
                            <Nav.Link eventKey="second">Tab 2</Nav.Link>
                            </Nav.Item>
                            <Nav.Item>
                            <Nav.Link eventKey="third">Tab 3</Nav.Link>
                            </Nav.Item>
                        </Nav>
                        <Tab.Content>
                            <Tab.Pane eventKey="first">
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
            <img className="background-img-right" src={colorSharp2} alt="Background Right"/>
        </section>
    )
}

export default Projects