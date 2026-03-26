import React, { useState } from "react";
import { Helmet, HelmetProvider } from "react-helmet-async";
import { Container, Row, Col, Alert } from "react-bootstrap";

export const Cmc = () => {
    const obj = [
        {
            name: "CMC Screenshot 1",
            url: 'https://s3.ap-southeast-2.amazonaws.com/portfolio.files/cmc/cmc1.png',
            type: 'image'
        },
        {
            name: "CMC Screenshot 2",
            url: 'https://s3.ap-southeast-2.amazonaws.com/portfolio.files/cmc/cmc2.png',
            type: 'image'
        },
        {
            name: "CMC Screenshot 3",
            url: 'https://s3.ap-southeast-2.amazonaws.com/portfolio.files/cmc/cmc3.png',
            type: 'image'
        },
        {
            name: 'CMC Demo',
            url: 'https://s3.ap-southeast-2.amazonaws.com/portfolio.files/cmc/cmc-demo.mp4',
            type: 'video'
        }
    ];

    return (
        <HelmetProvider>
            <Helmet>
                <title>CMC Project</title>
            </Helmet>
            <Container>
                <Row>
                    <Col xs={12}>
                        <h1>Cyberfleet: Coffee Meets Careers (CMC) - 2026</h1>
                        <h5><strong>CMC</strong> is a cross-platform mobile app connecting industry professionals with university students for mentorship in Cyber Security.</h5>

                        <h2>Motivation behind the app</h2>
                        <p>Cyberfleet: Coffee Meets Careers (CMC) was created to bridge the gap between tertiary education and the requirements of the cybersecurity industry. Our mission is to connect university students with experienced industry professionals, providing them with an opportunity to learn through mentorships and career insights from industry experience. By supporting these connections, Cyberfleet aims to empower the next generation of cybersecurity talents to transition from academic learning to the professional industry.</p>

                        <h2>Features</h2>
                        <p>Cross-platform Mobile App with React Native and Expo</p>
                        <p>Support Australian Users Only (IP geolocation)</p>
                        <p>Account Registration and Secure Authentication</p>
                        <p>Mentor Matching Algorithm</p>
                        <p>User Profile Management</p>
                        <p>Messaging and Communication</p>
                        <p>Real-Time Notifications</p>

                        <h2>Technical stacks</h2>
                        <ol>
                            <li>React Native & Expo</li>
                            <li>Supabase (Database, Auth APIs)</li>
                            <li>Firebase (Authentication, App Services)</li>
                            <li>AWS S3 (Cloud Storage)</li>
                            <li>NativeWind (UI library)</li>
                            <li>React Navigation</li>
                        </ol>
                    </Col>
                </Row>
            </Container>
        </HelmetProvider>
    );
};