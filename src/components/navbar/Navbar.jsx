import './Navbar.css'
import { BsCart4 } from "react-icons/bs";
import { useGlobalContext } from '../../context.jsx';
import { Link } from 'react-router-dom';
function Navbar(){
    const {addedToCart} = useGlobalContext();
    return(
        <nav>
            <p>
                <Link to='/'>
                 home
                </Link>
            </p>
            <p className='cart'>
                <Link to='/cart'>
                   <BsCart4  color='white' size='30px'/>
                </Link>

                { addedToCart > 0 && <span>{addedToCart}</span>}
               
            </p>
        </nav>
    )
}

export default Navbar