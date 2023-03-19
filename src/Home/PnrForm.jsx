import axios from 'axios';
import React, { useState } from 'react'
import { toast } from 'react-toastify';
import { useDispatch } from 'react-redux';
import { updateData } from '../redux/pnrSlice';

const PnrForm = ({isClicked,setIsClicked}) => {
  const [pnr,setPnr] = useState()
  const pattern = /^[0-9]*$/;
  // console.log(pattern.test(888));
  const dispatch = useDispatch();
  console.log(import.meta.env.VITE_BACKEND_DEV_URL);
  return (
<form action="">
    <label htmlFor="">Enter PNR Number</label>
    <input type="text" onChange={(e)=>{
      setPnr(e.target.value);
    }
    } />
    <button className='common-btn' 
    onClick={(e)=>{
      e.preventDefault();
      setIsClicked(false)
      const id = toast.loading("Please wait...")
      axios.post(`${import.meta.env.VITE_BACKEND_DEV_URL}/get-status`,{
        pnr
      })
      .then(res=>{
        console.log(res.data.status);
        dispatch(updateData(res.data.status))
        setIsClicked(true)
        toast.update(id, {render: "Successfully fetched status", type: "success", isLoading: false,autoClose: 2000});
      })
      .catch(e=>{
        toast.update(id, {render: "Please check your PNR", type: "error", isLoading: false,autoClose: 2000 });
      })
    }}
    >Get PNR Status</button>
            
  </form>
  )
}

export default PnrForm