import Table from '@/components/table';

async function getUsers() {
  const res = await fetch('http://localhost:3000/api/users', { cache: 'no-store' })

  if (!res.ok) {
    throw new Error('Failed to fetch data')
  }
  return res.json()
}

export default async function Page() {
  const users = await getUsers();
  return (
    <main className="">
      <div className='Users'>
        <h1 className='text-2xl uppercase font-bold text-center p-6'>Users</h1>
        <Table data={users}></Table> 
      </div>
    </main>
  )
}