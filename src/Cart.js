import React from 'react'
import {useSelector} from 'react-redux'
function Cart() {
    const {value}=useSelector((state)=>state.User)
  return (
    <div>

     <h1>{value}</h1> 
     <img src='https://cdn.pixabay.com/photo/2019/03/16/16/08/shopping-4059182_640.png'alt=''/>  



    </div>
  )
}

export default Cart