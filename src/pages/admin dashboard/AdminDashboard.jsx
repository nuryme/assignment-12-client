import SectionTitleUnderline from "../../shared components/SectionTitleUnderline";
import { useQuery } from '@tanstack/react-query';
import useAxiosSecure from './../../hooks/useAxiosSecure';
import Loading from './../Loading';

const AdminDashboard = () => {
  const axiosSecure = useAxiosSecure()

  const {data, isLoading} = useQuery({
    queryKey: ['admin-dashboard'],
    queryFn: async () => await axiosSecure.get('/admin-dashboard').then(res => res.data)
  })

  // console.log(data)
  if(isLoading) return <Loading></Loading>
  return (
    <div>
      <SectionTitleUnderline
        underline="admin"
        after="dashboard"
      ></SectionTitleUnderline>

      <div className="mt-12 grid grid-cols-1 md:grid-cols-3 lg:grid-cols-5 gap-12">
        <div className="p-8 mx-auto rounded-lg bg-secondary w-full">
          <div className="flex flex-col justify-between gap-6 items-center">
            <img
              src="https://i.pinimg.com/736x/1d/9d/50/1d9d50c4ce398559c939946f82a0dbdc.jpg"
              className="rounded-full w-[100px] h-[100px]"
              alt=""
            />
            <div className="flex flex-col items-center">
              <p className="font-medium uppercase mt-4 ">total bio data</p>
              <h4 className="font-bold font-playfairDisplay relative">
                {data.totalBio} <span className=" absolute -top-2 text-primary">+</span>{" "}
              </h4>
            </div>
          </div>
        </div>
        <div className="p-8 mx-auto rounded-lg bg-secondary w-full">
          <div className="flex justify-between gap-6 flex-col items-center">
            <img
              src="https://i.pinimg.com/736x/1d/9d/50/1d9d50c4ce398559c939946f82a0dbdc.jpg"
              className="rounded-full w-[100px] h-[100px]"
              alt=""
            />
            <div className="flex flex-col items-center">
              <p className="font-medium uppercase mt-4 ">male bio data</p>
              <h4 className="font-bold font-playfairDisplay relative">
                {data.maleBio} <span className=" absolute -top-2 text-primary">+</span>{" "}
              </h4>
            </div>
          </div>
        </div>
        <div className="p-8 mx-auto rounded-lg bg-secondary w-full">
          <div className="flex justify-between gap-6 flex-col items-center">
            <img
              src="https://i.pinimg.com/736x/1d/9d/50/1d9d50c4ce398559c939946f82a0dbdc.jpg"
              className="rounded-full w-[100px] h-[100px]"
              alt=""
            />
            <div className="flex flex-col items-center">
              <p className="font-medium uppercase mt-4 ">female bio data</p>
              <h4 className="font-bold font-playfairDisplay relative">
                {data.femaleBio} <span className=" absolute -top-2 text-primary">+</span>{" "}
              </h4>
            </div>
          </div>
        </div>
        <div className="p-8 mx-auto rounded-lg bg-secondary w-full">
          <div className="flex justify-between gap-6 flex-col items-center">
            <img
              src="https://i.pinimg.com/736x/1d/9d/50/1d9d50c4ce398559c939946f82a0dbdc.jpg"
              className="rounded-full w-[100px] h-[100px]"
              alt=""
            />
            <div className="flex flex-col items-center">
              <p className="font-medium uppercase mt-4 ">premium bio data</p>
              <h4 className="font-bold font-playfairDisplay relative">
                {data.premiumBio} <span className=" absolute -top-2 text-primary">+</span>{" "}
              </h4>
            </div>
          </div>
        </div>
        <div className="p-8 mx-auto rounded-lg bg-secondary w-full">
          <div className="flex justify-between gap-6 flex-col items-center">
            <img
              src="https://i.pinimg.com/736x/1d/9d/50/1d9d50c4ce398559c939946f82a0dbdc.jpg"
              className="rounded-full w-[100px] h-[100px]"
              alt=""
            />
            <div className="flex flex-col items-center">
              <p className="font-medium uppercase mt-4 ">total revenue</p>
              <h4 className="font-bold font-playfairDisplay relative">
                {data.totalRevenue} <span className=" absolute -top-2 text-primary">+</span>{" "}
              </h4>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AdminDashboard;
