import { useEffect } from "react";
import Banner from "../Banner/Banner";
import Category from "../Category/Category";
import Featured from "../Featured/Featured";
import PopularMenu from "../PopularMenu/PopularMenu";
import Testimonials from "../Testimonials/Testimonials";
import AOS from "aos";
import "aos/dist/aos.css";
import { Helmet } from "react-helmet-async";

const Home = () => {
  useEffect(() => {
    AOS.init();
  }, []);
  return (
    <div>
      <Helmet>
        <title>Home - Bistro Boss</title>
      </Helmet>
      <Banner></Banner>
      <div data-aos="fade-left">
        <Category></Category>
      </div>
      <div data-aos="fade-right">
        <PopularMenu></PopularMenu>
      </div>
      <Featured></Featured>
      <div data-aos="fade-left">
        <Testimonials></Testimonials>
      </div>
    </div>
  );
};

export default Home;
