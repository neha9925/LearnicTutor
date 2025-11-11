"use client";

import React, { useState, useMemo, useCallback } from "react";
import Link from "next/link";
import Image from "next/image";
import { usePathname } from "next/navigation";
import { Menu, X } from "lucide-react";
import Button from "@/components/ui/Button";
import { colors, typography } from "@/theme";

const styles = {
  navLink: (isActive: boolean) =>
    ({
      ...typography.button.secondary,
      color: isActive ? colors.brand.primarySoft : colors.text.secondary,
    }) as const,
  authGhost: (width: string, height: string) =>
    ({
      ...typography.button.secondary,
      width,
      height,
      padding: "9px 16px",
      borderRadius: "8px",
      textAlign: "center" as const,
    }) as const,
  authPrimary: (width: string, height: string) =>
    ({
      ...typography.button.secondary,
      width,
      height,
      padding: "8px 16px",
      borderRadius: "8px",
      textAlign: "center" as const,
      color: colors.text.light,
    }) as const,
  mobileAuthButton: (minHeight: string) =>
    ({
      ...typography.button.secondary,
      width: "100%",
      minHeight,
      padding: "12px 16px",
      borderRadius: "10px",
      textAlign: "center" as const,
    }) as const,
} as const;

const Header: React.FC = React.memo(() => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const isAuthenticated = false;
  const pathname = usePathname();

  const navLinks = useMemo(() => [
    { href: "/", label: "Home" },
    { href: "/videos", label: "Videos" },
    { href: "/live-classes", label: "Live Classes" },
    { href: "/test-series", label: "Test Series" },
    { href: "/about", label: "About" },
  ], []);

  const toggleMenu = useCallback(() => {
    setIsMenuOpen((prev) => !prev);
  }, []);

  const closeMenu = useCallback(() => {
    setIsMenuOpen(false);
  }, []);

  return (
    <header className="sticky top-0 z-40 bg-white shadow-sm">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16 md:h-20">
          <Link href="/" className="inline-block">
            <Image
              src="/logos/Logo.svg"
              alt="Learnic Logo"
              width={119}
              height={47}
              className="h-auto"
              style={{ width: 'auto' }}
            />
          </Link>

          <nav className="hidden lg:flex items-center gap-6">
            {navLinks.map((link) => {
              const isActive = link.href === "/"
                ? pathname === "/"
                : pathname.startsWith(link.href);

              return (
                <Link
                  key={link.href}
                  href={link.href}
                  className="font-medium transition-colors"
                  style={styles.navLink(isActive)}
                >
                  {link.label}
                </Link>
              );
            })}
          </nav>

          <div className="flex items-center gap-3 md:gap-4">
            <div className="hidden md:flex items-center gap-3">
                <Link href="/login">
                  <Button
                    variant="ghost"
                    size="sm"
                    className="rounded-[8px] border border-[#5636FF] text-[#5636FF] !bg-transparent hover:!bg-transparent hover:!text-[#5636FF] focus:ring-[#5636FF]"
                    style={styles.authGhost("75px", "42px")}
                  >
                    Login
                  </Button>
                </Link>
                <Link href="/signup">
                  <Button
                    variant="primary"
                    size="sm"
                    className="rounded-[8px] !bg-[#5636FF] hover:!bg-[#4326D6] focus:ring-[#5636FF] shadow-[0px_12px_28px_rgba(86,54,255,0.35)]"
                    style={styles.authPrimary("95px", "40px")}
                  >
                    Sign Up
                  </Button>
                </Link>
            </div>

            <button
              className="lg:hidden p-2 text-gray-600 rounded-lg border border-transparent hover:border-gray-200 focus:outline-none focus:ring-2 focus:ring-[#5636FF]/30"
              onClick={toggleMenu}
              aria-label={isMenuOpen ? "Close navigation menu" : "Open navigation menu"}
            >
              {isMenuOpen ? (
                <X className="w-6 h-6" />
              ) : (
                <Menu className="w-6 h-6" />
              )}
            </button>
          </div>
        </div>

        {isMenuOpen && (
          <div className="lg:hidden pb-4 border-t border-gray-200 mt-2">
            <nav className="flex flex-col gap-3 pt-4">
              {navLinks.map((link) => {
                const isActive = link.href === "/"
                  ? pathname === "/"
                  : pathname.startsWith(link.href);

                return (
                  <Link
                    key={link.href}
                    href={link.href}
                    className="font-medium py-2 px-2 rounded-lg transition-colors hover:bg-gray-50"
                  style={styles.navLink(isActive)}
                    onClick={closeMenu}
                  >
                    {link.label}
                  </Link>
                );
              })}
              <div className="flex flex-col gap-2 pt-2">
                <Link href="/login">
                  <Button
                    variant="ghost"
                    size="sm"
                    className="w-full rounded-[10px] border border-[#5636FF] text-[#5636FF] !bg-transparent hover:!bg-transparent hover:!text-[#5636FF] focus:ring-[#5636FF]"
                    style={styles.mobileAuthButton("46px")}
                  >
                    Login
                  </Button>
                </Link>
                <Link href="/signup">
                  <Button
                    variant="primary"
                    size="sm"
                    className="w-full rounded-[10px] !bg-[#5636FF] hover:!bg-[#4326D6] focus:ring-[#5636FF] shadow-[0px_12px_28px_rgba(86,54,255,0.35)]"
                    style={styles.mobileAuthButton("46px")}
                  >
                    Sign Up
                  </Button>
                </Link>
              </div>
            </nav>
          </div>
        )}
      </div>
    </header>
  );
});

Header.displayName = 'Header';

export default Header;

