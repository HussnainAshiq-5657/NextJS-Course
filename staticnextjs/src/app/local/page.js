import { API_BASE_URL } from '@/local/constants.js';
function page() {
  console.log(process.env.NODE_ENV);
  console.log(process.env.DB_Password);
  

  return (
    <>
      <div className="flex flex-col gap-4 my-10 ml-8">
        {process.env.NODE_ENV == 'development' ? (
          <h1 className="text-3xl text-blue-500">Development Build in Next js</h1>
        ) : (
          <h1 className="text-3xl text-blue-500">Production Build in Next js</h1>
        )}
        {API_BASE_URL}
      </div>
    </>
  );
}

export default page;
