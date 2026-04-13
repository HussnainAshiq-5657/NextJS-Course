'use client';
import { useState } from 'react';

function AddUser() {
  const [name, setName] = useState('');
  const [age, setAge] = useState('');
  const [email, setEmail] = useState('');

 async function addUser() {
    let response = await fetch('http://localhost:3000/api/user', {
      method: 'POST',
      body: JSON.stringify( {name, age, email }),
    });
    response = await response.json();
    if(response.success){
        alert("User Added SuccessFully")
    }else{
        alert("User Not Added")
    }
    console.log(response);
  }

  return (
    <>
      <div className=" my-10 ml-10">
        <div className="flex flex-col gap-10 w-1/2 mx-auto p-10 justify-center items-center">
          <h1 className="text-3xl text-red-600 font-bold">Add New User</h1>
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
              onClick={addUser}
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

export default AddUser;
