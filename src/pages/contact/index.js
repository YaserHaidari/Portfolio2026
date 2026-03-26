import React, { useState } from "react";
import { Helmet, HelmetProvider } from "react-helmet-async";
import { Container, Row, Col, Alert } from "react-bootstrap";
import { contactConfig } from "../../content_option";
import "./style.css";

export const ContactUs = () => {
  const [formData, setFormdata] = useState({
    email: "",
    name: "",
    message: "",
    base64Data: "",
    loading: false,
    show: false,
    alertmessage: "",
    variant: "",
  });

  const handleSubmit = async (e) => {
    e.preventDefault();
    setFormdata({ ...formData, loading: true });

    const templateParams = {
      name: formData.name,
      email: formData.email,
      message: formData.message,
      base64Data: formData.base64Data,
      date: new Date(),
      fileName: "TEST_FILE_NAME",
    };

    try {
      const response = await fetch('https://2zp0d15p9k.execute-api.ap-southeast-2.amazonaws.com/contact', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          'Accept': 'application/json',
        },
        body: JSON.stringify(templateParams),
      });

      if (!response.ok) {
        const errorText = await response.text();
        throw new Error(`Network response was not ok: ${errorText}`);
      }

      const result = await response.json();
      setFormdata({
        ...formData,
        loading: false,
        alertmessage: "SUCCESS! Thank you for your message",
        variant: "success",
        show: true,
      });
    } catch (error) {
      setFormdata({
        ...formData,
        loading: false,
        alertmessage: `Error: ${error.message}`,
        variant: "danger",
        show: true,
      });
    }
  };

  const handleChange = (e) => {
    setFormdata({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleFileChange = (e) => {
    const file = e.target.files[0];
    getBase64(file);
  };

  const getBase64 = (file) => {
    let reader = new FileReader();
    reader.readAsDataURL(file);
    reader.onload = () => {
      setFormdata({
        ...formData,
        base64Data: reader.result.replace("data:application/pdf;base64,", ""),
      });
    };
  };

  return (
    <HelmetProvider>
      <Container>
        <Helmet>
          <meta charSet="utf-8" />
          <title>Contact</title>
          <meta name="description" content="Contact page" />
        </Helmet>
        <Row className="mb-5 mt-3 pt-md-3">
          <Col lg="8">
            <h1 className="display-4 mb-4">Contact Me</h1>
            <hr className="t_border my-4 ml-0 text-left" />
          </Col>
        </Row>
        <Row className="sec_sp">
          <Col lg="12">
            <Alert
              variant={formData.variant}
              className={`rounded-0 co_alert ${formData.show ? "d-block" : "d-none"}`}
              onClose={() => setFormdata({ ...formData, show: false })}
              dismissible
            >
              <p className="my-0">{formData.alertmessage}</p>
            </Alert>
          </Col>
          <Col lg="5" className="mb-5">
            <h3 className="color_sec py-4">Get in touch</h3>
            <address>
              <strong>Email:</strong>{" "}
              <a href={`mailto:${contactConfig.YOUR_EMAIL}`}>
                {contactConfig.YOUR_EMAIL}
              </a>
              <br />
              <br />
              {contactConfig.hasOwnProperty("YOUR_FONE") ? (
                <p>
                  <strong>Phone:</strong> {contactConfig.YOUR_FONE}
                </p>
              ) : (
                ""
              )}
            </address>
            <p>{contactConfig.description}</p>
            </Col>
            </Row>
      </Container>
      <div className={formData.loading ? "loading-bar" : "d-none"}></div>
    </HelmetProvider>
  );
};