import DeleteUser from '@/utils/DeleteUser';
import Link from 'next/link';

async function getUser() {
  const data = await fetch('http://localhost:3000/api/user');
  const response = await data.json();
  return response;
}

async function Users() {
  const data = await getUser();
  return (
    <>
      <div className="flex flex-col gap-6 my-10 ml-8">
        <h1 className="text-2xl text-red-500 font-bold">UserList</h1>
        {data.map((items) => (
          <div
            key={items.id}
            className="flex justify-between items-center p-4 gap-4 w-1/4 border border-white rounded-xl shadow-md shadow-gray-500 "
          >
            <span>
              <Link href={`/users/${items.id}`} className="text-2xl text-blue-600">
                {items.name}
              </Link>
            </span>
            <div className="flex flex-row gap-10 items-center">
              <span>
                <Link
                  href={`/users/${items.id}/update`}
                  className="bg-red-500 hover:bg-red-800 transition duration-300 px-4 py-2 rounded-xl w-fit text-white font-bold"
                >
                  Edit
                </Link>
              </span>
              <DeleteUser id={items.id} />
            </div>
          </div>
        ))}
      </div>
    </>
  );
}

export default Users;
