import axios from 'axios';
import React, { useState } from 'react'

const PnrForm = () => {
  const [pnr,setPnr] = useState()
  const pattern = /^[0-9]*$/;
  // console.log(pattern.test(888));
  return (
<form action="">
    <label htmlFor="">Enter PNR Number</label>
    <input type="text" onChange={(e)=>{
      setPnr(e.target.value);
      console.log(pnr);
    }
    
    } />
    <button className='common-btn' 
    onClick={(e)=>{
      e.preventDefault();
      axios.post(`${import.meta.env.VITE_BACKEND_URL}/get-status`,{
        pnr
      })
      .then(res=>console.log(res))
    }}
    >Get PNR Status</button>
  </form>
  )
}

export default PnrForm