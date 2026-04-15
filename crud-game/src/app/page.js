import Link from 'next/link';

export default function Home() {
  return (
    <>
      <div className="my-20 flex flex-col gap-6 justify-center items-center">
        <h1 className="text-4xl font-bold text-white">Crud Game in Next JS</h1>
        <div className="flex flex-row gap-4">
          <Link
            href="/addStudent"
            className="w-fit bg-red-500 hover:bg-red-800 transition duration-300 cursor-pointer text-white px-4 py-2 font-semibold rounded-xl"
          >
            Add Student
          </Link>
          <Link
            href="/students"
            className="w-fit bg-blue-500 hover:bg-blue-800 transition duration-300 cursor-pointer text-white px-4 py-2 font-semibold rounded-xl"
          >
            Student List
          </Link>
        </div>
      </div>
    </>
  );
}
