import { useEffect, useState } from "react";
import { Col, Container, Row } from "react-bootstrap";
import { ArrowRightCircle } from "react-bootstrap-icons";
import { HashLink } from 'react-router-hash-link';
import { BrowserRouter as Router } from "react-router-dom";
import planetImg from "../assets/img/planet.png";
import "animate.css";
import TrackVisibility from 'react-on-screen';

function Banner()
{
    const [loopNum, setLoopNum] = useState(0);
    const [isDeleting, setIsDeleting]= useState(false);
    const titlesArray = ["React Developer", "UX/UI Engineer", "Aspiring Unity Developer"];
    const [titleText, setTitleText] = useState("");
    const [delta, setDelta] = useState(300 - Math.random() * 100) 
    const period = 2000; // Display full text from rotating array period before deleting begins

    useEffect(() => {
        let ticker = setInterval(() => {
            tick();
        }, delta)
   
        return ()=>{clearInterval(ticker)}
    }, [titleText])

    function tick()
    {
        let i = loopNum % titlesArray.length;
        let fullText = titlesArray[i];
        let updatedText = isDeleting ? 
            fullText.substring(0, titleText.length - 1) : 
            fullText.substring(0, titleText.length + 1)

        setTitleText(updatedText);

        if (isDeleting)
        {
            setDelta(prevDelta => prevDelta / 2);
        }

        if (!isDeleting && updatedText === fullText)
        {
            setIsDeleting(true);
            setDelta(period);
        } else if (isDeleting && updatedText === "")
        {
            setIsDeleting(false);
            setLoopNum(loopNum + 1);
            setDelta(500);
        }
    }

    return(
        <section className="banner" id="home">
            <Container>
                <Row className="align-items-center">
                    <Col xs={12} md={6} xl={7}>
                        <TrackVisibility>
                            {({isVisible}) =>
                                <div className={isVisible ? "animate__animated animate__pulse" : ""}>
                                    <span className="welcome-text">Welcome to my porfolio!</span>
                                    <h1>Hi, I am jakxc.<span className="wrap">{titleText}</span></h1>
                                    <p> 
                                        This portfolio contains a collection of my personal work/projects that I am somewhat proud of.
                                        This includes projects I created in React JS, Blender and Unity Engine. Feel free to browse around and connect with t
                                        me through the social links or sending through a comment/message.
                                    </p>
                                    <Router>
                                        <HashLink to="#contact" style={{ textDecoration: 'none' }}>
                                            <button>
                                                Let's connect <ArrowRightCircle size={25} />
                                            </button>
                                        </HashLink>
                                    </Router>
                                </div>
                            }
                        </TrackVisibility>
                    </Col>
                    <Col xs={12} md={6} xl={5}>
                        <img src={planetImg} alt="Header"/>
                    </Col>
                </Row>
            </Container>
        </section>
    )
}

export default Banner