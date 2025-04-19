//import React from the React module.
import React from "react";

//create component Heading
function List(props) {
  return (
    <div className="productCard">
      <div className="top">
        <img className="productImg" src={props.image} />
        <h2 className="productTitle">{props.title}</h2>
      </div>
      <div className="productCardBottom">
        <p className="productInfo">{props.tagline}</p>
      </div>
    </div>
  );
}

export default List;