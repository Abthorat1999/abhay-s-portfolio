import { useState } from "react";
import axios from "axios";

export default function ContactMe() {
  const [name, setName] = useState("");
  const [lastName, setLastName] = useState("");
  const [email, setEmail] = useState("");
  const [phoneNumber, setPhoneNumber] = useState("");
  const [choseTopic, setChoseTopic] = useState("");
  const [message, setMessage] = useState("");
  const [submitting, setSubmitting] = useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault();
    setSubmitting(true);

    const data = {
      name: name,
      lastName: lastName,
      email: email,
      phoneNumber: phoneNumber,
      choseTopic: choseTopic
    };

    try {
      const response = await axios.post("https://portfoliodata.onrender.com/api/FormData", data, {
        headers: {
          "Content-Type": "application/json",
          'Access-Control-Allow-Origin': '*'
        }
      });

      console.log("Request Body:",JSON.stringify(data));
      console.log(response.data);
      alert('Form submitted successfully!');
      setName("");
      setLastName("");
      setEmail("");
      setPhoneNumber("");
      setChoseTopic("");
      setMessage("");
    } catch (error) {
      console.error('Error submitting form:', error);
    }finally {
      setSubmitting(false);
    }
  };

  return (
    <section id="Contact" className="contact--section">
      <div>
        <p className="sub--title">Get In Touch</p>
        <h2>Contact Me</h2>
        <p className="text-lg">
          Connect with Me Today for Inquiries, Collaborations, or Just to Say Hello!
        </p>
      </div>
      <form className="formD" onSubmit={handleSubmit} autoComplete="off">
        <div className="container">
          <label className="contact--label">
            <span className="text-md">First Name</span>
            <input
              type="text"
              className="contact--input text-md"
              name="name"
              id="first-name"
              autoComplete="off"
              required
              value={name}
              onChange={(e) => setName(e.target.value)}
            />
          </label>
          <label className="contact--label">
            <span className="text-md">Last Name</span>
            <input
              type="text"
              className="contact--input text-md"
              name="lastName"
              id="last-name"
              autoComplete="off"
              required
              onChange={(e) => setLastName(e.target.value)}
              value={lastName}
            />
          </label>
          <label className="contact--label">
            <span className="text-md">Email</span>
            <input
              type="email"
              className="contact--input text-md"
              name="email"
              id="email"
              autoComplete="off"
              required
              onChange={(e) => setEmail(e.target.value)}
              value={email}
            />
          </label>
          <label className="contact--label">
            <span className="text-md">Phone Number</span>
            <input
              type="tel"
              className="contact--input text-md"
              name="phoneNumber"
              id="phoneNumber"
              autoComplete="off"
              required
              onChange={(e) => setPhoneNumber(e.target.value)}
              value={phoneNumber}
            />
          </label>
        </div>
        <label className="contact--label">
          <span className="text-md">Choose a Topic</span>
          <select
            id="choose-topic"
            name="choseTopic"
            className="contact--input text-md"
            onChange={(e) => setChoseTopic(e.target.value)}
            value={choseTopic}
          >
            <option>Select One...</option>
            <option>Personal</option>
            <option>Work Related</option>
            <option>Other</option>
          </select>
        </label>
        <label className="contact--label">
          <span className="text-md">Message</span>
          <textarea
            className="contact--input text-md"
            id="message"
            name="message"
            rows="8"
            placeholder="Type your message..."
            autoComplete="off"
            onChange={(e) => setMessage(e.target.value)}
            value={message}
          />
        </label>
        <div>
          <button
            type="submit"
            className="btn btn-primary contact--form--btn"
          >
            Submit
          </button>
        </div>
      </form>
    </section>
  );
};
