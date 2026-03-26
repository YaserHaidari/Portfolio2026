import React, { useState } from "react";
import { Helmet, HelmetProvider } from "react-helmet-async";
import { Container, Row, Col, Alert } from "react-bootstrap";

export const Camspot = () => {
    const obj = [
        {
            name: "CAP",
            url: 'https://s3.ap-southeast-2.amazonaws.com/portfolio.files/camspot/Screenshot+2024-05-06+at+8.14.19%E2%80%AFPM.png',
            type: 'image'
        },
        {
            name: 'CAP',
            url: 'https://s3.ap-southeast-2.amazonaws.com/portfolio.files/camspot/Screenshot+2024-05-06+at+8.14.27%E2%80%AFPM.png',
            type: 'image'
        },
        {
            name: 'CAP',
            url: 'https://s3.ap-southeast-2.amazonaws.com/portfolio.files/camspot/Screenshot+2024-05-06+at+8.14.38%E2%80%AFPM.png',
            type: 'image'
        },
        {
            name: 'CAP',
            url: 'https://s3.ap-southeast-2.amazonaws.com/portfolio.files/camspot/Screenshot+2024-05-06+at+8.14.57%E2%80%AFPM.png',
            type: 'image'
        }
    ];

    return (
        <HelmetProvider>
            <Helmet>
    <title>CAP Project</title>
</Helmet>
<Container>
    <Row>
        <Col xs={12}>
            
        <h1>Camspot - 2025</h1>
<h5>Camspot was built for one of my units at Swinburne as a software solution</h5>
<p>The inspiration for this project came to me after i got a speeding ticket from a phone camera so I decided to make a website using Vue Js framework and PHP with MySQL as backend to show all available cameras in Victoria.</p>
<p>On campsot users can look for reported cameras and see how many people reported it. In addition to that users can report camera from whereever their location is with a press of button and using Google geolocation the website gets user's coordinates and they are turned into location format and transferred to my database.</p>
<div style={{ display: 'flex', flexDirection: 'row', justifyContent: 'center', flexWrap: 'wrap' }}>
                {obj.map((item, index) => {
                    console.log(item.url);
                    return item.type === 'image' ? (
                        <img key={index} style={{ margin: 10 }} src={item.url} alt={item.name} width={"50%"} height={250} />
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