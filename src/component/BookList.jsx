import { useState } from "react";
import Container from "react-bootstrap/Container";
import FormControl from "react-bootstrap/FormControl";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Comments from './Comments'
// Importing SingleBook and pass
import SingleBook from "./SingleBook";
// Book Data
import Horror from "../data/horror.json";

const BookList = () => {


const [title, setTitle] = useState('')
const [queryBooks, setQueryBooks] = useState(Horror)
const [selectedBook, setSelectedBook] = useState(null)

  const filterBooks = (query) => {
    let queryBooks = Horror.filter((book) =>
      book.title.toLowerCase().includes(query.toLowerCase())
    );
    setQueryBooks({ queryBooks });
  };


    return (
      <Container className="mb-5 mt-5 fluid">
        <div className="d-flex justify-content-center mb-3">
          <FormControl
            className="input"
            placeholder="Search your favorite horror book..."
            value={title}
            onChange={(e) => {
                setTitle(e.target.value);
                filterBooks(e.target.value);
            }}
          />
        </div>
        <Row>
            <Col md={9}>
                <div className="d-flex" style={{width:"100%"}}>
                {
                    queryBooks.map((book) => (
                    <Col key={book.asin} >
                    <SingleBook book={book}
                    selectedBook={selectedBook}
                    changeSelectedBook={asin => setSelectedBook(asin)} />
                    </Col>
                ))}
                </div>
            </Col>
            <Col>
               { selectedBook && <div className="mt-4 mb-5 ml-2"  style={{ minWidth: "7rem" }}>
                    <Comments asin={selectedBook} />
                </div>}
            </Col>
         </Row>   
      </Container>
    );
  
 
}

export default BookList;
