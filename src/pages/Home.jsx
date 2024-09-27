import FisrtCarousel from "../components/FirstCarousel/FisrtCarousel";
import Karusel from "../components/carousel/Karusel";
import Partner from "../components/partner/Partner";
import Sale from "../components/sale/Sale";
import Cards from "./Cards";

const Home = () => {
  return (
    <>
      <FisrtCarousel />
      <Sale />
      <Partner />
      <Karusel />
      <Cards />
    </>
  );
};

export default Home;
