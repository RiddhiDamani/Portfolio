import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faDesktop, faFileCode } from "@fortawesome/free-solid-svg-icons";
import { faAndroid } from "@fortawesome/free-brands-svg-icons";

const Services = () => {
  return (
    <div className="services">
      <h1 className="py-5">My Services</h1>
      <div className="container">
        <div className="row">
          <div className="col-md-4 col-sm-6">
            <div className="box">
              <div className="circle">
                <FontAwesomeIcon className="icon" icon={faDesktop} size="2x" />
              </div>
              <h3>Web Design</h3>
              <p>
                I approach each project individually and always focus on the
                result.
              </p>
            </div>
          </div>
          <div className="col-md-4 col-sm-6">
            <div className="box">
              <div className="circle">
                <FontAwesomeIcon className="icon" icon={faFileCode} size="2x" />
              </div>
              <h3>Web Application Development</h3>
              <p>Your website will be built with a new proven technologies.</p>
            </div>
          </div>
          <div className="col-md-4 col-sm-6">
            <div className="box">
              <div className="circle">
                <FontAwesomeIcon className="icon" icon={faAndroid} size="2x" />
              </div>
              <h3>Android App Design and Development</h3>
              <p>Building mobile apps using the Android Studio IDE.</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Services;
