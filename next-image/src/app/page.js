'use client';
import { useState } from 'react';

export default function Home() {
  const [file, setFile] = useState();
  async function onsubmit(event) {
    event.preventDefault();
    console.log(file);
    const data = new FormData();
    data.set('file', file);
    let result = await fetch('http://localhost:3000/api/upload', {
      method: 'POST',
      body: data,
    });
    result = await result.json();
    if (result.success) {
      alert('Image Submitted');
    }
  }
  return (
    <>
      <div className="flex flex-col gap-6 my-20 justify-center items-center ">
        <form onSubmit={onsubmit} className="flex flex-col gap-4 w-1/3">
          <input
            type="file"
            name="file"
            className="border-2 border-gray-400 rounded-xl p-4"
            onChange={(event) => setFile(event.target.files?.[0])}
          />
          <button
            type="submit"
            className="bg-blue-500 hover:bg-blue-700 transition duration-300 px-4 py-2 text-white rounded-xl font-bold cursor-pointer"
          >
            Submit
          </button>
        </form>
      </div>
    </>
  );
}
