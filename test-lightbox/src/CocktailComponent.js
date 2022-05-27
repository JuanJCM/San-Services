import React from "react";
import "../src/Modal.css";
import cocktail from "../src/images/rum.png";
import twinoaks from "../src/images/twin-oaks.png";
import appleton from "../src/images/appleton.png";
const Modal = () => {
  return (
    <div className="containerliquor">
      <div className="leftside">
        <div className="backgroundimg">
          <p className="includedtext">INCLUDED</p>
          <div className="bottleimg"></div>
        </div>
        <div className="descriptionarea">
          <img src={twinoaks} alt="logos" className="logos" />
          <h2>Premium House Wines</h2>
          <p>
            We've raised the bar by partnering with Robert Mondavi Twin Oaks
            <sup>
              <span>&#174;</span>
            </sup>
            . Selected for Sandals Resorts, there are 6 varietals to choose
            from, each one complementing our gourmet dining perfectly.
          </p>
          <h4>
            LEARN MORE <span className="bluebutton">&#9658;</span>
          </h4>
        </div>
      </div>
      <div className="rightside">
        <div className="backgroundimg2">
          <p className="includedtext">INCLUDED</p>
        </div>
        <div className="descriptionarea">
          <img src={appleton} alt="logos2" className="logos2" />
          <h2>
            Appleton
            <sup>
              <span>&#174;</span>
            </sup>{" "}
            Estate Jamaica Rum
          </h2>
          <p>
            An iconic Jamaica product and internationally acclaimed rum brand,
            is poured at all Beaches Resorts throughout the Caribbean.
          </p>
          <h4>
            LEARN MORE <span className="bluebutton">&#9658;</span>
          </h4>
        </div>
      </div>
    </div>
  );
};
export default Modal;
