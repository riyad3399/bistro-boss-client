import { useEffect } from "react";
import setUseTitle from "../../../hooks/setUseTitle";
import Banner from "../Banner/Banner";
import Category from "../Category/Category";
import Featured from "../Featured/Featured";
import PopularMenu from "../PopularMenu/PopularMenu";
import Testimonials from "../Testimonials/Testimonials";
import AOS from "aos";
import "aos/dist/aos.css";

const Home = () => {
  useEffect(() => {
    AOS.init();
  }, []);
  setUseTitle("Home");
  return (
    <div>
      <div data-aos="zoom-in">
        <Banner></Banner>
      </div>
      <div data-aos="fade-left">
        <Category></Category>
      </div>
      <div data-aos="fade-right">
        <PopularMenu></PopularMenu>
      </div>
      <div data-aos="fade-left">
        <Featured></Featured>
      </div>
      <div data-aos="fade-right">
        <Testimonials></Testimonials>
      </div>
    </div>
  );
};

export default Home;
