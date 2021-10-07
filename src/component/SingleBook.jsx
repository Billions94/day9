import Card from "react-bootstrap/Card";
// import { Component } from "react";
import Button from "react-bootstrap/Button";

const SingleBook = (props) => {
  return (
    <>
      <div className="mt-4 mb-5 ml-2">
        <Card
          onClick={() => props.changeSelectedBook(props.book.asin)}
          key={props.book.asin}
          style={{ width: "16rem" }}
        >
          <Card.Img
            variant="top"
            src={props.book.img}
            style={{ height: "20rem" }}
          />
          <Card.Body>
            <Card.Title className="clamp">{props.book.title}</Card.Title>
            <h5 className="d-inline-block">Category: {props.book.category}</h5>
            <div className="d-flex justify-content-between">
              <Button variant="warning">Buy</Button>
              <div>{"€" + props.book.price}</div>
            </div>
          </Card.Body>
        </Card>
      </div>
    </>
  );
};

export default SingleBook;
