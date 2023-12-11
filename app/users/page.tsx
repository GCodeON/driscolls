import Table from '@/components/table';

// async function getUsers() {
//   const res = await fetch('http://localhost:3000/api/users', { cache: 'no-store' })

//   if (!res.ok) {
//     throw new Error('Failed to fetch data')
//   }
//   return res.json()
// }

export default async function Page() {
  // const users = await getUsers();
  return (
    <main className="h-screen flex items-center justify-center flex-col gap-4">
      <div className='Users'>
        <Table></Table> 
      </div>
    </main>
  )
}