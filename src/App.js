import React from "react";
import "./App.css";
import { useState } from "react";
import books from "./images/books.jpg";

const bookStore = {
  react: [
    { name: "The Road to React", rating: "4.22 / 5" },
    { name: "Learn React.js by Building Games", rating: "4.17 / 5" },
  ],
  horror: [
    { name: "The Haunting of Hill House", rating: "4.7 / 5" },
    { name: "I Am Legend and Other Stories", rating: "5.5 / 5" },
  ],
  python: [
    { name: "Learning Python, 5th Edition", rating: "4.2 / 5" },
    {
      name: "Python for Everybody: Exploring Data in Python 3",
      rating: "4.6 / 5",
    },
  ],
  html: [
    {
      name: "HTML CSS in 8 Hours, For Beginners, Learn Coding Fast!",
      rating: "4.59 / 5",
    },
    { name: "Responsive Web Design with HTML5 and CSS", rating: "4.57 / 5" },
  ],
};

export default function App() {
  const [selectedGenre, setGenre] = useState("html");
  function genreClickHandler(genre) {
    setGenre(genre);
  }

  return (
    <>
      <div
        className="background-image"
        style={{ backgroundImage: `url(${books})` }}
      ></div>
      <div className="App">
        <h1> 📚 Readers Spot 📚 </h1>
        <div className="button_container">
          <p>Checkout my favorite books. Select a genre to get started</p>
          {Object.keys(bookStore).map((genre) => (
            <button
              className={genre === selectedGenre ? "active" : ""}
              onClick={() => genreClickHandler(genre)}
            >
              {genre}
            </button>
          ))}
        </div>

        <div>
          <ul>
            {bookStore[selectedGenre].map((book) => (
              <li key={book.name}>
                <div className="book_title"> {book.name} </div>
                <div> {book.rating} </div>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </>
  );
}
