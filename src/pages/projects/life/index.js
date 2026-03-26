import React, { useState } from "react";
import { Helmet, HelmetProvider } from "react-helmet-async";
import { Container, Row, Col } from "react-bootstrap";
import './styles.css'; // Assuming you have a Music.css file for custom styles

export const Life = () => {
    return (
        <HelmetProvider>
            <Helmet>
                <title>Cap Project</title>
            </Helmet>
            <Container>
                <Row>
                    <Col xs={12}>
                        <div className="timeline">
                            <div className="timeline-item">
                                <div className="timeline-content">
                                    <h4>2018</h4>
                                    <p>School captain</p>
                                </div>
                            </div>
                            <div className="timeline-item">
                                <div className="timeline-content">
                                    <h4>2019</h4>
                                    <p>Achieved Google Code-in certificate</p>
                                </div>
                            </div>
                            <div className="timeline-item">
                                <div className="timeline-content">
                                    <h4>2020</h4>
                                    <p>Got Australian Citizenship</p>
                                </div>
                            </div>
                            <div className="timeline-item">
                                <div className="timeline-content">
                                    <h4>2020</h4>
                                    <p>Hired at KFC</p>
                                </div>
                            </div>
                            <div className="timeline-item">
                                <div className="timeline-content">
                                    <h4>2022</h4>
                                    <p>Became a manager at KFC</p>
                                </div>
                            </div>
                            <div className="timeline-item">
                                <div className="timeline-content">
                                    <h4>2022</h4>
                                    <p>Graduated from Cranbourne East Secondary College</p>
                                </div>
                            </div>
                            <div className="timeline-item">
                                <div className="timeline-content">
                                    <h4>2023</h4>
                                    <p>Deployed my first website for a client</p>
                                </div>
                            </div>
                            <div className="timeline-item">
                                <div className="timeline-content">
                                    <h4>2023</h4>
                                    <p>Started Bachelor of Computer Science at Swinburne University of Technology</p>
                                </div>
                            </div>
                            <div className="timeline-item">
                                <div className="timeline-content">
                                    <h4>2023</h4>
                                    <p>Became full time Restaurant Manager at KFC</p>
                                </div>
                            </div>
                            <div className="timeline-item">
                                <div className="timeline-content">
                                    <h4>2024</h4>
                                    <p>Hired at Optus as Sales Consultant</p>
                                </div>
                            </div>
                            <div className="timeline-item">
                                <div className="timeline-content">
                                    <h4>2025</h4>
                                    <p>Finished Capstone Project for a client</p>
                                </div>
                            </div>
                            <div className="timeline-item">
                                <div className="timeline-content">
                                    <h4>March 2026</h4>
                                    <p>Graduate from University</p>
                                </div>
                            </div>
                            <div className="timeline-item">
                                <div className="timeline-content">
                                    <h4>Present</h4>
                                    <p>Building website for local businesses for free to build my portfolio</p>
                                </div>
                            </div>
                        </div>
                    </Col>
                </Row>
            </Container>
        </HelmetProvider>
    );
};