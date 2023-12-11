'use client'
import UserForm from '@/components/UserForm';

export default function Page({ params }: { params: { id: string }}) {
  return (
    <div className="h-screen flex items-center justify-center flex-col gap-4">
      <h1 className='text-2xl uppercase font-bold text-center p-6'>User Details</h1>
      <UserForm id={params.id}></UserForm>
    </div>
  )
}