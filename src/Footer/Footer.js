import React from "react";
import { Col, Container, Row } from "reactstrap";
import logoFooter from "../images/logo.png";

function Footer() {
  return (
    <div className="footer">
      <Container>
        <Row>
          <Col md="6">
            <div className="brandLogo">
              <img src={logoFooter} alt="logo" />
              <p className="brandText">
                Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                Asperiores, harum blanditiis explicabo numquam accusantium qui
                reiciendis atque vel deleniti quo. Lorem ipsum dolor sit amet
                consectetur, adipisicing elit. Cumque ratione eos aliquid, animi
                ipsa perferendis odio provident? Praesentium, consequatur ipsum?
              </p>
            </div>
          </Col>
          <Col md="4">
            <ul className="products">
              <p className="theme">Products</p>
              <li>
                <a href="#">Trending</a>
              </li>
              <li>
                <a href="#">My Accounts</a>
              </li>
              <li>
                <a href="#">Vendors</a>
              </li>
              <li>
                <a href="#">Brands</a>
              </li>
              <li>
                <a href="#">Store Fronts</a>
              </li>
            </ul>
            <ul className="products">
              <p className="theme">Legals</p>
              <li>
                <a href="#">Licence</a>
              </li>
              <li>
                <a href="#">Refund Policy</a>
              </li>
              <li>
                <a href="#">About Us</a>
              </li>
              <li>
                <a href="#">Contacts</a>
              </li>
            </ul>
            <ul className="products">
              <p className="theme">Contacts</p>
              <p className='sampleText'>
                Lorem ipsum dolor, sit amet consec adipisicing elit. Natus
                placeat animi incidunt quas rem libero!
              </p>
              <li>
                <a href="tel">+998 33 454 35 35</a>
              </li>
              <li>
                <a href="mailto:my@icloud.com">myEmail@icloud.com</a>
              </li>
            </ul>
          </Col>
        </Row>
      </Container>
    </div>
  );
}

export default Footer;
