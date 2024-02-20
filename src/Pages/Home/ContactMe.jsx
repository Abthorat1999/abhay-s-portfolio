export default function ContactMe() {
  function Submit(e) {
    const formEle = document.querySelector("contact--form--container");
    const formDatab = new FormData(formEle);
    console.log("submitted");
    // fetch(
    //   "https://script.google.com/macros/s/AKfycbxlZ1MQ13O7JWRrReXtbL5QsjwdOM29NlhL3aK3QIocZu62tvU6Wwz68SqJY4NH-sst/exec",
    //   {
    //     method: "POST",
    //     body: formDatab
    //   }
    // )
      // .then((res) => res.json())
      // .then((data) => {
      //   console.log(data);
      // })
      // .catch((error) => {
      //   console.log(error);
      // });
  }
  return (
    <section id="Contact" className="contact--section">
      <div>
        <p className="sub--title">Get In Touch</p>
        <h2>Contact Me</h2>
        <p className="text-lg">
          Lorem ipsum dolor, sit amet consectetur adipisicing elit. In, odit.
        </p>
      </div>
      <form className="contact--form--container"  onSubmit={(e) => Submit(e)}>
        <div className="container">
          <label htmlFor="first-name" className="contact--label">
            <span className="text-md">First Name</span>
            <input
              type="text"
              className="contact--input text-md"
              name="firstName"
              id="first-name"
              required
            />
          </label>
          <label htmlFor="last-name" className="contact--label">
            <span className="text-md">Last Name</span>
            <input
              type="text"
              className="contact--input text-md"
              name="lastName"
              id="last-name"
              required
            />
          </label>
          <label htmlFor="email" className="contact--label">
            <span className="text-md">Email</span>
            <input
              type="email"
              className="contact--input text-md"
              name="email"
              id="email"
              required
            />
          </label>
          <label htmlFor="phone-number" className="contact--label">
            <span className="text-md">phone-number</span>
            <input
              type="number"
              className="contact--input text-md"
              name="phone-number"
              id="phoneNumber"
              required
            />
          </label>
        </div>
        <label htmlFor="choode-topic" className="contact--label">
          <span className="text-md">Choose a topic</span>
          <select id="choose-topic" name="choseTopic" className="contact--input text-md">
            <option>Select One...</option>
            <option>Personal</option>
            <option>Work Related</option>
            <option>other</option>
          </select>
        </label>
        <label htmlFor="message" className="contact--label">
          <span className="text-md">Message</span>
          <textarea
            className="contact--input text-md"
            id="message"
            rows="8"
            placeholder="Type your message..."
          />
        </label>
        {/* <label htmlFor="checkboc" className="checkbox--label">
          <input type="checkbox" required name="checkbox" id="checkbox" />
          <span className="text-sm">I accept the terms</span>
        </label> */}
        <div>
          <button type="submit" className="btn btn-primary contact--form--btn">Submit</button>
        </div>
      </form>
    </section>
  );
}
