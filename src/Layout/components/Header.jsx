import React from 'react';
import { Link } from 'react-router-dom';

const Header = () => {
    return (

        <div className="navbar bg-neutral text-neutral-content text-3xl flex items-center justify-between w-full mx-auto  rounded-md mt-5 shadow-md">
           <Link to='/'>Home</Link>
           <Link to='/login'>Login</Link>
           <Link to='/register'>Register</Link>
        
        </div>
      
    );
};

export default Header;