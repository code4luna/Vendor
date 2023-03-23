import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';

const Footer = () => {
    return (
        <footer className="bg-light py-3">
            <Container>
                <Row>
                    <Col>
                        <h5>Contact Information</h5>
                        <p>
                            VendorConnect<br />
                            123 Main St.<br />
                            Suite 100<br />
                            Anytown, USA 12345<br />
                            Phone: (555) 123-4567<br />
                            Email: support@vendorconnect.com
                        </p>
                    </Col>
                </Row>
            </Container>
        </footer>
    );
};

export default Footer;
