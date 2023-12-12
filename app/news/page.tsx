"use client"
import React, { useEffect, useState } from "react";
import Link from 'next/link'
import axios from 'axios';

import {Card, CardHeader, CardFooter, CardBody, Image, Divider} from "@nextui-org/react";

export default function Page() {
  const newsAPIUrl = `https://newsapi.org/v2/top-headlines?country=us&apiKey=${process.env.NEXT_PUBLIC_NEWS_API_KEY}`;

  const [news, setNews] = useState([]);

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

  return (
    <main className="h-screen flex items-center justify-start flex-col p-50">
      <div className='news gap-3 grid grid-cols-2 sm:grid-cols-3 max-w-screen-lg'>
        {news && (
          news.map((item: any, index) => {
            return (
              <div className="news-item" key={index}>
                <Link href={{
                  pathname: `/news/${item.title}`, 
                  query: {
                    news: JSON.stringify(item)
                  }
                }}>
                  <Card shadow="md" key={index} isPressable>
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
                </Link>
              </div>
            )
          })
        )}
      </div>
    </main>
  )
}