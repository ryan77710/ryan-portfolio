import { useState } from "react";
export default function Project({ name, src, lien }) {
  const [toggle, setToggle] = useState(false);
  const myVid = document.getElementsByClassName(`${name}vid`);

  return (
    <div
      data-scroll
      data-scroll-speed="3"
      onMouseEnter={() => myVid[0].play()}
      onMouseLeave={() => myVid[0].pause()}
      id="project"
      className="project"
    >
      <h3>
        <a href={lien} target="_blanc">
          {name}
        </a>
      </h3>
      <video
        onClick={() => setToggle((x) => !x)}
        className={`${name}vid ${toggle ? "video-growing" : "video-initial"}`}
        muted
      >
        <source src={src} />
      </video>
    </div>
  );
}
