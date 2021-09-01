import React from 'react'
import ProductItems from './ProductItems'

class Products extends React.Component {
    render() {

        const {products} = this.props

        return(
            <div>
                {products.map(Products => (
                    <ProductItems 
                    Products={Products} 
                    key={Products.id} 
                    />
                ))}
            </div>
        )
    }
}

export default Products