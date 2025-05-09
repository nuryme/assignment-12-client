import { CiMobile4 } from "react-icons/ci";
import height from "../../assets/height.png";
import { BsEnvelopeArrowUp } from "react-icons/bs";
import SectionTitleFlower from "../../shared components/SectionTitleFlower";
import Swal from "sweetalert2";
import { useMutation, useQuery } from "@tanstack/react-query";
import useAxiosSecure from "./../../hooks/useAxiosSecure";
import useAuthInfo from "../../hooks/useAuthInfo";
import Loading from "../Loading";
import { format } from "date-fns";
import toast from "react-hot-toast";

const View = () => {
  const axiosSecure = useAxiosSecure();
  const { user } = useAuthInfo();

  const { data: bio = {}, isLoading, refetch } = useQuery({
    queryKey: ["view-bio"],
    queryFn: async () =>
      await axiosSecure.get(`/view-bio/${user?.email}`).then((res) => res.data),
  });
  const {data: requestedUser} = useQuery({
    queryKey: ['users'],
    queryFn: async () => await axiosSecure.get(`/user/${user?.email}`).then(res => res.data)
  })
// console.log(requestedUser)
  const {mutate} = useMutation({
    mutationKey: ['bio-data'],
    mutationFn: async () => axiosSecure.patch(`/make-premium/${user?.email}?isPremium=request&bioId=${bio.bioId}`).then(res => res.data),
    onSuccess: (data) => {
      if(data.modifiedCount > 0) {
        toast.success('Request to make premium send Successfully')
        refetch()
      }
    },
    onError: (err) => {
      toast.error(err.message)
    }
    
    
  })



  const handlePremium = () => {

    if(requestedUser?.isPremium === "request" ) {
      return toast.error('Already requested. Please wait for the approval')
    }
    else if(requestedUser?.isPremium === 'premium' ) {
      return toast.error('Already premium')
    }
  


    Swal.fire({
      title: "Are you sure to make you premium?",
      showCancelButton: true,
      confirmButtonColor: "#3085d6",
      cancelButtonColor: "#d33",
      confirmButtonText: "Yes!",
    }).then((result) => {

      if (result.isConfirmed) {

      
        // Swal.fire({
        //   title: "Deleted!",
        //   text: "Your file has been deleted.",
        //   icon: "success",
        // });



        mutate()

      }
    });
  };
// console.log(bio)
  if (isLoading) return <Loading></Loading>;

  return (
    <div className="">
      <SectionTitleFlower title="view bio data"></SectionTitleFlower>
      {bio ? (
        <div className="space-y-6 sm:space-y-12 mt-12">
          <div className="block gap-6 mx-auto group lg:grid lg:grid-cols-2 ">
            <div className=" h-[calc(100vh-250px)]">
              <img
                src={bio.image}
                alt=""
                className="object-cover w-full rounded h-full dark:bg-gray-500"
              />
            </div>
            <div className="space-y-2 px-10">
              <h2 className="font-playfairDisplay uppercase font-bold text-primary">
                {bio.name}
              </h2>
              <div className="flex gap-6 items-center py-4">
                <div className="bg-secondary font-bold px-4 py-2 rounded-full w-fit">
                  {bio.type}
                </div>
                <p>Date: {format(new Date(bio.date_of_birth), "MM/dd/yyyy")}</p>
              </div>
              <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-5 mt-6 gap-4">
                <div className="flex flex-col justify-center border border-primary rounded-2xl p-2">
                  <img
                    src="	https://rn53themes.net/themes/matrimo/images/icon/pro-city.png"
                    alt=""
                    className="w-10 mx-auto mb-2"
                  />
                  <p className="uppercase text-center">
                    City:{" "}
                    <span className="block font-bold">
                      {bio.present_address}
                    </span>
                  </p>
                </div>
                <div className="flex flex-col justify-center border border-primary rounded-2xl p-2">
                  <img
                    src="https://rn53themes.net/themes/matrimo/images/icon/pro-age.png"
                    alt=""
                    className="w-10 mx-auto mb-2"
                  />
                  <p className="uppercase text-center">
                    age:{" "}
                    <span className="block font-bold">{bio.age} years</span>
                  </p>
                </div>
                <div className="flex flex-col justify-center border border-primary rounded-2xl p-2">
                  <img src={height} alt="" className="w-10 mx-auto mb-2" />
                  <p className="uppercase text-center">
                    height:{" "}
                    <span className="block font-bold">{bio.height} feet</span>
                  </p>
                </div>
                <div className="flex flex-col justify-center border border-primary rounded-2xl p-2">
                  <img
                    src="	https://rn53themes.net/themes/matrimo/images/icon/pro-city.png"
                    alt=""
                    className="w-10 mx-auto mb-2"
                  />
                  <p className="uppercase text-center">
                    weight:{" "}
                    <span className="block font-bold">{bio.weight} kg</span>
                  </p>
                </div>
                <div className="flex flex-col justify-center border border-primary rounded-2xl p-2">
                  <img
                    src="	https://rn53themes.net/themes/matrimo/images/icon/pro-city.png"
                    alt=""
                    className="w-10 mx-auto mb-2"
                  />
                  <p className="uppercase text-center">
                    race: <span className="block font-bold">{bio.race}</span>
                  </p>
                </div>
              </div>

              <h5 className="uppercase mt-12">contact information</h5>
              <div className="mt-2 space-y-2">
                <div className="flex items-center gap-4">
                  <div className=" border border-secondary p-3 rounded-lg w-fit">
                    <CiMobile4 className="text-lg" />
                  </div>
                  <p className="font-bold">
                    Phone: <span className="font-normal">+{bio.number}</span>
                  </p>
                </div>
                <div className="flex items-center gap-4">
                  <div className=" border border-secondary p-3 rounded-lg w-fit">
                    <BsEnvelopeArrowUp className="text-lg" />
                  </div>
                  <p className="font-bold">
                    Email: <span className="font-normal">{bio.email}</span>
                  </p>
                </div>
              </div>
              <h5 className="uppercase mt-12">Personal information</h5>
              <div className="mt-2 space-y-2 grid grid-cols-1 md:grid-cols-2">
                <p className="font-bold capitalize">
                  Father's Name:{" "}
                  <span className="font-normal">{bio.father_name}</span>
                </p>
                <p className="font-bold capitalize">
                  mather's Name:{" "}
                  <span className="font-normal">{bio.mother_name}</span>
                </p>
                <p className="font-bold capitalize">
                  present address:{" "}
                  <span className="font-normal">{bio.present_address}</span>
                </p>
                <p className="font-bold capitalize">
                  permanent address:{" "}
                  <span className="font-normal">{bio.permanent_address}</span>
                </p>
                <p className="font-bold capitalize">
                  expected age:{" "}
                  <span className="font-normal">{bio.expected_age} years</span>
                </p>
                <p className="font-bold capitalize">
                  expected height:{" "}
                  <span className="font-normal">
                    {bio.expected_height} feet
                  </span>
                </p>
                <p className="font-bold capitalize">
                  expected weight:{" "}
                  <span className="font-normal">{bio.expected_weight} kg</span>
                </p>
              </div>

              <button onClick={handlePremium} className="secondaryBtn mt-6">
                🌸 make bio to premium
              </button>
            </div>
          </div>
        </div>
      ) : (
        <div className="h-[calc(100vh-300px)] flex justify-center items-center">
          <h1 className="text-red-500 text-center">
            You don't have a Bio Data
          </h1>
        </div>
      )}
    </div>
  );
};

export default View;
