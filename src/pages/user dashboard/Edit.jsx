import { useState } from "react";
import SectionTitleFlower from "../../shared components/SectionTitleFlower";
import "react-datepicker/dist/react-datepicker.css";
import DatePicker from "react-datepicker";
import useAuthInfo from "../../hooks/useAuthInfo";
import { useMutation } from "@tanstack/react-query";
import useAxiosSecure from "./../../hooks/useAxiosSecure";
import toast from "react-hot-toast";

const Edit = () => {
  const [startDate, setStartDate] = useState(new Date());
  const { user } = useAuthInfo();
  const axiosSecure = useAxiosSecure();

  const { mutate, isPending } = useMutation({
    mutationKey: ["bio-data"],
    mutationFn: async (data) =>
      await axiosSecure.post("/bio-data", data).then((res) => res.data),
    onSuccess: (data) => {
      // console.log(data);
      if(data.insertedId) {
        toast.success('Saved Successfully')
      }
    },
    onError: (err) => {
      console.log(err.message);
    },
  });

  const handleSubmit = (e) => {
    e.preventDefault();

    const form = new FormData(e.target);

    const bioInfo = Object.fromEntries(form.entries());

    bioInfo.age = parseInt(bioInfo.age);
    bioInfo.expected_age = parseInt(bioInfo.expected_age);
    bioInfo.expected_height = parseInt(bioInfo.expected_height);
    bioInfo.expected_weight = parseInt(bioInfo.expected_weight);
    bioInfo.height = parseInt(bioInfo.height);
    bioInfo.weight = parseInt(bioInfo.weight);
    bioInfo.number = parseInt(bioInfo.number);
    bioInfo.date_of_birth = startDate

    console.log(bioInfo);

    mutate(bioInfo);
  };

  return (
    <div className="">
      <SectionTitleFlower title="edit bio data"></SectionTitleFlower>
      <form
        onSubmit={handleSubmit}
        noValidate=""
        action=""
        className="space-y-6 bg-secondary p-12 mt-12 rounded-md shadow-lg grid grid-cols-1 lg:grid-cols-2 items-center gap-12"
      >
        <div>
          <label htmlFor="url" className="block font-medium uppercase">
            Type
          </label>
          <select
            required
            defaultValue={""}
            className="bg-white w-full rounded-md px-4 py-3.5"
            name="type"
            id=""
          >
            <option value="" readOnly>male or female</option>
            <option value="male">Male</option>
            <option value="female">Female</option>
          </select>
        </div>
        <div className="space-y-1">
          <label htmlFor="username" className="block font-medium uppercase">
            name
          </label>
          <input
            type="text"
            name="name"
            required
            placeholder="your name"
            className="w-full px-4 py-3 rounded-md dark:border-gray-300 dark:bg-gray-50 dark:text-gray-800 focus:dark:border-violet-600"
          />
        </div>
        <div className="space-y-1">
          <label htmlFor="username" className="block font-medium uppercase">
            image
          </label>
          <input
            type="url"
            name="image"
            required
            placeholder="your photo URL"
            className="w-full px-4 py-3 rounded-md dark:border-gray-300 dark:bg-gray-50 dark:text-gray-800 focus:dark:border-violet-600"
          />
        </div>

        <div className="space-y-1 w-full">
          <label htmlFor="username" className="block font-medium uppercase">
            Date of birth
          </label>
          <div className="bg-white w-full rounded-md">
            <DatePicker
              required
              className="px-4 py-3 "
              selected={startDate}
              onChange={(date) => setStartDate(date)}
            />
          </div>
        </div>
        <div className="space-y-1 w-full">
          <label htmlFor="username" className="block font-medium uppercase">
            height
          </label>
          <select
            required
            defaultValue={""}
            className="bg-white w-full rounded-md px-4 py-3.5"
            name="height"
            id=""
          >
            <option value="" readOnly>select your height</option>
            <option value="4">4</option>
            <option value="4.1">4.1</option>
            <option value="4.2">4.2</option>
            <option value="4.3">4.3</option>
            <option value="4.4">4.4</option>
            <option value="4.5">4.5</option>
            <option value="4.6">4.6</option>
            <option value="4.7">4.7</option>
            <option value="4.8">4.8</option>
            <option value="4.9">4.9</option>
            <option value="4.10">4.10</option>
            <option value="4.11">4.11</option>
            <option value="5">5</option>
            <option value="5.1">5.1</option>
            <option value="5.2">5.2</option>
            <option value="5.3">5.3</option>
            <option value="5.4">5.4</option>
            <option value="5.5">5.5</option>
            <option value="5.6">5.6</option>
            <option value="5.7">5.7</option>
            <option value="5.8">5.8</option>
            <option value="5.9">5.9</option>
            <option value="5.10">5.10</option>
            <option value="5.11">5.11</option>
          </select>
        </div>
        <div className="space-y-1 w-full">
          <label htmlFor="username" className="block font-medium uppercase">
            weight
          </label>
          <select
            required
            defaultValue={""}
            className="bg-white w-full rounded-md px-4 py-3.5"
            name="weight"
            id=""
          >
            <option value="" readOnly>select your weight</option>
            <option value="40">40 kg</option>
            <option value="45">45 kg</option>
            <option value="50">50 kg</option>
            <option value="55">55 kg</option>
            <option value="60">60 kg</option>
            <option value="65">65 kg</option>
            <option value="70">70 kg</option>
            <option value="75">75 kg</option>
            <option value="80">80 kg</option>
            <option value="85">85 kg</option>
          </select>
        </div>
        <div className="space-y-1">
          <label htmlFor="username" className="block font-medium uppercase">
            age
          </label>
          <input
            type="number"
            name="age"
            required
            placeholder="your age"
            className="w-full px-4 py-3 rounded-md dark:border-gray-300 dark:bg-gray-50 dark:text-gray-800 focus:dark:border-violet-600"
          />
        </div>
        <div className="space-y-1">
          <label htmlFor="username" className="block font-medium uppercase">
            occupation
          </label>
          <input
            type="text"
            name="occupation"
            required
            placeholder="your occupation"
            className="w-full px-4 py-3 rounded-md dark:border-gray-300 dark:bg-gray-50 dark:text-gray-800 focus:dark:border-violet-600"
          />
        </div>
        <div className="space-y-1">
          <label htmlFor="username" className="block font-medium uppercase">
            race
          </label>
          <select
            required
            defaultValue={""}
            className="bg-white w-full rounded-md px-4 py-3.5 capitalize"
            name="race"
            id=""
          >
            <option value="" readOnly>your skin color</option>
            <option value="fair">fair</option>
            <option value="light">light</option>
            <option value="medium">medium</option>
            <option value="tan">tan</option>
            <option value="olive">olive</option>
            <option value="brown">brown</option>
            <option value="dark">dark</option>
            <option value="deep">deep</option>
          </select>
        </div>

        <div className="space-y-1">
          <label htmlFor="username" className="block font-medium uppercase">
            father's name
          </label>
          <input
            type="text"
            name="father_name"
            required
            placeholder="your father's name"
            className="w-full px-4 py-3 rounded-md dark:border-gray-300 dark:bg-gray-50 dark:text-gray-800 focus:dark:border-violet-600"
          />
        </div>
        <div className="space-y-1">
          <label htmlFor="username" className="block font-medium uppercase">
            mother's name
          </label>
          <input
            type="text"
            name="mother_name"
            required
            placeholder="your mother's name"
            className="w-full px-4 py-3 rounded-md dark:border-gray-300 dark:bg-gray-50 dark:text-gray-800 focus:dark:border-violet-600"
          />
        </div>

        <div className="space-y-1">
          <label htmlFor="username" className="block font-medium uppercase">
            permanent division
          </label>
          <select
            required
            defaultValue={""}
            className="bg-white w-full rounded-md px-4 py-3.5 capitalize"
            name="permanent_address"
            id=""
          >
            <option value="" readOnly>your permanent division</option>
            <option value="dhaka">dhaka</option>
            <option value="chattagram">chattagram</option>
            <option value="rangpur">rangpur</option>
            <option value="barishal">barishal</option>
            <option value="khulna">khulna</option>
            <option value="mymensingh">mymensingh</option>
            <option value="sylhet">sylhet</option>
          </select>
        </div>
        <div className="space-y-1">
          <label htmlFor="username" className="block font-medium uppercase">
            present division
          </label>
          <select
            required
            defaultValue={""}
            className="bg-white w-full rounded-md px-4 py-3.5 capitalize"
            name="present_address"
            id=""
          >
            <option value="" readOnly>your present division</option>
            <option value="dhaka">dhaka</option>
            <option value="chattagram">chattagram</option>
            <option value="rangpur">rangpur</option>
            <option value="barishal">barishal</option>
            <option value="khulna">khulna</option>
            <option value="mymensingh">mymensingh</option>
            <option value="sylhet">sylhet</option>
          </select>
        </div>

        <div className="space-y-1">
          <label htmlFor="username" className="block font-medium uppercase">
            expected age
          </label>
          <input
            type="number"
            name="expected_age"
            required
            placeholder="age you're expecting"
            className="w-full px-4 py-3 rounded-md dark:border-gray-300 dark:bg-gray-50 dark:text-gray-800 focus:dark:border-violet-600"
          />
        </div>

        <div className="space-y-1 w-full">
          <label htmlFor="username" className="block font-medium uppercase">
            expected height
          </label>
          <select
            required
            defaultValue={""}
            className="bg-white w-full rounded-md px-4 py-3.5"
            name="expected_height"
            id=""
          >
            <option value="" readOnly>height you're expecting</option>
            <option value="4">4</option>
            <option value="4.1">4.1</option>
            <option value="4.2">4.2</option>
            <option value="4.3">4.3</option>
            <option value="4.4">4.4</option>
            <option value="4.5">4.5</option>
            <option value="4.6">4.6</option>
            <option value="4.7">4.7</option>
            <option value="4.8">4.8</option>
            <option value="4.9">4.9</option>
            <option value="4.10">4.10</option>
            <option value="4.11">4.11</option>
            <option value="5">5</option>
            <option value="5.1">5.1</option>
            <option value="5.2">5.2</option>
            <option value="5.3">5.3</option>
            <option value="5.4">5.4</option>
            <option value="5.5">5.5</option>
            <option value="5.6">5.6</option>
            <option value="5.7">5.7</option>
            <option value="5.8">5.8</option>
            <option value="5.9">5.9</option>
            <option value="5.10">5.10</option>
            <option value="5.11">5.11</option>
          </select>
        </div>

        <div className="space-y-1 w-full">
          <label htmlFor="username" className="block font-medium uppercase">
            expected weight
          </label>
          <select
            required
            defaultValue={""}
            className="bg-white w-full rounded-md px-4 py-3.5"
            name="expected_weight"
            id=""
          >
            <option value="" readOnly>weight you're expecting</option>
            <option value="40">40 kg</option>
            <option value="45">45 kg</option>
            <option value="50">50 kg</option>
            <option value="55">55 kg</option>
            <option value="60">60 kg</option>
            <option value="65">65 kg</option>
            <option value="70">70 kg</option>
            <option value="75">75 kg</option>
            <option value="80">80 kg</option>
            <option value="85">85 kg</option>
          </select>
        </div>

        <div className="space-y-1">
          <label htmlFor="username" className="block font-medium uppercase">
            email
          </label>
          <input
            type="email"
            name="email"
            required
            defaultValue={user?.email}
            readOnly
            className="w-full px-4 py-3 rounded-md dark:border-gray-300 dark:bg-gray-50 dark:text-gray-800 focus:dark:border-violet-600"
          />
        </div>
        <div className="space-y-1">
          <label htmlFor="username" className="block font-medium uppercase">
            mobile number
          </label>
          <input
            type="number"
            name="number"
            required
            placeholder="your mobile number"
            className="w-full px-4 py-3 rounded-md dark:border-gray-300 dark:bg-gray-50 dark:text-gray-800 focus:dark:border-violet-600"
          />
        </div>

        <button type="submit" className="primaryBtn px-12">
          {isPending ? "Saving" : "Save & publish now"}
        </button>
      </form>
    </div>
  );
};

export default Edit;
