import DashboardLayout from "@/component/Layouts/DashboardLayout";
import RootLayout from "@/component/Layouts/RootLayout";
import React from "react";

const Dashboard = () => {
  return (
    <div>
      <h1>This is dashboard</h1>
    </div>
  );
};

export default Dashboard;

Dashboard.getLayout = function getLayout(page) {
  return (
    <RootLayout>
      <DashboardLayout>{page}</DashboardLayout>
    </RootLayout>
  );
};
