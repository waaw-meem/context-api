import React,{useState} from "react";

function BookEdit({book,onSubmit}){
    const [term,setTerm] = useState(book.term)

    const handleChange = (event) => {
        setTerm(event.target.value)
    }

    const handleSubmit = (event) => {
        event.preventDefault();

        onSubmit(book.id,term)
    }

    return (
        <div className="book-edit">
        <h3>Add a Book</h3>
        <form onSubmit={handleSubmit} >
            <label>Add a title</label>
            <input className="input" value={term} onChange={handleChange}/>
            <button className="button">save</button>
        </form>
       </div>
    )
}

export default BookEdit