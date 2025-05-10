import axios from "axios";
import { useNavigate } from "react-router-dom";
import useAuthInfo from "./useAuthInfo";
import { useEffect } from "react";

const axiosInstance = axios.create({
    baseURL: 'https://assignment-12-server-ruddy-five.vercel.app',
    withCredentials: true
})
const useAxiosSecure = () => {

    const navigate = useNavigate()
    const {signOutUser} = useAuthInfo()

    useEffect(() => {
      axiosInstance.interceptors.response.use((res) => {
        return res
      },
      (err) => {
        if(err.status === 401 || err.status === 403) {
            signOutUser()
            .then(() => {
              navigate('/login')
            }
            )
            .catch(err => console.log(err.message))
        }

        return Promise.reject(err)
      }
      
      )
    }
    , [navigate, signOutUser])

    return axiosInstance
};

export default useAxiosSecure;