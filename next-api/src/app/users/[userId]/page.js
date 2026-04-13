async function getUser(id) {
  const data = await fetch(`http://localhost:3000/api/user/${id}`);
  const response = await data.json();
  return response.result;
}

async function UserId({ params }) {
  const resolvedParams = await params;
  const data = await getUser(resolvedParams.userId);
  console.log(data);

  return (
    <>
      <div>
        <h1>User Details</h1>
        <h4>{data.id}</h4>
        <h4>{data.name}</h4>
        <h4>{data.age}</h4>
        <h4>{data.email}</h4>
      </div>
    </>
  );
}

export default UserId;
