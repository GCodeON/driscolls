import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import './globals.css'

import { Locale, i18n } from '@/i18n.config';
import {Providers} from "@/components/providers";
import Nav from "@/components/nav";

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'Driscolls Project',
  description: 'Users and News App',
}

export async function generateStaticParams() {
  return i18n.locales.map(locale => ({lang : locale}))
}

export default function RootLayout({
  children,
  params
}: {
  children: React.ReactNode,
  params: {lang: Locale}
}) {
  return (
    <html lang={params.lang} className='light'>
      <body className={inter.className}>
        <Providers>
          <Nav lang={params.lang} />
          {children}
        </Providers>
      </body>
    </html>
  )
}
