import React, { useState } from "react";
import { Helmet, HelmetProvider } from "react-helmet-async";
import { Container, Row, Col, Alert } from "react-bootstrap";

export const Music = () => {
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
        <p>A personal music app was developed out of a necessity when I struggled to afford Spotify. I wanted to enjoy my favorite music without being tied to a subscription or needing an internet connection. So, I created this app to download and listen to music offline.</p>  
<p>The app was built using React Native, leveraging its ability to create a smooth, cross-platform experience for both iOS and Android devices. This ensured that I could enjoy my music on whichever device I had on hand.</p>  
<p>The main feature of the app was its ability to listen to my favorite music offline from whenever i wanted for abosuletly free without worrying about data usage or streaming costs.</p>  
<p>The app was more than just a solution; it became a valuable tool that allowed me to enjoy music freely, tailored specifically to my needs and preferences.</p>
        </Col>
    </Row>
</Container>
        </HelmetProvider>
    );
};