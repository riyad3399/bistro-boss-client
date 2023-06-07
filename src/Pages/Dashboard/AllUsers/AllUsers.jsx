import { useQuery } from "@tanstack/react-query";
import { Helmet } from "react-helmet-async";
import { FaTrashAlt, FaUserShield } from "react-icons/fa";
import Swal from "sweetalert2";

const AllUsers = () => {
  const { data: users = [], refetch } = useQuery(["users"], async () => {
    const res = await fetch("https://bistro-boss-server-riyad3399.vercel.app/users");
    return res.json();
  });

    const handleDelete = (user) => {
      fetch(`https://bistro-boss-server-riyad3399.vercel.app/users/admin/${user._id}`, {
          method:'DELETE'
      })
      .then(res => res.json())
        .then(data => {
          console.log(data);
          if (data.deletedCount > 0) {
            Swal.fire({
              
              position: 'top-end',
              icon: 'success',
              title: `${user.name} is Remove`,
              showConfirmButton: false,
              timer: 1500
            })
          }
          
      })
  }
  
  const handleMakeUpdate =(user) => {
    fetch(`https://bistro-boss-server-riyad3399.vercel.app/users/admin/${user._id}`, {
      method: 'PATCH'
    })
      .then(res => res.json())
      .then(data => {
        console.log(data);
        if (data.modifiedCount) {
          refetch();
          Swal.fire({
            position: 'top-end',
            icon: 'success',
            title: `${user.name} is an Admin Now!`,
            showConfirmButton: false,
            timer: 1500
          })
        }
    })
  }

  return (
    <div className="w-full">
      <Helmet>
        <title>All Users - Bistro Boss</title>
      </Helmet>
      <h3 className="text-3xl font-semibold">Total Users:{users.length}</h3>
      <div className="overflow-x-auto">
        <table className="table table-zebra w-full">
          {/* head */}
          <thead>
            <tr>
              <th>#</th>
              <th>Name</th>
              <th>Email</th>
              <th>Role</th>
              <th>Action</th>
            </tr>
          </thead>
          <tbody>
            {users.map((user, index) => (
              <tr key={user._id}>
                <th>{index + 1}</th>
                <td>{user.name}</td>
                <td>{user.email}</td>
                <td>
                  {
                    user.role === 'admin' ? 'admin' :  <button onClick={() => handleMakeUpdate(user)} className="btn btn-circle border-none bg-orange-500 text-white hover:bg-orange-400">
                    <FaUserShield></FaUserShield>
                  </button>
                  }
                </td>
                <td>
                  <button onClick={() => handleDelete(user)} className="btn btn-circle border-none bg-red-600 text-white hover:bg-red-400">
                    <FaTrashAlt size={18}></FaTrashAlt>
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

export default AllUsers;
