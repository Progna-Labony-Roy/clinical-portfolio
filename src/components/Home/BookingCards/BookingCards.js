import React from "react";
import "./BookingCards.css";

const BookingCards = () => {
  return (
    <div className="booking-div">
      <p className="booking-heading">Start Online Psychologist Consultation With Three Easy Steps</p>
      <div className="bookings">
        <div>
          <div className="booking">
            <div className="Ellipse-1">1</div>
            <div className="booking-title">
              <p className="home-text text-color">Choose A Package</p>
            </div>
            <p className="details">
              Choose between two types of packages, Depending upon on your
              requirement and need.
            </p>
          </div>
        </div>
        <div>
          <div className="booking">
            <div className="Ellipse-1">2</div>
            <div className="booking-title">
              <p className="home-text text-color">
                Connect With Your Therapist
              </p>
            </div>
            <p className="details">
              Fill out our form and complete the payment process I Will shortly
              be in touch with you
            </p>
          </div>
        </div>
        <div>
          <div className="booking">
            <div className="Ellipse-1">3</div>
            <div className="booking-title">
              <p className="home-text text-color">Begin Your Healing Journey</p>
            </div>
            <p className="details">
              Start your session with Me, a step towards healing.
            </p>
          </div>
        </div>
      </div>
      <button className="button">Book Session</button>
    </div>
  );
};

export default BookingCards;
