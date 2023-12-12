"use client"
import React, { useEffect, useState } from "react";
import Link from 'next/link'
import { useRouter } from 'next/navigation'
 
import axios from 'axios';

import {Card, CardHeader, CardFooter, CardBody, Image, Divider, Avatar, AvatarGroup, AvatarIcon} from "@nextui-org/react";

const baseURL = 'https://newsapi.org/v2/'

export default function Page() {
  const [news, setNews] = useState([]);
  const router = useRouter()

  const newsAPIUrl = `${baseURL}top-headlines?country=us&apiKey=${process.env.NEXT_PUBLIC_NEWS_API_KEY}`;

  useEffect(() => {
    axios.get(newsAPIUrl)
    .then(res => {
      console.log('res', res);
      setNews(res.data.articles);
    })
    .catch((error) => {
      console.log(error);
    });
  }, []);

  const categories = ['business', 'entertainment', 'health', 'science', 'sports', 'technology']

  function getCategory(subject: string) {
    const categoryURL = `${baseURL}top-headlines?country=us&category=${subject}&apiKey=${process.env.NEXT_PUBLIC_NEWS_API_KEY}`;

    axios.get(categoryURL)
    .then(res => {
      console.log('category updated', res);
      setNews(res.data.articles);
    })
    .catch((error) => {
      console.log(error);
    });
  }

  return (
    <main className="h-screen flex items-center justify-start flex-col p-50">
      <div className="flex gap-3 items-center py-10">
        {categories && (
          categories.map((category, index) => {
            return (
              <p className="capitalize cursor-pointer" onClick={() => { getCategory(category)} } key={index}>{category}</p>
            )
          })
        )}
      </div>
      <div className='news gap-3 grid grid-cols-2 sm:grid-cols-3 max-w-screen-lg'>
        {news && (
          news.map((item: any, index) => {
            const pathname = item.title ? `/news/${item.title}` : '/news/[slug]';
            return (
              <div className="news-item" key={index}>
                <Card shadow="md" key={index} isPressable onClick={() => {
                  router.push(`/news/${item.title}?news=${JSON.stringify(item)}`)}}>
                  <CardHeader className="p-5 flex-col items-start">
                    <small className="text-tiny">{item.title}</small>
                    <Divider className="my-4" />
                  </CardHeader>
                  <CardBody className="overflow-visible">
                    <Image
                      shadow="sm"
                      radius="lg"
                      width="100%"
                      alt={item.title}
                      className="w-full object-cover h-[140px]"
                      src={item.urlToImage}
                    />
                  </CardBody>
                </Card>
            </div>
            )
          })
        )}
      </div>
    </main>
  )
}