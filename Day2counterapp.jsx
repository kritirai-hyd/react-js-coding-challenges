import React, { useState } from "react";
const Day2CounterApp = () => {
  const [search, setSearch] = useState("");
  const data = [
    {
      name: "Kriti Rai",
      jobtitle: "Full Stack Developer",
    },
    {
      name: "Punit Rai",
      jobtitle: "IT Manager",
    },
    {
      name: "Aradhaya Rai",
      jobtitle: "Content Creater",
    },
  ];
  const filterData = data.filter((d) => d.name.toLowerCase().includes(search.toLowerCase()));
  return (
    <>
      <input type="text" value={search} onChange={(e) => setSearch(e.target.value)} />
    {filterData.map((i, item) => {
        return (
       
            <h1 key={i}>{item.name}</h1>
 
        )
    })}
    </>
  );
};
export default Day2CounterApp;
