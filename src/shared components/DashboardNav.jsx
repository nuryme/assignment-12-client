import { Link, NavLink } from "react-router-dom";
import logo from "../assets/logo.png";
import { CiEdit, CiViewTimeline } from "react-icons/ci";
import { IoIosContacts } from "react-icons/io";
import { LuLayoutDashboard } from "react-icons/lu";
import { MdManageAccounts } from "react-icons/md";
import { TbPremiumRights } from "react-icons/tb";
import { FcApprove } from "react-icons/fc";
import useAuthInfo from "./../hooks/useAuthInfo";
import { FaCircleUser } from "react-icons/fa6";

const DashboardNav = () => {
  const { signOutUser } = useAuthInfo();

  return (
    <aside className=" px-4 pt-6 pb-20 w-60 md:w-[350px] bg-secondary">
      <div>
        <Link to={"/"}>
          <img className="w-60 mx-auto" src={logo} alt="" />
        </Link>
      </div>
      <nav className="space-y-2 mt-10 flex flex-col dashboard">
        <NavLink to={"/dashboard/edit"}>
          <CiEdit />
          edit bio
        </NavLink>
        <NavLink to={"/dashboard/view"}>
          <CiViewTimeline />
          view bio
        </NavLink>
        <NavLink to={"/dashboard/my-contact-request"}>
          <IoIosContacts />
          my contact request
        </NavLink>
        <NavLink to={"/dashboard/my-favorite"}>💕 favorite</NavLink>
        <NavLink to={"/dashboard/admin-dashboard"}>
          <LuLayoutDashboard />
          admin dashboard
        </NavLink>
        <NavLink to={"/dashboard/manage-users"}>
          <MdManageAccounts />
          manage users
        </NavLink>
        <NavLink to={"/dashboard/approved-premium"}>
          <TbPremiumRights />
          approved premium
        </NavLink>
        <NavLink to={"/dashboard/approved-contact-request"}>
          <FcApprove />
          approved contact request
        </NavLink>
        <hr className="w-full h-1 border-t border-primary my-10" />
        <button
          onClick={signOutUser}
          className="secondaryBtn border border-primary"
        >
          Log Out
        </button>
        <NavLink to={"/dashboard/profile"}>
          <FaCircleUser />
          Profile
        </NavLink>

      </nav>
    </aside>
  );
};

export default DashboardNav;
