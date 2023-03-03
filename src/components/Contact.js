import { useState } from "react"
import { Col, Container, Row } from "react-bootstrap"
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
    const [buttonText, setButtonText] = useState("Send");
    const [status, setStatus] = useState({});

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

    async function handleSubmit(event)
    {
        event.preventDefault();
        setButtonText("Sending...");
        let res = await fetch("http://localhost:3000/contact", {
            method: "POST",
            headers: {
                "Content-Type": "application/json;charset=utf-8",
            },
            body: JSON.stringify(formDetails),
        });
        setButtonText("Send");
        let data = await res.json();
        setFormDetails(initialFormDetails);
        if (data.code === 200) {
            setStatus({succes: true, message: 'Message sent successfully'});
        } else {
            setStatus({succes: false, message: 'Something went wrong, please try again later.'});
        }
    }

    return(
        <section className="contact" id="contact">
            <Container>
                <Row className="align-item-center">
                    <Col md={6}>
                        <img src={foxImg} alt="Contact Me"/>
                    </Col>
                    <Col md={6}>
                        <h2>Contact Me</h2>
                        <form onSubmit={handleSubmit}>
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
                                    <button><span>{buttonText}</span></button>
                                </Col>
                                {
                                    status.message && 
                                    <Col>
                                        <p className={status.success ? "failed" : "success"}>{status.message}</p>
                                    </Col>
                                }
                            </Row>
                        </form>
                    </Col>
                </Row>
            </Container>
        </section>
    )
}

export default Contact;