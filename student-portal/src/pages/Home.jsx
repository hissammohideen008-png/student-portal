import Card from "../components/card";

function Home() {
  return (
    <div className="container">

      <h1>Student Dashboard</h1>
      <p>Welcome to your Student Portal!</p>

      <div className="cards">

        <Card
          name="halaand"
          department="IT"
          year="3rd Year"
        />

        <Card
          name="Ayesha"
          department="CSE"
          year="3rd Year"
        />

        <Card
          name="Rifana"
          department="IT"
          year="3rd Year"
        />

      </div>
    </div>
  );
}

export default Home;
