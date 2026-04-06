

 async function Products() {
    const data = await fetch('https://dummyjson.com/products');
    const response = await data.json();
    const res = response.products
  return (
    <>
     <div className="w-4/5 mx-auto grid grid-cols-1 md:grid-cols-4 gap-6 my-10">
        {res.map((items) => (
          <div
            key={items.id}
            className="flex flex-col gap-4 border border-gray-200 px-6 py-2 rounded-lg hover:shadow-lg hover:-translate-y-2 transition-all duration-300 cursor-pointer"
          >
            <div className="flex justify-center items-center">
              <img src={items.thumbnail} alt={items.title} className="object-contain" />
            </div>
            <div className="flex flex-col gap-4 p-2">
              <h1 className="text-md font-semibold text-left line-clamp-1">
                {items.title.toUpperCase()}
              </h1>
              <div className="flex justify-start gap-4 items-center">
                <p className="text-xl font-bold text-red-500">${items.price.toFixed(2)}</p>
                <p className="text-md font-bold text-yellow-700">Rating: {items.rating}</p>
              </div>
              <div>
                <button className="w-full bg-blue-500 hover:bg-blue-600 text-white font-semibold py-2 px-4 rounded-xl">
                  Add To Cart
                </button>
              </div>
            </div>
          </div>
        ))}
      </div>
    </>
  );
}

export default Products;
