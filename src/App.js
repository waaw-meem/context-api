import React,{useState,useEffect} from "react";
import BookCreate from "./components/BookCreate";
import BookList from "./components/BookList";
import axios from "axios";


function App(){
    const [book,setBook] = useState([])
    
    const fetchBook = async (term) => {
    const response = await axios.get('http://localhost:3001/book');
    
    setBook(response.data)
    }
    
    useEffect(() => {
        fetchBook()
    },[])

    const createBook = async (term) => {
    const response = await axios.post('http://localhost:3001/book',{
        term
    });

    const updatedBooks = [
        ...book,
        response.data
    ]
    setBook(updatedBooks)

    // console.log('Create book success!', term)
    // const updatedBooks = [
    //     ...book,
    //     {
    //         id:Math.round(Math.random() * 9999)
    //         ,term}
    // ]
    // setBook(updatedBooks)
    }

    const deleteBooks = async(id) => {
    const response = await axios.delete(`http://localhost:3001/book/${id}`);
        const updatedBooks = book.filter((book) => {
            return book.id !== id
        })
        setBook(updatedBooks)
    }

    const editBookById = async(id,newTerm) => {
    const response = await axios.put(`http://localhost:3001/book/${id}`,{
        term:newTerm
    });

    const updatedBooks = book.map((book) => {
    if(book.id === id){
        return {...book,...response.data}
    }
    return book
    })
    setBook(updatedBooks)
}

    return (

    <div className="app">
        <BookList books={book}
        onDelete={deleteBooks}
        onEditBook={editBookById}/>
        <BookCreate onCreateBook={createBook}/>
        
    </div>

    )

}

export default App