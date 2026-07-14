import React, { useState } from 'react'
const Day4showmore = () => {
  const [show, setShow] = useState("");
  return (
    <>
    <button onClick={(e) => setShow(!show)}>{show ? "Show Less" : "Show More"}</button>
    {show ? "My name is Kriti Rai." : "What is your name ?"}
    </>
  )
}
export default Day4showmore