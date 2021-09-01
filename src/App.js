import React from 'react'
import Products from './Components.js/Products';
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
    const {products} = this.state

    const changeStateofSingleProduct = (product) => {
      this.setState({loading: true})
      this.setState({product:product})
      console.log(product)
      this.setState({loading: false})
    }

    if(loading) {
      return <Loading changeStateofSingleProduct={changeStateofSingleProduct}/>
    } else {
      return <Products products={products} />
    }
  }

}

export default App;

