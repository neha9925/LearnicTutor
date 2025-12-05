"use client";

import React, { useState } from "react";
import Link from "next/link";
import { GraduationCap, MessageCircle, Network } from "lucide-react";
import { useRouter } from "next/navigation";

export default function GetStartedPage() {
  const router = useRouter();
  const [selectedRole, setSelectedRole] = useState<"student" | "tutor" | "coordinator">("student");

  const handleContinue = () => {
    // Store selected role in localStorage
    if (typeof window !== "undefined") {
      localStorage.setItem("selectedRole", selectedRole);
    }
    // Navigate to homepage
    router.push("/");
  };

  const roles = [
    {
      id: "student" as const,
      title: "I'm a Student",
      description: "Access learning materials, mentorship, and tools to enhance your learning journey.",
      icon: GraduationCap,
    },
    {
      id: "tutor" as const,
      title: "I'm a Tutor",
      description: "Share your expertise and connect with learners to make a meaningful impact.",
      icon: MessageCircle,
    },
    {
      id: "coordinator" as const,
      title: "I'm a Coordinator",
      description: "Connect students with tutors, and track progress for every learner.",
      icon: Network,
    },
  ];

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
      <div 
        className="min-h-screen flex items-center justify-center p-4 sm:p-6 md:p-8"
        style={{
          background: "#0F0F0F",
          position: "relative",
          overflow: "hidden",
        }}
      >
        {/* Background Bubbles - Top Center (slightly right) */}
        <div 
          className="absolute"
          style={{
            top: "-350px",
            left: "50%",
            transform: "translateX(-20%)",
            width: "900px",
            height: "900px",
            borderRadius: "50%",
            background: "rgba(25, 25, 25, 0.4)",
            filter: "blur(120px)",
            opacity: 0.5,
          }}
        />

        {/* Background Bubbles - Bottom Left */}
        <div 
          className="absolute"
          style={{
            bottom: "-250px",
            left: "-200px",
            width: "600px",
            height: "600px",
            borderRadius: "50%",
            background: "rgba(25, 25, 25, 0.4)",
            filter: "blur(120px)",
            opacity: 0.5,
          }}
        />

        {/* Modal Container */}
        <div 
          className="relative z-10 bg-white rounded-3xl shadow-2xl w-full max-w-4xl"
          style={{
            padding: "56px 48px",
            boxShadow: "0px 25px 50px rgba(0, 0, 0, 0.4)",
          }}
        >
          {/* Header */}
          <div className="text-center mb-10">
            <h1 
              className="mb-4"
              style={{
                fontFamily: "var(--font-poppins), Poppins, sans-serif",
                fontWeight: 700,
                fontSize: "32px",
                lineHeight: "40px",
                color: "#572EEE",
                textAlign: "center",
              }}
            >
              Let&apos;s Get You Started!
            </h1>
            <p 
              style={{
                fontFamily: "var(--font-poppins), Poppins, sans-serif",
                fontWeight: 400,
                fontSize: "16px",
                lineHeight: "24px",
                color: "#6B7280",
                textAlign: "center",
              }}
            >
              Tell us who you are to personalize your learning experience.
            </p>
          </div>

          {/* Role Selection Cards */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-5 mb-10">
            {roles.map((role) => {
              const Icon = role.icon;
              const isSelected = selectedRole === role.id;
              
              return (
                <button
                  key={role.id}
                  type="button"
                  onClick={() => setSelectedRole(role.id)}
                  className="p-6 rounded-2xl transition-all hover:shadow-lg flex flex-col items-center text-center"
                  style={{
                    backgroundColor: "#FAF5FF",
                    border: isSelected ? "2px solid #572EEE" : "1px solid #E5E7EB",
                    cursor: "pointer",
                    minHeight: "200px",
                  }}
                >
                  {/* Icon */}
                  <div 
                    className="mb-5 flex items-center justify-center rounded-full"
                    style={{
                      width: "44px",
                      height: "44px",
                      background: "linear-gradient(90deg, #6366F1 0%, #8B5CF6 100%)",
                    }}
                  >
                    <Icon 
                      size={22}
                      style={{
                        color: "#FFFFFF",
                      }}
                    />
                  </div>

                  {/* Title */}
                  <h3 
                    className="mb-3"
                    style={{
                      fontFamily: "var(--font-poppins), Poppins, sans-serif",
                      fontWeight: 600,
                      fontSize: "18px",
                      lineHeight: "24px",
                      color: "#1F2937",
                      textAlign: "center",
                    }}
                  >
                    {role.title}
                  </h3>

                  {/* Description */}
                  <p 
                    style={{
                      fontFamily: "var(--font-poppins), Poppins, sans-serif",
                      fontWeight: 400,
                      fontSize: "14px",
                      lineHeight: "20px",
                      color: "#6B7280",
                      textAlign: "center",
                    }}
                  >
                    {role.description}
                  </p>
                </button>
              );
            })}
          </div>

          {/* Continue Button */}
          <button
            type="button"
            onClick={handleContinue}
            className="w-full py-4 rounded-xl text-white transition-all hover:opacity-90 focus:outline-none focus:ring-2 focus:ring-[#572EEE] focus:ring-offset-2"
            style={{
              backgroundColor: "#572EEE",
              fontFamily: "var(--font-poppins), Poppins, sans-serif",
              fontWeight: 600,
              fontSize: "16px",
              lineHeight: "24px",
              marginBottom: "32px",
            }}
          >
            Continue
          </button>

          {/* Footer Link */}
          <div className="text-center">
            <p 
              style={{
                fontFamily: "var(--font-poppins), Poppins, sans-serif",
                fontWeight: 400,
                fontSize: "14px",
                lineHeight: "20px",
                color: "#6B7280",
                marginBottom: "4px",
              }}
            >
              Already have an account?
            </p>
            <Link 
              href="/login"
              style={{
                color: "#572EEE",
                fontWeight: 500,
                fontSize: "14px",
                lineHeight: "20px",
                textDecoration: "none",
                fontFamily: "var(--font-poppins), Poppins, sans-serif",
              }}
              className="hover:underline"
            >
              Log in
            </Link>
          </div>
        </div>
      </div>
    </>
  );
}

