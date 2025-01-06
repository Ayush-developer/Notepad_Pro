import {Link} from 'react-router-dom'
const Navbar = () => {
    return ( 
        <nav>
            <ul>
                <li><Link to='/login'>Login</Link></li>
                <li><Link to='/signup'>Sign Up</Link></li>
                <li><Link to='/notes'>Notes</Link></li>

            </ul>
        </nav>
     );
}
 
export default Navbar;