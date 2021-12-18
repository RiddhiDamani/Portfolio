import React from "react";
import { Carousel } from "react-responsive-carousel";
import "react-responsive-carousel/lib/styles/carousel.min.css";
// Avatars Imports
import avatar1 from "../images/avatars/avatar-1.png";
import avatar2 from "../images/avatars/avatar-2.png";
import avatar5 from "../images/avatars/avatar-5.png";

const TestimonialsCarousel = () => {
  return (
    <Carousel
      showArrows={true}
      infiniteLoop={true}
      showThumbs={false}
      showStatus={false}
      autoPlay={true}
      interval={3000}
    >
      <>
        <img src={avatar1} alt="Brian Dellabetta" />
        <div className="myCarousel">
          <h3>Brian Dellabetta</h3>
          <p>
            Riddhi TA'ed the programming class I taught at Depaul University in
            Fall 2021. Riddhi managed the lab component of the course, and was
            an absolute pleasure to work with throughout. She helped prepare the
            lesson plans and quickly took ownership of the work with minimal
            management on my part. She provided great insights on the points or
            concepts that students were struggling with, offering suggestions on
            how to improve or simplify the lesson plans so that students were
            prepared for the next course without being overwhelmed with the
            material. She provided meticulous notes and updates throughout,
            identifying students that were struggling with the material and
            offering suggestions on how best to set them up for success. This
            was the first undergraduate course I've taught, and Riddhi's hard
            work and wonderful demeanor made it all move very smoothly. Very
            professional, 10/10 would recommend! :)
          </p>
        </div>
      </>
      <>
        <img src={avatar5} alt="Bhavana Shinde" />
        <div className="myCarousel">
          <h3>Bhavana Shinde</h3>
          <p>
            I have known Riddhi for more than 2 years now and in those two
            years, Riddhi has come out to me as a passionate individual,
            especially when it comes to learning new things and implementing
            those in her work. With her enthusiastic attitude she put consistent
            effort and made significant contributions at the workplace. I would
            like to appreciate her for the value she added to the organization.
            She is extremely hardworking and dedicated towards her goals. Along
            with the technical expertise in software development using languages
            like Java, Javascript, HTML5, Bootstrap, Jquery, etc, she also has
            hands on experience of working in the Agile methodology. Riddhi
            possesses good organization skills. Her helping and caring nature
            has won several hearts in a short span. She believes in
            problem-solving, has empathy and uses her communication skills in
            the direction of resolution. I am sure her presence will be as much
            of a benefit as it has been to us. Wishing you success in all your
            future endeavours.
          </p>
        </div>
      </>
      <>
        <img src={avatar2} alt="Rubina Shaikh" />
        <div className="myCarousel">
          <h3>Rubina Shaikh</h3>
          <p>
            It has been a pleasure working alongside Riddhi for close to 1 year
            in TCS. We were part of the same team which worked on MCPTT(Mission
            Critical Push To Talk), a product of Ericsson in an agile
            environment. Riddhi came across as being very hardworking, creative
            and an enthusiastic individual. She not only did excel at the core
            elements of her job - front-end designing and development which
            involved technologies like NodeJS, JavaScript, HTML5, CSS/3, Jquery,
            Bootstrap but also through her good communication skills made
            significant contributions at the workplace. The unique quality that
            Riddhi possess that sets her apart from other colleagues is her
            encouraging and helping nature, no matter where they fall on the
            organization chart. I highly recommend working with Riddhi and wish
            her the best in all her future roles.
          </p>
        </div>
      </>
    </Carousel>
  );
};

export default TestimonialsCarousel;
