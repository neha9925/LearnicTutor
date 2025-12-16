"use client";

import { useEffect, useState } from "react";
import { useRouter } from "next/navigation";
import HomePage from "@/components/pages/HomePage";

export default function Home() {
  const router = useRouter();
  const [isChecking, setIsChecking] = useState(true);

  useEffect(() => {
    // Check if user has selected a role
    const selectedRole = localStorage.getItem("selectedRole");
    // If no role selected, redirect to get-started
    if (!selectedRole) {
      router.push("/get-started");
    } else {
      setIsChecking(false);
    }
  }, [router]);

  // Show nothing while checking or redirecting
  if (isChecking) {
    return null;
  }

  return <HomePage />;
}

