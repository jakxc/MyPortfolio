import { Col } from "react-bootstrap"

function ProjectCard(props)
{
    return (
        <Col sm={6} md={4}>
            <div className="proj-container">
                <img src={props.imgUrl} alt="Project Card"/>
                <div className="proj-text">
                    <h4>{props.title}</h4>
                    <span>{props.desc}</span>
                </div>
            </div>
        </Col>
    )
}

export default ProjectCard