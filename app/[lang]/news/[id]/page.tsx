'use client'
import { Divider } from '@nextui-org/react';
import { useSearchParams } from 'next/navigation'
import Image from 'next/image'



export default function Page({ params }: { params: { id: string }}) {
  const searchParams = useSearchParams();
  const data = searchParams.get('news');
  const news = data ? JSON.parse(data as string): null;
  console.log('get query', news);
  return (
    <div className="h-screen flex items-center justify-start flex-col gap-4 p-10">
      <a href={news.url} target="_blank">
        <div className="max-w-screen-md">
          <h1 className="text-xl uppercase font-bold text-center p-5">{news.title}</h1>
          <Divider className="my-4" />
          <img className="py-8" src={news.urlToImage}/>
          <Divider className="my-4" />
          <p>{news.description}</p>
          <Divider className="my-4" />
          <p className="text-sm text-right">By: {news.author}</p>
        </div>
      </a>
    </div>
  )
}

