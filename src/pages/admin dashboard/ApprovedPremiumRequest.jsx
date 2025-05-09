import React from "react";
import SectionTitleUnderline from "../../shared components/SectionTitleUnderline";
import { useMutation, useQuery } from "@tanstack/react-query";
import useAxiosSecure from "../../hooks/useAxiosSecure";
import Loading from "./../Loading";
import toast from "react-hot-toast";

const ApprovedPremiumRequest = () => {
  const axiosSecure = useAxiosSecure();

  const {
    data: users,
    refetch,
    isLoading,
  } = useQuery({
    queryKey: ["users"],
    queryFn: async () =>
      await axiosSecure.get("/users/premium-request").then((res) => res.data),
  });

  const { mutate } = useMutation({
    mutationKey: ["users"],
    mutationFn: async ({ email, action, action_value }) =>
      await axiosSecure
        .patch(`/make-premium/${email}?${action}=${action_value}`)
        .then((res) => res.data),
    onSuccess: (data) => {
      console.log(data);
      if (data.modifiedCount > 0) {
        toast.success("Action successful");
        refetch();
      }
    },
    onError: (err) => {
      console.log(err);
      toast.error(err.message);
    },
  });

  // console.log(users)
  if (isLoading) return <Loading></Loading>;
  return (
    <div>
      <SectionTitleUnderline
        before="approved"
        underline="premium"
        after="request"
      ></SectionTitleUnderline>

      <div className="mt-12">
        <div className="overflow-x-auto">
          <table className="min-w-full">
            <thead className="bg-primary text-white">
              <tr className="text-left uppercase">
                <th className="p-3">id</th>
                <th className="p-3">name</th>
                <th className="p-3">email</th>
                <th className="p-3">action</th>
              </tr>
            </thead>
            <tbody>
              {users?.map((user) => (
                <tr
                  key={user._id}
                  className="border-b border-opacity-20 border-primary bg-secondary/30"
                >
                  <td className="px-3 py-6">
                    <p>{user?.premiumId}</p>
                  </td>
                  <td className="px-3 py-6">
                    <p>{user.name}</p>
                  </td>
                  <td className="px-3 py-6">
                    <p>{user.email}</p>
                  </td>
                  <td className="px-3 py-6 text-left">
                    <button
                      onClick={() => {
                        if (user.isPremium === "premium") {
                          toast.error("Already premium!");
                        } else {
                          mutate({
                            email: user.email,
                            action: "isPremium",
                            action_value: "premium",
                          });
                        }
                        // console.log(user.email)
                      }}
                      className="px-3 py-1 font-semibold  cursor-pointer rounded-md bg-secondary"
                    >
                      <span>make premium</span>
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

export default ApprovedPremiumRequest;
