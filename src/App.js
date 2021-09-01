import React from 'react'
import Products from './Components.js/Products';
import Loading from './Components.js/Loading'
import './App.css';

class App extends React.Component{

  state = {
    products: [
      {
        name: "Football", 
        productNumber: 2342,
        id: 1,
        price: "$5"
      },
      {
        name: "Basketball", 
        productNumber: 7686,
        id: 2,
        price: "$4"
      }
    ],
    loading: false
  }

  render() {
    const {products, productitem} = this.state

    const changeStateofSingleProduct = (product) => {
      this.setState({loading: true})
      this.setState({product:product})
      console.log(product)
      this.setState({loading: false})
    }

    if(Products) {
      return <Products products={products} productitem={productitem}/>
    } else {
      return <Loading changeStateofSingleProduct={changeStateofSingleProduct}/>
    }
  }

}

export default App;

