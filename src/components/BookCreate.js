import React,{useState} from "react";

function BookCreate({onCreateBook}){
    const [title,setTitle] = useState('')

    const handleChange = (event) => {
        setTitle(event.target.value)
    }

    const handleSubmit = (event) => {
        event.preventDefault();

        onCreateBook(title)
        setTitle('')
    }

    return (
   <div className="book-create">
    <h3>Add a Book</h3>
    <form onSubmit={handleSubmit} >
        <label>Add a title</label>
        <input className="input" value={title} onChange={handleChange}/>
        <button className="button">Click to Add</button>
    </form>
   </div>
    )
}

export default BookCreate