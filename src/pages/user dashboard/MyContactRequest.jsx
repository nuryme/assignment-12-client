import { useMutation, useQuery } from "@tanstack/react-query";
import useAxiosSecure from "../../hooks/useAxiosSecure";
import SectionTitleFlower from "../../shared components/SectionTitleFlower";
import Loading from "../Loading";
import ErrorPage from "../ErrorPage";
import toast from "react-hot-toast";
import Swal from "sweetalert2";

const MyContactRequest = () => {
  const axiosSecure = useAxiosSecure();

  const {
    data: requests,
    refetch,
    isLoading,
    isError,
  } = useQuery({
    queryKey: ["my-contact-request"],
    queryFn: async () =>
      await axiosSecure.get("/my-contact-request").then((res) => res.data),
  });

  const { mutate } = useMutation({
    mutationKey: ["my-contact-request"],
    mutationFn: async (data) =>
      await axiosSecure
        .delete(`/my-contact-request/${data}`)
        .then((res) => res.data),
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
    // console.log(id)
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
  return (
    <div>
      <SectionTitleFlower title="my contact request"></SectionTitleFlower>

      <div className="mt-12">
        <div className="overflow-x-auto">
          <table className="min-w-full">
            <thead className="bg-primary text-white">
              <tr className="text-left uppercase">
                <th className="p-3"># Bio data Id</th>
                <th className="p-3">name</th>
                <th className="p-3">number</th>
                <th className="p-3">email</th>
                <th className="p-3">Status</th>
                <th className="p-3 text-right">action</th>
              </tr>
            </thead>
            <tbody>
              {requests.map((request) => (
                <tr
                  key={request._id}
                  className="border-b border-opacity-20 border-primary bg-secondary/30"
                >
                  <td className="p-3">
                    <p>{request.bioId}</p>
                  </td>
                  <td className="p-3">
                    <p>{request.requested_name}</p>
                  </td>
                  <td className="p-3">
                    <p>
                      {request.status === "approved"
                        ? request.requested_mobile
                        : "Not Approved"}
                    </p>
                  </td>
                  <td className="p-3">
                    <p className="dark:text-gray-600">
                      {request.status === "approved"
                        ? request.requested_email
                        : "Not Approved"}
                    </p>
                  </td>
                  <td className="p-3 text-left">
                    <span className="px-3 py-1 font-semibold rounded-md bg-secondary capitalize">
                      <span>{request.status}</span>
                    </span>
                  </td>
                  <td className="p-3 text-right">
                    <button
                      className="primaryBtn py-1 px-3"
                      onClick={() => {
                        handleDelete(request._id);
                      }}
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

export default MyContactRequest;
