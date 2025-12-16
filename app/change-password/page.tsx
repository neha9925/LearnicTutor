"use client";

import React, { useState, useEffect } from "react";
import Image from "next/image";
import Link from "next/link";
import { Eye, EyeOff, X, Check } from "lucide-react";

export default function ChangePasswordPage() {
  const [showPassword, setShowPassword] = useState(false);
  const [showConfirmPassword, setShowConfirmPassword] = useState(false);
  const [showSuccessModal, setShowSuccessModal] = useState(false);
  const [formData, setFormData] = useState({
    password: "",
    confirmPassword: "",
  });

  // Preload background image
  useEffect(() => {
    const link = document.createElement('link');
    link.rel = 'preload';
    link.as = 'image';
    link.href = '/images/banners/ChangePassword.svg';
    link.setAttribute('fetchpriority', 'high');
    document.head.appendChild(link);

    // Preload the image using native browser Image constructor
    const img = new window.Image();
    img.src = '/images/banners/ChangePassword.svg';

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
    // Show success modal after successful password change
    setShowSuccessModal(true);
  };

  return (
    <>
      <style dangerouslySetInnerHTML={{
        __html: `
          .change-password-form input::placeholder {
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
            backgroundImage: "url('/images/banners/ChangePassword.svg')",
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

        {/* Change Password Form Card */}
        <div 
          className="relative z-10 bg-white rounded-xl sm:rounded-2xl shadow-2xl w-full max-w-[448px] overflow-y-auto my-4 sm:my-0"
          style={{
            border: '1px solid #E5E7EB',
            padding: 'clamp(20px, 5vw, 32px)',
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
              Change Your Password
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
              Keep your account secure by updating your password regularly.
            </p>
          </div>

          {/* Form */}
          <form onSubmit={handleSubmit} className="change-password-form space-y-4">
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

            {/* Confirm Password */}
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
                Confirm Password
              </label>
              <div className="relative">
                <input
                  type={showConfirmPassword ? "text" : "password"}
                  name="confirmPassword"
                  placeholder="Enter confirm password"
                  value={formData.confirmPassword}
                  onChange={handleInputChange}
                  className="w-full px-3 sm:px-4 py-2.5 sm:py-3 pr-10 rounded-lg border border-gray-300 focus:outline-none focus:border-[#5636FF] focus:ring-1 focus:ring-[#5636FF] transition-all text-sm sm:text-base"
                />
                <button
                  type="button"
                  onClick={() => setShowConfirmPassword(!showConfirmPassword)}
                  className="absolute right-3 top-1/2 transform -translate-y-1/2 hover:opacity-70"
                >
                  {showConfirmPassword ? (
                    <EyeOff className="w-4 h-4 sm:w-5 sm:h-5" style={{ color: '#BEBEBE' }} />
                  ) : (
                    <Eye className="w-4 h-4 sm:w-5 sm:h-5" style={{ color: '#BEBEBE' }} />
                  )}
                </button>
              </div>
            </div>

            {/* Change Password Button */}
            <button
              type="submit"
              className="text-white hover:opacity-90 transition-all duration-200 focus:outline-none focus:ring-2 focus:ring-[#572EEE] focus:ring-offset-2 w-full max-w-[382px] mx-auto block"
              style={{
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
              Change Password
            </button>
          </form>
        </div>
      </div>

      {/* Success Modal */}
      {showSuccessModal && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4">
          {/* Backdrop */}
          <div 
            className="absolute inset-0 bg-gray-500/50 backdrop-blur-sm"
            onClick={() => setShowSuccessModal(false)}
          />
          
          {/* Modal Card */}
          <div 
            className="relative z-10 bg-white rounded-2xl shadow-2xl w-full max-w-[400px] p-6 sm:p-8"
            style={{
              border: '1px solid #E5E7EB',
            }}
          >
            {/* Close Button */}
            <button
              onClick={() => setShowSuccessModal(false)}
              className="absolute top-4 right-4 rounded-full flex items-center justify-center hover:opacity-80 transition-all duration-200"
              style={{
                width: '32px',
                height: '32px',
                backgroundColor: '#F3F4F6',
              }}
            >
              <X className="w-5 h-5" style={{ color: '#6B7280' }} />
            </button>

            {/* Success Icon */}
            <div className="flex justify-center mb-4">
              <div className="relative">
                <div 
                  className="w-20 h-20 rounded-full flex items-center justify-center"
                  style={{ backgroundColor: '#E9D5FF' }}
                >
                  <div 
                    className="w-14 h-14 rounded-full flex items-center justify-center"
                    style={{ backgroundColor: '#572EEE' }}
                  >
                    <Check className="w-7 h-7 text-white" strokeWidth={3} />
                  </div>
                </div>
              </div>
            </div>

            {/* Heading */}
            <h2 
              className="text-center mb-3"
              style={{
                fontFamily: 'var(--font-poppins), Poppins, sans-serif',
                fontWeight: 600,
                fontSize: '20px',
                lineHeight: '28px',
                letterSpacing: '0%',
                color: '#572EEE',
              }}
            >
              Password Changed Successfully!
            </h2>

            {/* Description */}
            <p 
              className="text-center mb-6"
              style={{
                fontFamily: 'var(--font-poppins), Poppins, sans-serif',
                fontWeight: 400,
                fontSize: '14px',
                lineHeight: '20px',
                letterSpacing: '0%',
                color: '#6B7280',
              }}
            >
              Your password has been updated. You can now log in with your new credentials.
            </p>

            {/* Go to Login Button */}
            <Link href="/login">
              <button
                className="w-full text-white hover:opacity-90 transition-all duration-200 focus:outline-none focus:ring-2 focus:ring-[#572EEE] focus:ring-offset-2"
                style={{
                  height: '48px',
                  borderRadius: '8px',
                  backgroundColor: '#572EEE',
                  boxShadow: '0px 10px 15px 0px #0000001A, 0px 4px 6px 0px #0000001A',
                  fontFamily: 'var(--font-poppins), Poppins, sans-serif',
                  fontWeight: 500,
                  fontSize: '16px',
                  lineHeight: '100%',
                  letterSpacing: '0%',
                  textAlign: 'center',
                }}
              >
                Go to Login
              </button>
            </Link>
          </div>
        </div>
      )}
    </>
  );
}

