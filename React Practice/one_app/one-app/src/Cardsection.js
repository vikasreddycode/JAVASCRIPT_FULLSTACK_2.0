import React from "react";
import   './index.css';
const Cardsec = ({title,image}) => {
return ( <div class="col-4">
<div class="card" style={{width: "18rem"}}>
  <img
    src={image}
    class="card-img-top"
    alt="..."
  />
  <div class="card-body">
    <h1 class="card-title text-2xl">{title}</h1>
    <p class="card-text">
      Some quick example text to build on the card title and make up
      the bulk of the card's content.
    </p>
    <a href="#" class="btn btn-success">Go somewhere</a>
  </div>
</div>
</div>)
}
export default Cardsec;
