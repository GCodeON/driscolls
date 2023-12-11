'use client'
import Link from 'next/link'
import Image from 'next/image'
import {Navbar, NavbarBrand, NavbarContent, NavbarItem, NavbarMenuToggle, NavbarMenu, Button} from "@nextui-org/react";
import {NextUIProvider} from '@nextui-org/react'

export function Nav() {
  return (
    <Navbar isBordered>
      <NavbarContent className="sm:hidden" justify="start">
        <NavbarMenuToggle />
      </NavbarContent>

      <NavbarContent className="sm:hidden pr-3" justify="center">
        <NavbarBrand>
          <Image
            src="/driscolls.svg"
            width={100}
            height={100}
            alt="logo"
          />
        </NavbarBrand>
      </NavbarContent>

      <NavbarContent className="hidden sm:flex gap-4" justify="center">
        <NavbarBrand>
          <Image
            src="/driscolls.svg"
            width={100}
            height={100}
            alt="logo"
          />
        </NavbarBrand>
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

      <NavbarContent justify="end">
      </NavbarContent>

      <NavbarMenu>
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
      </NavbarMenu>
    </Navbar>



  )
}
