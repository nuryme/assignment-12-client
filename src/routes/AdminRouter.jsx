import React from 'react';
import useAuthInfo from '../hooks/useAuthInfo';
import useRole from '../hooks/useRole';
import Loading from '../pages/Loading';
import { Navigate } from 'react-router-dom';

const AdminRouter = ({children}) => {
    const {user, loading} = useAuthInfo()
    const {role, isLoading} = useRole()

    if(isLoading || loading) return <Loading></Loading>

    if(user || role === 'admin') return children

    return <Navigate to={'/'}></Navigate>
};

export default AdminRouter;