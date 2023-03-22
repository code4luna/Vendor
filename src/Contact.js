import React, { useState } from 'react';
import { Container, Form, Button, Card } from 'react-bootstrap';

const Contact = () => {
    const [formData, setFormData] = useState({
        name: '',
        email: '',
        area: '',
        type: '',
    });

    const handleChange = (e) => {
        setFormData({ ...formData, [e.target.name]: e.target.value });
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        // Submit form data to your API or process it according to your requirements
        console.log('Vendor sign-up data:', formData);
        setFormData({
            name: '',
            email: '',
            area: '',
            type: '',
        });
    };

    return (
        <Container className="contact-page">
            <h1>Contact Us</h1>
            <p>
                If you have any questions or concerns, please feel free to reach out to
                us. We're here to help.
            </p>

            <h1>Vendor Sign-up</h1>
            <p>
                If you are a vendor and would like to be added to our database, please
                fill out the form below.
            </p>


            <Card className="mb-4">
                <Card.Body>
                    <Form onSubmit={handleSubmit}>
                        <Form.Group className="mb-3">
                            <Form.Label htmlFor="businessName">Business Name:</Form.Label>
                            <Form.Control
                                type="text"
                                id="businessName"
                                name="businessName"
                                value={formData.businessName}
                                onChange={handleChange}
                                required
                            />
                        </Form.Group>

                        <Form.Group className="mb-3">
                            <Form.Label htmlFor="scopeOfWork">Scope of Work:</Form.Label>
                            <Form.Control
                                as="textarea"
                                id="scopeOfWork"
                                name="scopeOfWork"
                                value={formData.scopeOfWork}
                                onChange={handleChange}
                                required
                            />
                        </Form.Group>

                        <Form.Group className="mb-3">
                            <Form.Label htmlFor="location">Location:</Form.Label>
                            <Form.Control
                                type="text"
                                id="location"
                                name="location"
                                value={formData.location}
                                onChange={handleChange}
                                required
                            />
                        </Form.Group>

                        <Form.Group className="mb-3">
                            <Form.Label htmlFor="contactInfo">Contact Information:</Form.Label>
                            <Form.Control
                                type="text"
                                id="contactInfo"
                                name="contactInfo"
                                value={formData.contactInfo}
                                onChange={handleChange}
                                required
                            />
                        </Form.Group>

                        <Button variant="primary" type="submit">
                            Sign up
                        </Button>
                    </Form>
                </Card.Body>
            </Card>
        </Container>
    );
};

export default Contact;