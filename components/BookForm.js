"use client";

import { useState } from "react";
import API from "../services/api";

export default function BookForm({ onBookAdded }) {
  const [formData, setFormData] = useState({
    title: "",
    author: "",
    genre: "",
    status: "Want to Read",
    rating: "",
    notes: "",
  });

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      await API.post("/books", formData);

      alert("Book added successfully!");

      setFormData({
        title: "",
        author: "",
        genre: "",
        status: "Want to Read",
        rating: "",
        notes: "",
      });

      if (onBookAdded) {
        onBookAdded();
      }
    } catch (err) {
      console.error(err);
      alert("Failed to add book");
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      <input
        type="text"
        name="title"
        placeholder="Book Title"
        value={formData.title}
        onChange={handleChange}
        required
      />
      <br /><br />

      <input
        type="text"
        name="author"
        placeholder="Author"
        value={formData.author}
        onChange={handleChange}
        required
      />
      <br /><br />

      <input
        type="text"
        name="genre"
        placeholder="Genre"
        value={formData.genre}
        onChange={handleChange}
      />
      <br /><br />

      <select
        name="status"
        value={formData.status}
        onChange={handleChange}
      >
        <option>Want to Read</option>
        <option>Reading</option>
        <option>Completed</option>
      </select>

      <br /><br />

      <input
        type="number"
        name="rating"
        placeholder="Rating (1-5)"
        min="1"
        max="5"
        value={formData.rating}
        onChange={handleChange}
      />

      <br /><br />

      <textarea
        name="notes"
        placeholder="Notes"
        value={formData.notes}
        onChange={handleChange}
      />

      <br /><br />

      <button type="submit">Add Book</button>
    </form>
  );
}