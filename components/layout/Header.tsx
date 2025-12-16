"use client";

import React, { useState, useMemo, useCallback, useEffect, useRef } from "react";
import Link from "next/link";
import Image from "next/image";
import { usePathname, useRouter } from "next/navigation";
import { Menu, X, Heart, Bell, ChevronDown, User } from "lucide-react";
import Button from "@/components/ui/Button";
import { colors, typography } from "@/theme";

const styles = {
  navLink: (isActive: boolean) =>
    ({
      ...typography.button.secondary,
      color: isActive ? colors.brand.primarySoft : colors.text.secondary,
    }) as const,
  authGhost: {
    ...typography.button.secondary,
    display: "inline-flex",
    alignItems: "center",
    justifyContent: "center",
    padding: "10px 18px",
    borderRadius: "8px",
    textAlign: "center" as const,
    minWidth: "68px",
  } as const,
  authPrimary: {
    ...typography.button.secondary,
    display: "inline-flex",
    alignItems: "center",
    justifyContent: "center",
    padding: "10px 20px",
    borderRadius: "8px",
    textAlign: "center" as const,
    color: colors.text.light,
    minWidth: "88px",
  } as const,
  mobileAuthButton: {
    ...typography.button.secondary,
    width: "100%",
    padding: "12px 16px",
    borderRadius: "10px",
    textAlign: "center" as const,
  } as const,
} as const;

