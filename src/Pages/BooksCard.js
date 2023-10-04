import React from "react";

const BooksCard = ({ item, handleClick }) => {
  const { id, name, author, price, pages } = item;
  return (
    <div className="cards">
      <div className="image_box">{/* <img src={img} alt="Image" /> */}</div>
      <div className="details">
        <p>{name}</p>
        <p>{author}</p>
        <p>Price - {price}Rs</p>
        {/* <button onClick={()=>handleClick(item)} >Add to Cart</button> */}
      </div>
    </div>
  );
};

export default BooksCard;
