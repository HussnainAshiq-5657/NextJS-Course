'use client';
import { useRouter } from 'next/navigation';
function Home() {
  const router = useRouter();

  return (
    <>
      <div className="flex flex-col gap-6 my-10 ml-10">
        <h1 className="text-3xl text-red-500 font-bold">
          Fetching Data with API from Client Side Component
        </h1>
        <button
          onClick={() => router.push('/client')}
          className="w-fit bg-blue-500 hover:bg-blue-800 rounded-xl px-4 py-2 text-white font-bold transition duration-300 cursor-pointer"
        >
          Fetch Data with client component
        </button>
        <button
          onClick={() => router.push('/server')}
          className="w-fit bg-blue-500 hover:bg-blue-800 rounded-xl px-4 py-2 text-white font-bold transition duration-300 cursor-pointer"
        >
          Fetch Data with server component
        </button>
      </div>
    </>
  );
}

export default Home;
