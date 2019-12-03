import React from "react"
import CheckoutButton from "./CheckoutButton"

const Basket = ({items, total}) => {
  let basket_display;

  if(Object.keys(items).length == 0) {
    basket_display = <div>Your basket is empty :(</div>
  }
  else {
    const item_display = []
    Object.keys(items).forEach( (item) => {
      item_display.push(<tr key={item}><td>{item}</td><td>x {items[item]}</td></tr>)
    })

    basket_display = <div>
      <table className="table"><tbody>{item_display}</tbody></table>
      <CheckoutButton total={total}/>
    </div>
  }

  return <div className="panel panel-default">
    <div className="panel-body">
      <h3>Your Basket</h3>
      {basket_display}
    </div>
  </div>
}

export default Basket
