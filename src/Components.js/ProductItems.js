import React from 'react'

class ProductItem extends React.Component {
    render() {

        const {Products} = this.props


        return(
            <div className="listItem">
                <p>{Products.id}</p>
                <p>{Products.name}</p>
                <p>{Products.price}</p>
                <p>{Products.productNumber}</p>
            </div>
        )
    }
}

export default ProductItem