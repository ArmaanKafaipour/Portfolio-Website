import { useState, useRef } from "react";
import emailjs from "emailjs-com";
import ReCAPTCHA from "react-google-recaptcha";

import "./contact.scss";
import { SettingsBackupRestoreRounded } from "@material-ui/icons";

export default function Contact() {
  const [message, setMessage] = useState(false);
  const [token, setToken] = useState("");
  const [error, setError] = useState("");

  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    if (!token) {
      setError("You must complete the CAPTCHA");
      console.log(error);
      return;
    }
    setError("");

    //error checking to make sure email is inputted correctly

    setMessage(true);

    emailjs
      .sendForm(
        "gmail",
        "template_2gyf9wj",
        form.current,
        "user_mHWooEBID0cHZSSlc9NUl"
      )
      .then(
        (result) => {
          console.log(result.text);
        },
        (error) => {
          console.log(error.text);
        }
      );
    e.target.reset();
  };

  return (
    <div className="contact" id="contact">
      <div className="left">
        <h2>Contact Me</h2>
        <form ref={form} onSubmit={sendEmail}>
          <input type="text" placeholder="Name" name="name" />
          <input type="email" placeholder="Email" name="email" />
          <input type="text" placeholder="Subject" name="subject" />
          <textarea placeholder="Message" name="message"></textarea>
          <button type="submit">Send Message</button>
          {message && <span>Thanks, I'll reply ASAP :)</span>}
        </form>

        <div className="captcha">
          <ReCAPTCHA
            sitekey="6Le1v5gcAAAAALK-N_o39_YScAffUZ5oVK4NeNWB"
            onChange={(token) => setToken(token)}
            onExpired={(e) => setToken("")}
            theme="dark"
          />
          {error && <span> {error} </span>}
        </div>
      </div>
      <div className="right">
        <img src="assets/shake.svg" alt="" />
      </div>
    </div>
  );
}
