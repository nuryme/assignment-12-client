import { useMutation, useQuery } from "@tanstack/react-query";
import SectionTitleUnderline from "../../shared components/SectionTitleUnderline";
import useAxiosSecure from "./../../hooks/useAxiosSecure";
import ErrorPage from "./../ErrorPage";
import Loading from "../Loading";
import toast from "react-hot-toast";

const ApprovedContactRequest = () => {
  const axiosSecure = useAxiosSecure();

  const {
    data: payments,
    refetch,
    isError,
    isLoading,
  } = useQuery({
    queryKey: ["payments"],
    queryFn: async () =>
      await axiosSecure
        .get("/approval-contact-request")
        .then((res) => res.data),
  });

  const { mutate } = useMutation({
    mutationKey: ["payments"],
    mutationFn: async (id) =>
      await axiosSecure
        .patch(`/approval-contact-request/${id}`)
        .then((res) => res.data),
    onSuccess: (data) => {
      console.log(data);
      if (data.modifiedCount > 0) {
        toast.success("Contact request approved");
        refetch();
      }
    },
    onError: (err) => {
      console.log(err);
      toast.error(err.message);
    },
  });

  if (isError) return <ErrorPage></ErrorPage>;
  if (isLoading) return <Loading></Loading>;
  // console.log(payments);
  return (
    <div>
      <SectionTitleUnderline
        before="approved"
        underline="contact"
        after="request"
      ></SectionTitleUnderline>

      <div className="mt-12">
        <div className="overflow-x-auto">
          <table className="min-w-full ">
            <thead className="bg-primary text-white">
              <tr className="text-left uppercase">
                <th className="p-3">id</th>
                <th className="p-3">name</th>
                <th className="p-3">email</th>
                <th className="p-3">action</th>
              </tr>
            </thead>
            <tbody>
              {payments?.map((payment) => (
                <tr
                  key={payment._id}
                  className="border-b border-opacity-20 border-primary bg-secondary/30"
                >
                  <td className="px-3 py-6">
                    <p>{payment.bioId}</p>
                  </td>
                  <td className="px-3 py-6">
                    <p>{payment.name}</p>
                  </td>
                  <td className="px-3 py-6">
                    <p>{payment.email}</p>
                  </td>
                  <td className="px-3 py-6 text-left">
                    <button
                      onClick={() => {
                        mutate(payment._id);
                      }}
                      className="px-3 py-1 font-semibold  cursor-pointer rounded-md bg-secondary"
                    >
                      <span>approve</span>
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

export default ApprovedContactRequest;
