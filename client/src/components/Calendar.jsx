import React, { useState } from "react";
import { TbPlayerTrackNext, TbPlayerTrackPrev } from "react-icons/tb";
import losnImage from "../assets/logo.jpeg";

import "../styles/Calendar.css";
import { Link } from "react-router-dom";
import HomeHeader from "./HomeHeader";

const Calendar = () => {
  const [currentDate, setCurrentDate] = useState(new Date());
  const [selectedDate, setSelectedDate] = useState(null);
  const [dateStatus, setDateStatus] = useState({});
  const [showAttedForm, setShowAttedForm] = useState(false);
  const [comments, setComments] = useState("");
  const [startTime, setStartTime] = useState("");
  const [endTime, setEndTime] = useState("");

  const daysOfWeek = ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"];
  const startOfMonth = new Date(
    currentDate.getFullYear(),
    currentDate.getMonth(),
    1
  );
  const endOfMonth = new Date(
    currentDate.getFullYear(),
    currentDate.getMonth() + 1,
    0
  );
  const startDay = startOfMonth.getDay();
  const endDay = endOfMonth.getDate();

  const prevMonth = () => {
    setCurrentDate(
      new Date(currentDate.getFullYear(), currentDate.getMonth() - 1, 1)
    );
  };

  const nextMonth = () => {
    setCurrentDate(
      new Date(currentDate.getFullYear(), currentDate.getMonth() + 1, 1)
    );
  };

  const renderDays = () => {
    const today = new Date();
    const isCurrentMonth =
      today.getFullYear() === currentDate.getFullYear() &&
      today.getMonth() === currentDate.getMonth();

    const days = [];
    for (let i = 0; i < startDay; i++) {
      days.push(<div className="calendar-day empty" key={`empty-${i}`}></div>);
    }
    for (let i = 1; i <= endDay; i++) {
      const isToday = isCurrentMonth && i === today.getDate();
      const isSelectedDate = selectedDate === i;
      const dayClass = isToday ? "current-day" : "";
      const statusClass = dateStatus[i] ? dateStatus[i] : "";

      days.push(
        <div
          className={`calendar-day ${dayClass} ${statusClass}`}
          key={`day-${i}`}
          onClick={() => handleDayClick(i)}
        >
          {i}
        </div>
      );
    }
    return days;
  };

  const handleDayClick = (day) => {
    setSelectedDate(day);
    setShowAttedForm(!showAttedForm);
  };

  const handleLeaveButtonClick = () => {
    setDateStatus((prevStatus) => ({
      ...prevStatus,
      [selectedDate]: "leave-day",
    }));
    setShowAttedForm(!showAttedForm);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setDateStatus((prevStatus) => {
      if (prevStatus[selectedDate] === "leave-day") {
        return {
          ...prevStatus,
          [selectedDate]: "submitted-day",
        };
      } else {
        return {
          ...prevStatus,
          [selectedDate]: "submitted-day",
        };
      }
    });
    setShowAttedForm(!showAttedForm);
  };

  const handleCommentsChange = (e) => {
    setComments(e.target.value);
  };

  const handleStartTimeChange = (e) => {
    setStartTime(e.target.value);
  };

  const handleEndTimeChange = (e) => {
    setEndTime(e.target.value);
  };

  const getSelectedFullDate = () => {
    const selectedFullDate = new Date(
      currentDate.getFullYear(),
      currentDate.getMonth(),
      selectedDate
    );
    return selectedFullDate.toDateString();
  };

  return (
    <div className="calendar-container">
      <div>
        <HomeHeader />
      </div>
      <div className="calender-submit-form-container">
        <div className="calendar">
          <div className="calendar-header">
            <TbPlayerTrackPrev onClick={prevMonth} className="track-iocns" />
            <div>
              <h1 style={{ fontSize: "25px" }}>
                {currentDate.toLocaleString("default", { month: "long" })}{" "}
                {currentDate.getFullYear()}
              </h1>
            </div>
            <TbPlayerTrackNext onClick={nextMonth} className="track-iocns" />
          </div>
          <div className="calendar-days">
            {daysOfWeek.map((day) => (
              <div className="calendar-day-name" key={day}>
                {day}
              </div>
            ))}
          </div>
          <div className="calendar-days">{renderDays()}</div>
        </div>
        {/* submit form */}
        {showAttedForm && (
          <form className="atte-form-container" onSubmit={handleSubmit}>
            <div className="leve-container">
              <h1 className="current-full-date">
                {selectedDate ? getSelectedFullDate() : ""}
              </h1>
              <button
                type="button"
                className="leve-but"
                onClick={handleLeaveButtonClick}
              >
                leave
              </button>
            </div>
            <div className="time-container">
              <div className="time-container-items">
                <label htmlFor="start-time" className="time-label">
                  Start Time
                </label>
                <input
                  type="time"
                  id="start-time"
                  value={startTime}
                  onChange={handleStartTimeChange}
                />
              </div>
              <div className="time-container-items">
                <label htmlFor="End-time" className="time-label">
                  End Time
                </label>
                <input
                  type="time"
                  id="End-time"
                  value={endTime}
                  onChange={handleEndTimeChange}
                />
              </div>
            </div>
            <div className="submit-comments-container">
              <div className="comments-container">
                <label htmlFor="comments">Comments</label>
                <input
                  type="text"
                  placeholder="Type your Comment"
                  onChange={handleCommentsChange}
                  value={comments}
                />
              </div>
              <button type="submit">Submit</button>
            </div>
          </form>
        )}
      </div>
    </div>
  );
};

export default Calendar;
