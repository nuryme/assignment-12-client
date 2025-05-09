import height from "../../assets/height.png";
import { Link, useParams } from "react-router-dom";
import { useMutation, useQuery } from "@tanstack/react-query";
import useAxiosSecure from "../../hooks/useAxiosSecure";
import Loading from "../Loading";
import ErrorPage from "../ErrorPage";
import { format } from "date-fns";
import useAllBio from "../../hooks/useAllBio";
import toast from "react-hot-toast";
import useAuthInfo from "../../hooks/useAuthInfo";
import { CiMobile4 } from "react-icons/ci";
import { BsEnvelopeArrowUp } from "react-icons/bs";

const Details = () => {
  const { id } = useParams();
  const axiosSecure = useAxiosSecure();
  const { user, loading: emailLoading } = useAuthInfo();

  const { data, isLoading, isError } = useQuery({
    queryKey: ["bio-data", id],
    queryFn: async () =>
      await axiosSecure.get(`/bio-data/${id}`).then((res) => res.data),
  });
  const { data: userPremium, isLoading: loadingUser } = useQuery({
    queryKey: ["user"],
    queryFn: async () =>
      await axiosSecure.get(`/user/${user?.email}`).then((res) => res.data),
  });

  // console.log(data?.type)
  const { bio_data, isLoading: loading } = useAllBio({
    limit: 3,
    type: data?.type,
  });

  // favorite

  const {
    data: favorite,
    isLoading: favoriteLoading,
    refetch,
  } = useQuery({
    queryKey: ["favorite"],
    queryFn: async () =>
      await axiosSecure.get(`/favorite/${user?.email}`).then((res) => res.data),
  });

  const favoriteExist = favorite?.find((fav) => fav.bioId === id);
  // console.log(favorite);
  const { mutate } = useMutation({
    mutationKey: ["favorite"],
    mutationFn: async (data) =>
      await axiosSecure.post(`/favorite`, data).then((res) => res.data),
    onSuccess: (data) => {
      // console.log(data);
      if (data.insertedId) {
        toast.success("Added to favorite");
        refetch();
      }
    },
    onError: (err) => {
      toast.error(err.message);
    },
  });

  if (isLoading || loading || favoriteLoading || loadingUser || emailLoading)
    return <Loading></Loading>;

  if (isError) return <ErrorPage></ErrorPage>;

  // console.log(bio_data);
  // console.log(userPremium);
  return (
    <div className="my-24">
      <div className="space-y-6 sm:space-y-12">
        <div className="block gap-6 mx-auto group lg:grid lg:grid-cols-2 ">
          <img
            src={data.image}
            alt=""
            className="object-cover w-full rounded h-[calc(100vh-96px)]  dark:bg-gray-500"
          />
          <div className="space-y-2 px-10 py-24">
            <h2 className="font-playfairDisplay uppercase font-bold text-primary">
              {data.name}
            </h2>
            <div className="flex gap-6 items-center py-4">
              <div className="bg-secondary font-bold px-4 py-2 rounded-full w-fit">
                {data.type}
              </div>
              <p>Date: {format(new Date(data.date_of_birth), "MM/dd/yyyy")}</p>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-5 mt-6 gap-6">
              <div className="flex flex-col items-center justify-center border border-primary rounded-2xl p-6 ">
                <img
                  src="	https://rn53themes.net/themes/matrimo/images/icon/pro-city.png"
                  alt=""
                  className="w-10 mx-auto mb-2"
                />
                <p className="uppercase text-center">
                  City:{" "}
                  <span className="block font-bold">
                    {data.present_address}
                  </span>
                </p>
              </div>
              <div className="flex flex-col justify-center border border-primary rounded-2xl p-6  items-center">
                <img
                  src="https://rn53themes.net/themes/matrimo/images/icon/pro-age.png"
                  alt=""
                  className="w-10 mx-auto mb-2"
                />
                <p className="uppercase text-center">
                  age: <span className="block font-bold">{data.age} year</span>
                </p>
              </div>
              <div className="flex flex-col justify-center border border-primary rounded-2xl p-6  items-center">
                <img src={height} alt="" className="w-10 mx-auto mb-2" />
                <p className="uppercase text-center">
                  height:{" "}
                  <span className="block font-bold">{data.height} feet</span>
                </p>
              </div>
              <div className="flex flex-col justify-center border border-primary rounded-2xl p-6  items-center">
                <img
                  src="	https://rn53themes.net/themes/matrimo/images/icon/pro-city.png"
                  alt=""
                  className="w-10 mx-auto mb-2"
                />
                <p className="uppercase text-center">
                  weight:{" "}
                  <span className="block font-bold">{data.weight} kg</span>
                </p>
              </div>
              <div className="flex flex-col justify-center border border-primary rounded-2xl p-6  items-center">
                <img
                  src="	https://rn53themes.net/themes/matrimo/images/icon/pro-city.png"
                  alt=""
                  className="w-10 mx-auto mb-2"
                />
                <p className="uppercase text-center">
                  race: <span className="block font-bold">{data.race}</span>
                </p>
              </div>
            </div>

            {userPremium?.isPremium === "premium" &&
               (
                <>
                  <h5 className="uppercase mt-12">contact information</h5>
                  <div className="mt-2 space-y-2">
                    <div className="flex items-center gap-4">
                      <div className=" border border-secondary p-3 rounded-lg w-fit">
                        <CiMobile4 className="text-lg" />
                      </div>
                      <p className="font-bold">
                        Phone:{" "}
                        <span className="font-normal">+{data.number}</span>
                      </p>
                    </div>
                    <div className="flex items-center gap-4">
                      <div className=" border border-secondary p-3 rounded-lg w-fit">
                        <BsEnvelopeArrowUp className="text-lg" />
                      </div>
                      <p className="font-bold">
                        Email: <span className="font-normal">{data.email}</span>
                      </p>
                    </div>
                  </div>
                </>
              )}

            <h5 className="uppercase mt-12">Personal information</h5>
            <div className="mt-2 space-y-2 grid grid-cols-1 md:grid-cols-2">
              <p className="font-bold capitalize">
                Father's Name:{" "}
                <span className="font-normal">{data.father_name}</span>
              </p>
              <p className="font-bold capitalize">
                mather's Name:{" "}
                <span className="font-normal">{data.mother_name}</span>
              </p>
              <p className="font-bold capitalize">
                present address:{" "}
                <span className="font-normal">{data.present_address}</span>
              </p>
              <p className="font-bold capitalize">
                permanent address:{" "}
                <span className="font-normal">{data.permanent_address}</span>
              </p>
              <p className="font-bold capitalize">
                expected age:{" "}
                <span className="font-normal">{data.expected_age} year</span>
              </p>
              <p className="font-bold capitalize">
                expected height:{" "}
                <span className="font-normal">{data.expected_height} feet</span>
              </p>
              <p className="font-bold capitalize">
                expected weight:{" "}
                <span className="font-normal">{data.expected_weight} kg</span>
              </p>
            </div>

            <div className="mt-6 space-x-6">
              <Link>
                <button
                  onClick={() => {
                    if (favoriteExist) {
                      return toast.error("Already exist in favorite");
                    } else {
                      mutate({
                        name: data.name,
                        bioId: id,
                        permanent_address: data.permanent_address,
                        occupation: data.occupation,
                        email: user?.email,
                      });
                    }
                  }}
                  className="primaryBtn"
                >
                  💕 add to favorite
                </button>
              </Link>
              {userPremium?.isPremium !== "premium" && data.email !== user?.email && (
                  <Link to={`/checkout/${id}`}>
                    <button className="secondaryBtn">
                      🌸 request contact information
                    </button>
                  </Link>
                )}
            </div>
          </div>
        </div>
        <div className="grid justify-center grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3 container mx-auto">
          {bio_data.map((bio) => (
            <div
              key={bio._id}
              className="max-w-sm mx-aut bg-secondary/50 rounded-md"
            >
              <img
                role="presentation"
                className="object-cover w-full rounded h-72 dark:bg-gray-500"
                src={bio.image}
              />
              <div className="p-6 space-y-2">
                <h3 className="text-2xl font-semibold ">{bio.name}</h3>
                <span className="">
                  <span className="text-black font-bold">Birth date: </span>
                  {format(new Date(data.date_of_birth), "MM/dd/yyyy")}
                </span>
              </div>
            </div>
          ))}
        </div>
        <div className="flex justify-center">
          <Link to={"/allBios"} type="button" className="primaryBtn">
            Load more ...
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Details;
