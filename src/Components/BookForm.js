import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";

function BookForm() {
  return (
    <div class="w-50 m-auto p-5">
      <form>
        <div class="mb-3 ">
          <label for="bookName">Book name</label>
          <input
            type="text"
            class="form-control"
            id="bookName"
            aria-describedby="bookName"
          ></input>
        </div>

        <div class="mb-3 ">
          <label for="authorName" class="form-label">
            Author Name
          </label>
          <input
            type="text"
            class="form-control"
            id="authorName"
            aria-describedby="authorName"
          ></input>
        </div>

        <div class="mb-3 ">
          <label for="pages" class="form-label">
            Pages
          </label>
          <input
            type="number"
            class="form-control"
            id="pages"
            aria-describedby="pages"
          ></input>
        </div>

        <div class="mb-3 ">
          <label for="price" class="form-label">
            Price
          </label>
          <input
            type="number"
            class="form-control"
            id="price"
            aria-describedby="price"
          ></input>
        </div>

        {/* <div class="mb-3 form-check">
          <input
            type="checkbox"
            class="form-check-input"
            id="exampleCheck1"
          ></input>
          <label class="form-check-label" for="exampleCheck1">
            Check me out
          </label>
        </div> */}
        <button type="submit" class="btn btn-primary">
          Submit
        </button>
      </form>
    </div>
  );
}

export default BookForm;
