import React from 'react'

class ProductItem extends React.Component {
    render() {

        const {Products} = this.props


        return(
            <div className="listItem">
                <p>{Products.id}</p>
            </div>
        )
    }
}

export default ProductItem