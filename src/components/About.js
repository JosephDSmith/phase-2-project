import { Link, Outlet } from "react-router-dom";

function About() {
  return (
    <div>
      <p>You can view my bonsai collection, or add your own bonsai!</p>
      <Link to="/about/contactme">Click Here to Contact Me!</Link>
      <Link to="/about/FAQs">FAQs</Link>
      <Outlet />
    </div>
  );
}

export default About;
