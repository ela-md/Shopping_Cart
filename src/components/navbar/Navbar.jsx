import './Navbar.css'
import { BsCart4 } from "react-icons/bs";

function Navbar(){
    return(
        <nav>
            <p>
                <a href='#'>home</a>
            </p>
            <p className='cart'>
                <a href='#'>
                <BsCart4  color='white' size='30px'/>
                </a>
                <span>1</span>
            </p>
        </nav>
    )
}

export default Navbar