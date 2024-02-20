export default function HeroSection() {
  return (
    <section id="heroSection" className="hero--section">
      <div className="hero--section--content--box">
        <div className="hero--section--content">
          <p className="section--title">Hey, I'm Abhay</p>
          <h1 className="hero--section--title">
            <span className="hero--section-title--color">
              FrontEnd | Angular | React 
            </span>{" "}
            <br />
            Developer
          </h1>
          <p className="hero--section-description">
          "Full-stack developer skilled in JavaScript, TypeScript, HTML, CSS, Node.js, Core Java, MySQL, MongoDB. Expertise in API handling. Committed to crafting efficient, scalable solutions with a focus on quality and innovation."
            <br /> 
          </p>
        </div>
        <button className="btn btn-primary">Download Resume</button>
      </div>
      <div className="hero--section--img">
        <img src="./img/about-me.jpg" alt="Hero Section" />
      </div>
    </section>
  );
}
