import React from "react";
import Typewriter from "typewriter-effect";

function Type() {
  return (
    <Typewriter
      options={{
        strings: [
          "IT Project Coordinator",
          "Front End Web Developer",
          "Software Developer",
          "Freelancer",
          "Full Stack Web Developer"
        ],
        autoStart: true,
        loop: true,
        deleteSpeed: 50,
      }}
    />
  );
}

export default Type;
