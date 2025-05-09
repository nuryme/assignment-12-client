import { useMutation } from "@tanstack/react-query";
import SectionTitleFlower from "../../shared components/SectionTitleFlower";
import useAxiosSecure from "../../hooks/useAxiosSecure";
import toast from "react-hot-toast";
import { useNavigate } from "react-router-dom";

const Married = () => {
  const axiosSecure = useAxiosSecure();
  const navigate = useNavigate()

  const { mutate, isPending } = useMutation({
    mutationKey: ["married"],
    mutationFn: async (data) =>
      await axiosSecure.post(`/married`, data).then((res) => res.data),
    onSuccess: (data) => {
      // console.log(data);
      if (data.insertedId) {
        toast.success('Posted Successfully');
        navigate('/')
      } 
    },
    onError: (err) => {
      console.log(err);
    },
  });

  const handleSubmit = (e) => {
    e.preventDefault();

    const form = new FormData(e.target);

    const bioInfo = Object.fromEntries(form.entries());

    bioInfo.self_bio_id = parseInt(bioInfo.self_bio_id);
    bioInfo.partner_bio_id = parseInt(bioInfo.partner_bio_id);
    // console.log(bioInfo);

    mutate(bioInfo)
  };

  return (
    <div className="">
      <SectionTitleFlower title="edit bio data"></SectionTitleFlower>
      <form
        onSubmit={handleSubmit}
        noValidate=""
        action=""
        className="space-y-6 bg-secondary p-12 mt-12 rounded-md shadow-lg max-w-2xl mx-auto"
      >
        <div className="space-y-1">
          <label htmlFor="username" className="block font-medium uppercase">
            Self Bio Data Id
          </label>
          <input
            type="number"
            name="self_bio_id"
            required
            placeholder={"Self Bio data id"}
            className="w-full px-4 py-3 rounded-md dark:border-gray-300 dark:bg-gray-50 dark:text-gray-800 focus:dark:border-violet-600"
          />
        </div>

        <div className="space-y-1">
          <label htmlFor="username" className="block font-medium uppercase">
            partner bio data id
          </label>
          <input
            type="number"
            name="partner_bio_id"
            required
            placeholder={"Partner Bio data id"}
            className="w-full px-4 py-3 rounded-md dark:border-gray-300 dark:bg-gray-50 dark:text-gray-800 focus:dark:border-violet-600"
          />
        </div>
        <div className="space-y-1">
          <label htmlFor="username" className="block font-medium uppercase">
            couple image
          </label>
          <input
            type="url"
            name="couple_image"
            required
            placeholder={"Couple Image URL"}
            className="w-full px-4 py-3 rounded-md dark:border-gray-300 dark:bg-gray-50 dark:text-gray-800 focus:dark:border-violet-600"
          />
        </div>
        <div className="space-y-1">
          <label htmlFor="username" className="block font-medium uppercase">
            your story
          </label>
          <textarea
            name="your_story"
            placeholder={"share your feelings for using this website"}
            rows={9}
            className="w-full px-4 py-3 rounded-md dark:border-gray-300 dark:bg-gray-50 dark:text-gray-800 focus:dark:border-violet-600"
          ></textarea>
        </div>

        <button type="submit" className="primaryBtn px-12">
          {isPending ? "Saving" : "Save & publish now"}
        </button>
      </form>
    </div>
  );
};

export default Married;
