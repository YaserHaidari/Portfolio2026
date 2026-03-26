import React, { useState } from "react";
import { Helmet, HelmetProvider } from "react-helmet-async";
import { Container, Row, Col, Alert } from "react-bootstrap";

export const Cap = () => {
    const obj = [
        {
            name: "Cap image",
            url: 'https://s3.ap-southeast-2.amazonaws.com/portfolio.files/Cap/unnamed.png',
            type: 'image'
        },
        {
            name: "Cap image",
            url: 'https://s3.ap-southeast-2.amazonaws.com/portfolio.files/Cap/Setting+(1).png',
            type: 'image'
        },
        {
            name: 'Cap image',
            url: 'https://s3.ap-southeast-2.amazonaws.com/portfolio.files/Cap/SHare+your+clipboard+with+friends+(2).png',
            type: 'image'
        }, 
        {
            name: 'Cap image',
            url: 'https://s3.ap-southeast-2.amazonaws.com/portfolio.files/Cap/AB4EE652-C9F0-42C3-B269-F6F13F08F1BC.MP4',
            type: 'video'
        }
    ];

    return (
        <HelmetProvider>
            <Helmet>
    <title>Cap Project</title>
</Helmet>
<Container>
    <Row>
        <Col xs={12}>
            <h1>CAP - Copy and Paste - 2023 </h1>
            <h5><strong>CAP</strong> was my first app on the App Store, allowing seamless data transfer between phones</h5>
            <h2>Motivation behind the app</h2>
            <p>I was using multiple devices including a MacBook, iPhone & android tablet and I was really struggling to transfer texts between them directly. This made me build this app where if I copy on one device, it would allow me to directly paste it in another device without needing to send a message or emails.</p>
            
            <h2>Features</h2>
            <p>Allow users to create accounts</p>
            <p>Allow users to copy and paste texts on multiple devices with click of a button</p>
            <p>Users can save links and share it</p>
            <p>Users can keep a history copied contents</p>

            <h2>Technical stacks</h2>
                <ol>
                <li>React Native</li>
                <li>Firebase for backend</li>
                <li>Native base - UI library</li>
                <li>Xcode for iOS permissions & app configurations</li>
                <li>App store connect to publish the app</li>
                </ol>
            <div style={{ display: 'flex', flexDirection: 'row', justifyContent: 'center', flexWrap: 'wrap' }}>
                {obj.map((item, index) => {
                    console.log(item.url);
                    return item.type === 'image' ? (
                        <img key={index} style={{ margin: 10 }} src={item.url} alt={item.name} width={150} height={250} />
                    ) : (
                        <video key={index} style={{ margin: 10 }} src={item.url} alt={item.name} width={150} height={250} controls>
                            <source src={item.url} type="video/mp4" />
                        </video>
                    );
                })}
            </div>
        </Col>
    </Row>
</Container>
        </HelmetProvider>
    );
};