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
      <div className="flex flex-col gap-4 my-10 ml-8">
        <h1 className="text-2xl text-red-500 font-bold">UserList</h1>
        {data.map((items) => (
          <Link key={items.id} href={`/users/${items.id}`} className="text-2xl text-blue-600">
            {items.name}
          </Link>
        ))}
      </div>
    </>
  );
}

export default Users;
