import React, { useState } from "react";
import PnrForm from "./PnrForm";
import ResultTable from "./ResultTable";
import axios from "axios";
const index = () => {
  axios.get(`${import.meta.env.VITE_BACKEND_LIVE_URL}`);
  const [isClicked,setIsClicked] = useState(false)
  /**
   * do not show the table
   * when user clicks, do not show
   * when data is loaded - show
   * when user clicks, do not show
   */
  return (
    <div className="home-container">
        {/**cta section */}
      <section className="cta-container">
        <div className='gradient-on-image'></div>  
        <img
          src="https://images.unsplash.com/photo-1592844002373-a55ecd7af140?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=870&q=80"
          alt=""
        />
        <h5>Get PNR Status with Seat arrangment!</h5>
      </section>
    <PnrForm isClicked={isClicked} setIsClicked={setIsClicked} />
    {isClicked? <ResultTable/> : ""}

    </div>
  );
};

export default index;
