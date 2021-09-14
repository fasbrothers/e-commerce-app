import React from "react";
import { CardBody, Col, Container, Row, Card, CardFooter } from "reactstrap";
import sneakers1 from "../images/img4.png";
import sneakers2 from "../images/img3.png";
import sneakers3 from "../images/img1.png";
import sneakers4 from "../images/img2.png";

function NewCollection() {
  return (
    <div className="newCollect">
      <Container>
        <Row>
          <Col md="12" className="page">
            <p>Straight from Nike</p>
            <h4>New Collection</h4>
          </Col>
          <Col lg="6" md="12" className="cardArea">
            <Row>
              <Col className="cards" lg="6" md="6">
                <Card>
                  <CardBody>
                    <img src={sneakers1} alt="shoes" />
                  </CardBody>
                  <CardFooter>
                    <div className="texts">
                      <p>Nike Air Force </p>
                      <span>$99</span>
                    </div>
                  </CardFooter>
                </Card>
              </Col>
              <Col className="cards" lg="6" md="6">
                <Card>
                  <CardBody>
                    <img src={sneakers3} alt="shoes" />
                  </CardBody>
                  <CardFooter>
                    <div className="texts">
                      <p>Nike Air Force </p>
                      <span>$99</span>
                    </div>
                  </CardFooter>
                </Card>
              </Col>
              <Col className="cards" lg="6" md="6">
                <Card>
                  <CardBody>
                    <img src={sneakers4} alt="shoes" />
                  </CardBody>
                  <CardFooter>
                    <div className="texts">
                      <p>Nike Air Force </p>
                      <span>$99</span>
                    </div>
                  </CardFooter>
                </Card>
              </Col>
              <Col className="cards" lg="6" md="6">
                <Card>
                  <CardBody>
                    <img src={sneakers1} alt="shoes" />
                  </CardBody>
                  <CardFooter>
                    <div className="texts">
                      <p>Nike Air Force </p>
                      <span>$99</span>
                    </div>
                  </CardFooter>
                </Card>
              </Col>
            </Row>
          </Col>
          <Col lg="6" md="6">
            <Card>
              <CardBody>
                <div className="productPrice">
                  <span>Sale -50%</span>
                  <span>$99</span>
                </div>
                <div className="image">
                  <img src={sneakers2} alt="" />
                </div>
              </CardBody>
              <CardFooter className="cardFooter">
                <h4 className="productName">Nike Air Force Shadow</h4>
                <p className="productBrand">Brand: Nike</p>
              </CardFooter>
            </Card>
          </Col>
          <Col md="12" className="btnArea">
            <a href="#">Explore Other Products</a>
          </Col>
        </Row>
      </Container>
    </div>
  );
}

export default NewCollection;
