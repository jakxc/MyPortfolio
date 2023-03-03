import { useState, useRef } from "react"
import { Col, Container, Row } from "react-bootstrap"
import emailjs from '@emailjs/browser';
import foxImg from "../assets/img/fox.png"

function Contact()
{
    const initialFormDetails = {
        firstName: "",
        lastName: "",
        email: "",
        phone: "",
        message: ""
    }

    const [formDetails, setFormDetails] = useState(initialFormDetails);
    // const [buttonText, setButtonText] = useState("Send");
    const [status, setStatus] = useState({});
    const form = useRef();

    function handleChange(event)
    {
        const {name, value} = event.target;

        setFormDetails(prevDetails => {
            return {
                ...prevDetails,
                [name]: value
            }
        })
    }

    function handleSubmit(e) {
        e.preventDefault();
    
        emailjs.sendForm('service_3cxdgrg', 'template_njb7ckz', form.current, 'lPrP72xsQaNQ8fAhe')
          .then((result) => {
                setStatus(
                    {
                        success: true, 
                        message: "Message was sent successfully."
                    }
                )
          }, (error) => {
            setStatus(
                {
                    success: false, 
                    message: `${error.text} happened`
                }
            )
          });

          setFormDetails(initialFormDetails);
      };
    
    return(
        <section className="contact" id="contact">
            <Container>
                <Row className="align-item-center">
                    <Col md={6}>
                        <img src={foxImg} alt="Contact Me"/>
                    </Col>
                    <Col md={6}>
                        <h2>Contact Me</h2>
                        <form ref={form} onSubmit={handleSubmit}>
                            <Row>
                                <Col sm={6} className="px-1">
                                    <input
                                    type="text" 
                                    name="firstName"
                                    value={formDetails.firstName}
                                    placeHolder="First Name"
                                    onChange={handleChange}
                                    />     
                                </Col>
                                <Col sm={6} className="px-1">
                                    <input 
                                        type="text" 
                                        name="lastName"
                                        value={formDetails.lastName}
                                        placeHolder="Last Name"
                                        onChange={handleChange}
                                    />
                                </Col>
                                <Col sm={6} className="px-1">
                                    <input
                                        type="text" 
                                        name="email"
                                        value={formDetails.email}
                                        placeHolder="Email"
                                        onChange={handleChange}
                                    />
                                </Col>
                                <Col sm={6} className="px-1">
                                    <input
                                        type="text" 
                                        name="phone"
                                        value={formDetails.phone}
                                        placeHolder="Phone"
                                        onChange={handleChange}
                                    />
                                </Col>
                                <Col>
                                    <textarea
                                        row="6"
                                        name="message"
                                        value={formDetails.message}
                                        placeholder="Leave comment/message here"
                                        onChange={handleChange}
                                    />
                                    {
                                        status.message && 
                                        <Row>
                                            <p className={status.success ?  "failed" : "success"}>{status.message}</p>
                                        </Row>
                                    }
                                    <button><span>Send</span></button>
                                </Col>
                            </Row>
                        </form>
                    </Col>
                </Row>
            </Container>
        </section>
    )
}

export default Contact;