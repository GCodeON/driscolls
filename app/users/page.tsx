async function getUsers() {
  const res = await fetch('http://localhost:3000/api/users', { cache: 'no-store' })

  if (!res.ok) {
    throw new Error('Failed to fetch data')
  }
  return res.json()
}
type User = {
  email: string,
  name: string,
  id: string
}

export default async function Page() {
  const users = await getUsers();
  return (
    <div>
      {users.map((user: User, idx: string) => (
        <div key={idx}>
          <p>email: {user.email}</p>
          <p>name: {user.name}</p>
        </div>
      ))}
    </div>
  )
}