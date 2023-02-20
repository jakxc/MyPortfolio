import { Col, Container, Row } from "react-bootstrap"
import Carousel from 'react-multi-carousel';
import 'react-multi-carousel/lib/styles.css';
import meter1 from '../assets/img/meter1.svg';
import meter2 from '../assets/img/meter2.svg';
import meter3 from '../assets/img/meter3.svg';
import colorSharp from '../assets/img/color-sharp.png';

function Skills()
{
    const responsive = {
        superLargeDesktop: {
          // the naming can be any, depends on you.
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

    return(
        <section className='skills' id='skills'>
            <Container>
                <Row>
                    <Col>
                        <div className="skills-container">
                            <h2>Skills</h2>
                            <p>Insert skills here</p>
                            <Carousel responsive={responsive} infinite={true} className="skills-slider">
                                <div className="item"> 
                                    <img src={meter2} alt="image"/>
                                    <h5>React JS</h5>
                                </div>
                                <div className="item"> 
                                    <img src={meter2} alt="image"/>
                                    <h5>Unity/C#</h5>
                                </div>
                                <div className="item"> 
                                    <img src={meter2} alt="image"/>
                                    <h5>QT/QML</h5>
                                </div>
                                <div className="item"> 
                                    <img src={meter2} alt="image"/>
                                    <h5>Blender/3D Modelling</h5>
                                </div>
                            </Carousel>
                        </div>
                    </Col>
                </Row>
            </Container>
            <img src={colorSharp} className="background-image-left"/>
        </section>
    )
}

export default Skills