import { CiMobile4 } from "react-icons/ci";
import height from "../../assets/height.png";
import { BsEnvelopeArrowUp } from "react-icons/bs";
import SectionTitleFlower from "../../shared components/SectionTitleFlower";
import Swal from "sweetalert2";

const View = () => {
  const handlePremium = () => {
    Swal.fire({
      title: "Are you sure to make you premium?",
      showCancelButton: true,
      confirmButtonColor: "#3085d6",
      cancelButtonColor: "#d33",
      confirmButtonText: "Yes!",
    }).then((result) => {
      if (result.isConfirmed) {
        Swal.fire({
          title: "Deleted!",
          text: "Your file has been deleted.",
          icon: "success",
        });
      }
    });
  };

  return (
    <div className="">
      <SectionTitleFlower title="view bio data"></SectionTitleFlower>
      <div className="space-y-6 sm:space-y-12 mt-12">
        <div className="block gap-6 mx-auto group lg:grid lg:grid-cols-2 ">
          <img
            src="https://i.pinimg.com/736x/16/bd/06/16bd06a627fd326b74db64811e88da3a.jpg"
            alt=""
            className="object-cover w-full rounded h-screen  dark:bg-gray-500"
          />
          <div className="space-y-2 px-10">
            <h2 className="font-playfairDisplay uppercase font-bold text-primary">
              Angelina Jolie
            </h2>
            <div className="flex gap-6 items-center py-4">
              <div className="bg-secondary font-bold px-4 py-2 rounded-full w-fit">
                Female
              </div>
              <p>Date: 55-55-55</p>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-5 mt-6 gap-4">
              <div className="flex flex-col justify-center border border-primary rounded-2xl p-2">
                <img
                  src="	https://rn53themes.net/themes/matrimo/images/icon/pro-city.png"
                  alt=""
                  className="w-10 mx-auto mb-2"
                />
                <p className="uppercase text-center">
                  City: <span className="block font-bold">New york</span>
                </p>
              </div>
              <div className="flex flex-col justify-center border border-primary rounded-2xl p-2">
                <img
                  src="https://rn53themes.net/themes/matrimo/images/icon/pro-age.png"
                  alt=""
                  className="w-10 mx-auto mb-2"
                />
                <p className="uppercase text-center">
                  age: <span className="block font-bold">22</span>
                </p>
              </div>
              <div className="flex flex-col justify-center border border-primary rounded-2xl p-2">
                <img src={height} alt="" className="w-10 mx-auto mb-2" />
                <p className="uppercase text-center">
                  height: <span className="block font-bold">5.7</span>
                </p>
              </div>
              <div className="flex flex-col justify-center border border-primary rounded-2xl p-2">
                <img
                  src="	https://rn53themes.net/themes/matrimo/images/icon/pro-city.png"
                  alt=""
                  className="w-10 mx-auto mb-2"
                />
                <p className="uppercase text-center">
                  weight: <span className="block font-bold">50kg</span>
                </p>
              </div>
              <div className="flex flex-col justify-center border border-primary rounded-2xl p-2">
                <img
                  src="	https://rn53themes.net/themes/matrimo/images/icon/pro-city.png"
                  alt=""
                  className="w-10 mx-auto mb-2"
                />
                <p className="uppercase text-center">
                  race: <span className="block font-bold">fair</span>
                </p>
              </div>
            </div>

            <h5 className="uppercase mt-12">About</h5>
            <p className="mt-2">
              It is a long established fact that a reader will be distracted by
              the readable content of a page when looking at its layout. The
              point of using Lorem Ipsum is that it has a more-or-less normal
              distribution of letters, as opposed to using 'Content here,
              content here', making it look like readable English.
            </p>
            <h5 className="uppercase mt-12">contact information</h5>
            <div className="mt-2 space-y-2">
              <div className="flex items-center gap-4">
                <div className=" border border-secondary p-3 rounded-lg w-fit">
                  <CiMobile4 className="text-lg" />
                </div>
                <p className="font-bold">
                  Phone: <span className="font-normal">+0123456789</span>
                </p>
              </div>
              <div className="flex items-center gap-4">
                <div className=" border border-secondary p-3 rounded-lg w-fit">
                  <BsEnvelopeArrowUp className="text-lg" />
                </div>
                <p className="font-bold">
                  Email: <span className="font-normal">example@gmail.com</span>
                </p>
              </div>
            </div>
            <h5 className="uppercase mt-12">Personal information</h5>
            <div className="mt-2 space-y-2 grid grid-cols-1 md:grid-cols-2">
              <p className="font-bold capitalize">
                Father's Name: <span className="font-normal">John doe</span>
              </p>
              <p className="font-bold capitalize">
                mather's Name: <span className="font-normal">John doe</span>
              </p>
              <p className="font-bold capitalize">
                division: <span className="font-normal">John doe</span>
              </p>
              <p className="font-bold capitalize">
                present address: <span className="font-normal">John doe</span>
              </p>
              <p className="font-bold capitalize">
                permanent address: <span className="font-normal">John doe</span>
              </p>
              <p className="font-bold capitalize">
                expected age: <span className="font-normal">John doe</span>
              </p>
              <p className="font-bold capitalize">
                expected height: <span className="font-normal">John doe</span>
              </p>
              <p className="font-bold capitalize">
                expected weight: <span className="font-normal">John doe</span>
              </p>
            </div>

            <button onClick={handlePremium} className="secondaryBtn">
              🌸 make bio to premium
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default View;
