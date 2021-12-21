import React from "react";

import {
  LinkedinShareButton,
  LinkedinIcon,
  FacebookShareButton,
  FacebookIcon,
} from "react-share";

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
              <FacebookShareButton url="https://github.com/RiddhiDamani">
                <FacebookIcon className="mx-3" size={36}></FacebookIcon>
              </FacebookShareButton>

              <LinkedinShareButton url="https://www.linkedin.com/in/riddhidamani/">
                <LinkedinIcon className="mx-3" size={36}></LinkedinIcon>
              </LinkedinShareButton>
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
