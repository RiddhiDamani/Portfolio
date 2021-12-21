import React from "react";

const Education = () => {
  return (
    <div id="education" className="education">
      <div className="d-flex justify-content-center my-5">
        <h1>Education</h1>
      </div>
      <div className="container education-wrapper">
        <div className="timeline-block timeline-block-right">
          <div className="marker"></div>
          <div className="timeline-content">
            <h4>June 2020 - Present</h4>
            <h3>Master's in Computer Science</h3>
            <h4>DePaul University College of Computing and Digital Media</h4>
            <p>
              Coursework: Applied Algorithms, Prototyping and Implementation,
              Android App Development, Web Application Development,
              Object-Oriented Software Development, Introduction to User
              Centered Design, Object-Oriented Enterprise Computing
            </p>
          </div>
        </div>
        <div className="timeline-block timeline-block-left">
          <div className="marker"></div>
          <div className="timeline-content">
            <h4>Aug 2009 – Jun 2012</h4>
            <h3>Bachelor’s in Information Technology </h3>
            <h4>K. J. Somaiya College of Engineering, India </h4>
            <p>
              Coursework: Data structures and algorithms, Internet Programming,
              Object Oriented Analysis and Design, Programming for Mobile and
              Remote Computers, GUI and Database Management, Computer Graphics
              and VR
            </p>
          </div>
        </div>
        <div className="timeline-block timeline-block-right">
          <div className="marker"></div>
          <div className="timeline-content">
            <h4>Jun 2006 – Jul 2009</h4>
            <h3>Diploma in Computer Technology </h3>
            <h4>Thakur Polytechnic, India</h4>
            <p>
              Coursework: RDBMS, Visual Basic, Programming in C, Web Page
              Designing and Development, Java Programming, Advanced Java
              Programming, Advanced Web Technology
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Education;
