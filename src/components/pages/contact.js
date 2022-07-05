import React from "react";
import contactImg from "../../../static/assets/images/auth/login.jpg";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

export default function () {
  return (
    <div className="content-page-wrapper">
      <div
        className="left-side"
        style={{
          backgroundImage: `url(${contactImg})`,
          backgroundSize: "cover",
          backgroundPosition: "center",
        }}
      />
      <div className="right-side">
        <div className="contact-wrapper">
            <div className="contact-icon-info-wrapper">
            <div className="icon">
                <FontAwesomeIcon icon="envelope" />
            </div>
            <div className="info">
                <span>samplemail@email.com</span>
            </div>
            </div>

            <div className="contact-icon-info-wrapper">
            <div className="icon">
                <FontAwesomeIcon icon="phone" />
            </div>
            <div className="info">
                <span>(555) 555-5555</span>
            </div>
            </div>
        </div>
      </div>
    </div>
  );
}
