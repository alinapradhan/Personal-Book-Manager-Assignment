"use client";
import BookForm from "../components/BookForm";
import { useEffect, useState } from "react";
import API from "../services/api";

export default function Home() {
  const [books, setBooks] = useState([]);

  useEffect(() => {
    fetchBooks();
  }, []);

  const fetchBooks = async () => {
    try {
      const res = await API.get("/books");
      setBooks(res.data);
    } catch (err) {
      console.error(err);
    }
  };

  return (
    <main style={{ padding: "30px" }}>
      <h1> Personal Book Manager</h1>
      <BookForm onBookAdded={fetchBooks} />

      <hr />

      {books.length === 0 ? (
        <p>No books found.</p>
      ) : (
        books.map((book) => (
          <div
            key={book._id}
            style={{
              border: "1px solid gray",
              padding: "15px",
              marginTop: "15px",
            }}
          >
            <h3>{book.title}</h3>
            <p>Author: {book.author}</p>
            <p>Status: {book.status}</p>
            <p>Rating: {book.rating}</p>
          </div>
        ))
      )}
    </main>
  );
}