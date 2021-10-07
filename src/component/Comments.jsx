import { useState, useEffect } from "react";
import ListGroup from "react-bootstrap/ListGroup";
import AddComments from "./AddComments";
import DeleteComments from "./DeleteComments";

const Comments = (props) => {
  const [comments, setComments] = useState([]);

  useEffect(() => {
      if(props.asin) {
           fetchComments();
      } 
      // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [props.asin]);

  console.log("in comments", props.asin)

  const fetchComments = async () => {
    try {
      const response = await fetch(
        `https://striveschool-api.herokuapp.com/api/comments/` + props.asin,
        {
          headers: {
            Authorization:
              "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI2MTRiMjJhYTRiYjUzZDAwMTViMTllZGUiLCJpYXQiOjE2MzI5OTgxNzMsImV4cCI6MTYzNDIwNzc3M30.W2FmJgztmFyCsYsNpP-CJ5-vBcKzZG3RTeo4CLvwNR8",
          },
        }
      );
      if (response) {
        const data = await response.json();
        console.log(`Here is your data` + data);
        setComments(data);
        console.log(comments);
      } else {
        console.log(`An error occurred while trying to fetch data`);
      }
    } catch (e) {
      console.error(e);
    }
  };

  return (
    <>
      <div>
        <AddComments asin={props.asin} fetchComments={fetchComments}/>
      </div>

      {comments.map((info) => (
        <div key={info._id}>
          <ListGroup.Item>{info.comment}</ListGroup.Item>
          <ListGroup.Item>{info.rate}</ListGroup.Item>
          <DeleteComments id={info._id} />
        </div>
      ))}
    </>
  );
};
export default Comments;
