import React,{useState} from "react";
import BookEdit from "./BookEdit";

function BookShow({book,onDelete,onEditBook}){
    const [showEdit,setShowEdit] = useState(false)

    const handleClick = () => {
        onDelete(book.id)
    }

    const handleEditClick = () => {
        setShowEdit(!showEdit)
    }

    const handleSubmit = (id,term) => {
        setShowEdit(false)
        onEditBook(id,term)
    }

    let content = <h3>{book.term}</h3>
    if(showEdit){
        content = <BookEdit onSubmit={handleSubmit} book={book}/>
    }

    return (
    <div className="book-show">
        <div>{content}</div>
    <div className="actions">
    <button className="edit" onClick={handleEditClick}>Edit</button>
    <button className="delete" onClick={handleClick}>Delete</button>
    </div>
    </div>
    )
}

export default BookShow