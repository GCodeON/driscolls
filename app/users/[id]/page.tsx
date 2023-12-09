'use client'
import UserForm from '@/components/UserForm';

export default function Page({ params }: { params: { id: string }}) {
  return (
    <div>
      <UserForm></UserForm>
    </div>
  )
}