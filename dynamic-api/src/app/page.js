import Image from 'next/image';
import Link from 'next/link';

export default function Home() {
  return (
    <>
      <div className="flex flex-col gap-4 my-10 ml-8">
        <h1 className="text-3xl font-bold text-blue-600">Dynamic API using MongoDB Atlas</h1>
        <Link
          href="/addProduct"
          className="bg-green-400 hover:bg-green-600 transition duration-300 px-4 py-2 w-fit text-white font-semibold rounded-xl"
        >
          Add User
        </Link>
        <Link
          href="/products"
          className="bg-green-400 hover:bg-green-600 transition duration-300 px-4 py-2 w-fit text-white font-semibold rounded-xl"
        >
          User List
        </Link>
      </div>
    </>
  );
}
