import React from 'react'

class ProductItem extends React.Component {
    render() {

        const {product} = this.props


        return(
            <div className="listItem">
                <p>{product.id}</p>
                <p>{product.name}</p>
                <p>{product.price}</p>
                <p>{product.productNumber}</p>
            </div>
        )
    }
}

export default ProductItem