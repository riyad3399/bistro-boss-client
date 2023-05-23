import SectionTItle from "../../../components/SectionTitle/SectionTItle";
import featuredImg from "../../../assets/home/featured.jpg";
import './Featured.css';

const Featured = () => {
  return (
    <div className="featured-item bg-fixed pt-6">
      <SectionTItle
        subHeading="Check it out"
        heading="Featured Item"
      ></SectionTItle>
      <div className="md:flex justify-center items-center pb-20 pt-16 px-36 text-white bg-black bg-opacity-30">
        <div>
          <img src={featuredImg} alt="" />
        </div>
        <div className="md:ml-10 space-y-2">
          <p>Aug, 23, 2023</p>
          <p className="uppercase">WHERE CAN I GET SOME?</p>
          <p className="text-lg">
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Numquam
            eos amet, tempora laborum iusto commodi perspiciatis hic esse quas
            et ut facere earum velit accusamus, saepe excepturi, nisi
            repudiandae consequuntur? Ipsam amet qui, maxime ipsum perspiciatis
            saepe ex doloribus voluptatem.
          </p>
          <button className="btn btn-outline btn-success text-white border-0 border-b-4">Order Now</button>
        </div>
      </div>
    </div>
  );
};

export default Featured;
