import "./Booking.css";
import React, { useReducer, useState, useEffect } from "react";
import { submitAPI, fetchAPI } from "../mockAPI";

function BookingForm(props) {
  const availableDates = [
    "2023-08-29",
    "2023-09-01",
    "2023-09-02",
    "2023-10-03",
    "2023-10-04",
    "2023-10-05",
    "2023-10-06",
    "2023-10-07",
    "2023-10-08",
    "2023-10-10",
    "2023-10-10",
    "2023-10-11",
    "2023-10-12",
    "2023-10-13",
    "2023-10-14",
    "2023-10-15",
    "2023-10-16",
    "2023-10-17",
    "2023-10-18",
    "2023-10-19",
    "2023-10-20]",
  ];
  let [availableTimes, setAvailableTimes] = useState([]);
  const [formData, SetFormData] = useState({
    resDate: new Date().toLocaleDateString("en-CA"),
    resTime: new Date().getTime().toLocaleString(),
    guests: 1,
    occasion: "",
  });

  useEffect(
    () => {
      // Code to run on mount and whenever dependencies change

      // Cleanup function (optional)
      return () => {
        // Code to run on unmount or when dependencies change before the next useEffect runs
      };
    },
    [
      /* dependencies */
    ]
  );
  function handleChange(e) {
    if (e.target.name === "resDate") {
      changeAvailableTimes(e.target.value);
    }
    SetFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  }
  async function changeAvailableTimes(date) {
    setAvailableTimes(await fetchAPI(date));
    console.log(availableTimes);
  }
  function handleSubmit(event) {
    event.preventDefault();
    console.log("handle-Submit", event);
  }

  return (
    <div className="form_container">
      <form className="form_class" onSubmit={handleSubmit}>
        <label htmlFor="res-date">Date *</label>
        <select
          value={formData.resDate}
          onChange={handleChange}
          type="date"
          name="resDate"
          id="res-date"
          required
        >
          {availableDates.map((dates) => {
            return <option>{dates}</option>;
          })}
        </select>
        <label htmlFor="res-time">Time *</label>
        <select
          value={formData.resTime}
          onChange={handleChange}
          name="resTime"
          id="res-time "
          required
        >
          {props.availableTimes?.map((time) => {
            return <option>{time}</option>;
          })}
        </select>
        <label htmlFor="guests">Number of guests *</label>
        <input
          type="number"
          value={formData.guests}
          onChange={handleChange}
          required
          name="guests"
          placeholder="1"
          min="1"
          max="10"
          id="guests"
        />
        <label htmlFor="occasion">Occasion</label>
        <select
          value={formData.occasion}
          onChange={handleChange}
          name="occasion"
          id="occasion"
        >
          <option>Birthday</option>
          <option>Anniversary</option>
          <option>Other</option>
        </select>
        <input
          className="btn_class bg_primary_yel dark_txt fw_xxbold"
          type="submit"
          value="Make Your reservation"
        />
      </form>
    </div>
  );
}

export default BookingForm;
