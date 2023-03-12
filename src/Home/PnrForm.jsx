import axios from 'axios';
import React, { useState } from 'react'
import { toast } from 'react-toastify';
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
      const id = toast.loading("Please wait...")
      axios.post(`${import.meta.env.VITE_BACKEND_URL}/get-status`,{
        pnr
      })
      .then(res=>{
        toast.update(id, {render: "Successfully fetched status", type: "success", isLoading: false,autoClose: 2000});
      })
      .catch(e=>{
        toast.update(id, {render: "Something went wrong", type: "error", isLoading: false,autoClose: 2000 });
      })
    }}
    >Get PNR Status</button>
            
  </form>
  )
}

export default PnrForm