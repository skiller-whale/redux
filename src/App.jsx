import React from "react"
import Navbar from "./Navbar"
import Basket from "./Basket"
import CheckoutButton from "./CheckoutButton"
import ShopItem from "./ShopItem"

class App extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      basket: {},
      total: 0
    }

    this.setItemCount = this.setItemCount.bind(this)
  }

  getItemList() {
    return ["Book", "Toy", "Car", "House"]
  }

  getItemPrice(item) {
    const priceList = {
      "Book": 10,
      "Toy": 25,
      "Car": 2500,
      "House": 250000
    }
    return priceList[item]
  }

  setItemCount(item, count) {
    const newBasket = Object.assign({}, this.state.basket)
    const instance = this

    if(count > 0) {
      newBasket[item] = count
    }
    else if(count == 0) {
      delete newBasket[item]
    }

    let total = 0;

    this.getItemList().forEach(function(item){
      total += instance.getItemPrice(item) * (newBasket[item] || 0)
    })

    this.setState({basket: newBasket, total: total})
  }

  render(){
    const itemRows = []
    const instance = this

    this.getItemList().forEach(function(item){
      itemRows.push(<div key={item} className="col-xs-3">
        <ShopItem
          name={item}
          cost={instance.getItemPrice(item)}
          currentCount={instance.state.basket[item] || 0}
          countSetCallback={instance.setItemCount}
        />
      </div>)
    })

    let actionButton;
    if(this.state.total > 0) {
      actionButton = <div>
        <CheckoutButton total={this.state.total}/>
      </div>
    }

    return <React.Fragment>
      <Navbar name="Amazin'"/>
      <div className="container">
        <div className="row">
          <div className="col-xs-9">
            <div className="panel panel-default">
              <div className="panel-body">
                <h3>Keep shopping!</h3>
                <div className="row">
                  {itemRows}
                </div>
                {actionButton}
              </div>
            </div>
          </div>
          <div className="col-xs-3">
            <Basket items={this.state.basket} total={this.state.total} />
          </div>
        </div>
      </div>
    </React.Fragment>
  }
}

export default App
