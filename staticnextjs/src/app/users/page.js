import getUser from '../../../service/getUsers';
import Link from 'next/link';

async function Users() {
  const Users = await getUser();
  console.log(Users);

  return (
    <>
      <div className='flex flex-col gap-4'>
        {Users.map((items) => (
          <Link key={items.id} href={`/users/${items.id}`} className='text-2xl text-red-500 hover:text-blue-500'>
            {items.name}
          </Link>
        ))}
      </div>
    </>
  );
}

export default Users;
