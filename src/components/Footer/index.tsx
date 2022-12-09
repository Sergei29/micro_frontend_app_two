import React from "react";

type Props = {};

const Footer = ({}: Props): JSX.Element => {
  return (
    <footer
      style={{
        background: "black",
        width: "95%",
        height: "70px",
        color: "white",
        textAlign: "center",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        fontSize: "24px",
        paddingLeft: "15px",
        position: "fixed",
        bottom: 0,
      }}
    >
      <h4>
        Footer <small>( from the frontend two )</small>
      </h4>
    </footer>
  );
};

export default Footer;
