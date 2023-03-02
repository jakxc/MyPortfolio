import { Col, Container, Row } from "react-bootstrap"
import logo from "../assets/img/logo.svg"
import linkedIn from '../assets/img/linkedIn-icon.svg';
import github from '../assets/img/github-icon.png';
import instagram from '../assets/img/instagram-icon.svg';

function Footer()
{
    return(
        <footer className="footer">
            <Container>
                <Row className="align-items-center">
                    <Col size={12} sm={6}>
                        <img src={logo} alt="Logo" />
                    </Col>
                    <Col size={12} sm={6} className="text-center text-sm-end">
                        <div className="social-icon">
                        <a href="https://www.linkedin.com/in/jack-chen-798696196/"><img src={linkedIn} alt="" /></a>
                        <a href="https://github.com/jakxc/"><img src={github} alt="" /></a>
                        <a href="https://www.instagram.com/ray.jxc/"><img src={instagram} alt="" /></a>
                        </div>
                        <p>Copyright 2023. All Rights Reserved by jakxc</p>
                    </Col>
                </Row>
            </Container>
        </footer>
    )
}

export default Footer;