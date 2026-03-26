import React, { useState } from "react";
import { Helmet, HelmetProvider } from "react-helmet-async";
import { Container, Row, Col, Alert } from "react-bootstrap";

export const Safelife = () => {
  const obj = [
    {
      name: "Aerial photography",
      url: "https://s3.ap-southeast-2.amazonaws.com/portfolio.files/safelife/IMG_6127.PNG",
      type: "image",
    },
    {
      name: "Cap",
      url: "https://s3.ap-southeast-2.amazonaws.com/portfolio.files/safelife/IMG_6165.PNG",
      type: "image",
    },
    {
      name: "Cap",
      url: "https://s3.ap-southeast-2.amazonaws.com/portfolio.files/safelife/IMG_6166.PNG",
      type: "image",
    },
    {
      name: "Cap",
      url: "https://s3.ap-southeast-2.amazonaws.com/portfolio.files/safelife/IMG_6167.PNG",
      type: "image",
    },
    {
      name: "Cap",
      url: "https://s3.ap-southeast-2.amazonaws.com/portfolio.files/safelife/IMG_6168.PNG",
      type: "image",
    },
    {
      name: "Cap",
      url: "https://s3.ap-southeast-2.amazonaws.com/portfolio.files/safelife/IMG_6169.PNG",
      type: "image",
    },
    {
      name: "Cap",
      url: "https://s3.ap-southeast-2.amazonaws.com/portfolio.files/safelife/IMG_6172.PNG",
      type: "image",
    },
    {
      name: "Cap",
      url: "https://s3.ap-southeast-2.amazonaws.com/portfolio.files/safelife/IMG_6173.PNG",
      type: "image",
    },
  ];

  return (
    <HelmetProvider>
      <Helmet>
        <title>Cap Project</title>
      </Helmet>
      <Container>
        <Row>
          <Col xs={12}>
            <h1>Safe Life - 2020</h1>
            <h5>
              Safe Life is a COVID-19 response app designed to help users stay
              informed and safe during the pandemic through anonymous reporting
              and real-time notifications.
            </h5>
            <h2>Technical stacks</h2>
            <ol>
              <li>React Native</li>
              <li>Firebase for backend</li>
              <li>Native base - UI library</li>
              <li>Android studio for publication of the app on Google Play services</li>
              <li>Xcode for permissions and configurations on iOS</li>
            </ol>
            <h2>Features</h2>
            <ul>
              <li>Allow users to report COVID-19 cases</li>
              <li>
                All users with a certain radius gets an alert if a case has been
                reported
              </li>
              <li>
                All users to go through a series of challenge to entertain
                themselves during Lockdown period
              </li>
              <li>Allow users to view latest COVID related information</li>
            </ul>
            {" "}
            <div
              style={{
                display: "flex",
                flexDirection: "row",
                justifyContent: "center",
                flexWrap: "wrap",
              }}
            >
              {obj.map((item, index) => {
                console.log(item.url);
                return item.type === "image" ? (
                  <img
                    key={index}
                    style={{ margin: 10 }}
                    src={item.url}
                    alt={item.name}
                    width={150}
                    height={250}
                  />
                ) : (
                  <video
                    key={index}
                    style={{ margin: 10 }}
                    src={item.url}
                    alt={item.name}
                    width={150}
                    height={250}
                    controls
                  >
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
