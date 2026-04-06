'use client';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
function Layout({ children }) {
  const pathname = usePathname();
  return (
    <>
      <div className="my-5 p-4">
        {pathname !== '/about/aboutCollege' ? (
          <ul className="flex gap-4 p-2">
            <li>
              <Link
                href="/about"
                className="w-fit rounded-lg bg-indigo-500 hover:bg-indigo-700 transition duration-300 px-4 py-2 text-white font-bold hover:scale-110"
              >
                About
              </Link>
            </li>
            <li>
              <Link
                href="/about/aboutStudent"
                className="w-fit rounded-lg bg-indigo-500 hover:bg-indigo-700 transition duration-300 px-4 py-2 text-white font-bold hover:scale-110"
              >
                About Student
              </Link>
            </li>
            <li>
              <Link
                href="/about/aboutCollege"
                className="w-fit rounded-lg bg-indigo-500 hover:bg-indigo-700 transition duration-300 px-4 py-2 text-white font-bold hover:scale-110"
              >
                About College
              </Link>
            </li>
          </ul>
        ) : null}
        {children}
      </div>
    </>
  );
}

export default Layout;
