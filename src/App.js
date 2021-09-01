import logo from './logo.svg';
import Products from './Components.js/Products';
import './App.css';

class App extends React.Component{

  state = {
    products: [
      {
        name: Football, 
        productNumber: 2342,
        id: 1,
        price: $5
      },
      {
        name: Basketball, 
        productNumber: 7686,
        id: 2,
        price: $4
      }
    ],
    loading: false
  }

  render() {
    const {products, product} = this.state

    const changeStateofSingleProduct = (product) => {
      this.setState({loading: true})
      this.setState({product:product})
      console.log(product)
      this.setState({loading: false})
    }


    if(loading) {
      return (
        <Loading/>
      )
    }
    return (
      <div className="App"> <Loading/>
        {/* Create state for 
          products: which is going to be an array -
          each item should have a name of the item, a product number, an id, and a price.
  
          loading: which is going to be a boolean on if the component is loading or not
  
          - Create a component for Products, loop through the Products, and output the list in 
          another component called ProductItems
        */}
        <Products product={product} changeStateofSingleProduct={changeStateofSingleProduct} products={products}/>
      </div>
    );
  }

}

export default App;

