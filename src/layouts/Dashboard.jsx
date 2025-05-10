import { Navigate, Outlet } from "react-router-dom";
import DashboardNav from "../shared components/dashboardNav";
// import useRole from "../hooks/useRole";

const Dashboard = () => {
// const {role , isLoading} = useRole()

// if(role === 'admin') return <Navigate to={'/dashboard/admin-dashboard'}></Navigate>

// if(role === 'user') return <Navigate to={'/dashboard/view'}></Navigate>

// if(isLoading) return <h1 className="">Loading...</h1>

  return (
    <div className="flex">
      <DashboardNav></DashboardNav>

      <div className="py-24 px-12 w-full">
        <Outlet></Outlet>
      </div>
    </div>
  );
};

export default Dashboard;
