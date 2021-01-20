import React from "react";
import Button from "./Button";

const Header = ({ title, onShow, showForm }) => {
  return (
    <header className="header">
      <h1>{title}</h1>
      <Button
        color={showForm ? "red" : "green"}
        text={showForm ? "close" : "ADD"}
        onShow={onShow}
      />
    </header>
  );
};

Header.defaultProps = {
  title: "TASK TRACKER",
};
export default Header;
