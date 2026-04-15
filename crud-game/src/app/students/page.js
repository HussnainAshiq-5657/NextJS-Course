'use client';
import { useRouter } from 'next/navigation';

function Products() {
  const router = useRouter();
  return (
    <>
      <div className="my-20 mx-auto w-11/12 md:w-4/5 bg-white shadow-2xl rounded-2xl p-8">
        <h1 className="text-3xl md:text-4xl font-bold text-center text-blue-600 mb-8">
          Student Details
        </h1>

        <div className="overflow-x-auto">
          <table className="w-full border border-gray-200 rounded-lg overflow-hidden">
            <thead className="bg-blue-600 text-white">
              <tr>
                <th className="px-6 py-3 text-left">Name</th>
                <th className="px-6 py-3 text-left">Age</th>
                <th className="px-6 py-3 text-left">Email</th>
                <th className="px-6 py-3 text-left">Semester</th>
                <th className="px-6 py-3 text-left">University</th>
              </tr>
            </thead>

            <tbody className="text-gray-700">
              <tr className="border-b hover:bg-gray-100 transition">
                <td className="px-6 py-3">Ali Khan</td>
                <td className="px-6 py-3">21</td>
                <td className="px-6 py-3">ali@gmail.com</td>
                <td className="px-6 py-3">5th</td>
                <td className="px-6 py-3">UET Lahore</td>
              </tr>

              <tr className="border-b hover:bg-gray-100 transition">
                <td className="px-6 py-3">Ahmed Raza</td>
                <td className="px-6 py-3">22</td>
                <td className="px-6 py-3">ahmed@gmail.com</td>
                <td className="px-6 py-3">6th</td>
                <td className="px-6 py-3">PU Lahore</td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
      <div className="flex justify-center items-center">
        <button
          onClick={() => router.push('/')}
          className="bg-green-400 hover:bg-green-600 transition duration-300 cursor-pointer text-white px-4 py-2 font-semibold rounded-xl hover:scale-105"
        >
          Back To Home Page
        </button>
      </div>
    </>
  );
}

export default Products;
