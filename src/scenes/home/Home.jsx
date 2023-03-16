import Featured from "./Featured";
import MainCarousel from "./MainCarousel";
import Sustainability from "./Sustainability";
function Home() {
  return (
    <div className="home">
      <MainCarousel />
      <Sustainability />
      <Featured />
    </div>
  );
}

export default Home;
