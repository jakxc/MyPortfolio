import { Col, Container, Row } from "react-bootstrap"
import logo from "../assets/img/logo.svg"
import linkedIn from "../assets/img/nav-icon1.svg"
import facebook from '../assets/img/nav-icon2.svg';
import instagram from '../assets/img/nav-icon3.svg';

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
                        <a href="#"><img src={linkedIn} alt="Icon" /></a>
                        <a href="#"><img src={facebook} alt="Icon" /></a>
                        <a href="#"><img src={instagram} alt="Icon" /></a>
                        </div>
                        <p>Copyright 2023. All Rights Reserved by jakxc</p>
                    </Col>
                </Row>
            </Container>
        </footer>
    )
}

export default Footer;