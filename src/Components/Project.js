import { useState } from "react";
export default function Project({ name, src, text, lien }) {
  const [toggle, setToggle] = useState(false);
  const [showText, setShowText] = useState(true);
  const myVid = document.getElementsByClassName(`${name}vid`);

  return (
    <div data-scroll data-scroll-speed="3" id="project" className="project">
      <h3>
        <a href={lien} target="_blanc">
          {name}
        </a>
      </h3>
      {showText ? (
        <>
          <video
            onMouseEnter={() => myVid[0].play()}
            onMouseLeave={() => myVid[0].pause()}
            onClick={() => setToggle((x) => !x)}
            className={`${name}vid ${toggle ? "size-growing" : "size-initial"}`}
            muted
          >
            <source src={src} />
          </video>
        </>
      ) : (
        <div
          onClick={() => setToggle((x) => !x)}
          className={`project-info ${toggle ? "size-growing" : "size-initial"}`}
        >
          {text}
        </div>
      )}
      <button onClick={() => setShowText((x) => !x)} className="project-button">
        ?
      </button>
    </div>
  );
}
