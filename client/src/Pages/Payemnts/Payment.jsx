import React from 'react'
import { useLocation } from 'react-router-dom'

const Payment = () => {
    const {state}=useLocation();

    console.log(state)
  return (
    <div>
      Payment
    </div>
  )
}

export default Payment
