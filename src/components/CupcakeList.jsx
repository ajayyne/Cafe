import React from "react";
import cupcakes from "./Cupcakes";
import List from "./List";


function createItems(cupcakes) {
  return (
    <List
      title={cupcakes.name}
      image={cupcakes.image}
      
    />
  );
}

function cupcakeList() {
  return (
    <div className="grid">
      {/* loop through cupcake obj array. for each cupcake: */}
      {cupcakes.map((cupcake) => (
        <div className="card" key={cupcake.name}>
          <div>
            <img className="productImg" src={cupcake.image} alt="cupcake" />
            <h2 className="name">{cupcake.name}</h2>
            <p>{cupcake.price}</p>
          </div>
        </div>
      ))}
    </div>
  );
}

export default cupcakeList;
