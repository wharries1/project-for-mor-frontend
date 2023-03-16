import './ContactPage.css'
import React, { useState } from "react";
import ContactForm from "./ContactForm";
import { Typography } from "@mui/material";

const ContactPage = () => {
  return (
    <div className="contact-container">
      <Typography variant="h1" textAlign="center">
          <b>Contact Us</b>
        </Typography>
      <p>Please fill out the form below to get in touch with us.</p>
      <ContactForm />
    </div>
  );
};

export default ContactPage;