const Header: React.FC = React.memo(() => {
  const router = useRouter();
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const [userName, setUserName] = useState("Sarah");
  const [userAvatar, setUserAvatar] = useState("/images/avatars/default-avatar.jpg");
  const [avatarError, setAvatarError] = useState(false);
  const pathname = usePathname();
  const dropdownRef = useRef<HTMLDivElement>(null);

  // Check authentication status from localStorage
  useEffect(() => {
    const checkAuth = () => {
      if (typeof window !== "undefined") {
        const authStatus = localStorage.getItem("isAuthenticated");
        const storedUserName = localStorage.getItem("userName");
        const storedAvatar = localStorage.getItem("userAvatar");
        
        if (authStatus === "true") {
          setIsAuthenticated(true);
          if (storedUserName) setUserName(storedUserName);
          if (storedAvatar) {
            setUserAvatar(storedAvatar);
            setAvatarError(false); // Reset error state when new avatar is set
          }
        } else {
          setIsAuthenticated(false);
          setAvatarError(false); // Reset error state on logout
        }
      }
    };

    // Check on mount
    checkAuth();

    // Listen for storage changes (when login happens in another tab/window)
    window.addEventListener("storage", checkAuth);

    // Also check on focus (when user comes back to tab)
    window.addEventListener("focus", checkAuth);

    return () => {
      window.removeEventListener("storage", checkAuth);
      window.removeEventListener("focus", checkAuth);
    };
  }, []);

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

  const toggleDropdown = useCallback(() => {
    setIsDropdownOpen((prev) => !prev);
  }, []);

  const closeDropdown = useCallback(() => {
    setIsDropdownOpen(false);
  }, []);

  const handleLogout = useCallback(() => {
    localStorage.removeItem("isAuthenticated");
    localStorage.removeItem("userName");
    localStorage.removeItem("userAvatar");
    setIsAuthenticated(false);
    setIsDropdownOpen(false);
    router.push("/");
  }, [router]);

  // Close dropdown when clicking outside
  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target as Node)) {
        setIsDropdownOpen(false);
      }
    };

    if (isDropdownOpen) {
      document.addEventListener("mousedown", handleClickOutside);
    }

    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [isDropdownOpen]);

  return (
    <>
      <header className="fixed inset-x-0 top-0 z-50 bg-white/95 backdrop-blur border-b border-gray-100">
        <div className="mx-auto w-full px-4 sm:px-6 lg:px-12 xl:px-20 2xl:px-24">
          <div className="flex items-center justify-between h-16 md:h-20 gap-3">
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

            <nav className="hidden lg:flex items-center gap-5 xl:gap-6 ml-6 xl:ml-8">
              {navLinks.map((link) => {
                const isActive = link.href === "/"
                  ? pathname === "/"
                  : pathname.startsWith(link.href);

                return (
                  <Link
                    key={link.href}
                    href={link.href}
                    className="font-medium transition-colors"
                    style={{
                      ...styles.navLink(isActive),
                      fontSize: "15px",
                      fontFamily: "var(--font-poppins), sans-serif",
                    }}
                  >
                    {link.label}
                  </Link>
                );
              })}
            </nav>

            <div className="flex items-center gap-3 md:gap-4">
              {isAuthenticated ? (
                <div className="hidden md:flex items-center gap-4 xl:gap-5">
                  {/* Notification Icon */}
                  <button
                    className="relative w-10 h-10 rounded-full bg-[#F3F0FF] hover:bg-[#E8E0FF] transition-colors flex items-center justify-center focus:outline-none focus:ring-2 focus:ring-[#5636FF]/30 flex-shrink-0"
                    aria-label="Notifications"
                  >
                    <Bell className="w-5 h-5 text-[#5636FF]" strokeWidth={2} />
                  </button>

                  {/* User Profile with Dropdown */}
                  <div className="relative" ref={dropdownRef}>
                    <div 
                      className="flex items-center gap-2.5 cursor-pointer group"
                      onClick={toggleDropdown}
                    >
                    <div className="relative flex-shrink-0">
                      {!avatarError ? (
                        <Image
                          src={userAvatar}
                          alt={userName}
                          width={40}
                          height={40}
                          className="w-10 h-10 rounded-full object-cover border-2 border-[#F3F0FF]"
                          onError={() => {
                            setAvatarError(true);
                          }}
                        />
                      ) : (
                        <div className="w-10 h-10 rounded-full bg-gray-300 border-2 border-[#F3F0FF] flex items-center justify-center">
                          <User className="w-5 h-5 text-gray-600" />
                        </div>
                      )}
                    </div>
                      <div className="flex items-center gap-1.5">
                        <span
                          className="text-gray-600 font-medium whitespace-nowrap"
                          style={{
                            fontSize: "14px",
                            fontFamily: "var(--font-poppins), sans-serif",
                            lineHeight: "20px",
                          }}
                        >
                          Hi, {userName}!
                        </span>
                        <ChevronDown className={`w-4 h-4 text-gray-500 group-hover:text-gray-700 transition-transform flex-shrink-0 ${isDropdownOpen ? 'rotate-180' : ''}`} />
                      </div>
                    </div>

                    {/* Dropdown Menu */}
                    {isDropdownOpen && (
                      <div className="absolute right-0 mt-2 w-48 bg-white rounded-lg shadow-lg border border-gray-200 py-2 z-50">
                        <Link
                          href="/my-learning"
                          className="block px-4 py-2 text-gray-700 hover:bg-gray-50 transition-colors"
                          onClick={closeDropdown}
                          style={{
                            fontSize: "14px",
                            fontFamily: "var(--font-poppins), sans-serif",
                          }}
                        >
                          My Learnings
                        </Link>
                        <Link
                          href="/my-profile"
                          className="block px-4 py-2 text-gray-700 hover:bg-gray-50 transition-colors"
                          onClick={closeDropdown}
                          style={{
                            fontSize: "14px",
                            fontFamily: "var(--font-poppins), sans-serif",
                          }}
                        >
                          My Profile
                        </Link>
                        <Link
                          href="/notifications"
                          className="block px-4 py-2 text-gray-700 hover:bg-gray-50 transition-colors"
                          onClick={closeDropdown}
                          style={{
                            fontSize: "14px",
                            fontFamily: "var(--font-poppins), sans-serif",
                          }}
                        >
                          Notification
                        </Link>
                        <button
                          onClick={handleLogout}
                          className="w-full text-left px-4 py-2 text-gray-700 hover:bg-gray-50 transition-colors"
                          style={{
                            fontSize: "14px",
                            fontFamily: "var(--font-poppins), sans-serif",
                          }}
                        >
                          Logout
                        </button>
                      </div>
                    )}
                  </div>

                  {/* Donate Button */}
                  <Link href="/donate" className="flex-shrink-0">
                    <Button
                      variant="primary"
                      size="sm"
                      className="rounded-lg !bg-gradient-to-r from-[#F48C06] to-[#FFA726] hover:from-[#D97706] hover:to-[#FB8C00] focus:ring-[#F48C06] shadow-[0px_4px_12px_rgba(244,140,6,0.3)] flex items-center gap-2 px-4 py-2.5"
                      style={{
                        fontFamily: "var(--font-poppins), sans-serif",
                        fontSize: "14px",
                        fontWeight: 500,
                        color: "#FFFFFF",
                      }}
                    >
                      <Heart className="w-4 h-4 text-white" fill="currentColor" />
                      Donate
                    </Button>
                  </Link>
                </div>
              ) : (
                <div className="hidden md:flex items-center gap-2 xl:gap-3">
                  <Link href="/login">
                    <Button
                      variant="ghost"
                      size="sm"
                      className="rounded-[8px] border border-[#5636FF] text-[#5636FF] !bg-transparent hover:!bg-transparent hover:!text-[#5636FF] focus:ring-[#5636FF] min-w-[68px]"
                      style={styles.authGhost}
                    >
                      Login
                    </Button>
                  </Link>
                  <Link href="/signup">
                    <Button
                      variant="primary"
                      size="sm"
                      className="rounded-[8px] !bg-[#5636FF] hover:!bg-[#4326D6] focus:ring-[#5636FF] min-w-[88px]"
                      style={styles.authPrimary}
                    >
                      Sign Up
                    </Button>
                  </Link>
                  <Link href="/donate">
                    <Button
                      variant="primary"
                      size="sm"
                      className="rounded-[8px] !bg-[#F48C06] hover:!bg-[#D97706] focus:ring-[#F48C06] shadow-[0px_12px_28px_rgba(244,140,6,0.35)] flex items-center gap-2"
                      style={styles.authPrimary}
                    >
                      <Heart className="w-4 h-4 text-white" fill="currentColor" />
                      Donate
                    </Button>
                  </Link>
                </div>
              )}

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
                {isAuthenticated ? (
                  <div className="flex flex-col gap-3 pt-2">
                    <div className="flex items-center gap-3 px-2 py-2">
                      {!avatarError ? (
                        <Image
                          src={userAvatar}
                          alt={userName}
                          width={40}
                          height={40}
                          className="w-10 h-10 rounded-full object-cover border-2 border-[#F3F0FF]"
                          onError={() => {
                            setAvatarError(true);
                          }}
                        />
                      ) : (
                        <div className="w-10 h-10 rounded-full bg-gray-300 border-2 border-[#F3F0FF] flex items-center justify-center">
                          <User className="w-5 h-5 text-gray-600" />
                        </div>
                      )}
                      <span
                        className="text-gray-600 font-medium"
                        style={{
                          fontSize: "14px",
                          fontFamily: "var(--font-poppins), sans-serif",
                        }}
                      >
                        Hi, {userName}!
                      </span>
                    </div>
                    <Link href="/donate" onClick={closeMenu}>
                      <Button
                        variant="primary"
                        size="sm"
                        className="w-full rounded-[10px] !bg-gradient-to-r from-[#F48C06] to-[#FFA726] hover:from-[#D97706] hover:to-[#FB8C00] focus:ring-[#F48C06] shadow-[0px_12px_28px_rgba(244,140,6,0.35)] flex items-center justify-center gap-2"
                        style={styles.mobileAuthButton}
                      >
                        <Heart className="w-4 h-4" />
                        Donate
                      </Button>
                    </Link>
                  </div>
                ) : (
                  <div className="flex flex-col gap-2 pt-2">
                    <Link href="/login" onClick={closeMenu}>
                      <Button
                        variant="ghost"
                        size="sm"
                        className="w-full rounded-[10px] border border-[#5636FF] text-[#5636FF] !bg-transparent hover:!bg-transparent hover:!text-[#5636FF] focus:ring-[#5636FF]"
                        style={styles.mobileAuthButton}
                      >
                        Login
                      </Button>
                    </Link>
                    <Link href="/signup" onClick={closeMenu}>
                      <Button
                        variant="primary"
                        size="sm"
                        className="w-full rounded-[10px] !bg-[#5636FF] hover:!bg-[#4326D6] focus:ring-[#5636FF]"
                        style={styles.mobileAuthButton}
                      >
                        Sign Up
                      </Button>
                    </Link>
                    <Link href="/donate" onClick={closeMenu}>
                      <Button
                        variant="primary"
                        size="sm"
                        className="w-full rounded-[10px] !bg-[#F48C06] hover:!bg-[#D97706] focus:ring-[#F48C06] shadow-[0px_12px_28px_rgba(244,140,6,0.35)] flex items-center justify-center gap-2"
                        style={styles.mobileAuthButton}
                      >
                        <Heart className="w-4 h-4" />
                        Donate
                      </Button>
                    </Link>
                  </div>
                )}
              </nav>
            </div>
          )}
        </div>
      </header>
      <div className="h-16 md:h-20" />
    </>
  );
});

Header.displayName = 'Header';

export default Header;

