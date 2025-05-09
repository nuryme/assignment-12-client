import SectionTitleFlower from "../../shared components/SectionTitleFlower";
import { useMutation, useQuery } from "@tanstack/react-query";
import useAxiosSecure from "./../../hooks/useAxiosSecure";
import Loading from "../Loading";
import ErrorPage from "../ErrorPage";
import Swal from "sweetalert2";
import toast from "react-hot-toast";
import useAuthInfo from "../../hooks/useAuthInfo";

const MyFavorite = () => {
  const axiosSecure = useAxiosSecure();
  const {user}  = useAuthInfo()

  const {
    data: favorite,
    refetch,
    isLoading,
    isError,
  } = useQuery({
    queryKey: ["favorite"],
    queryFn: async () =>
      await axiosSecure.get(`/favorite/${user?.email}`).then((res) => res.data),
  });

  const { mutate } = useMutation({
    mutationKey: ["favorite"],
    mutationFn: async (data) =>
      await axiosSecure.delete(`/favorite/${data}`).then((res) => res.data),
    onSuccess: (data) => {
      if (data.deletedCount > 0) {
        refetch();
        Swal.fire({
          title: "Deleted!",
          text: "Your request has been deleted.",
          icon: "success",
        });
      }
    },
    onError: (err) => {
      toast.error(err.message);
    },
  });

  const handleDelete = (id) => {
    console.log(id)
    Swal.fire({
      title: "Are you sure?",
      text: "You won't be able to revert this!",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#3085d6",
      cancelButtonColor: "#d33",
      confirmButtonText: "Yes, delete it!",
    }).then((result) => {
      if (result.isConfirmed) {
        mutate(id);
      }
    });
  };

  if (isLoading) return <Loading></Loading>;
  if (isError) return <ErrorPage></ErrorPage>;

  // console.log(favorite)

  return (
    <div>
      <SectionTitleFlower title="my favorite"></SectionTitleFlower>

      <div className="mt-12">
        <div className="overflow-x-auto">
          <table className="min-w-full ">
            <thead className="bg-primary text-white">
              <tr className="text-left uppercase">
                <th className="p-3"># bio data id</th>
                <th className="p-3">name</th>
                <th className="p-3">permanent address</th>
                <th className="p-3">occupation</th>
                <th className="p-3 text-right">action</th>
              </tr>
            </thead>
            <tbody>
              {favorite.map((fav) => (
                <tr
                  key={fav._id}
                  className="border-b border-opacity-20 border-primary bg-secondary/30"
                >
                  <td className="p-3">
                    <p>{fav.bioId}</p>
                  </td>
                  <td className="p-3">
                    <p>{fav.name}</p>
                  </td>
                  <td className="p-3">
                    <p>{fav.permanent_address}</p>
                  </td>
                  <td className="p-3">
                    <p className="dark:text-gray-600">{fav.occupation}</p>
                  </td>
                  <td className="p-3 text-right">
                    <button
                      onClick={() => {
                        handleDelete(fav._id);
                      }}
                      className="primaryBtn py-1 px-3"
                    >
                      delete
                    </button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
};

export default MyFavorite;
