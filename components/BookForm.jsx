import { useState } from "react";

function BookForm({ addBook }) {

  const [book, setBook] = useState({
    title: "",
    author: "",
    genre: "",
    status: "Want to Read",
    rating: 0,
  });


  const handleChange = (e) => {
    setBook({
      ...book,
      [e.target.name]: e.target.value,
    });
  };


  const handleSubmit = (e) => {
    e.preventDefault();

    addBook(book);

    setBook({
      title: "",
      author: "",
      genre: "",
      status: "Want to Read",
      rating: 0,
    });
  };


  return (
    <form onSubmit={handleSubmit}>

      <input
        name="title"
        placeholder="Book title"
        value={book.title}
        onChange={handleChange}
      />


      <input
        name="author"
        placeholder="Author"
        value={book.author}
        onChange={handleChange}
      />


      <input
        name="genre"
        placeholder="Genre"
        value={book.genre}
        onChange={handleChange}
      />


      <select
        name="status"
        value={book.status}
        onChange={handleChange}
      >
        <option>Want to Read</option>
        <option>Reading</option>
        <option>Completed</option>
      </select>


      <input
        type="number"
        name="rating"
        min="0"
        max="5"
        placeholder="Rating"
        value={book.rating}
        onChange={handleChange}
      />


      <button type="submit">
        Add Book
      </button>

    </form>
  );
}

export default BookForm;