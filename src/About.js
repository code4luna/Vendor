import React from 'react';
import { Container } from 'react-bootstrap';

const About = () => {
    return (
        <Container className="about-page">
            <div className="about-page">
                <h1>About Vendor Connects</h1>
                <p>
                    Vendor Connects is a platform that connects property management companies with reliable vendors, streamlining the process of finding and hiring qualified professionals for various tasks.
                </p>
                <h2>Benefits for Property Management Companies</h2>
                <ul>
                    <li>
                        <strong>Save time:</strong> Quickly find and connect with vendors in your area, reducing the time spent searching for the right service providers.
                    </li>
                    <li>
                        <strong>Improve quality:</strong> Access a curated list of vendors with a track record of providing quality services, ensuring a high standard for your property management needs.
                    </li>
                    <li>
                        <strong>Enhance communication:</strong> Easily manage communication with multiple vendors through our platform, keeping everything organized and transparent.
                    </li>
                    <li>
                        <strong>Streamline processes:</strong> From sending requests to managing payments, our platform simplifies the process of working with vendors, allowing you to focus on other aspects of property management.
                    </li>
                    <li>
                        <strong>Grow your network:</strong> Expand your network of trusted vendors and build long-lasting professional relationships that can benefit your business in the long run.
                    </li>
                </ul>
            </div>
        </Container>
    );
};

export default About;
