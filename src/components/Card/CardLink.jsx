import React from "react";

function CardLink(props) {
  return (
    <a href={props.link} target="_blank" rel="noopener noreferrer">
      {props.platform}
    </a>
  );
}
export default CardLink;
