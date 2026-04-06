'use client';
import { useParams } from 'next/navigation';
function Student() {
  const params = useParams();
  return (
    <>
      <div className="flex flex-col gap-6 ml-10 my-10">
        <h1 className="text-4xl font-bold">Student Details </h1>
        <h1 className="text-red-500 font-bold">Your Name is : {params.student} </h1>
      </div>
    </>
  );
}

export default Student;
