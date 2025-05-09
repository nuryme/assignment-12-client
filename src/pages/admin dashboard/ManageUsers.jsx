import SectionTitleUnderline from "../../shared components/SectionTitleUnderline";
import { useMutation, useQuery } from "@tanstack/react-query";
import useAxiosSecure from "./../../hooks/useAxiosSecure";
import Loading from "./../Loading";
import toast from "react-hot-toast";
import { useState } from "react";

const ManageUsers = () => {
  const axiosSecure = useAxiosSecure();
  const [search, setSearch] = useState("");

  const {
    data: users = {},
    refetch,
    isLoading,
    isPending,
  } = useQuery({
    queryKey: ["users", search],
    queryFn: async () =>
      await axiosSecure
        .get(`/users?username=${search}`)
        .then((res) => res.data),
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

  const handleSearch = (e) => {
    setSearch(e.target.value);
  };

  // console.log(search);
  if (isLoading || isPending) return <Loading></Loading>;

  return (
    <div>
      <SectionTitleUnderline
        before="manage"
        underline="users"
      ></SectionTitleUnderline>

      <div className="mt-12">
        <div className="flex items-center gap-2">
          <input
            type="text"
            value={search}
            onChange={handleSearch}
            placeholder="Search by username..."
            className="border border-primary p-2 mb-4 w-full md:w-1/2 rounded-md"
          />
          <input
            className="bg-secondary border border-secondary font-medium text-white cursor-pointer p-2 mb-4 w-fit rounded-md"
            type="submit"
            value={"Search"}
          />
        </div>
        <div className="overflow-x-auto">
          <table className="min-w-full">
            <thead className="bg-primary text-white">
              <tr className="text-left uppercase">
                <th className="p-3">name</th>
                <th className="p-3">email</th>
                <th className="p-3">action</th>
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
                    <p>{user.name}</p>
                  </td>
                  <td className="px-3 py-6">
                    <p>{user.email}</p>
                  </td>
                  <td className="px-3 py-6 text-left">
                    <button
                      onClick={() => {
                        if (user.role === "admin") {
                          toast.error("Already admin!");
                        } else {
                          mutate({
                            email: user.email,
                            action: "isAdmin",
                            action_value: "admin",
                          });
                        }
                        // console.log(user.email)
                      }}
                      className="px-3 py-1 font-semibold  cursor-pointer rounded-md bg-secondary"
                    >
                      <span>
                        {user.role === "admin" ? "admin" : "make admin"}
                      </span>
                    </button>
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
                      <span>
                        {user.isPremium === "premium"
                          ? "premium"
                          : " make premium"}
                      </span>
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

export default ManageUsers;
