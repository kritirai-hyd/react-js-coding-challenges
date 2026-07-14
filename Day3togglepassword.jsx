import React, { useState } from 'react'

const Day3togglepassword = () => {
  const [toggle, setToggle] = useState("");

  return (
    <>
      <input type={toggle ? "text" : "password"} />
      <button onClick={() => setToggle(!toggle)}>{toggle ? "Hide Password" : "Show Password"}</button>
    </>
  )
}

export default Day3togglepassword
