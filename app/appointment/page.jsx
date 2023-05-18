"use client";
import React, { useState, useEffect } from "react";
import BookAnApp from "../../components/bookanappointment";
//*asl booking neechay component mai ho rhin hai
import Appointment from "../../components/appointment";
import { useRouter } from "next/navigation";
const APpointmen = () => {
  const router = useRouter();
  useEffect(() => {
    if (localStorage.getItem("pocketbase_auth") == null)
      router.push(`/mainpage`);
  }, []);
  const [concern, setConcern] = useState("");
  const [date, setDate] = useState("");
  const [time, setTime] = useState("");

  const handleConcernChange = (o) => {
    setConcern(o);
  };
  const handleDateChange = (event) => {
    setDate(event.target.value);
  };
  const handleTimeChange = (o) => {
    return setTime(o);
  };
  useEffect(() => {
    console.log(concern);
    console.log(date);
    console.log(time);
  }, [concern, date, time]);
  // console.log(concern);
  // console.log(date);
  // console.log(time);
  return (
    <div className="h-screen w-screen flex flex-col justify-center text-center">
      <BookAnApp
        // className="mx-auto"
        setconcern={handleConcernChange}
        setdate={handleDateChange}
        settime={handleTimeChange}
        date={date}
      />
      {useEffect(() => {
        console.log(concern);
        console.log(date);
        console.log(time);
      })}
    </div>
  );
};

export default APpointmen;
// <Appointment
// className="mx-auto"
// setconcern={handleConcernChange}
// setdate={handleDateChange}
// settime={handleTimeChange}
// />
