import Link from 'next/link';
import DeleteUser from '@/lib/DeleteUser';

async function getUsers() {
  let data = await fetch('http://localhost:3000/api/users', {
    cache: 'no-cache',
  });
  let response = await data.json();
  return response.result;
}

async function Products() {
  const Users = await getUsers();
  console.log(Users);

  return (
    <>
      <div className="my-20 mx-auto w-11/12 md:w-4/5 bg-white shadow-2xl rounded-2xl p-8">
        <h1 className="text-3xl md:text-4xl font-bold text-center text-blue-600 mb-8">
          Student Details
        </h1>

        <div className="overflow-x-auto">
          <table className="w-full border border-gray-200 rounded-lg overflow-hidden">
            <thead className="bg-blue-600 text-white">
              <tr>
                <th className="px-6 py-3 text-left">Name</th>
                <th className="px-6 py-3 text-left">Age</th>
                <th className="px-6 py-3 text-left">Email</th>
                <th className="px-6 py-3 text-left">Semester</th>
                <th className="px-6 py-3 text-left">University</th>
                <th className="px-6 py-3 text-left">Actions</th>
              </tr>
            </thead>

            <tbody className="text-gray-700">
              {Users.map((item, index) => (
                <tr key={index}>
                  <td className="px-6 py-3 text-left">{item.name}</td>
                  <td className="px-6 py-3 text-left">{item.age}</td>
                  <td className="px-6 py-3 text-left">{item.email}</td>
                  <td className="px-6 py-3 text-left">{item.semester}</td>
                  <td className="px-6 py-3 text-left">{item.university}</td>
                  <td>
                    <div className="flex gap-4">
                      <Link
                        className="bg-red-500 hover:bg-red-700 font-semibold text-white px-4 py-2 rounded-xl"
                        href={`/students/${item._id}`}
                      >
                        Edit
                      </Link>
                      <DeleteUser id={item._id} />
                    </div>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
      <div className="flex justify-center items-center">
        <Link
          href="/"
          className="bg-green-400 hover:bg-green-600 transition duration-300 cursor-pointer text-white px-4 py-2 font-semibold rounded-xl hover:scale-105"
        >
          Back To Home Page
        </Link>
      </div>
    </>
  );
}

export default Products;
