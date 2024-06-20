import axios from "axios";
import { useSelector } from "react-redux";
import React from 'react'
import { url } from "../stores/slice/api";

const PayButton = ({cartItems}) => {
    const user =useSelector((state)=>state.auth)
    const handleCheckOut=()=>{
        axios.post(`${url}/stripe/create-checkout-session`,{
            cartItems,
            userId:user._id

        }).then((res)=>{
            if (res.data.url) {
                window.location.href=res.data.url
            }
        }).catch((err)=>console.log(err.message));
       

    }
  return (
    <>
    <button onClick={()=>handleCheckOut()}>Check out</button>
    </>
  )
}

export default PayButton