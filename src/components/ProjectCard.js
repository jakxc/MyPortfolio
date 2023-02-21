import { Col } from "react-bootstrap"

function ProjectCard(props)
{
    return (
        <Col sm={6} md={4}>
            <div className="proj-container">
                <div className="proj-img">
                    <img src={props.imgUrl} alt="Project Card"/>
                </div>
                <div className="proj-text">
                    <h4>{props.title}</h4>
                    <span>{props.desc}{props.link &&<a href={props.link} className="proj-link">{props.linkDesc}</a>}</span>
                </div>
            </div>
        </Col>
    )
}

export default ProjectCard