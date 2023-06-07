import { FaGoogle, FaGithub } from "react-icons/fa";
import { AuthContext } from "../../../provider/AuthProvider";
import { useContext } from "react";
import { useLocation, useNavigate } from "react-router-dom";

const SocialLogin = () => {
  const { googleSignIn } = useContext(AuthContext);
  const location = useLocation();
  const navigate = useNavigate();

  const from = location.state?.from?.pathname || "/";

  const handleGoogleSignIn = () => {
    googleSignIn()
      .then((result) => {
        const loggedUser = result.user;
        console.log(loggedUser);
        const saveCart = {
          name: loggedUser.displayName,
          email: loggedUser.email,
        };
        fetch("https://bistro-boss-server-riyad3399.vercel.app/users", {
          method: "POST",
          headers: {
            "content-type": "application/json",
          },
          body: JSON.stringify(saveCart),
        })
          .then((res) => res.json())
          .then(() => {
            navigate(from, { replace: true });
          });
      })
      .catch((error) => {
        console.log(error.message);
      });
  };

  return (
    <div className="py-4">
      <div className="divider">OR</div>
      <div className="flex justify-center gap-5">
        <button
          onClick={handleGoogleSignIn}
          className="btn btn-outline btn-circle btn-primary"
        >
          {" "}
          <FaGoogle size={20} />{" "}
        </button>
        <button className="btn btn-outline btn-circle">
          {" "}
          <FaGithub size={20} />{" "}
        </button>
      </div>
    </div>
  );
};

export default SocialLogin;
