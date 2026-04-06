'use client';
import { useRouter } from 'next/navigation';
import React from 'react';

function Study() {
  const router = useRouter();
  return (
    <>
      <div className="my-10 ml-8 flex flex-col gap-4">
        <h1 className="text-3xl text-red-500 font-semibold">
          All Your Study Materials are here......
        </h1>
        <button
          onClick={() => router.push('/')}
          className="w-fit rounded-lg bg-indigo-500 hover:bg-indigo-700 transition duration-300 px-4 py-2 text-white font-bold hover:scale-110"
        >
          Go Back to Home Page
        </button>
      </div>
    </>
  );
}

export default Study;
