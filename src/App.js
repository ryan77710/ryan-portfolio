import "./App.css";
import { useState, useEffect } from "react";

import LocomotiveScroll from "locomotive-scroll";

import Project from "./Components/Project";
import Technology from "./Components/Technology";
import PictureProject from "./Components/PictureProject";

//import icon
import { library } from "@fortawesome/fontawesome-svg-core";
import {
  faStar,
  faStarHalfAlt,
  faMoon,
  faSun,
} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { Icon } from "@iconify/react";
import reactIcon from "@iconify-icons/logos/react";
import fileTypeHtml from "@iconify-icons/vscode-icons/file-type-html";
import fileTypeCss from "@iconify-icons/vscode-icons/file-type-css";
import expoIcon from "@iconify-icons/cib/expo";
import javascriptIcon from "@iconify-icons/logos/javascript";
import fileTypeJest from "@iconify-icons/vscode-icons/file-type-jest";
import mongodbIcon from "@iconify-icons/logos/mongodb";
import githubIcon from "@iconify-icons/logos/github-icon";
import linkedinIcon from "@iconify-icons/logos/linkedin-icon";
import fileTypeNode from "@iconify-icons/vscode-icons/file-type-node";
import googleGmail from "@iconify-icons/logos/google-gmail";

library.add(faStar, faStarHalfAlt, faSun, faMoon);

