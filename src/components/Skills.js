import { Col, Container, Row } from "react-bootstrap"
import Carousel from 'react-multi-carousel';
import 'react-multi-carousel/lib/styles.css';
import { CircularProgressbar } from 'react-circular-progressbar';
import 'react-circular-progressbar/dist/styles.css';
import colorSharp from '../assets/img/color-sharp.png';

function Skills()
{
    const responsive = {
        superLargeDesktop: {
          breakpoint: { max: 4000, min: 3000 },
          items: 5
        },
        desktop: {
          breakpoint: { max: 3000, min: 1024 },
          items: 3
        },
        tablet: {
          breakpoint: { max: 1024, min: 464 },
          items: 2
        },
        mobile: {
          breakpoint: { max: 464, min: 0 },
          items: 1
        }
      };

      const reactSkill = 60;
      const unitySkill = 60;
      const qmlSkill = 70;
      const blenderSkill = 50;

    return(
        <section className='skills' id='skills'>
            <Container>
                <Row>
                    <Col>
                        <div className="skills-container">
                            <h2>Skills</h2>
                            <p>React JS, Unity Engine/C#, Qt/QML, Blender</p>
                            <Carousel responsive={responsive} infinite={true} className="skills-slider">
                                <div className="skill-element">
                                    <div className="skill-progress"> 
                                        <CircularProgressbar value={reactSkill} text={`${reactSkill}%`} />
                                    </div>
                                    <h5>React JS</h5>
                                </div>
                                <div className="skill-element">
                                    <div className="skill-progress"> 
                                        <CircularProgressbar value={unitySkill} text={`${unitySkill}%`} />
                                    </div>
                                    <h5>Unity/C#</h5>
                                </div>
                                <div className="skill-element">
                                    <div className="skill-progress"> 
                                        <CircularProgressbar value={reactSkill} text={`${qmlSkill}%`} />
                                    </div>
                                    <h5>QT/QML</h5>
                                </div>
                                <div className="skill-element">
                                    <div className="skill-progress"> 
                                        <CircularProgressbar value={reactSkill} text={`${blenderSkill}%`} />
                                    </div>
                                    <h5>Blender/3D Modelling</h5>
                                </div>
                            </Carousel>
                        </div>
                    </Col>
                </Row>
            </Container>
            <img src={colorSharp} className="background-image-left" alt="Background Left"/>
        </section>
    )
}

export default Skills