import React from "react";

const Header = () => {
  return (
    <nav className="navbar navbar-light bg-light d-flex flex-row">
      <div className="container-fluid">
        <a className="navbar-brand" href="#">
          Trello
        </a>
        <div className="creatework">create workspace</div>
      </div>
    </nav>
  );
};

export default Header;
