import React, { useContext } from 'react';
import { AuthContext } from '../../Context/AuthProvider';

const Profile = () => {
    const {user} = useContext(AuthContext);
    return (
        <div className='max-w-sm mx-auto'>
            <p>{user?.email}</p>
        </div>
    );
};

export default Profile;