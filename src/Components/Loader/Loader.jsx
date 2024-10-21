import React from 'react'
import {RingLoader}  from "react-spinners"
function Loader() {
  return (
    <div style={{
        display:"flex",
        alignItem:"center",
        justifycontent:"center",
        height:"50vh"
    }}
    >
      <RingLoader color="blue"/>
    </div>
  );
}

export default Loader