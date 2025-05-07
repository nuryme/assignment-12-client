import { useContext } from 'react';
import { AuthContext } from '../context/AuthContext';

const useAuthInfo = () => {
    const authInfo = useContext(AuthContext)
    return authInfo
};

export default useAuthInfo;