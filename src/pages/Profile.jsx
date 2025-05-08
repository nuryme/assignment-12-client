import React from 'react';
import useAuthInfo from '../hooks/useAuthInfo';

const Profile = () => {
    const {user} = useAuthInfo()
    return (
        <div>
            <img src={user?.photoURL} alt="" />
            <h1>{user?.displayName}</h1>
            <p>{user?.email}</p>
        </div>
    );
};

export default Profile;