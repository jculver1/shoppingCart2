import React, { Component } from 'react'
import './App.css';
import Header from './components/header'
import Footer from './components/footer'
import CartItems from './components/cartItems'

class App extends Component {
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
        <Footer copyright='2016'/>
      </div>
    )
  }
}

export default App;
