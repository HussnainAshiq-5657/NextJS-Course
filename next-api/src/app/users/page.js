import Link from 'next/link';

async function getUser() {
  const data = await fetch('http://localhost:3001/api/user');
  const response = await data.json();
  return response;
}

async function Users() {
  const data = await getUser();
  return (
    <>
      <div className="flex flex-col gap-4 my-10 ml-8">
        <h1 className="text-2xl text-red-500 font-bold">UserList</h1>
        {data.map((items) => (
          <div
            key={items.id}
            className="flex justify-between p-4 gap-4 w-1/4 "
          >
            <span>
              <Link href={`/users/${items.id}`} className="text-2xl text-blue-600">
                {items.name}
              </Link>
            </span>
            <span>
              <Link href={`/users/${items.id}/update`} className="bg-red-500 px-4 py-2 rounded-2xl w-fit text-white font-bold">
                Edit
              </Link>
            </span>
          </div>
        ))}
      </div>
    </>
  );
}

export default Users;
