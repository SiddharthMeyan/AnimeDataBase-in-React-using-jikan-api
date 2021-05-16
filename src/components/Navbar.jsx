import React from "react";

const Navbar = () => {
  return (
    <div>
      <nav className="navbar navv">
        <div className="container">
          <a className="navbar-brand">
            <img
              src="https://i.redd.it/sfs2hiacjmo61.png"
              alt=""
              width="150"
              height="80"
              className="d-inline-block align-text-top"
            />
            <h5>AnimeDataBase</h5>
          </a>
        </div>
      </nav>
    </div>
  );
};

export default Navbar;
