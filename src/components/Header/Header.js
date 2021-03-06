import React, { useContext, useState, useEffect } from 'react';
import './Header.css'
import { Link, withRouter } from 'react-router-dom'
import { UserContext } from '../auth/useAuth';


const LoginUser = ({route}) => {
    const {logout} = useContext(UserContext)
    const logOutHandler = () => {
        logout()
        route.history.push('/login')        
    }
    return (
        <>
            <Link to="/user/profile"><button className="btn signup-btn primary-btn">Profile</button></Link>
            <button className="btn" onClick={logOutHandler}>Logout</button>
        </>
    )
}
const LogoutUser = () => {
    return (
        <>
            <Link to="/signup"><button className="btn signup-btn primary-btn">Sign Up</button></Link>
            <Link to="/login"><button className="btn">Login</button></Link>
        </>
    )
}

const Header = (props) => {
    const {user, cart} = useContext(UserContext)
    const [cartItem, setCartItem] = useState('')
    useEffect(()=>{
        if(cart.length > 0 ) {
            setCartItem(cart.length)
        } else {
            setCartItem('')
        }

        
    }, [cart])

    return (
        <header>
            <div className="container">
                <div className="row d-flex align-items-center justify-content-between">
                    <div className="col">
                        <div className="logo-aria">
                            <Link to="/"><img src="https://i.ibb.co/71T806h/logo-header.png" alt="red onion logo" /></Link>
                        </div>
                    </div>
                    
                    <div className="col">
                        <div className="header-right">
                            <div className="d-flex">
                                {user ? <LoginUser route={props} /> : <LogoutUser/> }
                                <Link to="/cart">
                                    <button className="btn"> 
                                            <i className="fa fa-cart-plus" aria-hidden="true">
                                                </i> <span style={{color:'red'}}> {cart && cartItem}</span>
                                    </button>
                                </Link>

                                <Link to="/insert_data">
                                    <button className="btn btn-outline-danger xtra-btn">Insert Data</button> 
                                </Link>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </header>
    );
};

export default withRouter(Header);