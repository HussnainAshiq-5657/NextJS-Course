'use client';
import { useRouter } from "next/navigation";

export default function Home() {
  const router = useRouter();
  return (
    <>
      <div className='flex flex-col gap-4 my-10 p-6'>
        <h1 className="text-blue-600 font-bold text-4xl">Welcome to Home Page</h1>
        <button onClick={()=>router.push('/login')} className="bg-blue-500 rounded-lg hover:bg-blue-700 text-white font-bold w-fit px-4 py-2 transition duration-300 cursor-pointer">
          Go to Login Page
        </button>
        <button onClick={()=>router.push('/about')} className="bg-green-500 rounded-lg hover:bg-green-700 font-bold text-white w-fit px-4 py-2 transition duration-300 cursor-pointer">
          Go to About Page
        </button>
      </div>
    </>
  );
}
