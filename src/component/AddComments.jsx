import { useState} from "react";
import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";

const AddComments = (props) => {


  const [addComment, setAddComment] = useState({
    comment: "",
    rate: "",
    elementId: props.asin,
  });

  const postComment = async (e) => {
    e.preventDefault();

    try {
      let response = await fetch(
        "https://striveschool-api.herokuapp.com/api/comments/",
        {
          method: "POST",
          body: JSON.stringify(addComment),
          headers: {
            Authorization:
              "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI2MTRiMjJhYTRiYjUzZDAwMTViMTllZGUiLCJpYXQiOjE2MzI5OTgxNzMsImV4cCI6MTYzNDIwNzc3M30.W2FmJgztmFyCsYsNpP-CJ5-vBcKzZG3RTeo4CLvwNR8",
            "Content-Type": "application/json",
          },
        }
      );
      if (response.ok) {
        alert("Your review was successfully added");
        props.fetchComments()
        setAddComment({
          ...addComment,
          comment: "",
          rate: "",
          elementId: "",
        });
      } else {
        alert("Yikes!!! an error occurred while trying to add the review");
      }
    } catch (e) {
      console.log(`yikes we got an error`, e);
    }
  };

  return (
    <>
      <Form onSubmit={postComment} style={{ minWidth: "100%" }}>
        <Form.Group controlId="exampleForm.ControlSelect1">
          <Form.Label className="text-light">Rate book</Form.Label>
          <Form.Control
            as="select"
            value={addComment.rate}
            onChange={(e) =>
              setAddComment({
                ...addComment,
                rate: e.target.value,})}>
            <option>1</option>
            <option>2</option>
            <option>3</option>
            <option>4</option>
            <option>5</option>
          </Form.Control>
        </Form.Group>

        <Form.Group controlId="exampleForm.ControlTextarea1">
          <Form.Label className="text-light">Write a review</Form.Label>
          <Form.Control
            as="textarea"
            rows={3}
            value={addComment.comment}
            onChange={(e) =>
                setAddComment({
                    ...addComment,
                    comment: e.target.value})}/>
        </Form.Group>
        <Button variant="primary" type="submit">
          Submit
        </Button>
      </Form>
    </>
  );
};

export default AddComments;
