'use client';
import { useParams } from 'next/navigation';
import { useRouter } from 'next/navigation';
function Lecture() {
  const router = useRouter();
  const params = useParams();
  console.log(params);

  return (
    <>
      <div className="flex flex-col gap-4 my-10 ml-8">
        <h1 className="text-2xl font-semibold text-red-500">Your Day is : {params.lecture[0]}</h1>
        <h1 className="text-3xl font-bold text-red-500">
          Your Lecture Number is : {params.lecture[1]}
        </h1>
        <button
          onClick={() => router.push('/study')}
          className="w-fit rounded-lg bg-indigo-500 hover:bg-indigo-700 transition duration-300 px-4 py-2 text-white font-bold hover:scale-110"
        >
          Go Back to Study Page
        </button>
      </div>
    </>
  );
}

export default Lecture;
