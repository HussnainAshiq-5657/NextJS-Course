import Link from 'next/link';
function StudentList() {
  const student = [
    {
      id: 0,
      href: '/studentList/Hussnain',
      name: 'Hussnain',
    },
    {
      id: 1,
      href: '/studentList/Atif',
      name: 'Atif',
    },
    {
      id: 2,
      href: '/studentList/Zain',
      name: 'Zain',
    },
  ];
  return (
    <>
      <div className="flex flex-col gap-4 my-10">
        {student.map((items) => (
          <Link
            key={items.id}
            href={items.href}
            className="text-red-500 text-2xl cursor-pointer font-bold ml-3.5"
          >
            {items.name}
          </Link>
        ))}
      </div>
    </>
  );
}

export default StudentList;
