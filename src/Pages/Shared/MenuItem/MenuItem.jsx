const MenuItem = ({ item }) => {
  const { name, recipe, image, price } = item;
  console.log(image);
  return (
    <div className="flex space-x-3 items-center">
      <div className="border w-24 h-24" style={{borderRadius:'0 200px 200px 200px'}}>
        <img src={image} alt="" />
      </div>
      <div>
        <h3 className="uppercase">{name} -------</h3>
        <p>{recipe}</p>
      </div>
      <p className="text-yellow-500">${price}</p>
    </div>
  );
};

export default MenuItem;
