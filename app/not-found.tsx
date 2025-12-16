import Link from "next/link";
import Button from "@/components/ui/Button";
import { Home } from "lucide-react";

export default function NotFound() {
  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-50 px-4">
      <div className="max-w-md w-full text-center" style={{ fontFamily: "var(--font-poppins), sans-serif" }}>
        <div className="mb-6">
          <h1 className="text-9xl font-bold text-primary-600 mb-2">404</h1>
          <h2 className="text-3xl font-bold text-gray-900 mb-4" style={{ fontFamily: "var(--font-poppins), sans-serif" }}>
            Page Not Found
          </h2>
          <p className="text-gray-600 mb-8" style={{ fontFamily: "var(--font-poppins), sans-serif" }}>
            The page you are looking for doesn&apos;t exist or has been moved.
          </p>
        </div>

        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <Link href="/">
            <Button className="flex items-center justify-center gap-2 w-full sm:w-auto">
              <Home className="h-4 w-4" />
              Go Home
            </Button>
          </Link>
        </div>

        <div className="mt-8 pt-8 border-t border-gray-200">
          <p className="text-sm text-gray-500 mb-4">Popular Pages:</p>
          <div className="flex flex-wrap justify-center gap-4">
            <Link href="/courses" className="text-primary-600 hover:text-primary-700 text-sm" style={{ fontFamily: "var(--font-poppins), sans-serif" }}>
              Courses
            </Link>
            <Link href="/videos" className="text-primary-600 hover:text-primary-700 text-sm" style={{ fontFamily: "var(--font-poppins), sans-serif" }}>
              Videos
            </Link>
            <Link href="/live-classes" className="text-primary-600 hover:text-primary-700 text-sm" style={{ fontFamily: "var(--font-poppins), sans-serif" }}>
              Live Classes
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}

