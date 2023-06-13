import React from "react";
import './index.css'
import Cardsec from "./Cardsection";
const Touchsec = () => {
    return( <section class="contact bg-success ">
    <div class="container ">
      <h2 class="text-white pl-[6vw] text-4xl ">
        We love new friends!
      </h2>
      <div class="row pl-[6vw] pt-[3vh]">
        <Cardsec title={"Delhi"} image={"https://images.pexels.com/photos/3532557/pexels-photo-3532557.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500"}/>
        <Cardsec title={"Bangkok"} image= {"https://images.pexels.com/photos/3532544/pexels-photo-3532544.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500"}/>
        <Cardsec title={"London"} image= {"https://images.pexels.com/photos/2522663/pexels-photo-2522663.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500"}/>        
      </div>
     
    </div>
  </section>)
} 
export default Touchsec;