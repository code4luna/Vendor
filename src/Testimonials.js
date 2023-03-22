import React from 'react';
import { Container, Card, Row, Col } from 'react-bootstrap';

const Testimonials = () => {
    const testimonials = [
        {
            id: 1,
            name: 'John Doe',
            role: 'Vendor',
            quote:
                'This platform has helped me connect with property management companies and grow my business. I am extremely satisfied with the service provided by Multi-family Vendor Database.',
        },
        {
            id: 2,
            name: 'Jane Smith',
            role: 'Property Manager',
            quote:
                'The Multi-family Vendor Database has been a great resource for finding reliable vendors for our properties. The easy search functionality saves us time and effort.',
        },
    ];

    return (
        <Container className="testimonials-page">
            <h1>Testimonials</h1>
            <p>Read what our users have to say about our platform:</p>

            <Row>
                {testimonials.map((testimonial) => (
                    <Col md={6} key={testimonial.id} className="mb-4">
                        <Card>
                            <Card.Body>
                                <Card.Title>{testimonial.name}</Card.Title>
                                <Card.Subtitle className="mb-2 text-muted">
                                    {testimonial.role}
                                </Card.Subtitle>
                                <Card.Text>{testimonial.quote}</Card.Text>
                            </Card.Body>
                        </Card>
                    </Col>
                ))}
            </Row>
        </Container>
    );
};

export default Testimonials;
