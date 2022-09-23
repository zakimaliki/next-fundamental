import withAuth from "../components/Auth/withAuth.jsx";
const Dashboard = () => {
  const removeToken =()=>{
    localStorage.removeItem("Token")
    window.reload(false);
  }
  return (
    <div>
      <h1>Dashboard</h1>
      {/* <button onClick={removeToken}></button> */}
    </div>
  );
};

export default withAuth(Dashboard);