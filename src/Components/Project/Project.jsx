import React from "react";
import { MenuList } from "./ProjectList";
import MenuItem from "./ProjectItem";
import "../Project/project.css";

function Menu() {
  return (
    <div>
   
    <div className="menu">
      <div className="divContainer">
      <h1 className="menuTitle">Projects</h1>
      <p className="pargraph">Take a minute to see some of the projects we've created! </p>
      </div>
       
      <div className="menuList">
        {MenuList.map((menuItem, key) => {
          return (
            <MenuItem
              key={key}
              image={menuItem.image}
              name={menuItem.name}
              price={menuItem.price}
            />
          );
        })}
      </div>
      <div className="find"> 
       <button  className="findBTN">
       <a href="https://github.com/Dania-Darweesh" className="a">Find out more</a>
       </button>
       </div>
    </div>
    </div>
  );
}

export default Menu;