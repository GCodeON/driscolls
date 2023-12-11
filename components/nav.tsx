'use client'
import Link from 'next/link'
import Image from 'next/image'
import {Navbar, NavbarBrand, NavbarContent, NavbarItem, Button} from "@nextui-org/react";
import {NextUIProvider} from '@nextui-org/react'

export function Nav() {
  return (
    <Navbar shouldHideOnScroll>
      <NavbarBrand>
        <Image
          src="/driscolls.svg"
          width={100}
          height={100}
          alt="logo"
        />
      </NavbarBrand>
      <NavbarContent className="hidden sm:flex gap-4" justify="center">
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
        {/* <NavbarItem>
          <Link color="foreground" href="#">
            Integrations
          </Link>
        </NavbarItem> */}
      </NavbarContent>
      {/* <NavbarContent justify="end">
        <NavbarItem className="hidden lg:flex">
          <Link href="#">Login</Link>
        </NavbarItem>
        <NavbarItem>
          <Button as={Link} color="primary" href="#" variant="flat">
            Sign Up
          </Button>
        </NavbarItem>
      </NavbarContent> */}
    </Navbar>
  )
}
