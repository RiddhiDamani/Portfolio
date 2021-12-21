import React from "react";
import Typed from "react-typed";

const Header = () => {
  return (
    <div id="home" className="header-wraper">
      <div className="main-info">
        <h1>Hello, I'm Riddhi Damani</h1>
        <Typed
          className="typed-text"
          typeSpeed={40}
          backSpeed={50}
          loop
          strings={[
            "User Interface Developer",
            "Full Stack Developer",
            "Android App Developer",
            "UX Designer",
          ]}
        />
        <a href="/#" className="btn-main-offer">
          Contact Me
        </a>
      </div>
    </div>
  );
};

export default Header;
