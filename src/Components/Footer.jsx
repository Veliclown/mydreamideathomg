import React, { memo } from 'react'


const Footer = memo(() => {
    const StyleFooterblock = {
        position: "absolute",
        background: "black",
        color: "green",
        bottom: "0",
        left: "0" ,
        right: "0",
    }
    const Spilberg = {
        fontSize: "20px",
        padding: "40px",
    };
    

  return (
    <div style={StyleFooterblock}>
        <p style={Spilberg}>Alexander Goridenko
        </p>
        </div>
  )
})

export default Footer