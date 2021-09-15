import React from "react";
import {
  UncontrolledDropdown,
  DropdownToggle,
  DropdownMenu,
  DropdownItem,
} from "reactstrap";
import MenuIcon from "@material-ui/icons/Menu";
import FavoriteBorderIcon from "@material-ui/icons/FavoriteBorder";
import PermIdentityIcon from "@material-ui/icons/PermIdentity";
import LocalGroceryStoreIcon from "@material-ui/icons/LocalGroceryStore";

function CategoriesSec() {
  return (
    <div className="categories">
      <UncontrolledDropdown>
        <DropdownToggle caret>
          <MenuIcon className="menuIcon" />
          All categories
        </DropdownToggle>
        <DropdownMenu>
          <DropdownItem>Another Action</DropdownItem>
          <DropdownItem>Another Action</DropdownItem>
          <DropdownItem>Another Action</DropdownItem>
          <DropdownItem id='responsiveIcons'>
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
          </DropdownItem>
        </DropdownMenu>
      </UncontrolledDropdown>
      <ul className="links">
        <li className="linkItem">
          <a href="#" className="link active">
            Home
          </a>
        </li>
        <li className="linkItem">
          <a href="#" className="link">
            New Arrivals
          </a>
        </li>
        <li className="linkItem">
          <a href="#" className="link">
            Trending
          </a>
        </li>
        <li className="linkItem">
          <a href="#" className="link">
            Deals for you
          </a>
        </li>
        <li className="linkItem">
          <a href="#" className="link">
            Discounts
          </a>
        </li>
        <li className="linkItem">
          <a href="#" className="link">
            Weekly offer
          </a>
        </li>
        <li className="linkItem">
          <a href="#" className="link">
            Become a vendor
          </a>
        </li>
      </ul>
    </div>
  );
}

export default CategoriesSec;
