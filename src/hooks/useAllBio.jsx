import { useQuery } from "@tanstack/react-query";
import useAxiosPublic from './useAxiosPublic';
import ErrorPage from './../pages/ErrorPage';

const useAllBio = ({limit, type}) => {
    const axiosPublic  = useAxiosPublic()

    const {data: bio_data, isLoading, refetch, isError, isFetching} = useQuery({
        queryKey: ['bio-data'],
        enabled: !!type,
        queryFn: async () => await axiosPublic.get(`/bio-data?limit=${limit}&type=${type}`).then(res => res.data)
    })

    if(isError) return <ErrorPage></ErrorPage>

    return {bio_data, isLoading, refetch, isFetching}
};

export default useAllBio;