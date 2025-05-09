import useAxiosSecure from './useAxiosSecure';
import useAuthInfo from './useAuthInfo';
import { useQuery } from '@tanstack/react-query';

const useRole = () => {

    const axiosSecure = useAxiosSecure()
    const {user, loading} = useAuthInfo()

    const {data: role, isLoading} = useQuery({
        queryKey: ['role', user?.email],
        enabled: !loading && !!user?.email,
        queryFn: async () => await axiosSecure.get(`/user/role/${user?.email}`).then(res => res.data.role)
    })
    // console.log(role)
    return {role, isLoading}
};

export default useRole;