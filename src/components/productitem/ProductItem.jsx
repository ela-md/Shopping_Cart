import './ProductItem.css'



function ProductItem({image, name, price}){

    
    return(
        <div className="productCard">
            <div className='cardImage'>
                <img className='img-fluid' src={image} />
            </div>
            <div className="cardBody">
                <h5>{name}</h5>
                <p className='price'>price: {price}</p>
                <button className='btn btn-dark'>add to cart</button>
            </div>
        </div>
    )
}

export default ProductItem