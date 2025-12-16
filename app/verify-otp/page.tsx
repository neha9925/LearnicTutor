"use client";

import React, { useState, useRef, useEffect, Suspense } from "react";
import Image from "next/image";
import Link from "next/link";
import { useSearchParams, useRouter } from "next/navigation";
import { X, Check } from "lucide-react";

function VerifyOtpContent() {
  const searchParams = useSearchParams();
  const router = useRouter();
  const type = searchParams.get("type") || "signup"; // "signup" or "forgot"
  
  const [otp, setOtp] = useState(["", "", "", "", "", ""]);
  const [timer, setTimer] = useState(27);
  const [isResendDisabled, setIsResendDisabled] = useState(true);
  const [showSuccessModal, setShowSuccessModal] = useState(false);
  const inputRefs = useRef<(HTMLInputElement | null)[]>([]);

  // Preload background image
  useEffect(() => {
    const link = document.createElement('link');
    link.rel = 'preload';
    link.as = 'image';
    link.href = '/images/banners/VerifyOTP.svg';
    link.setAttribute('fetchpriority', 'high');
    document.head.appendChild(link);

    // Preload the image using native browser Image constructor
    const img = new window.Image();
    img.src = '/images/banners/VerifyOTP.svg';

    return () => {
      if (document.head.contains(link)) {
        document.head.removeChild(link);
      }
    };
  }, []);

  useEffect(() => {
    if (timer > 0) {
      const interval = setInterval(() => {
        setTimer((prev) => {
          if (prev <= 1) {
            setIsResendDisabled(false);
            return 0;
          }
          return prev - 1;
        });
      }, 1000);
      return () => clearInterval(interval);
    } else {
      setIsResendDisabled(false);
    }
  }, [timer]);

  const handleOtpChange = (index: number, value: string) => {
    if (value.length > 1) return;
    
    const newOtp = [...otp];
    newOtp[index] = value;
    setOtp(newOtp);

    // Auto-focus next input
    if (value && index < 5) {
      inputRefs.current[index + 1]?.focus();
    }
  };

  const handleKeyDown = (index: number, e: React.KeyboardEvent<HTMLInputElement>) => {
    if (e.key === "Backspace" && !otp[index] && index > 0) {
      inputRefs.current[index - 1]?.focus();
    }
  };

  const handlePaste = (e: React.ClipboardEvent) => {
    e.preventDefault();
    const pastedData = e.clipboardData.getData("text").slice(0, 6);
    const newOtp = [...otp];
    pastedData.split("").forEach((char, index) => {
      if (index < 6) {
        newOtp[index] = char;
      }
    });
    setOtp(newOtp);
    inputRefs.current[Math.min(pastedData.length - 1, 5)]?.focus();
  };

  const handleResend = () => {
    setTimer(27);
    setIsResendDisabled(true);
    setOtp(["", "", "", "", "", ""]);
    inputRefs.current[0]?.focus();
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const otpCode = otp.join("");
    if (otpCode.length === 6) {
      // Handle OTP verification
      // On success, show modal
      setShowSuccessModal(true);
    }
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
        `
      }} />
      <div className="min-h-screen relative flex items-center justify-center p-3 sm:p-4 md:p-6 lg:p-8 xl:p-12">
        {/* Background Image */}
        <div 
          className="fixed top-0 left-0 right-0 bottom-0 z-0"
          style={{
            backgroundImage: "url('/images/banners/VerifyOTP.svg')",
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

        {/* Verify OTP Form Card */}
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
              Verify Your Account
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
              {type === "forgot" 
                ? "We've sent a 6-digit verification code to your registered email to reset your password."
                : "We've sent a 6-digit verification code to your registered email."}
            </p>
          </div>

          {/* Form */}
          <form onSubmit={handleSubmit} className="space-y-4">
            {/* OTP Input Fields */}
            <div className="flex justify-center gap-2 sm:gap-3 mb-4">
              {otp.map((digit, index) => (
                <input
                  key={index}
                  ref={(el) => { inputRefs.current[index] = el; }}
                  type="text"
                  inputMode="numeric"
                  maxLength={1}
                  value={digit}
                  onChange={(e) => handleOtpChange(index, e.target.value)}
                  onKeyDown={(e) => handleKeyDown(index, e)}
                  onPaste={handlePaste}
                  className="w-12 h-12 sm:w-14 sm:h-14 text-center text-lg sm:text-xl font-semibold rounded-lg border-2 border-gray-300 focus:outline-none focus:border-[#5636FF] focus:ring-1 focus:ring-[#5636FF] transition-all"
                  style={{
                    fontFamily: 'var(--font-poppins), Poppins, sans-serif',
                  }}
                />
              ))}
            </div>

            {/* Resend OTP */}
            <div className="text-center mb-4">
              <p 
                className="text-gray-500"
                style={{
                  fontFamily: 'var(--font-poppins), Poppins, sans-serif',
                  fontWeight: 400,
                  fontSize: 'clamp(12px, 3vw, 14px)',
                  lineHeight: 'clamp(18px, 3vw, 20px)',
                  letterSpacing: '0%',
                }}
              >
                Didn&apos;t receive the code?{" "}
                {isResendDisabled ? (
                  <span className="text-gray-400">
                    Resend OTP (in {timer}s)
                  </span>
                ) : (
                  <button
                    type="button"
                    onClick={handleResend}
                    className="text-[#5636FF] hover:underline font-medium"
                    style={{
                      fontFamily: 'var(--font-poppins), Poppins, sans-serif',
                    }}
                  >
                    Resend OTP
                  </button>
                )}
              </p>
            </div>

            {/* Verify Button */}
            <button
              type="submit"
              className="text-white hover:opacity-90 transition-all duration-200 focus:outline-none focus:ring-2 focus:ring-[#572EEE] focus:ring-offset-2 w-full sm:w-auto sm:max-w-[382px] mx-auto block"
              style={{
                width: '100%',
                maxWidth: '382px',
                height: '48px',
                borderRadius: '8px',
                backgroundColor: '#572EEE',
                opacity: 1,
                boxShadow: '0px 10px 15px 0px #0000001A, 0px 4px 6px 0px #0000001A',
                fontFamily: 'var(--font-poppins), Poppins, sans-serif',
                fontWeight: 500,
                fontSize: 'clamp(14px, 3.5vw, 16px)',
                lineHeight: '100%',
                letterSpacing: '0%',
                textAlign: 'center',
              }}
            >
              Verify
            </button>
          </form>
        </div>
      </div>

      {/* Success Modal - For Signup */}
      {showSuccessModal && type === "signup" && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4">
          {/* Backdrop */}
          <div 
            className="absolute inset-0 bg-gray-500/50 backdrop-blur-sm"
            onClick={() => setShowSuccessModal(false)}
          />
          
          {/* Modal Card */}
          <div 
            className="relative z-10 bg-white rounded-2xl shadow-2xl w-full max-w-[420px] p-4 sm:p-6 md:p-8"
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
            <div className="flex justify-center mb-4 sm:mb-5">
              <div className="relative">
                <div 
                  className="w-16 h-16 sm:w-20 sm:h-20 rounded-full flex items-center justify-center"
                  style={{ backgroundColor: '#E9D5FF' }}
                >
                  <div 
                    className="w-12 h-12 sm:w-14 sm:h-14 rounded-full flex items-center justify-center"
                    style={{ backgroundColor: '#572EEE' }}
                  >
                    <Check className="w-6 h-6 sm:w-7 sm:h-7 text-white" strokeWidth={3} />
                  </div>
                </div>
              </div>
            </div>

            {/* Heading */}
            <h2 
              className="text-center mb-3 text-lg sm:text-xl"
              style={{
                fontFamily: 'var(--font-poppins), Poppins, sans-serif',
                fontWeight: 600,
                fontSize: 'clamp(18px, 4.5vw, 20px)',
                lineHeight: 'clamp(26px, 4.5vw, 28px)',
                letterSpacing: '0%',
                color: '#111827',
              }}
            >
              Account Created<br />Successfully!
            </h2>

            {/* Description */}
            <p 
              className="text-center mb-6 text-sm sm:text-base"
              style={{
                fontFamily: 'var(--font-poppins), Poppins, sans-serif',
                fontWeight: 400,
                fontSize: 'clamp(12px, 3vw, 14px)',
                lineHeight: 'clamp(18px, 3vw, 20px)',
                letterSpacing: '0%',
                color: '#6B7280',
              }}
            >
              Welcome to Learnic - your journey to smarter learning begins now.
            </p>

            {/* Go to Dashboard Button */}
            <div className="flex justify-center mb-4">
              <Link href="/dashboard" className="w-full sm:w-auto">
                <button
                  className="text-white hover:opacity-90 transition-all duration-200 focus:outline-none focus:ring-2 focus:ring-[#572EEE] focus:ring-offset-2 w-full sm:w-[368px] text-sm sm:text-base"
                  style={{
                    height: '56px',
                    borderRadius: '12px',
                    backgroundColor: '#572EEE',
                    opacity: 1,
                    boxShadow: '0px 10px 15px 0px #0000001A, 0px 4px 6px 0px #0000001A',
                    fontFamily: 'var(--font-poppins), Poppins, sans-serif',
                    fontWeight: 500,
                    fontSize: 'clamp(14px, 3.5vw, 16px)',
                    lineHeight: '100%',
                    letterSpacing: '0%',
                    textAlign: 'center',
                  }}
                >
                  Go to Dashboard
                </button>
              </Link>
            </div>

            {/* Explore Courses Link */}
            <div className="text-center">
              <Link 
                href="/courses"
                className="hover:underline transition-all duration-200 inline-block text-xs sm:text-sm"
                style={{
                  fontFamily: 'var(--font-poppins), Poppins, sans-serif',
                  fontWeight: 500,
                  fontSize: 'clamp(12px, 3vw, 14px)',
                  lineHeight: '100%',
                  letterSpacing: '0%',
                  textAlign: 'center',
                  color: '#572EEE',
                }}
              >
                Explore Courses
              </Link>
            </div>
          </div>
        </div>
      )}

      {/* Success Modal - For Forgot Password */}
      {showSuccessModal && type === "forgot" && (
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
              Email Verified Successfully!
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
              Your email has been verified. You can now reset your password.
            </p>

            {/* Go to Change Password Button */}
            <Link href="/change-password">
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
                Change Password
              </button>
            </Link>
          </div>
        </div>
      )}
    </>
  );
}

export default function VerifyOtpPage() {
  return (
    <Suspense fallback={
      <div className="min-h-screen flex items-center justify-center">
        <div className="text-center">
          <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-[#572EEE] mx-auto mb-4"></div>
          <p style={{
            fontFamily: 'var(--font-poppins), Poppins, sans-serif',
            color: '#6B7280',
          }}>Loading...</p>
        </div>
      </div>
    }>
      <VerifyOtpContent />
    </Suspense>
  );
}

