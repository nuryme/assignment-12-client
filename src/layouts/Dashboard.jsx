import { Outlet } from "react-router-dom";
import DashboardNav from "../shared components/dashboardNav";

const Dashboard = () => {
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
