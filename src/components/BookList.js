import BookShow from "./BookShow"
import { useContext } from "react";
import BookStore from "../context/book";

function BookList({books,onDelete,onEditBook}){
    // const {count,increamentCount} = useContext(BookStore);
    const renderedBooks = books.map((book) => {
        return <BookShow onEditBook={onEditBook} onDelete={onDelete} key={book.id} book={book}/>
    })
    return (
   <div className="book-list">
   {/* <div>
   {/* {count}
   </div>
    <button onClick={increamentCount}>Increase</button> */} */
    {renderedBooks}</div>
    )
}

export default BookList