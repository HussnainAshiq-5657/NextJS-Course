import DeleteUser from '@/lib/DeleteUser';
import Link from 'next/link';

async function getUsers() {
  try {
    const res = await fetch('http://localhost:3000/api/products', {
      cache: 'no-cache',
    });

    const data = await res.json();

    if (data?.result) {
      console.log('User Data Accessed');
      return data.result;
    } else {
      console.log('User data did not Access');
      return [];
    }
  } catch (error) {
    console.log('Error:', error);
    return [];
  }
}

export default async function Products() {
  const users = await getUsers();
  console.log(users);

  return (
    <div className="my-20 flex justify-center">
      <table className="min-w-[600px] border border-gray-300 shadow-lg rounded-lg overflow-hidden">
        <thead className="bg-blue-500 text-white">
          <tr>
            <th className="px-6 py-3">Name</th>
            <th className="px-6 py-3">Age</th>
            <th className="px-6 py-3">Email</th>
            <th className="px-6 py-3">University</th>
            <th className="px-6 py-3">Actions</th>
          </tr>
        </thead>

        <tbody className="text-center">
          {users.length > 0 ? (
            users.map((item, index) => (
              <tr key={index} className="border-t hover:bg-gray-100 cursor-pointer">
                <td className="px-6 py-3">{item.name}</td>
                <td className="px-6 py-3">{item.age}</td>
                <td className="px-6 py-3">{item.email}</td>
                <td className="px-6 py-3">{item.university}</td>
                <td className="px-6 py-3">
                  <div className="flex gap-4">
                    <Link
                      className="bg-red-500 text-white px-4 py-2 rounded-xl"
                      href={`/products/${item._id}`}
                    >
                      Edit
                    </Link>
                    <DeleteUser id={item._id} />
                  </div>
                </td>
              </tr>
            ))
          ) : (
            <tr>
              <td colSpan="4" className="py-4 text-gray-500">
                No Data Found
              </td>
            </tr>
          )}
        </tbody>
      </table>
    </div>
  );
}
