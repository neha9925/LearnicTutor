"use client";

import React, { useState, useEffect } from "react";
import Image from "next/image";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { Mail } from "lucide-react";

export default function ForgotPasswordPage() {
  const router = useRouter();
  const [formData, setFormData] = useState({
    email: "",
  });

  // Preload background image
  useEffect(() => {
    const link = document.createElement('link');
    link.rel = 'preload';
    link.as = 'image';
    link.href = '/images/banners/Forgot.svg';
    link.setAttribute('fetchpriority', 'high');
    document.head.appendChild(link);

    // Preload the image using native browser Image constructor
    const img = new window.Image();
    img.src = '/images/banners/Forgot.svg';

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

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Handle form submission
    // Redirect to verify OTP page for forgot password
    router.push("/verify-otp?type=forgot");
  };

  return (
    <>
      <style dangerouslySetInnerHTML={{
        __html: `
          .forgot-password-form input::placeholder {
            font-family: var(--font-poppins), Poppins, sans-serif;
            font-weight: 400;
            font-size: clamp(14px, 3vw, 16px);
            line-height: 24px;
            letter-spacing: 0%;
            vertical-align: middle;
          }
          body {
            margin: 0;
            padding: 0;
            overflow-x: hidden;
          }
        `
      }} />
      <div className="min-h-screen relative flex items-center justify-center p-3 sm:p-4 md:p-6 lg:p-8 xl:p-12">
        {/* Background Image */}
        <div 
          className="fixed top-0 left-0 right-0 bottom-0 z-0"
          style={{
            backgroundImage: "url('/images/banners/Forgot.svg')",
            backgroundSize: "cover",
            backgroundPosition: "center center",
            backgroundRepeat: "no-repeat",
            width: "100vw",
            height: "100vh",
            margin: 0,
            padding: 0,
          }}
        />
        
        {/* Overlay for better contrast */}
        <div className="fixed top-0 left-0 right-0 bottom-0 z-0 bg-black/20" />

      {/* Forgot Password Form Card */}
      <div 
        className="relative z-10 bg-white rounded-xl sm:rounded-2xl shadow-2xl w-full max-w-[448px] overflow-y-auto my-4 sm:my-0"
        style={{
          border: '1px solid #E5E7EB',
          padding: 'clamp(16px, 4vw, 32px)',
        }}
      >
        {/* Logo */}
        <div className="text-center mb-4">
          <div className="flex items-center justify-center mb-3 sm:mb-4">
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
            Forgot Your Password?
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
            Don&apos;t worry! Enter your email to reset your password and regain access.
          </p>
        </div>

        {/* Form */}
        <form onSubmit={handleSubmit} className="forgot-password-form space-y-4">
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

          {/* Reset Button */}
          <button
            type="submit"
            className="text-white hover:opacity-90 transition-all duration-200 focus:outline-none focus:ring-2 focus:ring-[#572EEE] focus:ring-offset-2 w-full sm:w-auto sm:max-w-[382px] mx-auto block"
            style={{
              width: '100%',
              maxWidth: '382px',
              height: '48px',
              borderRadius: '8px',
              backgroundColor: '#572EEE',
              boxShadow: '0px 10px 15px 0px #0000001A, 0px 4px 6px 0px #0000001A',
              fontFamily: 'var(--font-poppins), Poppins, sans-serif',
              fontWeight: 500,
              fontSize: 'clamp(14px, 3.5vw, 16px)',
              lineHeight: '100%',
              letterSpacing: '0%',
              textAlign: 'center',
              opacity: 1,
            }}
          >
            Reset
          </button>
        </form>
      </div>
      </div>
    </>
  );
}

