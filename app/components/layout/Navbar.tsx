"use client";

import { useState } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import Button from "../ui/Button";
import CloudinaryImage from "../ui/CloudinaryImage";

const NAV_LINKS = [
  { href: "/", label: "Home" },
  { href: "/about", label: "About" },
  { href: "/academy", label: "Academy" },
  { href: "/players", label: "Players" },
  { href: "/contact", label: "Contact" },
];

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const pathname = usePathname();

  return (
    <nav className="sticky top-0 z-50 bg-[#0D1F0F] border-b border-[#1B4332]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-[72px]">
          {/* Logo */}
          <Link href="/" className="flex items-center gap-3 select-none group">
            <CloudinaryImage
              src="https://res.cloudinary.com/dhlvq35cc/image/upload/v1781264973/PSA_r9pzzc.png"
              alt="Prakash Sports Academy Logo"
              width={45}
              height={45}
              className="object-contain"
            />
            <div className="flex flex-col">
              <span className="font-title text-[17px] font-bold tracking-wide leading-none text-white">
                PRAKASH
              </span>
              <span className="font-title text-[8px] font-semibold tracking-[0.25em] text-gold mt-0.5 leading-none">
                SPORTS ACADEMY
              </span>
            </div>
          </Link>
          
          {/* Desktop Nav */}
          <div className="hidden md:flex items-center gap-1">
            {NAV_LINKS.map((link) => {
              const isActive = pathname === link.href;
              return (
                <Link
                  key={link.href}
                  href={link.href}
                  className={`px-4 py-2 font-title text-[11px] uppercase tracking-[0.15em] transition-colors duration-200 font-semibold relative ${
                    isActive
                      ? "text-gold"
                      : "text-foreground/75 hover:text-white"
                  }`}
                >
                  {link.label}
                  {isActive && (
                    <span className="absolute bottom-0 left-4 right-4 h-[2px] bg-gold" />
                  )}
                </Link>
              );
            })}
          </div>

          {/* CTA */}
          <div className="hidden md:block">
            <Button href="/contact?type=join" variant="accent" size="sm">
              Join Academy
            </Button>
          </div>

          {/* Mobile Toggle */}
          <button
            onClick={() => setIsOpen(!isOpen)}
            type="button"
            className="md:hidden inline-flex items-center justify-center p-2 text-foreground/70 hover:text-white focus:outline-none"
            aria-controls="mobile-menu"
            aria-expanded={isOpen}
          >
            <span className="sr-only">Toggle menu</span>
            {isOpen ? (
              <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2">
                <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
              </svg>
            ) : (
              <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2">
                <path strokeLinecap="round" strokeLinejoin="round" d="M4 6h16M4 12h16M4 18h16" />
              </svg>
            )}
          </button>
        </div>
      </div>

      {/* Mobile Panel */}
      {isOpen && (
        <div className="md:hidden bg-[#0D1F0F] border-t border-[#1B4332]" id="mobile-menu">
          <div className="px-4 py-4 space-y-1">
            {NAV_LINKS.map((link) => {
              const isActive = pathname === link.href;
              return (
                <Link
                  key={link.href}
                  href={link.href}
                  onClick={() => setIsOpen(false)}
                  className={`block px-4 py-3 font-title text-[11px] uppercase tracking-[0.15em] font-semibold border-l-2 ${
                    isActive
                      ? "text-gold bg-gold/5 border-gold"
                      : "text-foreground/60 border-transparent hover:text-white hover:bg-white/5"
                  }`}
                >
                  {link.label}
                </Link>
              );
            })}
            <div className="pt-3 px-3">
              <Button
                href="/contact?type=join"
                variant="accent"
                size="md"
                className="w-full text-center"
                onClick={() => setIsOpen(false)}
              >
                Join Academy
              </Button>
            </div>
          </div>
        </div>
      )}
    </nav>
  );
}
