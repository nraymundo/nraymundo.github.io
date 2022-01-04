import React from "react";
import Clipboard from "react-clipboard.js";
import "./Info.css";

export default function Info() {
  return (
    <div className="main-paragraph">
      <p className="intro-content">
        Nico Raymundo is a developer and photographer from the San Francisco Bay
        Area, currently at{" "}
        <a class="intext-hyperlink" href="https://www.americanexpress.com" target="_blank">
          American Express
        </a>
        .
      </p>
      <hr className="divider" />
      <div className="bottom-section">
        <div className="about">
          <p>ABOUT</p>
          <p>
            I am currently a software engineer at American Express. I was born and 
            raised in San Jose, CA but decided to migrate south to further my 
            education, where I attended Loyola Marymount University and majored in
            Computer Science. Moving to Los Angeles has given me an opportunity to try 
            new things, visit new unfamiliar places, and cultivate relationships 
            with incredible people from around the globe.
          </p>
          <p>
            At LMU, I served as Vice-President for the LMU chapter of the 
            Association for Computing Machinery, joined the social fraternity Delta Sigma Phi,
            and worked as a teaching assistant for the Computer Science department.
          </p>
          <p>
            Now at American Express, I am able to utilize what I've learned over the 
            years in my role as a software engineer. As an engineer, I work closely 
            with other engineers and product managers to design and develop web applications
            for our customers using React, Javascript, and Java.
          </p>
          <p>
            Outside of school, I enjoy playing sports with friends, taking photos around town,
            listening to music, working on my side projects, or going on runs around my 
            neighborhood with my dog Boomer. I'd love to get to know you, so don't 
            hesitate to get in touch!
          </p>
        </div>
        <div className="side-section">
          <div className="cv">
            <p>CV</p>
            <p>
              American Express
              <br />
              Software Engineer
              <br />
              2021 - Present
            </p>
            <p>
              Loyola Marymount University
              <br />
              BA Computer Science
              <br />
              2017 - 2021
            </p>
            <p>
              Maxim Integrated
              <br />
              IT Business Intelligence Intern
              <br />
              2020
            </p>
            <p>
              Loyola Marymount University
              <br />
              Computer Science Teaching Assistant
              <br />
              2018 - Present
            </p>
          </div>
          <div className="connect">
            <p>CONNECT</p>
            <p>
              <Clipboard
                className="email"
                data-clipboard-text="nraymundo013@gmail.com"
              >
                Email
              </Clipboard>
            </p>
            <p>
              <a
                className="social"
                href="https://www.instagram.com/nicoraymundo/"
                target="_blank"
              >
                Instagram
              </a>
            </p>
            <p>
              <a
                className="social"
                href="https://twitter.com/nicoraymundo2"
                target="_blank"
              >
                Twitter
              </a>
            </p>
            <p>
              <a
                className="social"
                href="https://github.com/nraymundo"
                target="_blank"
              >
                GitHub
              </a>
            </p>
            <p>
              <a
                className="social"
                href="https://www.linkedin.com/in/nicolasraymundo/"
                target="_blank"
              >
                LinkedIn
              </a>
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
