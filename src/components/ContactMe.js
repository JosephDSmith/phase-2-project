function ContactMe() {
  return (
    <div className="contact-me" id="contact-me">
      <h3>You can find me on</h3>
      <div className="contact-me-links">
        <a href="https://github.com/JosephDSmith" target="_blank" rel="noreferrer">
          <i className="fa-brands fa-github"></i>
        </a>
        <a
          href="https://www.linkedin.com/in/joseph-d-smith-692522264/"
          target="_blank" rel="noreferrer"
        >
          <i className="fa-brands fa-linkedin"></i>
        </a>
        <a href="https://medium.com/@joesmith40" target="_blank" rel="noreferrer">
          <i className="fa-brands fa-medium"></i>
        </a>
        <a href="mailto:joesmith40@gmail.com">
          <i className="fa-solid fa-envelope"></i>
        </a>
      </div>
    </div>
  );
}

export default ContactMe;
