'use client';

 function DeleteUser({ id }) {
  console.log(id);

  async function deleteUser() {
    let data = await fetch(`http://localhost:3000/api/user/${id}`, {
      method: 'DELETE',
    });
    data = await data.json();
    if (data.success) {
      alert('User Deleted SuccessFully');
    } else {
      alert('User Deletion Failed');
    }
  }
  return (
    <>
      <div>
        <button
          onClick={deleteUser}
          className="px-4 py-2 rounded-xl text-white font-bold bg-red-500 transition hover:bg-red-800 duration-300 cursor-pointer"
        >
          Delete
        </button>
      </div>
    </>
  );
}

export default DeleteUser;
