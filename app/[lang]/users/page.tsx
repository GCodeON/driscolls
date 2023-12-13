import Table from '@/components/table';

import { Locale } from '@/i18n.config'
import { getTranslations } from '@/lib/dictionary'


export default async function Users({ params: {lang}}: { params: { lang : Locale} }) {
  const { users } = await getTranslations(lang);
  return (
    <main className="h-screen flex max-w-screen-lg m-auto justify-start flex-col gap-4 p-5">
      <div className='Users'>
        <Table translations={users}></Table> 
      </div>
    </main>
  )
}