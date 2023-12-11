import Table from '@/components/table';

export default async function Page() {
  return (
    <main className="h-screen flex items-center justify-center flex-col gap-4">
      <div className='Users'>
        <Table></Table> 
      </div>
    </main>
  )
}