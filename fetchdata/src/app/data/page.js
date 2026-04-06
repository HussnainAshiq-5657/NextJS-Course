import Product from './product';

async function Data() {
  const data = await fetch('https://dummyjson.com/products');
  const response = await data.json();
  const res = response.products;
  console.log(response);

  return (
    <>
      <div className="flex flex-col gap-6 my-10 ml-8">
        {res.map((items) => (
          <div key={items.id} className="flex flex-col gap-4">
            <h1>{items.title}</h1>
            <Product price={items.price} />
          </div>
        ))}
      </div>
    </>
  );
}

export default Data;
