import React from "react";
import classes from "./TextError.module.scss";

function TextError(props) {
  return <div className={classes.TextError}>{props.children}</div>;
}

export default TextError;