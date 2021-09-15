import React from "react";
import navLogo from "../images/logo.png";
import FavoriteBorderIcon from "@material-ui/icons/FavoriteBorder";
import PermIdentityIcon from "@material-ui/icons/PermIdentity";
import LocalGroceryStoreIcon from "@material-ui/icons/LocalGroceryStore";
import SearchIcon from "@material-ui/icons/Search";
import ResponsiveModal from "./ResponsiveModal";

function Nav() {
  return (
    <>
      <nav className="navigation">
        <a href="#" className="logo">
          <img src={navLogo} alt="logo" />
        </a>
        <ResponsiveModal />
        <div className="searchSec">
          <form>
            <input
              placeholder="Search For Products, Brands & Categories"
              type="text"
              className="searchInput"
            />
            <button className="searchBtn" type="submit">
              <SearchIcon />
            </button>
          </form>
        </div>
        <div className="icons">
          <a href="#" className="sections">
            <FavoriteBorderIcon />
          </a>
          <a href="#" className="sections">
            <PermIdentityIcon />
          </a>
          <a href="#" className="sections">
            <LocalGroceryStoreIcon />
          </a>
        </div>
      </nav>
    </>
  );
}

export default Nav;
