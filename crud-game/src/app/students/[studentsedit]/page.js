'use client';
import { useRouter } from 'next/navigation';

function EditUser() {
  const router = useRouter();
  return (
    <>
      <div className="my-10 flex flex-col gap-6 w-1/3 mx-auto border-2 border-gray-400 p-10 shadow-md shadow-cyan-200 rounded-xl">
        <h1 className="text-3xl font-bold text-white text-center">Update Student Details</h1>
        <div className="flex flex-col gap-6 items-center">
          <input
            type="text"
            placeholder="Enter Your Name"
            className="w-full outline-none border-2 focus:border-none focus:ring-4 focus:ring-red-700 px-4 py-2 rounded-xl"
          />
          <input
            type="number"
            placeholder="Enter Your Age"
            className="w-full outline-none border-2 focus:border-none focus:ring-4 focus:ring-red-700 px-4 py-2 rounded-xl"
          />
          <input
            type="email"
            placeholder="Enter Your Email"
            className="w-full outline-none border-2 focus:border-none focus:ring-4 focus:ring-red-700 px-4 py-2 rounded-xl"
          />
          <input
            type="text"
            placeholder="Enter Your Semester"
            className="w-full outline-none border-2 focus:border-none focus:ring-4 focus:ring-red-700 px-4 py-2 rounded-xl"
          />
          <input
            type="text"
            placeholder="Enter Your University"
            className="w-full outline-none border-2 focus:border-none focus:ring-4 focus:ring-red-700 px-4 py-2 rounded-xl"
          />
        </div>

        <button className="bg-red-500 hover:bg-red-800 transition duration-300 cursor-pointer text-white px-4 py-2 font-semibold rounded-xl hover:scale-105">
          Add User
        </button>
        <button
          onClick={() => router.push('/')}
          className="bg-green-400 hover:bg-green-600 transition duration-300 cursor-pointer text-white px-4 py-2 font-semibold rounded-xl hover:scale-105"
        >
          Back To Home Page
        </button>
      </div>
    </>
  );
}

export default EditUser;
