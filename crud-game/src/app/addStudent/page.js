'use client';
import { useRouter } from 'next/navigation';
import { useState } from 'react';

function AddUser() {
  const router = useRouter();

  const [name, setName] = useState('');
  const [age, setAge] = useState('');
  const [email, setEmail] = useState('');
  const [semester, setSemester] = useState('');
  const [university, setUniversity] = useState('');

  async function addUser() {
    try {
      const data = await fetch('http://localhost:3000/api/users', {
        method: 'POST',
        body: JSON.stringify({ name, age, email, semester, university }),
      });

      let response = await data.json();

      if (response.success) {
        alert('User added Successfully!!!..');
        router.push('/students');
      } else {
        alert('Failed to add user');
        console.log(response.result);
      }
    } catch (error) {
      console.log(error);
      alert('Something went wrong!');
    }
  }

  return (
    <>
      <div className="my-10 flex flex-col gap-6 w-1/3 mx-auto border-2 border-gray-400 p-10 shadow-md shadow-cyan-200 rounded-xl">
        <h1 className="text-3xl font-bold text-white text-center">Add Student Details</h1>

        <div className="flex flex-col gap-6 items-center">
          <input
            type="text"
            value={name}
            onChange={(event) => setName(event.target.value)}
            placeholder="Enter Your Name"
            className="w-full outline-none border-2 focus:border-none focus:ring-4 focus:ring-red-700 px-4 py-2 rounded-xl"
          />

          <input
            type="number"
            value={age}
            onChange={(event) => setAge(event.target.value)}
            placeholder="Enter Your Age"
            className="w-full outline-none border-2 focus:border-none focus:ring-4 focus:ring-red-700 px-4 py-2 rounded-xl"
          />

          <input
            type="email"
            value={email}
            onChange={(event) => setEmail(event.target.value)}
            placeholder="Enter Your Email"
            className="w-full outline-none border-2 focus:border-none focus:ring-4 focus:ring-red-700 px-4 py-2 rounded-xl"
          />

          <input
            type="text"
            value={semester}
            onChange={(event) => setSemester(event.target.value)}
            placeholder="Enter Your Semester"
            className="w-full outline-none border-2 focus:border-none focus:ring-4 focus:ring-red-700 px-4 py-2 rounded-xl"
          />

          <input
            type="text"
            value={university}
            onChange={(event) => setUniversity(event.target.value)}
            placeholder="Enter Your University"
            className="w-full outline-none border-2 focus:border-none focus:ring-4 focus:ring-red-700 px-4 py-2 rounded-xl"
          />
        </div>

        <button
          onClick={addUser}
          className="bg-red-500 hover:bg-red-800 transition duration-300 cursor-pointer text-white px-4 py-2 font-semibold rounded-xl hover:scale-105"
        >
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

export default AddUser;
