'use client';
import { useState } from 'react';
import { useRouter } from 'next/navigation';

function AddProduct() {
  const [name, setName] = useState('');
  const [age, setAge] = useState('');
  const [email, setEmail] = useState('');
  const [university, setUniversity] = useState('');
  const router = useRouter();

  async function addUser() {
    console.log(name, age, email, university);
    const data = await fetch('http://localhost:3000/api/products', {
      method: 'POST',
      body: JSON.stringify({ name, age, email, university }),
    });
    const response = await data.json();
    if (response.success) {
      alert('User Added Successfuly');
      router.push('/products')
    } else {
      alert('Sorry!!!!!!!!!!! User did not add .........');
    }
  }
  return (
    <>
      <div className="w-1/2 flex flex-col p-8 gap-4 my-30 border-2 border-gray-300 mx-auto rounded-xl shadow-xl">
        <h1 className="text-2xl text-center text-red-600 font-bold">Add New User</h1>
        <div className="flex flex-col gap-4 justify-center items-center">
          <input
            value={name}
            onChange={(event) => setName(event.target.value)}
            type="text"
            placeholder="Enter Your Name"
            className="rounded-xl px-4 py-2 border border-gray-500 focus:border-none focus:ring-2 focus:ring-red-600 outline-none w-1/3"
          />
          <input
            value={email}
            onChange={(event) => setEmail(event.target.value)}
            type="email"
            placeholder="Enter Your Email"
            className="rounded-xl px-4 py-2 border border-gray-500 focus:border-none focus:ring-2 focus:ring-red-600 outline-none w-1/3"
          />
          <input
            value={age}
            onChange={(event) => setAge(event.target.value)}
            type="number"
            placeholder="Enter Your Age"
            className="rounded-xl px-4 py-2 border border-gray-500 focus:border-none focus:ring-2 focus:ring-red-600 outline-none w-1/3"
          />
          <input
            value={university}
            onChange={(event) => setUniversity(event.target.value)}
            type="text"
            placeholder="Enter Your University"
            className="rounded-xl px-4 py-2 border border-gray-500 focus:border-none focus:ring-2 focus:ring-red-600 outline-none w-1/3"
          />
          <button
            className="bg-blue-500 px-4 py-2 rounded-xl font-bold text-white transition duration-300 hover:bg-blue-800 cursor-pointer"
            onClick={addUser}
          >
            Add User
          </button>
        </div>
      </div>
    </>
  );
}

export default AddProduct;
