import React, { Component } from 'react'
import './App.css';
import Header from './components/header'
import Footer from './components/footer'
import CartItems from './components/cartItems'
import AddItems from './components/AddItem'

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
    checkOutItems: []
  }

}

addItem = (event) =>{
  event.preventDefault()

let newItem = {
  product: {
    id: 1, //this.state.cartItemsList.length + 1,
    name: this.state.name,
    priceInCents: this.state.price
  },
  quantity: this.state.quantity
}  
console.log(newItem)
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
  console.log(event.target.value)
  this.setState({
    quantity: event.target.value
  })
}

  render() {
   const cartItemsList = 
    [
      { id: 1, product: { id: 40, name: 'Mediocre Iron Watch', priceInCents: 399 }, quantity: 1 },
      { id: 2, product: { id: 41, name: 'Heavy Duty Concrete Plate', priceInCents: 499 }, quantity: 2 },
      { id: 3, product: { id: 42, name: 'Intelligent Paper Knife', priceInCents: 1999 }, quantity: 1 },
    ]

    return (
      <div>
        <Header/>
        <CartItems cartItemsList = {cartItemsList}/>
        <AddItems addItem = {this.addItem} product = {this.state.products} selectItem = {this.selectItem} quantity = {this.quantity} />
        <Footer copyright='2016'/>
      </div>
    )
  }
}

export default App;
