'use client'
import UserForm from '@/components/UserForm';

import { Locale } from '@/i18n.config'
import { getTranslations } from '@/lib/dictionary'

export default function Page({ params }: { params: { id: string }}) {
  return (
    <div className="h-screen flex max-w-screen-sm m-auto justify-start flex-col gap-4 p-5">
      <UserForm page="" id={params.id}></UserForm>
    </div>
  )
}