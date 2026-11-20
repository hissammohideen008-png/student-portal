
import { useNavigate } from "react-router-dom";
import Card from "../components/Card";

function Home() {
  const navigate = useNavigate();

  return (
    <div className="container">

      <h1>Student Dashboard</h1>
      <p>Welcome to your Student Portal!</p>

      <div className="cards">

        <Card
          name="Haaland"
          department="IT"
          year="3rd Year"
          onClick={() => navigate("/profile/haaland")}
        />

        <Card
          name="Ayesha"
          department="CSE"
          year="3rd Year"
          onClick={() => navigate("/profile/ayesha")}
        />

        <Card
          name="Rifana"
          department="IT"
          year="3rd Year"
          onClick={() => navigate("/profile/rifana")}
        />

      </div>
    </div>
  );
}

export default Home;
