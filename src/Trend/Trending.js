import React from "react";
import { Card, CardBody, CardHeader, Col, Container, Row } from "reactstrap";
import Trend from "../JSON/trending.json";

function Trending() {
  return (
    <div className="trending">
      <div className="pageTitles">
        <p>TOP PRODUCTS</p>
        <h4>TRENDING THIS WEEK</h4>
      </div>
      <Container className="trendingCards">
        <Row>
          {Trend.map((post) => {
            return (
              <Col md="3" key={post.id}>
                <Card>
                  <CardHeader>
                    <img src={post.img} alt="shoess" />
                  </CardHeader>
                  <CardBody>
                    <div className="infoTitle">
                      <p className="name">{post.name}</p>
                      <span className="price">{post.price}</span>
                    </div>
                  </CardBody>
                </Card>
              </Col>
            );
          })}
        </Row>
      </Container>
    </div>
  );
}

export default Trending;
