import React from "react";
import jpaint from "../images/jpaint.png";
import hotelReservation from "../images/hotelReservation.png";
import tipCalc from "../images/tipCalc.png";
// import artcade from "../images/artcade.png";
import todoApp from "../images/todoApp.png";
// FontAwesome imports
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faSearchPlus } from "@fortawesome/free-solid-svg-icons";
// React PopupBox
import { PopupboxManager, PopupboxContainer } from "react-popupbox";
import "react-popupbox/dist/react-popupbox.css";

const Portfolio = () => {
  const openPopupboxJPaint = () => {
    const content = (
      <>
        <img
          className="portfolio-image-popupbox center"
          src={jpaint}
          alt="JPaint Project"
        />
        <p>
          JPaint Application simulates the features of Windows-based Paint
          application. Technologies Used - Java 8 | AWT Swings. This application
          has been developed as a part of my final project for SE 450 course -
          Object-Oriented Software Development at DePaul under the guidance and
          supervision of Prof. Jeffrey Sharpe. I got an opportunity to apply
          SOLID principles and 5 Software Design Patterns in this project that I
          have learnt throughout the course. The starter code - mainly consist
          of GUI was provided by the Prof. Minimum GUI code have been written by
          me. Java API's have been called for drawing the shapes and event
          handling's have been written for click and drag events. This project
          has been developed in an Agile approach. Each Sprint lasted for 2
          weeks.
        </p>
        <b>GitHub:</b>
        <a
          href="/#"
          className="hyper-link"
          onClick={() =>
            window.open(
              "https://github.com/RiddhiDamani/SE450_JPaint_Project",
              "_blank"
            )
          }
        >
          https://github.com/RiddhiDamani/SE450_JPaint_Project
        </a>
      </>
    );

    PopupboxManager.open({ content });
    PopupboxManager.update({
      content,
      config: {
        titleBar: {
          text: "JPaint Project",
        },
      },
    });
  };

  const popupboxConfigJPaint = {
    titleBar: {
      enable: true,
      text: "JPaint Project",
    },
    fadeIn: true,
    fadeInSpeed: 500,
  };

  const openPopupboxHRS = () => {
    const content = (
      <>
        <img
          className="portfolio-image-popupbox center"
          src={hotelReservation}
          alt="Hotel Reservation System"
        />
        <p>
          This project has been created as a part of SE452 - Object Oriented
          Enterprise Computing coursework's Final Project for DePaul Universty.
          The development of the proposed server-side enterprise application is
          aimed at facilitating users/customers to search and reserve a room of
          their choice right from the luxury of their home. Key Features of this
          project are: Installation of the SSL certificate i.e. Application has
          been moved from HTTP to HTTPS, Create a new user in the system, Log in
          / Log out, Implementation of authentication and authorization based on
          the role of the users - as mentioned in the document file, Create
          Reservation, Read Reservation, Update Reservation, Delete Reservation,
          and Search Hotel
        </p>
        <b>GitHub:</b>
        <a
          href="/#"
          className="hyper-link"
          onClick={() =>
            window.open(
              "https://github.com/RiddhiDamani/SE452_Hotel_Reservation_Systems",
              "_blank"
            )
          }
        >
          https://github.com/RiddhiDamani/SE452_Hotel_Reservation_Systems
        </a>
      </>
    );

    PopupboxManager.open({ content });
    PopupboxManager.update({
      content,
      config: {
        titleBar: {
          text: "Hotel Reservation System",
        },
      },
    });
  };

  const popupboxConfigHRS = {
    titleBar: {
      enable: true,
      text: "Hotel Reservation System",
    },
    fadeIn: true,
    fadeInSpeed: 500,
  };

  const openPopupboxTipCalc = () => {
    const content = (
      <>
        <img
          className="portfolio-image-popupbox center"
          src={tipCalc}
          alt="Tip/Split Calculator App"
        />
        <p>
          The app will assist you in calculating your total dining cost with a
          selected tip added and will allow you to split that total evenly for
          each person dining, specifying the amount owed by each person.
        </p>
        <b>GitHub:</b>
        <a
          href="/#"
          className="hyper-link"
          onClick={() =>
            window.open(
              "https://github.com/RiddhiDamani/Tip_Split_Calculator_App",
              "_blank"
            )
          }
        >
          https://github.com/RiddhiDamani/Tip_Split_Calculator_App
        </a>
      </>
    );

    PopupboxManager.open({ content });
    PopupboxManager.update({
      content,
      config: {
        titleBar: {
          text: "Tip/Split Calculator App",
        },
      },
    });
  };

  const popupboxConfigTipCalc = {
    titleBar: {
      enable: true,
      text: "Tip/Split Calculator App",
    },
    fadeIn: true,
    fadeInSpeed: 500,
  };

  const openPopupboxToDoApp = () => {
    const content = (
      <>
        <img
          className="portfolio-image-popupbox center"
          src={todoApp}
          alt="To-Do Web App"
        />
        <p>
          A simple to-do app built using MERN (MongoDB-ExpressJS-ReactJS-NodeJS)
          Stack. User can enter a new to-do item, delete the to-do item and mark
          it as completed.
        </p>
        <b>App Demo:</b>
        <a
          href="/#"
          className="hyper-link"
          onClick={() =>
            window.open("https://todo-app-v00.herokuapp.com/", "_blank")
          }
        >
          https://todo-app-v00.herokuapp.com/
        </a>
        <br />
        <b>GitHub:</b>
        <a
          href="/#"
          className="hyper-link"
          onClick={() =>
            window.open("https://github.com/RiddhiDamani/ToDo_App", "_blank")
          }
        >
          https://github.com/RiddhiDamani/ToDo_App
        </a>
      </>
    );

    PopupboxManager.open({ content });
    PopupboxManager.update({
      content,
      config: {
        titleBar: {
          text: "To-Do Web App",
        },
      },
    });
  };

  const popupboxConfigToDoApp = {
    titleBar: {
      enable: true,
      text: "To-Do Web App",
    },
    fadeIn: true,
    fadeInSpeed: 500,
  };

  return (
    <div id="portfolio" className="portfolio-wrapper">
      <div className="container">
        <h1 className="text-uppercase text-center py-5">Portfolio</h1>
        <div className="image-box-wrapper row justify-content-center">
          <div className="portfolio-image-box" onClick={openPopupboxJPaint}>
            <img
              className="portfolio-image"
              src={jpaint}
              alt="JPaint Project"
            ></img>
            <div className="overflow"></div>
            <FontAwesomeIcon className="portfolio-icon" icon={faSearchPlus} />
          </div>
          {/* ---- */}
          <div className="portfolio-image-box" onClick={openPopupboxHRS}>
            <img
              className="portfolio-image"
              src={hotelReservation}
              alt="Hotel Reservation System"
            ></img>
            <div className="overflow"></div>
            <FontAwesomeIcon className="portfolio-icon" icon={faSearchPlus} />
          </div>
          {/* ---- */}
          <div className="portfolio-image-box" onClick={openPopupboxTipCalc}>
            <img
              className="portfolio-image"
              src={tipCalc}
              alt="Tip/Split Calculator Android App"
            ></img>
            <div className="overflow"></div>
            <FontAwesomeIcon className="portfolio-icon" icon={faSearchPlus} />
          </div>
          {/* ---- */}
          <div className="portfolio-image-box" onClick={openPopupboxToDoApp}>
            <img
              className="portfolio-image"
              src={todoApp}
              alt="To-Do Web App"
            ></img>
            <div className="overflow"></div>
            <FontAwesomeIcon className="portfolio-icon" icon={faSearchPlus} />
          </div>
          {/* ---- */}
          {/* <div className="portfolio-image-box">
            <img className="portfolio-image" src={artcade} alt="ArtCade"></img>
            <div className="overflow"></div>
            <FontAwesomeIcon className="portfolio-icon" icon={faSearchPlus} />
          </div> */}
        </div>
      </div>
      <PopupboxContainer {...popupboxConfigJPaint} />
      <PopupboxContainer {...popupboxConfigHRS} />
      <PopupboxContainer {...popupboxConfigTipCalc} />
      <PopupboxContainer {...popupboxConfigToDoApp} />
    </div>
  );
};

export default Portfolio;
