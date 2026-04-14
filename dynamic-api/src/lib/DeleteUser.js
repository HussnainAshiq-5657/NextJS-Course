'use client';
import { useRouter } from 'next/navigation';
function DeleteUser(props) {
  const router = useRouter();
  console.log(props.id);
  const id = props.id;
  async function deleteUser() {
    const data = await fetch(`http://localhost:3000/api/products/${id}`, {
      method: 'DELETE',
    });
    const response = await data.json();
    if (response.success) {
      alert('User Deleted');
      router.push('/products');
    }
  }
  return (
    <>
      <div>
        <button
          onClick={deleteUser}
          className="bg-blue-500 transition duration-300 hover:bg-blue-800 px-4 py-2 rounded-xl text-white font-semibold cursor-pointer"
        >
          Delete
        </button>
      </div>
    </>
  );
}

export default DeleteUser;
