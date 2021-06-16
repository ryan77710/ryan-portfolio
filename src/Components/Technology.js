import Note from "./Note";

import { Icon } from "@iconify/react";

export default function Technology(props) {
  const { name, toggle, number, icon, icon2 } = props;
  return (
    <p>
      <span style={toggle ? {} : { color: "cyan" }}>{name} </span>
      <span className="icon-container">
        <Icon color={toggle ? "" : "white"} icon={icon} />
        {icon2 && <Icon icon={icon2} />}
      </span>
      <Note toggle={toggle} number={number} />
    </p>
  );
}