function App() {
  const [toggle, setToggle] = useState(true);
  const [toggleHeader, setToggleHeader] = useState(true);

  useEffect(() => {
    new LocomotiveScroll({
      el: document.querySelector("[data-scroll-container]"),
      smooth: true,
      lerp: 0.1,
    });
  }, []);

  return (
    <div
      data-scroll-container
      className={`App ${toggle ? "App-light" : "App-dark"}`}
    >
      <button
        onClick={() => setToggle((x) => !x)}
        className={`toggle-theme ${toggle ? "" : ""}`}
      >
        <FontAwesomeIcon
          className="toggle-icon"
          icon={!toggle ? "sun" : "moon"}
          color={"grey"}
        />
      </button>
      <div
        id="pin"
        data-scroll-section
        className={`presentation ${
          toggle ? "presentation-light" : "presentation-dark"
        }`}
      >
        <div className="presentation-container-left">
          <h1
            data-scroll
            data-scroll-speed="3"
            onMouseEnter={() => setToggleHeader(true)}
          >
            LOLLIA Ryan
          </h1>
          <h2
            data-scroll
            data-scroll-speed="-2"
            onMouseEnter={() => setToggleHeader((x) => !x)}
          >
            Dévelopeur junior front-end
          </h2>
          <h3
            data-scroll
            data-scroll-speed="-2"
            onMouseEnter={() => setToggleHeader(false)}
          >
            En recherche de stage <em>(non rémunéré)</em>
          </h3>
        </div>
        <div
          data-scroll
          data-scroll-sticky
          data-scroll-target="#pin"
          className="presentation-container-right"
        >
          {toggleHeader ? (
            <img
              className={`puff-in-center ${
                toggle ? "" : "presentation-img-dark"
              }  `}
              src={"/ryan.jpg"}
              alt="ryan"
            />
          ) : (
            <p
              data-scroll
              data-scroll-sticky
              data-scroll-target="#pin"
              className="puff-in-center "
            >
              Ancien militaire en reconversion, je cherche un stage non rémunéré
              dans le but d'apprendre et de me perfectionner dans le domaine du
              développement web .
            </p>
          )}
        </div>
      </div>

      <div
        data-scroll
        data-scroll-section
        className={`section link ${toggle ? "link-light" : "link-dark"}`}
      >
        <h2
          data-scroll
          data-scroll-direction="horizontal"
          data-scroll-speed="1"
        >
          Liens
        </h2>
        <div>
          <p>
            <a
              data-scroll
              data-scroll-direction="horizontal"
              data-scroll-speed="6"
              target="blanc"
              href="https://fr.linkedin.com/in/ryan-lollia-70393a213?trk=profile-badge"
            >
              <Icon icon={linkedinIcon} /> Linkedin
            </a>
          </p>
          <p>
            <a
              data-scroll
              data-scroll-direction="horizontal"
              data-scroll-speed="6"
              target="blanc"
              href="https://github.com/ryan77710"
            >
              <Icon icon={githubIcon} /> Lien Github
            </a>
          </p>
          <p>
            <a
              data-scroll
              data-scroll-direction="horizontal"
              data-scroll-speed="6"
              href="/"
            >
              <Icon icon={googleGmail} /> ryanlollia77@gmail.com
            </a>
          </p>
        </div>
      </div>
      <div
        data-scroll
        data-scroll-section
        className={`section skills ${toggle ? "skills-light" : "skills-dark"}`}
      >
        <span className={toggle ? "" : "skills-effect1"}></span>
        <span className={toggle ? "" : "skills-effect2"}></span>
        <span className={toggle ? "" : "skills-effect3"}></span>
        <span className={toggle ? "" : "skills-effect4"}></span>

        <h2>Compétences</h2>
        <div
          data-scroll
          data-scroll-direction="horizontal"
          data-scroll-speed="-2"
          className="skill"
        >
          <Technology
            name="React"
            toggle={toggle}
            icon={reactIcon}
            number={3.5}
          />
          <Technology
            name="Html-Css"
            toggle={toggle}
            icon={fileTypeHtml}
            icon2={fileTypeCss}
            number={4}
          />
          <Technology
            name="Javascript"
            toggle={toggle}
            icon={javascriptIcon}
            number={3}
          />
          <Technology
            name="React-native"
            toggle={toggle}
            icon={reactIcon}
            number={3}
          />
          <Technology
            name="Expo"
            toggle={toggle}
            icon={expoIcon}
            number={2.5}
          />
          <Technology
            name="Github"
            toggle={toggle}
            icon={githubIcon}
            number={2}
          />
          <Technology
            name="Jest"
            toggle={toggle}
            icon={fileTypeJest}
            number={2}
          />
          <Technology
            name="Express"
            toggle={toggle}
            icon={fileTypeNode}
            number={3.5}
          />
          <Technology
            name="Mongodb"
            toggle={toggle}
            icon={mongodbIcon}
            number={3.5}
          />
        </div>
      </div>
      <div
        data-scroll
        data-scroll-section
        className={`section projects ${
          toggle ? "project-light" : "project-dark"
        } `}
      >
        <h2>Projects</h2>
        <div
          data-scroll
          data-scroll-direction="horizontal"
          data-scroll-speed="4"
          className={`project-container ${
            toggle ? "project-container-light" : "project-container-dark"
          } `}
        >
          <Project
            name="Vinted"
            src="https://res.cloudinary.com/ryan777/video/upload/v1623805683/portfolio/vinted_qetdgj.mov"
            lien="https://ryan-vinted.netlify.app"
          />
          <Project
            name="Marvel"
            src="https://res.cloudinary.com/ryan777/video/upload/v1623806749/portfolio/marvel_i7mao4.mov"
            lien="https://ryan-marvel.netlify.app"
          />
          <Project
            name="Tellmemore(privé)"
            src="https://res.cloudinary.com/ryan777/video/upload/v1623805655/portfolio/tellmemore_wttg9m.mov"
          />
          <Project
            name="AirBnb(non disponible)"
            src="https://res.cloudinary.com/ryan777/video/upload/v1623805554/portfolio/airbnb_udbtfk.mov"
          />
          <Project
            name="Tripadvisor"
            src="https://res.cloudinary.com/ryan777/video/upload/v1623806736/portfolio/tripadvisor_l1augo.mov"
            lien="https://ryan-tripadvisor.netlify.app"
          />
          <Project
            name="Deliveroo"
            src="https://res.cloudinary.com/ryan777/video/upload/v1623805656/portfolio/deliveroo_zbottd.mov"
            lien="https://ryan-delivro.netlify.app"
          />
        </div>
      </div>
      <div
        data-scroll
        data-scroll-section
        className={`section others ${toggle ? "others-light" : "others-dark"}`}
      >
        <h2>Autres</h2>
        <div
          className={`carousel ${toggle ? "carousel.light" : "carousel-dark"}`}
        >
          <div className="picture-project-container">
            <PictureProject
              href="https://ryan-convertisseur.netlify.app"
              src="/cash.png"
              alt="ok"
              num={1}
            />
            <PictureProject
              href="https://ryan-emoji.netlify.app"
              src="emoji.png"
              alt="ok"
              num={2}
            />
            <PictureProject
              href="https://ryan-the-job-board.netlify.app"
              src="job.png"
              alt="ok"
              num={3}
            />
            <PictureProject
              href="https://ryan-to-do-list-react.netlify.app"
              src="liste.png"
              alt="ok"
              num={4}
            />
            <PictureProject
              href="https://cocky-williams-464af4.netlify.app"
              src="my-bank.png"
              alt="ok"
              num={5}
            />
          </div>
        </div>
      </div>
      <div data-scroll data-scroll-section>
        <video className={`cv-video`} loop autoPlay="preload" muted>
          <source
            src="https://res.cloudinary.com/ryan777/video/upload/v1623805569/portfolio/lollia-ryan_luf6pq.mp4"
            type="video/mp4"
          />
        </video>
      </div>
    </div>
  );
}

export default App;
