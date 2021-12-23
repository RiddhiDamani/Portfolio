import React from "react";
import { SocialIcon } from "react-social-icons";

const Footer = () => {
  return (
    <div className="footer">
      <div className="container">
        <div className="row">
          <div className="col-lg-4 col-md-6 col-sm-6">
            <div className="d-flex">
              <p>Chicago, IL</p>
            </div>
            <div className="d-flex">
              <a href="tel:312-721-2217">+1(312)721.2217</a>
            </div>
            <div className="d-flex">
              <p>riddhidamani90@gmail.com</p>
            </div>
          </div>
          <div className="col-lg-3 col-md-2 col-sm-6">
            <div className="row">
              <div className="col"></div>
              <div className="col"></div>
              <div className="col"></div>
            </div>
          </div>
          <div className="col-lg-5 col-md-5 col-sm-6 align-items-center">
            <div className="d-flex justify-content-center">
              <SocialIcon
                className="socialIcon"
                url="https://www.linkedin.com/in/riddhidamani/"
                bgColor="white"
              />
              <SocialIcon
                className="socialIcon"
                url="https://github.com/RiddhiDamani"
                bgColor="white"
              />
              <SocialIcon
                className="socialIcon"
                url="https://www.instagram.com/riddhi.damani/"
                bgColor="white"
              />
            </div>
            <p className="pt-3 text-center">
              Copyright &copy; {new Date().getFullYear()}&nbsp; Riddhi Damani |
              All Rights Reserved
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Footer;
