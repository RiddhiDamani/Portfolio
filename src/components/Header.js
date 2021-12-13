import React from "react";
import Typed from "react-typed";

const Header = () => {
  return (
    <div className="header-wraper">
      <div className="main-info">
        <h1>Web Development</h1>
        <Typed
          className="typed-text"
          strings={[
            "Web Design",
            "Web Development",
            "UI Developer",
            "Full Stack",
          ]}
        />
      </div>
    </div>
  );
};

export default Header;
