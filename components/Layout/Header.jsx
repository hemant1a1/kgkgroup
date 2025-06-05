"use client";

import { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { Menu, X, ChevronDown } from "lucide-react";
import { usePathname } from "next/navigation";

import logo from "@/assets/images/kgk-logo.webp";
import search from "@/assets/images/search.webp";

export default function Header() {
  const pathname = usePathname(); // current route

  const [drawerOpen, setDrawerOpen] = useState(false);
  const [submenuOpen, setSubmenuOpen] = useState(false);

  const toggleDrawer = () => setDrawerOpen(!drawerOpen);
  const toggleSubmenu = () => setSubmenuOpen(!submenuOpen);

  // Helper to check if a link is active (exact match or startsWith for submenu)
  const isActive = (href) => pathname === href;
  const isBusinessActive = () =>
    [
      "/business/gems",
      "/business/real-estate",
      "/business/marble",
      "/business/hospitality",
      "/business/technology",
    ].some((path) => pathname.startsWith(path));

  return (
    <>
      <header className="absolute top-0 left-0 w-full z-[30] bg-transparent shadow-none">
        <div className="container flex items-center justify-between">
          {/* Logo */}
          <Link href="/" className="pl-0 lg:pl-[40px] pt-[22px]">
            <Image
              src={logo}
              alt="KGK Group"
              width={120}
              height={40}
              className="h-[80px] lg:h-[100px] object-contain object-top-left"
            />
          </Link>

          {/* Desktop Nav */}
          <nav className="hidden lg:flex md:space-x-14 items-center font-light lg:text-sm uppercase text-white tracking-widest">
            <Link
              href="/"
              className={`border-b ${
                isActive("/") ? "border-white" : "border-transparent"
              }`}
            >
              Home
            </Link>

            <Link
              href="/about"
              className={`border-b ${
                isActive("/about") ? "border-white" : "border-transparent"
              }`}
            >
              About Us
            </Link>

            {/* Businesses Submenu */}
            <div className="relative group">
              <button
                className={`flex items-center gap-1 uppercase border-b ${
                  isBusinessActive() ? "border-white" : "border-transparent"
                }`}
              >
                Businesses <ChevronDown size={16} />
              </button>
              <div className="absolute top-full left-0 bg-white text-black text-darkGray shadow-md hidden group-hover:block min-w-[190px] z-10">
                <ul className="text-xs">
                  {[
                    { href: "/business/gems", label: "Gems And Jewellery" },
                    { href: "/business/real-estate", label: "Real Estate" },
                    { href: "/business/marble", label: "Marble Mining" },
                    { href: "/business/hospitality", label: "Hospitality" },
                    { href: "/business/technology", label: "Technology & Innovations" },
                  ].map(({ href, label }, idx) => (
                    <li
                      key={idx}
                      className="border-b-2 border-mid-gray last:border-b-0"
                    >
                      <Link
                        href={href}
                        className="flex items-center gap-2 py-2 px-2"
                      >
                        <span className="w-2 h-2 rounded-full border-2 border-primary inline-block shrink-0"></span>
                        {label}
                      </Link>
                    </li>
                  ))}
                </ul>
              </div>
            </div>

            <Link
              href="/foundation"
              className={`border-b ${
                isActive("/foundation") ? "border-white" : "border-transparent"
              }`}
            >
              Foundation
            </Link>
            <Link
              href="/career"
              className={`border-b ${
                isActive("/career") ? "border-white" : "border-transparent"
              }`}
            >
              Career
            </Link>
            <Link
              href="/contact"
              className={`border-b ${
                isActive("/contact") ? "border-white" : "border-transparent"
              }`}
            >
              Contact Us
            </Link>

            <div className="flex items-center gap-x-6">
              <Image
                src={search}
                alt="Search Icon"
                width={24}  // adjust size as needed
                height={24}
                className="cursor-pointer  w-[24px] h-[24px]"
              />
              <button className="bg-primary text-darkGray w-10 h-10 text-xs flex items-center justify-center">
                EN
              </button>
            </div>
          </nav>

          {/* Hamburger Button */}
          <button onClick={toggleDrawer} className="lg:hidden text-white">
            {drawerOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>

        {/* Backdrop */}
        {drawerOpen && (
          <div
            className="fixed inset-0 bg-black/50 z-40"
            onClick={toggleDrawer}
          />
        )}

      
      </header>

         {/* Drawer */}
      <div className={`fixed top-0 right-0 h-full w-72 bg-black z-50 transform transition-transform duration-300 ease-in-out ${
  drawerOpen ? "translate-x-0" : "translate-x-full"
}`}>
          <div className="p-4 space-y-4 pt-12 relative text-white">
            <button
              onClick={toggleDrawer}
              className="absolute top-4 right-4 text-gray-100"
            >
              <X size={24} />
            </button>

            <Link href="/" className="block">Home</Link>
            <Link href="/about" className="block">About Us</Link>

            {/* Submenu */}
            <div>
              <button
                onClick={toggleSubmenu}
                className="flex items-center justify-between w-full"
              >
                Businesses <ChevronDown size={16} />
              </button>
              {submenuOpen && (
                <ul className="pl-4 mt-2 space-y-2 text-sm">
                  <li><Link href="/business/gems">Gems And Jewellery</Link></li>
                  <li><Link href="/business/real-estate">Real Estate</Link></li>
                  <li><Link href="/business/marble">Marble Mining</Link></li>
                  <li><Link href="/business/hospitality">Hospitality</Link></li>
                  <li><Link href="/business/technology">Technology & Innovations</Link></li>
                </ul>
              )}
            </div>

            <Link href="/foundation" className="block">Foundation</Link>
            <Link href="/career" className="block">Career</Link>
            <Link href="/contact" className="block">Contact Us</Link>

            <div className="flex items-center justify-between pt-4 border-t mt-4">
              <Image
                src={search}
                alt="Search Icon"
                width={20}  // adjust size as needed
                height={20}
                className="cursor-pointer"
              />
              <button className="bg-darkGray text-white w-10 h-10 text-xs flex items-center justify-center">
                EN
              </button>

            </div>
          </div>
        </div>

    </>
  );
}
