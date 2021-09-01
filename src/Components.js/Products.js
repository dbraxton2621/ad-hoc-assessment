import React from 'react'
import ProductItems from './ProductItems'

class Products extends React.Component {
    render() {

        const {products} = this.props

        return(
            <div>
                {products.map(products => (
                    <ProductItems 
                    product={product} 
                    key={product.id} 
                    />
                ))}
            </div>
        )
    }
}

export default Products