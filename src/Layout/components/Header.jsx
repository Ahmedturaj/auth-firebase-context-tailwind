import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import { AuthContext } from '../../providers/AuthProvider';
const Header = () => {
    const {user, LogOut}=useContext(AuthContext);
    const handleSignOut=()=>{
LogOut()
.then(()=>{ })
.catch(error=>{
    console.error(error);
})
    }
    return (

        <div className="navbar bg-neutral text-neutral-content text-3xl flex items-center justify-between w-full mx-auto  rounded-md mt-5 shadow-md">
           <Link to='/'>Home</Link>
           <Link to='/login'>Login</Link>
           {user && <Link to='/orders'>Orders</Link>}
           <Link to='/register'>Register</Link>
        {
user?<>
<span>{user.email}</span>
<button  className='btn btn-primary' onClick={handleSignOut}>Sign Out</button>
</>:<Link to='/login'>
<button className='btn btn-primary'>LogIn</button>
</Link>
        }
        </div>
      
    );
};

export default Header;