import AOS from "aos";
import "aos/dist/aos.css";
import { useEffect } from "react";

const FoodCard = ({ item }) => {
  const { name, image, price, recipe } = item;
  useEffect(() => {
    AOS.init();
  }, []);
  return (
    <div data-aos="fade-up-right">
      <div className="card w-96 bg-base-100 hover:shadow-2xl border-2 ">
        <figure>
          <img src={image} alt="Shoes" className="rounded-xl" />
        </figure>
        <p className="absolute top-5 right-4 bg-yellow-500 px-2 py-1 rounded-xl font-semibold">
          ${price}
        </p>
        <div className="card-body items-center text-center">
          <h2 className="card-title">{name}</h2>
          <p>{recipe}</p>
          <div className="card-actions">
            <button className="btn btn-outline border-0 border-orange-400 border-b-4 bg-slate-100 bg-gradient-to-r hover:from-pink-500 hover:to-yellow-500">
              Add To Cart
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default FoodCard;
