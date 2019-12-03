import React from 'react'

const CheckoutButton = function({total}){
  return <button className="btn btn-default">Check out now for ${total}</button>
}

export default CheckoutButton
