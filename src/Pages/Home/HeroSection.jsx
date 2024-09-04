

const resumeURL = "/Abhay_Thorat_resume"

export default function HeroSection() {
  const downloadFileAtURL =(url)=>{
    const fileName = url.split("/").pop()
    const aTag = document.createElement('a')
    aTag.href=url
    aTag.setAttribute('download',fileName)
    document.body.appendChild(aTag);
    aTag.click();
    aTag.remove();
  }
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
        <button className="btn btn-primary" onClick={()=>{downloadFileAtURL(resumeURL)}}>Download Resume</button>
      </div>
      <div className="hero--section--img">
        <img src="./img/about-me.jpg" alt="Hero Section" />
      </div>
    </section>
  );
}
