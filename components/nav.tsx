'use client'
import Link from 'next/link'
import Image from 'next/image'
import {Navbar, NavbarBrand, NavbarContent, NavbarItem} from "@nextui-org/react";

export function Nav() {
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
          <Link  href="/users">
            Users
          </Link>
        </NavbarItem>
        <NavbarItem>
          <Link href="/news">
            News
          </Link>
        </NavbarItem>
      </NavbarContent>
    </Navbar>
  )
}
