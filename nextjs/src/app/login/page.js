import Link from 'next/link';

function Login() {
  return (
    <>
      <div className="flex flex-col gap-4 my-10 p-6">
        <h1 className="text-blue-600 font-bold text-4xl">Welcome to About Page</h1>
        <Link
          href="/login/loginStudent"
          className="w-fit rounded-lg bg-cyan-500 hover:bg-cyan-700 transition duration-300 px-4 py-2 text-white font-bold"
        >
          Go to Student Login Page
        </Link>
        <Link
          href="/login/loginTeacher"
          className="w-fit rounded-lg bg-yellow-500 hover:bg-yellow-700 transition duration-300 px-4 py-2 text-white font-bold"
        >
          Go to Teacher Login Page
        </Link>
        <Link
          href="/"
          className="w-fit rounded-lg bg-red-500 hover:bg-red-700 transition duration-300 px-4 py-2 text-white font-bold"
        >
          Go to Home Page
        </Link>
      </div>
    </>
  );
}

export default Login;
