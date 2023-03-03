import { Col, Container, Row } from "react-bootstrap"
import Carousel from 'react-multi-carousel';
import 'react-multi-carousel/lib/styles.css';
import { CircularProgressbar } from "react-circular-progressbar";
import "react-circular-progressbar/dist/styles.css";
import TrackVisibility from "react-on-screen";
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

      const reactMeter = 70;
      const qmlMeter = 70;
      const unityMeter = 60;
      const blenderMeter = 50;

    return(
        <section className='skills' id='skills'>
            <Container>
                <Row>
                    <Col>
                        <div className="skills-container">
                            <TrackVisibility>
                                {({isVisible}) =>
                                    <div className={isVisible ? "animate__animated animate__pulse" : ""}>
                                        <h2>Skills</h2>
                                        <p>React JS, Unity Engine/C#, Qt/QML, Blender</p>
                                    </div>
                                }
                            </TrackVisibility>
                            <Carousel responsive={responsive} infinite={true} className="skills-slider">
                                <div className="skill-element">
                                    <div className="skill-progress"> 
                                        <CircularProgressbar value={reactMeter} text={`${reactMeter}%`} />
                                    </div>
                                    <h5>React JS</h5>
                                </div>
                                <div className="skill-element">
                                    <div className="skill-progress"> 
                                        <CircularProgressbar value={unityMeter} text={`${unityMeter}%`} />
                                    </div>
                                    <h5>Unity/C#</h5>
                                </div>
                                <div className="skill-element">
                                    <div className="skill-progress"> 
                                        <CircularProgressbar value={qmlMeter} text={`${qmlMeter}%`} />
                                    </div>
                                    <h5>QT/QML</h5>
                                </div>
                                <div className="skill-element">
                                    <div className="skill-progress"> 
                                        <CircularProgressbar value={blenderMeter} text={`${blenderMeter}%`} />
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