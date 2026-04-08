 async function getUser(){
  const data = await fetch('https://jsonplaceholder.typicode.com/users')
  const response = await data.json();
  return response;
}

export default getUser;