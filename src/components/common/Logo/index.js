import React from "react";
import logoImage from "resources/images/logo.png";
import useStyles from "./styles";

function Logo({ width }) {
  const classes = useStyles({ width });

  return <img src={logoImage} className={classes.root} />;
}

Logo.defaultProps = {
  width: 10
};

export default Logo;
