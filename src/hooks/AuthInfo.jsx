import { useContext } from 'react';
import { AuthContext } from './../context/AuthContext';

const AuthInfo = () => {
    const authInfo = useContext(AuthContext)
    return authInfo
};

export default AuthInfo;