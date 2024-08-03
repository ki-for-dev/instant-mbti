import React from "react";

function PadDiv(props) {
  return <div className="px-4 md:px-8 my-8">{props.children}</div>;
}

export default PadDiv;
