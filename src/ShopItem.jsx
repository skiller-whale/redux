import React from 'react'

import { getItemPrice } from './items'

const ShopItem = ({name, currentCount, countSetCallback}) => {
  const cost = getItemPrice(name)

  const increment = () => countSetCallback(name, currentCount + 1)
  const decrement = () => countSetCallback(name, currentCount - 1)

  return <div className="panel">
    <div className="panel-body">
      <h3>Buy {name}!</h3>
      <p>Cost ${cost}</p>
      <div>
        <button onClick={decrement}>-</button>
        <span>{currentCount}</span>
        <button onClick={increment}>+</button>
      </div>
    </div>
  </div>
}

export default ShopItem
