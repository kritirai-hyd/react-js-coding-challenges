import React, { useState } from 'react'

const Day1searchfilter = () => {
    const dataUser = [
        "kriti", 
        "mithi", 
        "aman", 
        "punit", 
        "saroj"
    ]
    const [search, setSearch] = useState("");
    const filterdata = dataUser.filter(
        (data) => data.toLowerCase().includes(search.toLowerCase())
 )
  return (
    <>
    <input type='text' value={search} onChange={(e) => setSearch(e.target.value)} />

     {filterdata.map((a) => {
        return <h1>{a}</h1>
    })} 
    </>
  )
}

export default Day1searchfilter