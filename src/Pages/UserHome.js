import React, { useEffect, useState } from "react";
import axios from "axios";
import Navbar from "../Layout/Navbar";

function UserHome() {
  const [books, setBooks] = useState([]);

  useEffect(() => {
    loadBooks();
  }, []);

  const loadBooks = async () => {
    const result = await axios.get("http://localhost:8080/books");
    // console.log(result);
    setBooks(result.data);
  };

  return (
    <div className="container">
      <Navbar />
      <div className="py-4">
        <table className="table table-dark table-striped border-light shadow">
          <thead>
            <tr>
              <th scope="col">Id</th>
              <th scope="col">Name</th>
              <th scope="col">Author</th>
              <th scope="col">Price</th>
              <th scope="col">Pages</th>
            </tr>
          </thead>
          <tbody>
            {books.map((book, index) => (
              <tr>
                <th scope="row" key={index}>
                  {index + 1}
                </th>
                <td>{book.name}</td>
                <td>{book.author}</td>
                <td>{book.price}</td>
                <td>{book.pages}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}

export default UserHome;
