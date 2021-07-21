import React from "react";

function About(props) {
  return (
    <div id="about">
      <h2>About Me</h2>      
      <p>{props.bio}</p>

      <img src="https://i.imgur.com/mV8PQxj.gif" alt="I made this" />
      
      {/* add your <Links /> component here */}
      <h2>Links</h2>
      <a href="git">{props.github}</a>
      <a href="link">{props.linkedin}</a>
    </div>
  );
}

export default About;
