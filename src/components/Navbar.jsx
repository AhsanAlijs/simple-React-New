import React, { useContext } from 'react'
import UserContext from '../contaxt/UserContaxt'
const Navbar = () => {

    const { isUser, setIsUser } = useContext(UserContext);

    return (
        <>
            <div>
                <ul className='nav'>
                    <li className='link'>Home</li>
                    <li className='link'>About</li>
                    {!isUser ? <div className='register'>
                        <li className='link'>Register</li>
                        <li onClick={()=> setIsUser(true)} className='link'>Login</li>

                    </div> : <li onClick={()=> setIsUser(false)}  className='link'>Log Out</li>}
                </ul></div>
        </>

    )
}

export default Navbar

