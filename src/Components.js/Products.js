import React from 'react'
import ProductItems from './ProductItems'

class Products extends React.Component {
    render() {

        const {Products} = this.props

        return(
            <div>
                {Products.map(Products => (
                    <ProductItems 
                    todo={Products} 
                    key={Products.id} 
                    />
                ))}
            </div>
        )
    }
}

export default Products