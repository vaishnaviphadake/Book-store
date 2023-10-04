import React, { useEffect, useState } from "react";
import axios from "axios";
import AdminNavbar from "../Layout/AdminNavbar";
import { Link, useParams } from "react-router-dom";
import { useAuth0 } from "@auth0/auth0-react";
import BooksCard from "./BooksCard";

function Books() {
  const { loginWithRedirect, isAuthenticated, logout, user } = useAuth0();

  const [books, setBooks] = useState([]);

  const { id } = useParams();

  const [disabled, setDisabled] = useState(false);

  const onClick = () => {
    setDisabled(true);
  };

  useEffect(() => {
    loadBooks();
  }, []);

  const loadBooks = async () => {
    const result = await axios.get("http://localhost:8080/books");
    // console.log(result);
    setBooks(result.data);
  };

  //   const deleteBook = async (id) => {
  //     await axios.delete(`http://localhost:8080/book/${id}`);
  //     loadBooks();
  //   };

  const deleteBook = async (id) => {
    await axios.delete(`http://localhost:8080/book/${id}`);
    loadBooks();
  };

  return (
    <div className="container">
      <AdminNavbar />

      {isAuthenticated ? (
        <div>
          <div className="float-right">
            <Link className="btn btn-outline-light " to={`/add`}>
              <button className="text-dark p-2 btn btn-outline-success float-right ">
                Add a New Book
              </button>
            </Link>
          </div>
          <div className="p-2">
            <table className="table table-dark table-striped border-light shadow">
              <thead>
                <tr>
                  <th scope="col">Id</th>
                  <th scope="col">Name</th>
                  <th scope="col">Author</th>
                  <th scope="col">Price</th>
                  <th scope="col">Pages</th>
                  <th scope="col">Action</th>
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
                    <td>
                      {/* <Link className="btn btn-outline-light me-1 " to="/view">
                    View
                  </Link> */}
                      <Link
                        className="btn btn-outline-light mx-2"
                        to={`/view/${book.id}`}
                      >
                        View
                      </Link>
                      <Link
                        className="btn btn-outline-light me-1"
                        to={`/edit/${book.id}`}
                      >
                        Edit
                      </Link>

                      <button
                        className="btn btn-outline-danger text-light mx-2"
                        onClick={() => deleteBook(book.id)}
                      >
                        Delete
                      </button>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      ) : (
        <div className="card w-50 p-3 mx-auto">
          <img
            src="Assets//Pictures//book1.jpg"
            class="card-img-top"
            alt="..."
          ></img>
          <div className="card-body">
            <h1 className="card-title p-2">Welcome to the Book store</h1>
            <h5 className="card-text p-2">Please Login/ Sign up to Continue</h5>
            <button
              className="btn btn-outline-primary ms-2 p-2"
              onClick={() => loginWithRedirect()}
            >
              Log In / Sign up
            </button>
          </div>
        </div>
      )}

      <section>
        {books.map((item) => {
          <BooksCard item={item} />;
        })}
      </section>
    </div>
  );
}

export default Books;
