import React from "react";

const index = () => {
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
      <form action="">
        <label htmlFor="">Enter PNR Number</label>
        <input type="text" />
      </form>
    </div>
  );
};

export default index;
