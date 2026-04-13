'use client';
import { useParams } from 'next/navigation';
import { useEffect, useState } from 'react';

function Update() {
  const params = useParams();
  const userId = params.userId;
  console.log(userId);

  const [name, setName] = useState('');
  const [age, setAge] = useState('');
  const [email, setEmail] = useState('');

  useEffect(() => {
    getUsersDetails();
  }, []);

  async function getUsersDetails() {
    let data = await fetch(`http://localhost:3000/api/user/${userId}`);
    data = await data.json();
    setName(data.result.name);
    setAge(data.result.age);
    setEmail(data.result.email);
  }

  async function updateUser() {
    let result = await fetch(`http://localhost:3000/api/user/${userId}`, {
      method: 'PUT',
      body: JSON.stringify({ name, age, email }),
    });
    result = await result.json();
    if (result.success) {
      alert('Update User SuccessFully');
    } else {
      alert('Please try with Correct Information.');
    }
  }
  return (
    <>
      <div className=" my-10 ml-10">
        <div className="flex flex-col gap-10 w-1/2 mx-auto p-10 justify-center items-center">
          <h1 className="text-3xl text-red-600 font-bold">Update User Details</h1>
          <input
            placeholder="Enter Your Name"
            value={name}
            onChange={(event) => setName(event.target.value)}
            className="w-1/2 px-4 py-2 outline-none border border-white focus:ring-2 focus:ring-white rounded-xl"
          />
          <input
            value={age}
            onChange={(event) => setAge(event.target.value)}
            placeholder="Enter Your Age"
            className="w-1/2  px-4 py-2 outline-none border border-white focus:ring-2 focus:ring-white rounded-xl"
          />
          <input
            value={email}
            onChange={(event) => setEmail(event.target.value)}
            placeholder="Enter your Email"
            className="w-1/2 px-4 py-2 outline-none border border-white focus:ring-2 focus:ring-white rounded-xl"
          />
          <div className="flex justify-center items-center">
            <button
              onClick={updateUser}
              className="text-center w-fit px-4 py-2 bg-blue-500 hover:bg-blue-800 transition duration-300 rounded-xl cursor-pointer"
            >
              Add User
            </button>
          </div>
        </div>
      </div>
    </>
  );
}

export default Update;
