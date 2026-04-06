'use client';
function Product({ price }) {
  console.log(price);

  return (
    <>
      <div>
        <button
          onClick={() => alert('$' + price)}
          className="bg-blue-500 cursor-pointer transition duration-300 hover:bg-blue-800 rounded-xl px-4 py-2"
        >
          check Price
        </button>
      </div>
    </>
  );
}

export default Product;
