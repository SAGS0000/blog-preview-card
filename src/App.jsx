import React from "react";
import "./App.css";
import image from "./assets/images/image.svg";

import illustration from "./assets/images/illustration-article.svg";
const App = () => {
  return (
    <article>
      <div className="image">
        <img
          src={illustration}
          alt="hero"
        />
      </div>
      <span>Learning</span>
      <div className="time">Published 21 Dec 2023</div>
      <h1>HTML & CSS foundations</h1>
      <p>
        These languages are the backbone of every website, defining structure,
        content, and presentation.
      </p>
      <div className="profile">
        <img
          src={image}
          alt="image"
        />
        Joshua Saguit
      </div>
      {/* <div className="attribution">
        Challenge by{" "}
        <a
          href="https://www.frontendmentor.io?ref=challenge"
          target="_blank"
          rel="noreferrer"
        >
          Frontend Mentor
        </a>
        . Coded by <a href="#">Your Name Here</a>.
      </div> */}
    </article>
  );
};

export default App;
