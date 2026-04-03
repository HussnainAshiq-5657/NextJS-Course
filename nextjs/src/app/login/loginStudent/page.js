import Link from 'next/link';

function LoginStudent() {
  return (
    <>
      <div className="flex flex-col w-1/2 mx-auto gap-4 my-10 p-6 border border-gray-400 shadow-sm rounded-lg transition duration-300 cursor-pointer hover:shadow-lg hover:-translate-y-2.5">
        <h1 className="text-red-600 font-bold text-4xl">Welcome to Student Login Page</h1>
        <p className="text-gray-600 text-justify">
          The hydration error you encountered in your Next.js project was not caused by your code
          but by a browser extension that modified the HTML before React could properly load it.
          Specifically, the extension added an extra class to the tag on the client side, which did
          not exist in the server-rendered HTML. This mismatch between server and client output
          triggered the hydration warning. Since the issue disappeared in incognito mode, it clearly
          indicates that an external extension is responsible. Disabling the problematic extension
          or continuing development in incognito mode will resolve the issue, and your project
          itself is functioning correctly without any internal errors.
        </p>
        <Link
          href="/login"
          className="w-fit rounded-lg bg-indigo-500 hover:bg-indigo-700 transition duration-300 px-4 py-2 text-white font-bold hover:scale-110"
        >
          Go Back to Login Page
        </Link>
      </div>
    </>
  );
}

export default LoginStudent;