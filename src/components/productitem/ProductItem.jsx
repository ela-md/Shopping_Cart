import { useContext } from 'react'
import { AppContext } from '../../context'
import './ProductItem.css'
import database from '../../database'

function ProductItem({id, image, name, price}){
     
const {addedToCart, setAddedToCart, addedProducts, setAddedProducts} = useContext(AppContext)

const addToCartHandler = ()=> {

    if(isProductExistInCart()) {
         const updateAddedproduct = [...addedProducts]
         updateAddedproduct.map(product => {
            if(product.id == id) {
                product.count += 1
                product.totalPrice = product.count * product.price
            }
            setAddedProducts(updateAddedproduct)
            return
         })
    }else{
        setAddedToCart(addedToCart + 1)
        const product = database.find(product => product.id == id)
        product.count = 1
        product.totalPrice = product.price * product.count
        setAddedProducts(prevState => [...prevState , product]);
    }
}

const isProductExistInCart = () => {
  return  addedProducts.some(product => product.id == id)
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