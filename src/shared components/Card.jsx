import { Link } from "react-router";
import Loading from "../pages/Loading";

const Card = ({ bio, isLoading }) => {
  if (isLoading) return <Loading></Loading>;

  // console.log(bio);
  if(!bio) return {}
  return (
    <div className="w-full max-w-md bg-white shadow-lg rounded-xl overflow-hidden border border-gray-200 flex flex-col group">
      <div className="h-56 overflow-hidden">
        <img
          className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-300"
          src={bio.image}
          alt="Profile"
        />
      </div>
      <div className="p-4  flex flex-col flex-grow">
        <div className="space-y-2 flex flex-col flex-grow">
          <h4 className="">Bio data ID: {bio.bioId}</h4>
          <p className="text-gray-600">
            Type: <span className="font-medium">{bio.type}</span>
          </p>
          <p className="text-gray-600">
            Division: <span className="font-medium">{bio.present_address}</span>
          </p>
          <p className="text-gray-600">
            Age: <span className="font-medium">{bio.age}</span>
          </p>
          <p className="text-gray-600 ">
            Occupation: <span className="font-medium">{bio.occupation}</span>
          </p>
        </div>
        <Link
          to={`/details/${bio.bioId}`}
          className="flex justify-center mt-6 "
        >
          <button className="primaryBtn">View Profile</button>
        </Link>
      </div>
    </div>
  );
};

export default Card;
