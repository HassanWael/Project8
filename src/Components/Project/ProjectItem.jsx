import React from "react";

function MenuItem({ image, name, price }) {
  return (
    <div className="menuItem">
      <div style={{ backgroundImage: `url(${image})` }}> </div>
      <h1 className="title"> {name} </h1>
      <p className="brief"> {price} </p>
      <button className="showCodeBtn"> <i class="fab fa-github"></i>
      <a href="https://github.com/Dania-Darweesh" className="showProject">Show Project</a>
      </button>
    </div>
  );
}

export default MenuItem;