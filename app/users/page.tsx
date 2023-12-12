import Table from '@/components/table';

export default async function Page() {
  return (
    <main className="h-screen flex max-w-screen-lg m-auto justify-start flex-col gap-4 p-5">
      <div className='Users'>
        <Table></Table> 
      </div>
    </main>
  )
}