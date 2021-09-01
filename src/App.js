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
    const {products, loading} = this.state


    if(loading) {
      return <Loading />
    } else {
      return <Products products={products} productitem={productitem}/>
    }
  }

}

export default App;

