import React from 'react';
import { Container, Button } from 'react-bootstrap';
import { Link } from 'react-router-dom';

const Home = () => {
    return (
        <Container className="home-page text-center">
            <h1>Welcome to Vendor Connects</h1>
            <p>
                Find the perfect vendor for your property management needs. Easily
                search by area and type of vendor.
            </p>
            <Button as={Link} to="/about" variant="primary" className="mx-2">
                Learn More
            </Button>
            <Button as={Link} to="/contact" variant="success" className="mx-2">
                Contact Us
            </Button>
        </Container>
    );
};

export default Home;
