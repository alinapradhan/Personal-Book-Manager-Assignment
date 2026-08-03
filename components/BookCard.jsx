function BookCard({ book, onDelete }) {
  return (
    <div className="book-card">
      <h3>{book.title}</h3>

      <p>
        <strong>Author:</strong> {book.author}
      </p>

      <p>
        <strong>Genre:</strong> {book.genre}
      </p>

      <p>
        <strong>Status:</strong> {book.status}
      </p>

      <p>
        <strong>Rating:</strong> ⭐ {book.rating}
      </p>

      <button onClick={() => onDelete(book._id)}>
        Delete
      </button>
    </div>
  );
}

export default BookCard;