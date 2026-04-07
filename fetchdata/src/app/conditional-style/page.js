'use client';
import { useState } from 'react';

function ConditionalStyle() {
  const [style, setStyle] = useState('red');
  return (
    <>
      <div className="flex flex-col gap-4 my-10 ml-8">
        <h1 className={`${style ? 'text-red-500' : 'text-green-600'} text-3xl font-bold`}>
          OZ TechWork Pvt Ltd
        </h1>
        <button
          onClick={() => setStyle(!style)}
          className="bg-blue-500 transition duration-300 hover:bg-blue-800 px-4 py-2 cursor-pointer rounded-xl text-white font-bold w-fit"
        >
          Change Color
        </button>
      </div>
    </>
  );
}

export default ConditionalStyle;
