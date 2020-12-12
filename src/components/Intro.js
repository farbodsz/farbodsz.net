import React from "react";

export default function Intro() {
  const LINK_WARWICK_DCS = "https://warwick.ac.uk/fac/sci/dcs/";
  return (
    <div style={{paddingBottom: "30px"}}>
      <p>
        <b>Hi, my name is Farbod. 👋</b>
      </p>
      <p>
        I'm currently a 2nd year Computer Science student at the{" "}
        <a href={LINK_WARWICK_DCS}>University of Warwick</a>. 💻
      </p>
      <p>Welcome to my website!</p>
    </div>
  );
}
