import { useState } from "react";
import mailIcon from "../../assets/mail_icon.svg";
import locationIcon from "../../assets/location_icon.svg";
import callIcon from "../../assets/call_icon.svg";
import themePattern from "../../assets/theme_pattern.svg";
import "./Contact.css";

const Contact = () => {

  const [result, setResult] = useState("");

  const onSubmit = async (event) => {
    event.preventDefault();
    setResult("Sending....");
    const formData = new FormData(event.target);

    formData.append("access_key", "084c5174-fa06-4200-8d0d-583f0b706ab9");

    const response = await fetch("https://api.web3forms.com/submit", {
      method: "POST",
      body: formData
    });

    const data = await response.json();

    if (data.success) {
      setResult("Form Submitted Successfully");
      alert("Email sent successfully.");
      event.target.reset();
    } else {
      console.log("Error", data);
      setResult(data.message);
    }
  };

  return (
    <div id="contact" className="contact">
      <div className="contact-title">
        <h1>Get in touch</h1>
        <img src={themePattern} alt="" />
      </div>
      <div className="contact-section">
        <div className="contact-left">
          <h1>Let's Talk</h1>
          <p>
            I am currently available to take on new projects, so feel free to
            contact me.
          </p>
          <div className="contact-details">
            <div className="contact-detail">
              <img src={mailIcon} alt="" />
              <p>suhasnag7@gmail.com</p>
            </div>
            <div className="contact-detail">
              <img src={locationIcon} alt="" />
              <p>Bangalore, Karnataka.</p>
            </div>
            <div className="contact-detail">
              <img src={callIcon} alt="" />
              <p>+91 8884978889</p>
            </div>
          </div>
        </div>
        <form onSubmit={onSubmit} className="contact-right">
          <label htmlFor="">Your Name</label>
          <input type="text" placeholder="Enter Your Name" name="name" />
          <label htmlFor="">Your EMail</label>
          <input type="email" placeholder="Enter your email" name="email" />
          <label htmlFor="">Write your message here</label>
          <textarea
            name="message"
            id="meaaage"
            rows={8}
            placeholder="Enter your Message"
          />
          <button type="submit" className="contact-submit">
            Submit Now
          </button>
        </form>
      </div>
    </div>
  );
};

export default Contact;
