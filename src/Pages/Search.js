import React, { useEffect, useState } from "react";
import axios from "axios";
import AdminNavbar from "../Layout/AdminNavbar";
import { Link, useParams } from "react-router-dom";
// import { useAuth0 } from "@auth0/auth0-react";

// function Search() {
//   const [books, setBooks] = useState([]);
//   const { parameter } = useParams();

//   // useEffect(() => {
//   //   loadBooks();
//   // }, []);

//   // const loadBooks = async () => {
//   //   const result = await axios.get("http://localhost:8080/books");
//   //   // console.log(result);
//   //   setBooks(result.data);
//   // };
//   console.log(parameter + "provided");
//   // console.log(search);
//   // console.log(books);
//   // <ul className="list">
//   //   {books
//   //     .filter((book) => book.name.toLowerCase().includes(search))
//   //     .map((book) => (
//   //       <li>{book.name}</li>
//   //     ))}
//   // </ul>;

//   return (
//     <div>
//       <div className="card-body">
//         <h1 className="card-title p-2">Your Search returns :</h1>
//         {/* <h5>{parameter}</h5> */}
//       </div>
//     </div>
//   );
// }

// export default Search;

function Search() {
  const { id } = useParams();
  // const { name } = useParams();

  const [books, setBooks] = useState([]);
  const [bookById, setBookById] = useState({
    name: "",
    author: "",
    price: "",
    pages: "",
  });

  // const [bookByName, setBookByName] = useState({
  //   id: "",
  //   author: "",
  //   price: "",
  //   pages: "",
  // });

  useEffect(() => {
    loadBooks();
    loadBookById();
    // loadBookByName();
  }, []);

  const loadBooks = async () => {
    const result = await axios.get("http://localhost:8080/books");
    // console.log(result);
    setBooks(result.data);
  };

  const loadBookById = async () => {
    const bookWithId = await axios.get(`http://localhost:8080/book/${id}`);
    setBookById(bookWithId.data);
  };

  // const loadBookByName = async () => {
  //   const bookWithName = await axios.get(
  //     `http://localhost:8080/bookNameC/${name}`
  //   );
  //   setBookByName(bookWithName.data);
  //   console.log(bookWithName.data);
  // };

  // console.log(books);
  // console.log(bookById);
  // console.log(bookByName);

  return (
    <div className="container">
      <div className="row">
        <div className="col-md-6 offset-md-3 border-rounded p-5 mt-5 shadow">
          <h2 className="text-center mb-2 p-2">
            The book with given id : {bookById.id}
            {/* The book with given id : {bookByName.id} */}
          </h2>
          <h3></h3>
          <div className="card">
            <div className="card-header">
              {/* book id : {bookById.id} */}
              <ul className="list-group list-group-flush">
                <li className="list-group-item mb-3">
                  <b>Name : </b>
                  {bookById.name}
                  {/* {bookByName.name} */}
                </li>
                <li className="list-group-item mb-3">
                  <b>Author : </b>
                  {bookById.author}
                  {/* {bookByName.author} */}
                </li>
                <li className="list-group-item mb-3 ">
                  <b>Price : </b>
                  {bookById.price}
                  {/* {bookByName.price} */}
                </li>
                <li className="list-group-item mb-3">
                  <b>Pages : </b>
                  {bookById.pages}
                  {/* {bookByName.pages} */}
                </li>
              </ul>
            </div>
          </div>
          <Link className="btn btn-primary my-2" to={"/books"}>
            Back to Home
          </Link>
        </div>
      </div>
    </div>
  );
}

export default Search;
