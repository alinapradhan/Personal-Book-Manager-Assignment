import BookCard from "./BookCard";

function BookList({ books, onDelete }) {
  return (
    <div>
      <h2>My Books</h2>

      {books.length === 0 ? (
        <p>No books added yet.</p>
      ) : (
        books.map((book) => (
          <BookCard
            key={book._id}
            book={book}
            onDelete={onDelete}
          />
        ))
      )}
    </div>
  );
}

export default BookList;