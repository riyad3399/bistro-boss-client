import { useQuery } from "@tanstack/react-query";
import useAuth from "./useAuth";
import useAxiosSecure from "./useAxiosSecure";

const useCart = () => {
  const { user } = useAuth();
  
  const [axiosSecure] = useAxiosSecure();

  const { refetch, data: cart = [] } = useQuery({
    queryKey: ["carts", user?.email],
    enabled:!!user?.email && !!localStorage.getItem("access-token"),
    queryFn: async () => {
      const res = await axiosSecure(`/carts?email=${user?.email}`)
      console.log('res from axios', res)
      return res.data;
  },
    // queryFn: async () => {
    //   const res = await fetch(
    //     `https://bistro-boss-server-riyad3399.vercel.app/carts?email=${user.email}`, {
    //       headers: {
    //         authorization: `bearer ${token}`
    //       }
    //     }
    //   );
    //   return res.json();
    // },
  });
  return [refetch, cart];
};

export default useCart;
