  export function getItemList() {
    return ["Book", "Toy", "Car", "House"]
  }

  export function getItemPrice(item) {
    const priceList = {
      "Book": 10,
      "Toy": 25,
      "Car": 2500,
      "House": 250000
    }
    return priceList[item]
  }
