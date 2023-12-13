import NewsArticles from '@/components/NewsArticles';

import { Locale } from '@/i18n.config'
import { getTranslations } from '@/lib/dictionary'


export default async function News({ params: {lang}}: { params: { lang : Locale} }) {
  const { news } = await getTranslations(lang);
  return (
    <main className="h-screen flex max-w-screen-lg m-auto justify-start flex-col gap-4 p-5">
      <div className='Users'>
        <NewsArticles translations={news} lang={lang}></NewsArticles> 
      </div>
    </main>
  )
}