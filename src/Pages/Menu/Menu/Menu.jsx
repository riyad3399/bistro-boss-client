import { Helmet } from "react-helmet-async";
import Cover from "../../Shared/Cover/Cover";
import menuImg from "../../../assets/menu/banner3.jpg";
import pizzaImg from "../../../assets/menu/pizza-bg.jpg";
import saladImg from "../../../assets/menu/salad-bg.jpg";
import soupImg from "../../../assets/menu/soup-bg.jpg";
import dessertImg from "../../../assets/menu/dessert-bg.jpeg";
import useMenu from "../../../hooks/useMenu";
import SectionTItle from "../../../components/SectionTitle/SectionTItle";
import MenuCategory from "../MenuCategory/MenuCategory";

const Menu = () => {
  const [menu] = useMenu();
  const desserts = menu.filter((item) => item.category === "dessert");
  const soup = menu.filter((item) => item.category === "soup");
  const salad = menu.filter((item) => item.category === "salad");
  const pizza = menu.filter((item) => item.category === "pizza");
  const offered = menu.filter((item) => item.category === "offered");
  return (
    <div>
      <Helmet>
        <title>Our Menu - Bistro Boss</title>
      </Helmet>
      <Cover img={menuImg} title="Our menu"></Cover>
      {/* main cover */}
      <SectionTItle
        subHeading="Don't Miss"
        heading="Today's Offer"
      ></SectionTItle>
      {/* offered menu items */}
      <MenuCategory items={offered}></MenuCategory>
      {/* dessert menu items */}
          <MenuCategory items={desserts} img={dessertImg} titel="dessert"></MenuCategory>
          {/* pizza menu items */}
          <MenuCategory items={pizza} img={pizzaImg} titel={"pizza"}></MenuCategory>
          {/* salad menu items */}
          <MenuCategory items={salad} img={saladImg} titel={"salad"}></MenuCategory>
          {/* soup menu items */}
          <MenuCategory items={soup} img={soupImg} titel={"soup"}></MenuCategory>
    </div>
  );
};

export default Menu;
