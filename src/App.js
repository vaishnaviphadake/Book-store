import "./App.css";
import "../node_modules/bootstrap/dist/css/bootstrap.min.css";
import Navbar from "./Layout/Navbar";
// import Home from "./Pages/Home";
import AddBook from "./Pages/AddBook";
import ViewBook from "./Pages/ViewBook";
import DeleteBook from "./Pages/DeleteBook";
import EditBook from "./Pages/EditBook";
import Home from "./Components/Home";

import AdminHome from "./Pages/AdminHome";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Login from "./Pages/Login";
import Footer from "./Components/Footer";
import Register from "./Pages/Register";
import Search from "./Pages/Search";
import Books from "./Pages/Books";

function App() {
  return (
    <div className="App">
      <Router>
        <Routes>
          <Route
            exact
            path="/demo"
            element={<h1>This is for testing React Router </h1>}
          />
          <Route exact path="/" element={<AdminHome />} />
          <Route exact path="/home" element={<Home />} />
          <Route exact path="/books" element={<Books />} />
          <Route exact path="/add" element={<AddBook />} />
          <Route exact path="/edit/:id" element={<EditBook />} />
          <Route exact path="/view/:id" element={<ViewBook />} />
          <Route exact path="/search/:id" element={<Search />} />
          <Route exact path="/login" element={<Login />} />
          <Route exact path="/register" element={<Register />} />
          <Route exact path="/delete" element={<DeleteBook />} />
        </Routes>
        {/* <AdminHome /> */}
      </Router>
      <Footer />
    </div>
  );
}

export default App;

//Resourse = https://youtu.be/4LZKnegAm4g
