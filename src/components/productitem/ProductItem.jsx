import { useContext } from 'react'
import { AppContext } from '../../context'
import './ProductItem.css'
import database from '../../database'

function ProductItem({id, image, name, price}){
     
const {addedToCart, setAddedToCart, addedProducts, setAddedProducts} = useContext(AppContext)

const addToCartHandler = ()=> {
setAddedToCart(addedToCart + 1)
const product = database.find(product => product.id == id)
product.count = 1
product.totalPrice = product.price * product.count
setAddedProducts(prevState => [...prevState , product]);




}

return(
        <div className="productCard">
            <div className='cardImage'>
                <img className='img-fluid' src={image} />
            </div>
            <div className="cardBody">
                <h5>{name}</h5>
                <p className='price'>price: {price.toLocaleString()}</p>
                <button onClick={addToCartHandler}  className='btn btn-dark'>add to cart</button>
            </div>
        </div>
    )
}

export default ProductItem