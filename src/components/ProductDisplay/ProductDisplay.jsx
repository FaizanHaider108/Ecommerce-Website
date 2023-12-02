import React, { useContext } from 'react'
import "./ProductDisplay.css"
import star_icon from "../Assets/star_icon.png"
import star_dull_icon from "../Assets/star_dull_icon.png"
import { ShopContext } from '../../Context/ShopContext'

const ProductDisplay = ( props ) => {
    const { product } = props;
    const { AddtoCart } = useContext( ShopContext );
    return (
        <div className='productDisplay'>
            <div className='productDisplay-left'>
                <div className="productDiplay-img-list">
                    <img src={ product.image } alt="" />
                    <img src={ product.image } alt="" />
                    <img src={ product.image } alt="" />
                    <img src={ product.image } alt="" />
                </div>
                <div className="productDiaplay-image">
                    <img className='productdisplay-main-img' src={ product.image } alt="main image" />
                </div>
            </div>
            <div className='productDisplay-right'>
                <h1>{ product.name }</h1>
                <div className="propduct-display-right-stars">
                    <img src={ star_icon } alt="" />
                    <img src={ star_icon } alt="" />
                    <img src={ star_icon } alt="" />
                    <img src={ star_icon } alt="" />
                    <img src={ star_dull_icon } alt="" />
                    <p>(122)</p>
                </div>
                <div className="product-display-right-prices">
                    <div className="old-price">${ product.old_price }</div>
                    <div className="new-price">
                        ${ product.new_price }
                    </div>
                </div>
                <div className="productdisplay-right-des">
                    t is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed to using 'Content here, content here', making it look like readable English. Many desktop publishing packages and web page editors now use Lorem Ipsum as their default model text, and a search for 'lorem ipsum' will uncover many web sites still in their infancy.
                </div>
                <div className="product-display-right-size">
                    <h1>Select Size</h1>
                    <div className="productDiplay-right-size">
                        <div>S</div>
                        <div>M</div>
                        <div>L</div>
                        <div>Xl</div>
                        <div>XXL</div>
                    </div>
                </div>
                <button className='btn'
                    onClick={ () => { AddtoCart( product.id ) } }>
                    Add to Cart
                </button>
                <p className='preoductDiaplay-right-category'>
                    <span>Category: </span>
                    Women, t-Shirt, Crop-Top
                </p>
                <p className='preoductDiaplay-right-category'>
                    <span>Tags: </span>
                    Modern, latest
                </p>
            </div>

        </div>
    )
}

export default ProductDisplay