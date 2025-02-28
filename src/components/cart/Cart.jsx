import './Cart.css'
import { useContext } from 'react'
import {AppContext} from '../../context'
import ProductItemInCart from '../productitemincart/ProductItemInCart'

function Cart () {

const {addedToCart, setAddedToCart, addedProducts, setAddedProducts} = useContext(AppContext)

    return(
      <div className="cartContainer">
      {addedToCart > 0 ? (
        <>
        {addedProducts.map(product => (
          <ProductItemInCart key={product.id} {...product} />
        ))}
        </>
           ) : ( 
           <p>The shopping cart is empty</p>
          )
      }
      </div>
    );
}

export default Cart;