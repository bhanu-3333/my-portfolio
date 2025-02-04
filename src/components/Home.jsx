import BackgroundAnimation from "./BackgroundAnimation";
import CursorAnimation from "./CursorAnimation";
import "../styles/Home.css";

const Home = () => {
  return (
    <div className="home">
      <BackgroundAnimation />
      <CursorAnimation />
      <div className="content">
        <h1>hi,i'm bhanu</h1>
        <h1>Welcome to My Portfolio</h1>
        <p>Explore my projects and work.</p>
      </div>
    </div>
  );
};

export default Home;
