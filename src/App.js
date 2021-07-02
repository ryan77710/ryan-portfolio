import "./App.css";

import { useState, useEffect } from "react";
import projectText from "./utils/project-text";

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
  const [scrollAnimation, setScrollAnimation] = useState(false);
  useEffect(() => {
    const scroll = new LocomotiveScroll({
      el: document.querySelector("[data-scroll-container]"),
      smooth: scrollAnimation,
      lerp: 1,
    });
    return () => {
      scroll.update();
      scroll.destroy();
    };
  }, [setScrollAnimation, scrollAnimation]);

  return (
    <div className="body">
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
        data-scroll-container
        data-scroll-section
        className={`App ${toggle ? "App-light" : "App-dark"}`}
      >
        <div
          id="pin"
          className={`presentation ${
            toggle ? "presentation-light" : "presentation-dark"
          }`}
        >
          <div className="presentation-container-left">
            <button
              onClick={() => setScrollAnimation((x) => !x)}
              className="animation-button"
            >
              scroll animation : {scrollAnimation ? "on" : "off"}
            </button>

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
              Développeur junior front-end
            </h2>
            <h3
              data-scroll
              data-scroll-speed="-2"
              onMouseEnter={() => setToggleHeader(false)}
            >
              En recherche de stage
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
                Ancien militaire en reconversion, je cherche un stage non
                rémunéré dans le but d'apprendre et de me perfectionner dans le
                domaine du développement web .
              </p>
            )}
          </div>
        </div>

        <div
          data-scroll
          className={`section link ${toggle ? "link-light" : "link-dark"}`}
        >
          <h2
            data-scroll
            data-scroll-direction="horizontal"
            data-scroll-speed="1"
          >
            Me contacter
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
                target="_blanc"
                href="mailto:ryanlollia77@gmail.com"
              >
                <Icon icon={googleGmail} /> ryanlollia77@gmail.com
              </a>
            </p>
          </div>
        </div>
        <div
          data-scroll
          className={`section skills ${
            toggle ? "skills-light" : "skills-dark"
          }`}
        >
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
              number={2}
            />
            <Technology
              name="Html-Css"
              toggle={toggle}
              icon={fileTypeHtml}
              icon2={fileTypeCss}
              number={2}
            />
            <Technology
              name="Javascript"
              toggle={toggle}
              icon={javascriptIcon}
              number={2}
            />
            <Technology
              name="React-native"
              toggle={toggle}
              icon={reactIcon}
              number={2}
            />
            <Technology
              name="Expo"
              toggle={toggle}
              icon={expoIcon}
              number={1}
            />
            <Technology
              name="Github"
              toggle={toggle}
              icon={githubIcon}
              number={1}
            />
            <Technology
              name="Jest"
              toggle={toggle}
              icon={fileTypeJest}
              number={1}
            />
            <Technology
              name="Express"
              toggle={toggle}
              icon={fileTypeNode}
              number={2}
            />
            <Technology
              name="Mongodb"
              toggle={toggle}
              icon={mongodbIcon}
              number={2}
            />
          </div>
        </div>
        <div
          data-scroll
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
              text={projectText.vinted}
            />
            <Project
              name="Marvel"
              src="https://res.cloudinary.com/ryan777/video/upload/v1623806749/portfolio/marvel_i7mao4.mov"
              lien="https://ryan-marvel.netlify.app"
              text={projectText.marvel}
            />
            <Project
              name="Tellmemore(privé)"
              src="https://res.cloudinary.com/ryan777/video/upload/v1623805655/portfolio/tellmemore_wttg9m.mov"
              text={projectText.tellmemore}
            />

            <Project
              name="Tripadvisor"
              src="https://res.cloudinary.com/ryan777/video/upload/v1623806736/portfolio/tripadvisor_l1augo.mov"
              lien="https://ryan-tripadvisor.netlify.app"
              text={projectText.tripAdvisor}
            />
            <Project
              name="Deliveroo"
              src="https://res.cloudinary.com/ryan777/video/upload/v1623805656/portfolio/deliveroo_zbottd.mov"
              lien="https://ryan-delivro.netlify.app"
              text={projectText.deliveroo}
            />
          </div>
        </div>
        <div
          data-scroll
          className={`section others ${
            toggle ? "others-light" : "others-dark"
          }`}
        >
          <h2>Autres</h2>

          <div className="picture-project-container">
            <div data-scroll data-scroll-speed="1">
              <PictureProject
                href="https://ryan-emoji.netlify.app"
                src="emoji.png"
                alt="ok"
              />
              <p>Petit site pour trouver des émojies et les copier.</p>
            </div>
            <div data-scroll data-scroll-speed="2">
              <PictureProject
                href="https://ryan-to-do-list-react.netlify.app"
                src="liste.png"
                alt="ok"
              />
              <p>
                Petit site To-Do liste permet d'ajouter une note, la rechercher,
                et la supprimer.
              </p>
            </div>
          </div>
        </div>
        <div data-scroll>
          <video className={`cv-video`} loop autoPlay="preload" muted>
            <source
              src="https://res.cloudinary.com/ryan777/video/upload/v1625190990/portfolio/Copie_de_lollia_ryan_cv_irswxl.mp4"
              type="video/mp4"
            />
          </video>
        </div>
      </div>
    </div>
  );
}

export default App;
