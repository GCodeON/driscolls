import Link from 'next/link'
import Image from 'next/image'
import {Navbar, NavbarBrand, NavbarContent, NavbarItem} from "@nextui-org/react";

import { Locale } from '@/i18n.config'
import { getDictionary  } from '@/lib/dictionary';
import  LanguageSwitcher from '@/components/LangSwitcher';

export default async function Nav({lang}: {lang: Locale}) {
  const { navigation } = await getDictionary(lang);
  console.log('navigation', navigation);
  return (
    <Navbar isBordered>
      <NavbarContent className="gap-4">
        <NavbarBrand>
          <Image
            src="/driscolls.svg"
            width={100}
            height={100}
            alt="logo"
          />
        </NavbarBrand>
      </NavbarContent>
      <NavbarContent justify="end">
        <NavbarItem>
          <Link href={`/${lang}/Users`}>
            {navigation.users}
          </Link>
        </NavbarItem>
        <NavbarItem>
          <Link href={`/${lang}/news`}>
            {navigation.news}
          </Link>
        </NavbarItem>
        <NavbarItem>
          <LanguageSwitcher />
        </NavbarItem>
      </NavbarContent>
    </Navbar>
  )
}
