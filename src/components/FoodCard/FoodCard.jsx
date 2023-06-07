import AOS from "aos";
import "aos/dist/aos.css";
import { useContext } from "react";
import { useEffect } from "react";
import { AuthContext } from "../../provider/AuthProvider";
import Swal from "sweetalert2";
import { useLocation, useNavigate } from "react-router-dom";
import useCart from "../../hooks/useCart";

const FoodCard = ({ item }) => {
  useEffect(() => {
    AOS.init();
  }, []);

  const { name, image, price, recipe, _id } = item;
  const { user } = useContext(AuthContext);
  const navigate = useNavigate();
  const location = useLocation()
  const [refetch, cart] = useCart();

  const handleAddToCart = () => {
    // console.log(item);
    if (user && user.email) {
      const cartItem = {menuItemId: _id, name, image, price, email: user.email}
      fetch("https://bistro-boss-server-riyad3399.vercel.app/carts", {
        method: 'POST',
        headers: {
          'content-type': 'application/json'
        },
        body:JSON.stringify(cartItem)
      })
        .then((res) => res.json())
        .then((data) => {
          if (data.insertedId) {
            refetch();
            Swal.fire({
              position: "top-end",
              icon: "success",
              title: "Food added successful",
              showConfirmButton: false,
              timer: 1500,
            });
          }
        });
    } else {
      Swal.fire({
        title: "Please login to order the food",
        text: "You won't be able to revert this!",
        icon: "warning",
        showCancelButton: true,
        confirmButtonColor: "#3085d6",
        cancelButtonColor: "#d33",
        confirmButtonText: "Login now!",
      }).then((result) => {
        if (result.isConfirmed) {
          navigate("/login", { state: { from: location } });
        }
      });
    }
  };

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
            <button
              onClick={() => handleAddToCart(item)}
              className="btn btn-outline border-0 border-orange-400 border-b-4 bg-slate-100 bg-gradient-to-r hover:from-pink-500 hover:to-yellow-500"
            >
              Add To Cart
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default FoodCard;
