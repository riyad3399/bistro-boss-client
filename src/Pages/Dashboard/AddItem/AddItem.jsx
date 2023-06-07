import { Helmet } from "react-helmet-async";
import SectionTItle from "../../../components/SectionTitle/SectionTItle";
import { useForm } from "react-hook-form";
import useAxiosSecure from "../../../hooks/useAxiosSecure";
import Swal from "sweetalert2";

const img_hosting_token = import.meta.env.VITE_IMAGE_UPLOAD_TOKEN;

const AddItem = () => {
  const { register, handleSubmit, reset } = useForm();
    const img_hosting_url = `https://api.imgbb.com/1/upload?key=${img_hosting_token}`;
    
    const [axiosSecure] = useAxiosSecure();

  const onSubmit = (data) => {
    const formData = new FormData();
    formData.append("image", data.image[0]);

    fetch(img_hosting_url, {
      method: "POST",
      body: formData,
    })
      .then((res) => res.json())
      .then((imgResponse) => {
        console.log(imgResponse);
        if (imgResponse.success) {
          const imgURL = imgResponse.data.display_url;
          const { name, price, category, recipe } = data;
          const newItem = {
            name,
            price: parseFloat(price),
            category,
            recipe,
            image: imgURL,
          };
            console.log(newItem);
            axiosSecure.post('/menu', newItem)
                .then(data => {
                    console.log('after posting new menu item', data.data);
                    if (data.data.insertedId) {
                        reset();
                        Swal.fire({
                            position: 'top-end',
                            icon: 'success',
                            title: 'Item added successful!',
                            showConfirmButton: false,
                            timer: 1500
                          })
                    }
            })
        }
      });
  };
  return (
    <div className=" py-10 px-10 w-full">
      <Helmet>
        <title>Add Item - Bistro Boss</title>
      </Helmet>
      <SectionTItle
        subHeading="What's new? "
        heading="add an item"
      ></SectionTItle>
      <form onSubmit={handleSubmit(onSubmit)}>
        <div className="form-control ">
          <label className="label">
            <span className="label-text font-semibold">Recipe name*</span>
          </label>
          <input
            {...register("name", { required: true })}
            type="text"
            placeholder="Recipe name"
            className="input input-bordered "
          />
        </div>
        <div className="flex gap-4">
          <div className="form-control w-full">
            <label className="label">
              <span className="label-text">Category*</span>
            </label>
            <select
              {...register("category", { required: true })}
              defaultValue="Pick One"
              className="select select-bordered "
            >
              <option disabled>Pick One</option>
              <option>Pizza</option>
              <option>Soup</option>
              <option>Salad</option>
              <option>Drink</option>
              <option>Deshi</option>
              <option>Dessert</option>
            </select>
          </div>
          <div className="form-control w-full">
            <label className="label">
              <span className="label-text font-semibold">Price*</span>
            </label>
            <input
              {...register("price", { required: true })}
              type="number"
              placeholder="Type here"
              className="input input-bordered "
            />
          </div>
        </div>
        <div className="form-control">
          <label className="label">
            <span className="label-text">Recipe Details</span>
          </label>
          <textarea
            {...register("recipe", { required: true })}
            className="textarea textarea-bordered h-24"
            placeholder="Bio"
          ></textarea>
        </div>
        <div className="form-control max-w-xs">
          <label className="label">
            <span className="label-text">Item Image*</span>
          </label>
          <input
            {...register("image", { required: true })}
            type="file"
            className="file-input file-input-bordered "
          />
        </div>
        <input
          type="submit"
          value="Add Item"
          className="btn btn-warning btn-sm mt-4"
        />
      </form>
    </div>
  );
};

export default AddItem;
