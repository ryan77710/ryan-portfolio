import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

export default function Note({ number, toggle }) {
  let note = [];
  for (let i = 0; i < 5; i++) {
    if (Number(i) + 0.5 === number) {
      note.push(
        <FontAwesomeIcon
          key={i}
          icon="star-half-alt"
          // color={toggle ? "#fdda68" : "cyan"}
          color={toggle ? "lightsteelblue" : "cyan"}
        />
      );
    } else if (i < number) {
      note.push(
        <FontAwesomeIcon
          key={i}
          icon="star"
          // color={toggle ? "#fdda68" : "cyan"}
          color={toggle ? "lightsteelblue" : "cyan"}
        />
      );
    } else note.push(<FontAwesomeIcon key={i} icon="star" color="#bdbbbb" />);
  }
  return <span className="note">{note}</span>;
}
