import React from "react";
import Typed from "react-typed";
import Pdf from "../Riddhi_Damani_CV.pdf";

const Header = () => {
  return (
    <div id="home" className="header-wraper">
      <div className="main-info">
        <h1>Hello, I'm Riddhi Damani</h1>
        <Typed
          className="typed-text"
          typeSpeed={80}
          backSpeed={50}
          loop
          strings={[
            "User Interface Developer",
            "Full Stack Developer",
            "Android App Developer",
            "UX Designer",
          ]}
        />
        <a
          href={Pdf}
          target="_blank"
          without
          rel="noopener noreferrer"
          className="btn-main-offer"
        >
          Download My Resume
        </a>
      </div>
    </div>
  );
};

export default Header;
