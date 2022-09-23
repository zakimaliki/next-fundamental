// pages/dashboard.jsx
import withAuth from "./HOC/withAuth.jsx";
const Dashboard = () => {
  return (
    <div>
      <h1>Dashboard</h1>
      <h2></h2>
    </div>
  );
};

export default withAuth(Dashboard);