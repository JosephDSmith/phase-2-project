import { Link, Outlet } from "react-router-dom";
import josephImg from "../images/joseph-image.png";

function About() {
  const scrollToBottom = () => {
    const bottomElement = document.getElementById("bottom");
    if (bottomElement) {
      bottomElement.scrollIntoView({ behavior: "smooth", block: "end" });
    }
  };

  return (
    <div className="about">
      <div className="bonsai-about">
        <div className="about-bonsai-text">
          <h2>About the art of Bonsai</h2>
          <p>
            Bonsai is an ancient Japanese practice of producing small trees in
            containers that take the shape of full-scale, mature trees over
            time. The word bonsai translates to "planted in a container." Any
            tree species can be used to grow one, but certain species lend
            themselves better to the practice than others.
          </p>
        </div>
        <div className="about-bonsai-image">
          <img
            src="https://img.freepik.com/premium-photo/bonsai-tree-isolated-white-background-with-clipping-path_313215-5931.jpg?w=1480"
            alt="bonsai"
          />
        </div>
      </div>
      <div className="me-about">
        <div className="about-me-image">
          <img src={josephImg} alt="me" />
        </div>
        <div className="about-me-text">
          <h2>About me</h2>
          <p>
            I'm an aspiring bonsai cultivator with a passion for all things
            green!
          </p>
          <p>You can view my bonsai collection - and add your own bonsai!</p>
        </div>
      </div>
      <div className="about-links">
        <Link to="/about/contactme" onClick={scrollToBottom}>
          Click Here to Contact Me!
        </Link>
        <Link to="/about/FAQs" onClick={scrollToBottom}>
          FAQs
        </Link>
      </div>
      <Outlet />
      <div id="bottom" style={{ paddingBottom: "30vh" }} />
    </div>
  );
}

export default About;
