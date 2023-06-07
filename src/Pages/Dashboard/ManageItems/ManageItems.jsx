import SectionTItle from "../../../components/SectionTitle/SectionTItle";
import useMenu from "../../../hooks/useMenu";
import { TfiPencilAlt } from "react-icons/tfi";
import { FaTrash } from "react-icons/fa";
import Swal from "sweetalert2";
import useAxiosSecure from "../../../hooks/useAxiosSecure";

const ManageItems = () => {
  const [menu, , refetch] = useMenu();
  const [axiosSecure] = useAxiosSecure();

  const handleDelete = (item) => {
    Swal.fire({
      title: "Are you sure?",
      text: "You won't be able to revert this!",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#3085d6",
      cancelButtonColor: "#d33",
      confirmButtonText: "Yes, delete it!",
    }).then((result) => {
      if (result.isConfirmed) {
        axiosSecure.delete(`/menu/${item._id}`).then((res) => {
          console.log("delete res", res.data);
          if (res.data.deletedCount > 0) {
            refetch();
            Swal.fire("Deleted!", "Your file has been deleted.", "success");
          }
        });
      }
    });
  };

  return (
    <div>
      <SectionTItle
        subHeading="Hurry up"
        heading="Manage All Items"
      ></SectionTItle>
      <div className="overflow-x-auto pl-10">
        <table className="table">
          {/* head */}
          <thead>
            <tr>
              <th>#</th>
              <th>item image</th>
              <th>item name</th>
              <th>price</th>
              <th>action</th>
              <th>action</th>
            </tr>
          </thead>
          <tbody>
            {menu.map((item, index) => (
              <tr key={item._id}>
                <th>{index + 1}</th>
                <td>
                  <div className="flex items-center space-x-3">
                    <div className="avatar">
                      <div className="mask mask-squircle w-12 h-12">
                        <img
                          src={item.image}
                          alt="Avatar Tailwind CSS Component"
                        />
                      </div>
                    </div>
                  </div>
                </td>
                <td>{item.name}</td>
                <td className="text-end">{item.price}</td>
                <td>
                  <button className="btn btn-ghost btn-circle">
                    <TfiPencilAlt size={22}></TfiPencilAlt>
                  </button>
                </td>
                <td>
                  <button
                    onClick={() => handleDelete(item)}
                    className="btn btn-ghost btn-circle"
                  >
                    {" "}
                    <FaTrash size={22}></FaTrash>{" "}
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default ManageItems;
