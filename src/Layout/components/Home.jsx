import React, { useContext } from 'react';
import { AuthContext } from '../../providers/AuthProvider';
const Home = () => {
    const { user }= useContext(AuthContext);
    return (
        <div>
            <h3 className='text-3xl text-center mt-24'>{user? user.email : 'Amar nai kono nam nai ghor bari nai , tumi amar nam rekhe dao ja khusi tai amar kono nam nai ...'}</h3>
        </div>
    );
};

export default Home;