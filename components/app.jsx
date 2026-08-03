import { useEffect, useState } from "react";
import Navbar from "./components/Navbar";
import BookForm from "./components/BookForm";
import BookList from "./components/BookList";


function App() {

  const [books, setBooks] = useState([]);


  const fetchBooks = async () => {
    const response = await fetch(
      "http://localhost:5000/api/books"
    );

    const data = await response.json();

    setBooks(data);
  };


  useEffect(() => {
    fetchBooks();
  }, []);


  const addBook = async (book) => {

    await fetch(
      "http://localhost:5000/api/books",
      {
        method: "POST",
        headers:{
          "Content-Type":"application/json",
        },
        body: JSON.stringify(book),
      }
    );

    fetchBooks();
  };


  const deleteBook = async (id) => {

    await fetch(
      `http://localhost:5000/api/books/${id}`,
      {
        method:"DELETE",
      }
    );

    fetchBooks();
  };


  return (
    <>
      <Navbar />

      <BookForm addBook={addBook}/>

      <BookList
        books={books}
        onDelete={deleteBook}
      />
    </>
  );
}


export default App;