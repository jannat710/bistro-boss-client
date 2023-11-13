

const ChefItem = ({item}) => {
    const {name, image,recipe} = item;
    return (
        <div className="card bg-base-100 shadow-xl">
  <figure className="px-0 pt-0">
    <img src={image} className="" />
  </figure>
  <div className="card-body items-center text-center bg-[#F3F3F3]">
    <h2 className="card-title">{name}</h2>
    <p>{recipe}</p>
    <div className="card-actions">
    <button className="btn btn-outline text-[#BB8506] border-0 border-b-4 mt-4 hover:bg-black hover:text-[#BB8506]">Add to Cart</button>
    </div>
  </div>
</div>
    );
};

export default ChefItem;