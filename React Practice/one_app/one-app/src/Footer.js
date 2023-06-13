import React from "react";
import './index.css'
const Footersec = ({contact}) => {
    return (<section class="footer  bg-dark text-white">
    <p class="lead container pb-[2vh]">{contact}</p>
  </section>);

}
export default Footersec;