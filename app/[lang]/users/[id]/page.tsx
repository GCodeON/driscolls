import UserForm from '@/components/UserForm';

import { Locale } from '@/i18n.config'
import { getTranslations } from '@/lib/dictionary'

interface PageProps {
  params: {
    id: string;
    lang: Locale;
  }
}

export default async function Page( {params: {id, lang}} : PageProps) {
  const { users } = await getTranslations(lang);
  return (
    <div className="h-screen flex max-w-screen-sm m-auto justify-start flex-col gap-4 p-5">
      <UserForm id={id} translations={users}></UserForm>
    </div>
  )
}