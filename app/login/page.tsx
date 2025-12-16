"use client";

import React, { useState, useEffect } from "react";
import { useRouter } from "next/navigation";
import Image from "next/image";
import Link from "next/link";
import { Mail, Eye, EyeOff } from "lucide-react";
import { FaGoogle, FaFacebook, FaApple } from "react-icons/fa";

export default function LoginPage() {
  const router = useRouter();
  const [showPassword, setShowPassword] = useState(false);
  const [formData, setFormData] = useState({
    email: "",
    password: "",
  });
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState("");

  // Preload background image
  useEffect(() => {
    const link = document.createElement('link');
    link.rel = 'preload';
    link.as = 'image';
    link.href = '/images/banners/login.svg';
    link.setAttribute('fetchpriority', 'high');
    document.head.appendChild(link);

    // Preload the image using native browser Image constructor
    const img = new window.Image();
    img.src = '/images/banners/login.svg';

    return () => {
      if (document.head.contains(link)) {
        document.head.removeChild(link);
      }
    };
  }, []);

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setError("");
    setIsLoading(true);

    // Simple validation
    if (!formData.email || !formData.password) {
      setError("Please fill in all fields");
      setIsLoading(false);
      return;
    }

    // Simulate login (in real app, this would be an API call)
    setTimeout(() => {
      // Set authentication data in localStorage
      localStorage.setItem("isAuthenticated", "true");
      localStorage.setItem("userName", "Sarah");
      localStorage.setItem("userAvatar", "/images/avatars/default-avatar.jpg");
      
      // Redirect to home page
      router.push("/");
      setIsLoading(false);
    }, 500);
  };

  const handleSocialLogin = (provider: string) => {
    // Set authentication data in localStorage
    localStorage.setItem("isAuthenticated", "true");
    localStorage.setItem("userName", "Sarah");
    localStorage.setItem("userAvatar", "/images/avatars/default-avatar.jpg");
    
    // Redirect to home page
    router.push("/");
  };

  return (
    <>
      <style dangerouslySetInnerHTML={{
        __html: `
          body {
            margin: 0;
            padding: 0;
            overflow-x: hidden;
          }
          .login-form input::placeholder {
            font-family: var(--font-poppins), Poppins, sans-serif;
            font-weight: 400;
            font-size: clamp(14px, 3vw, 16px);
            line-height: 24px;
            letter-spacing: 0%;
            vertical-align: middle;
          }
        `
      }} />
      <div className="min-h-screen relative flex items-center justify-center p-3 sm:p-4 md:p-6 lg:p-8 xl:p-12">
        {/* Background Image */}
      <div 
        className="absolute inset-0 z-0"
        style={{
          backgroundImage: "url('/images/banners/login.svg')",
          backgroundSize: "cover",
          backgroundPosition: "center",
          backgroundRepeat: "no-repeat",
          width: "100%",
          height: "100%",
        }}
      />
      
      {/* Overlay for better contrast */}
      <div className="absolute inset-0 z-0 bg-black/20" />

      {/* Login Form Card */}
      <div 
        className="relative z-10 bg-white rounded-xl sm:rounded-2xl shadow-2xl w-full max-w-[448px] min-h-[500px] sm:min-h-[600px] max-h-[95vh] sm:max-h-[911px] overflow-y-auto my-4 sm:my-0"
        style={{
          border: '1px solid #E5E7EB',
          padding: 'clamp(16px, 4vw, 32px)',
        }}
      >
        {/* Logo */}
        <div className="text-center mb-4 sm:mb-6">
          <div className="flex items-center justify-center mb-4 sm:mb-6">
            <Image
              src="/logos/Logo.svg"
              alt="Learnic Logo"
              width={119}
              height={47}
              className="h-auto"
              style={{ width: 'clamp(100px, 25vw, 119px)' }}
            />
          </div>
          
          <h1 
            className="text-gray-900 mb-2"
            style={{
              fontFamily: 'var(--font-poppins), Poppins, sans-serif',
              fontWeight: 600,
              fontSize: 'clamp(18px, 4.5vw, 24px)',
              lineHeight: 'clamp(26px, 4.5vw, 32px)',
              letterSpacing: '0%',
              textAlign: 'center',
            }}
          >
            Login to Learnic
          </h1>
          <p 
            className="text-gray-500"
            style={{
              fontFamily: 'var(--font-poppins), Poppins, sans-serif',
              fontWeight: 400,
              fontSize: 'clamp(12px, 3vw, 14px)',
              lineHeight: 'clamp(18px, 3vw, 20px)',
              letterSpacing: '0%',
              textAlign: 'center',
            }}
          >
            Your gateway to smarter, simpler learning.
          </p>
        </div>

        {/* Form */}
        <form onSubmit={handleSubmit} className="login-form space-y-3 sm:space-y-4">
          {/* Email Address */}
          <div className="relative">
            <label 
              className="block mb-2"
              style={{
                fontFamily: 'var(--font-poppins), Poppins, sans-serif',
                fontWeight: 500,
                fontSize: '14px',
                lineHeight: '100%',
                letterSpacing: '0%',
                color: '#1F2937',
              }}
            >
              Email Address
            </label>
            <div className="relative">
              <input
                type="email"
                name="email"
                placeholder="Enter your email"
                value={formData.email}
                onChange={handleInputChange}
                className="w-full px-3 sm:px-4 py-2.5 sm:py-3 pr-10 rounded-lg border border-gray-300 focus:outline-none focus:border-[#5636FF] focus:ring-1 focus:ring-[#5636FF] transition-all text-sm sm:text-base"
              />
              <Mail className="absolute right-3 top-1/2 transform -translate-y-1/2 w-4 h-4 sm:w-5 sm:h-5" style={{ color: '#BEBEBE' }} />
            </div>
          </div>

          {/* Password */}
          <div className="relative">
            <label 
              className="block mb-2"
              style={{
                fontFamily: 'var(--font-poppins), Poppins, sans-serif',
                fontWeight: 500,
                fontSize: '14px',
                lineHeight: '100%',
                letterSpacing: '0%',
                color: '#1F2937',
              }}
            >
              Password
            </label>
            <div className="relative">
              <input
                type={showPassword ? "text" : "password"}
                name="password"
                placeholder="Enter password"
                value={formData.password}
                onChange={handleInputChange}
                className="w-full px-3 sm:px-4 py-2.5 sm:py-3 pr-10 rounded-lg border border-gray-300 focus:outline-none focus:border-[#5636FF] focus:ring-1 focus:ring-[#5636FF] transition-all text-sm sm:text-base"
              />
              <button
                type="button"
                onClick={() => setShowPassword(!showPassword)}
                className="absolute right-3 top-1/2 transform -translate-y-1/2 hover:opacity-70"
              >
                {showPassword ? (
                  <EyeOff className="w-4 h-4 sm:w-5 sm:h-5" style={{ color: '#BEBEBE' }} />
                ) : (
                  <Eye className="w-4 h-4 sm:w-5 sm:h-5" style={{ color: '#BEBEBE' }} />
                )}
              </button>
            </div>
          </div>

          {/* Error Message */}
          {error && (
            <div className="text-red-500 text-sm text-center" style={{
              fontFamily: 'var(--font-poppins), Poppins, sans-serif',
            }}>
              {error}
            </div>
          )}

          {/* Forgot Password Link */}
          <div className="flex justify-end">
            <Link 
              href="/forgot-password" 
              className="text-[#5636FF] hover:underline text-sm sm:text-base"
              style={{
                fontFamily: 'var(--font-poppins), Poppins, sans-serif',
                fontWeight: 400,
                fontSize: 'clamp(12px, 3vw, 14px)',
              }}
            >
              Forgot Password?
            </Link>
          </div>

          {/* Login Button */}
          <button
            type="submit"
            disabled={isLoading}
            className="text-white hover:opacity-90 transition-all duration-200 focus:outline-none focus:ring-2 focus:ring-[#572EEE] focus:ring-offset-2 w-full sm:w-auto sm:max-w-[382px] mx-auto block disabled:opacity-50 disabled:cursor-not-allowed"
            style={{
              width: '100%',
              maxWidth: '382px',
              height: '48px',
              borderRadius: '8px',
              backgroundColor: '#572EEE',
              opacity: isLoading ? 0.5 : 1,
              boxShadow: '0px 10px 15px 0px #0000001A, 0px 4px 6px 0px #0000001A',
              fontFamily: 'var(--font-poppins), Poppins, sans-serif',
              fontWeight: 500,
              fontSize: 'clamp(14px, 3.5vw, 16px)',
              lineHeight: '100%',
              letterSpacing: '0%',
              textAlign: 'center',
            }}
          >
            {isLoading ? "Logging in..." : "Login"}
          </button>
        </form>

        {/* Divider */}
        <div className="flex items-center my-4 sm:my-5">
          <div className="flex-1 border-t border-gray-300"></div>
          <span 
            className="px-3 sm:px-4 text-gray-500"
            style={{
              fontFamily: 'var(--font-poppins), Poppins, sans-serif',
              fontWeight: 400,
              fontSize: 'clamp(12px, 3vw, 14px)',
              lineHeight: 'clamp(18px, 3vw, 20px)',
              letterSpacing: '0%',
              textAlign: 'center',
            }}
          >
            or
          </span>
          <div className="flex-1 border-t border-gray-300"></div>
        </div>

        {/* Social Login Icons */}
        <div className="flex justify-center gap-3 sm:gap-4 mb-4 sm:mb-5">
          <button
            type="button"
            onClick={() => handleSocialLogin("google")}
            className="w-10 h-10 sm:w-12 sm:h-12 rounded-full bg-white border-2 border-gray-200 flex items-center justify-center hover:border-gray-300 transition-all"
            style={{
              boxShadow: '0px 4px 6px 0px #0000001A, 0px 2px 4px 0px #0000001A',
            }}
            aria-label="Sign in with Google"
          >
            <FaGoogle className="text-red-500 text-lg sm:text-xl" />
          </button>
          <button
            type="button"
            onClick={() => handleSocialLogin("facebook")}
            className="w-10 h-10 sm:w-12 sm:h-12 rounded-full bg-white border-2 border-gray-200 flex items-center justify-center hover:border-gray-300 transition-all"
            style={{
              boxShadow: '0px 4px 6px 0px #0000001A, 0px 2px 4px 0px #0000001A',
            }}
            aria-label="Sign in with Facebook"
          >
            <FaFacebook className="text-blue-600 text-lg sm:text-xl" />
          </button>
          <button
            type="button"
            onClick={() => handleSocialLogin("apple")}
            className="w-10 h-10 sm:w-12 sm:h-12 rounded-full bg-white border-2 border-gray-200 flex items-center justify-center hover:border-gray-300 transition-all"
            style={{
              boxShadow: '0px 4px 6px 0px #0000001A, 0px 2px 4px 0px #0000001A',
            }}
            aria-label="Sign in with Apple"
          >
            <FaApple className="text-gray-800 text-lg sm:text-xl" />
          </button>
        </div>

        {/* Sign Up Link */}
        <div className="text-center">
          <p 
            className="text-gray-500"
            style={{
              fontFamily: 'var(--font-poppins), Poppins, sans-serif',
              fontWeight: 400,
              fontSize: 'clamp(14px, 3.5vw, 16px)',
              lineHeight: 'clamp(20px, 3.5vw, 24px)',
              letterSpacing: '0%',
              textAlign: 'center',
            }}
          >
            Don&apos;t have an account?
          </p>
          <Link 
            href="/signup" 
            className="text-[#5636FF] hover:underline block mt-1"
            style={{
              fontFamily: 'var(--font-poppins), Poppins, sans-serif',
              fontWeight: 500,
              fontSize: 'clamp(14px, 3.5vw, 16px)',
              lineHeight: '100%',
              letterSpacing: '0%',
              textAlign: 'center',
            }}
          >
            Sign Up
          </Link>
        </div>
      </div>
    </div>
    </>
  );
}

