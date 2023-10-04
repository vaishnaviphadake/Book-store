import axios from "axios";
import React, { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";

function ViewBook() {
  const [book, setBook] = useState({
    name: "",
    author: "",
    price: "",
    pages: "",
  });

  const { id } = useParams();

  const loadBook = async () => {
    const result = await axios.get(`http://localhost:8080/book/${id}`);
    setBook(result.data);
  };

  useEffect(() => {
    loadBook();
  }, []);

  return (
    <div className="container">
      <div className="row">
        <div className="col-md-6 offset-md-3 border-rounded p-5 mt-5 shadow">
          <h2 className="text-center">Edit Book Details</h2>

          <div className="card">
            <div className="card-header">
              Details of book id : {book.id}
              <ul className="list-group list-group-flush">
                <li className="list-group-item">
                  <b>Name : </b>
                  {book.name}
                </li>
                <li className="list-group-item">
                  <b>Author : </b>
                  {book.author}
                </li>
                <li className="list-group-item">
                  <b>Price : </b>
                  {book.price}
                </li>
                <li className="list-group-item">
                  <b>Pages : </b>
                  {book.pages}
                </li>
              </ul>
            </div>
          </div>
          <Link className="btn btn-primary my-2" to={"/"}>
            Back to Home
          </Link>
        </div>
      </div>
    </div>
  );
}

export default ViewBook;
