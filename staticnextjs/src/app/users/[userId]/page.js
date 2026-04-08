import getUser from '../../../../service/getUsers';

async function UserId({ params }) {
  const resolvedParams = await params;

  const Users = await getUser();
  const currentID = Number(resolvedParams.userId);

  const user = Users[currentID - 1];

  console.log(user);

  return (
    <div>
      <h1>User Details Page</h1>
      <p>Name: {user?.name}</p>
      <p>Email: {user?.email}</p>
    </div>
  );
}

export default UserId;

export async function generateStaticParams() {
  const Users = await getUser();
  return Users.map((items) => ({
    userId: items.id.toString(),
  }));
}
