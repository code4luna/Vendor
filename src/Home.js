import React from 'react';
import { Button, Container, Row, Col } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import styles from './Home.module.css';


const Home = () => {
    return (
        <div>
            <Container
                fluid
                className={`${styles.customBackground} py-5 mb-4`}
                style={{ minHeight: '50vh' }}
            >
                <h1>Welcome to Vendor Connects!</h1>
                <p>
                    Your one-stop solution for connecting property managers and vendors in
                    the multi-family industry.
                </p>
                <p>
                    <Button variant="light" as={Link} to="/vendor-database">
                        Search our Vendor Database
                    </Button>
                </p>
            </Container>

            <Container>
                <Row className="mb-4">
                    <Col>
                        <h2>About Us</h2>
                        <p>
                            Vendor Connects is a platform designed to bridge the gap between
                            property management companies and vendors in the multi-family
                            industry. Our goal is to make it easy for property managers to
                            find reliable vendors and for vendors to showcase their services
                            and connect with potential clients.
                        </p>
                    </Col>
                </Row>

                <Row className="mb-4">
                    <Col>
                        <h2>Benefits for Property Managers</h2>
                        <ul>
                            <li>Access to a wide range of qualified vendors</li>
                            <li>Search and filter vendors by area and services</li>
                            <li>Save time and effort in finding the right vendors</li>
                            <li>Read reviews from other property managers</li>
                        </ul>
                    </Col>
                    <Col>
                        <h2>Benefits for Vendors</h2>
                        <ul>
                            <li>Expand your client base</li>
                            <li>Showcase your services and expertise</li>
                            <li>Connect with property managers in your area</li>
                            <li>Receive feedback and testimonials from clients</li>
                        </ul>
                    </Col>
                </Row>

                <Row>
                    <Col>
                        <h2>Get Started</h2>
                        <p>
                            Are you a property manager looking for reliable vendors?{' '}
                            <Link to="/vendor-database">Search our database</Link>.
                        </p>
                        <p>
                            Are you a vendor interested in joining our platform?{' '}
                            <Link to="/contact">Contact us</Link> to get started.
                        </p>
                    </Col>
                </Row>
            </Container>
        </div>
    );
};

export default Home;
