import React, { Component } from 'react'
import './App.css';
import Header from './components/header'
import Footer from './components/footer'
import CartItems from './components/cartItems'
import AddItems from './components/AddItem'
import Total from './components/total'

class App extends Component {
constructor () {
  super()
  this.state = {
    products: [
      { id: 40, name: 'Mediocre Iron Watch', priceInCents: 399 },
      { id: 41, name: 'Heavy Duty Concrete Plate', priceInCents: 499 },
      { id: 42, name: 'Intelligent Paper Knife', priceInCents: 1999 },
      { id: 43, name: 'Small Aluminum Keyboard', priceInCents: 2500 },
      { id: 44, name: 'Practical Copper Plate', priceInCents: 1000 },
      { id: 45, name: 'Awesome Bronze Pants', priceInCents: 399 },
      { id: 46, name: 'Intelligent Leather Clock', priceInCents: 2999 },
      { id: 47, name: 'Ergonomic Bronze Lamp', priceInCents: 40000 },
      { id: 48, name: 'Awesome Leather Shoes', priceInCents: 3990 },
    ],
    checkOutItems: [],
    total: 0
  }
}

addItem = (event) =>{
  event.preventDefault()

let newItem = {
  product: {
    id: this.state.checkOutItems.length + 1,
    name: this.state.name,
    priceInCents: this.state.price
  },
  quantity: this.state.quantity
}  

let newTotal = {
  total: ((this.state.price * this.state.quantity) / 100 )
}

this.setState({
  checkOutItems: [...this.state.checkOutItems, newItem],
  total: (this.state.total + newTotal.total)
})
}

selectItem = (event) => {
event.preventDefault()
let findPrice = this.state.products.filter(products => products.name === event.target.value)

let priceOfItem = findPrice.map(obj => obj.priceInCents)
this.setState({
  name: event.target.value,
  price: priceOfItem[0]
})
}

quantity = (event) => {
  event.preventDefault()
  this.setState({
    quantity: event.target.value
  })
}

  render() {
    return (
      <div>
        <Header/>
        <CartItems checkOutItems = {this.state.checkOutItems}/>
        <Total total = {this.state.total}/>
        <AddItems addItem = {this.addItem} product = {this.state.products} selectItem = {this.selectItem} quantity = {this.quantity} />
        <Footer copyright='2016'/>
      </div>
    )
  }
}

export default App;
