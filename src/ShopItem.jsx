import React from 'react'

const ShopItem = ({name, cost, currentCount, countSetCallback}) => {
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
