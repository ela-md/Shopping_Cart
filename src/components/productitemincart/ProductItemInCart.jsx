import './ProductItemInCart.css'



function ProductItemInCart({id, name, price, image, count, totalPrice}){
    return(
        <div className="productItemInCart">
            <div className="cardLeft">
               <img src={image}/>
            </div>
            <div className="cardMiddle">
               <button>-</button>
               <span>1</span>
               <button>+</button>
            </div>
            <div className="cardRight">
               <h5>{name}</h5>
               <p>price: {totalPrice}</p>
            </div>
        </div>
    )
}

export default ProductItemInCart