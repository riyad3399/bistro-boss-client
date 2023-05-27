import SectionTItle from "../../../components/SectionTitle/SectionTItle";
import MenuItem from "../../Shared/MenuItem/MenuItem";
import useMenu from "../../../hooks/useMenu";

const PopularMenu = () => {
  const [menu] = useMenu();
  const popular = menu.filter(item => item.category === 'popular')

  return (
    <section className="mb-8">
      <SectionTItle
        heading="From our menu"
        subHeading="Popular Items"
      ></SectionTItle>

      <div className="grid md:grid-cols-2 gap-10">
        {popular.map((item) => (
          <MenuItem key={item._id} item={item}></MenuItem>
        ))}
      </div>
    </section>
  );
};

export default PopularMenu;
