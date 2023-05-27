import { Link } from "react-router-dom";
import Cover from "../../Shared/Cover/Cover";
import MenuItem from "../../Shared/MenuItem/MenuItem";

const MenuCategory = ({ items, titel, img }) => {
  return (
    <div className="pt-10">
      {titel && <Cover img={img} title={titel}></Cover>}
      <div className="grid md:grid-cols-2 gap-10 my-16">
        {items.map((item) => (
          <MenuItem key={item._id} item={item}></MenuItem>
        ))}
      </div>
      <div className="text-center">
        <Link to={`/order/${titel}`}>
          {" "}
          <button className="btn btn-outline border-0 bg-gray-200 border-b-4 bg-gradient-to-r hover:from-pink-500 hover:to-yellow-500">
            Order Now
          </button>
        </Link>
      </div>
    </div>
  );
};

export default MenuCategory;
