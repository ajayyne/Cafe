import React from "react";
import vegan from "./Vegan";
import List from "./List";


function createItems(vegan) {
  return (
    <List
      title={vegan.name}
      image={vegan.image}
    />
  );
}

function veganList() {
  return (
    <div className="grid">
      {vegan.map((vegan) => (
        <div className="card" key={vegan.name}>
          <div className="top">
            <img className="productImg" src={vegan.image} alt="muffin" />
            <h2 className="name">{vegan.name}</h2>
            <p>{vegan.price}</p>
          </div>
        </div>
      ))}
    </div>
  );
}

export default veganList;
