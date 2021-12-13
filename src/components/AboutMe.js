import React from "react";
import author from "../profile-pic.png";

const AboutMe = () => {
  return (
    <div className="container py-5">
      <div className="row">
        <div className="col-lg-6 col-xm-12">
          <div className="photo-wrap mb-5">
            <img className="profile-img" src={author} alt="Author" />
          </div>
        </div>
        <div className="col-lg-6 col-xm-12">
          <h1 className="about-heading">About Me</h1>
          <div>
            <p>
              First and foremost, I love writing code, and I enjoy drawing at my
              leisure. My passion for both these worlds has encouraged me to
              pursue my Master’s in Computer Science after having over 5 years
              of professional work experience.
            </p>

            <p>
              For my first professional contract, I was given the opportunity to
              perform search engine optimization and guest blogging for a
              mid-level startup firm. My second contract involved developing
              software applications for the legacy bank systems using COBOL,
              JCL, and DB2; this is where I evolved from a systems engineer
              trainee to a senior systems engineer. Although I was
              professionally working on the black and green screens of the
              mainframes, I desired to work in a more flexible environment where
              my creative brain finds its use - User Interface Development!
              Having around 3 years of mainframe experience, I knew it would be
              challenging for me to switch technologies. I decided to go slow
              and build my portfolio by self-learning. My third contract as a
              senior systems engineer involved the support and maintenance of
              retail banking applications. I started using my free time to build
              personal projects and enroll in front-end technologies courses.
              After around eight months of self-study and a decent number of
              projects in my portfolio, I decided to apply for web developer
              roles. My fourth professional contract as a User Interface
              Developer for Ericsson gave me the exposure that I always dreamt
              of. I worked in an Agile environment using Javascript, Jquery,
              JSViews. We successfully delivered the project after working on it
              for 9 months. This was the moment when I decided to enhance my
              skills more by enrolling in higher education.
            </p>

            <p>
              Apart from my regular coursework, I have started leet coding to
              improve my data structures and algorithms. Also, I have a profound
              interest in ReactJS, so in one of my coursework for the Fall
              quarter, I am working on developing MERN Web Application. In
              another course, I am working on developing an android application
              using Java and Android Studio IDE. This is what keeps me up at
              night, a never-ending thirst to create beautiful, powerful apps
              and share them with the world.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AboutMe;
