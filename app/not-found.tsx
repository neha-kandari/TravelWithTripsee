import Link from 'next/link';
import Image from 'next/image';

export default function NotFound() {
  return (
    <div className="min-h-screen bg-gray-50 flex flex-col items-center justify-center px-4">
      <div className="text-center">
        <div className="mb-8">
          <Image
            src="/assets/logo.png"
            alt="Tripsee Logo"
            width={120}
            height={120}
            className="mx-auto"
            priority
          />
        </div>
        
        <h1 className="text-6xl font-bold text-gray-900 mb-4">404</h1>
        <h2 className="text-2xl font-semibold text-gray-700 mb-4">Page Not Found</h2>
        <p className="text-gray-600 mb-8 max-w-md">
          Sorry, we couldn't find the page you're looking for. It might have been moved, deleted, or doesn't exist.
        </p>
        
        <div className="space-y-4">
          <Link
            href="/"
            className="inline-block bg-orange-600 text-white px-6 py-3 rounded-lg font-semibold hover:bg-orange-700 transition-colors duration-200"
          >
            Go Home
          </Link>
          
          <div className="text-sm text-gray-500">
            <Link href="/contact" className="hover:text-orange-600 transition-colors duration-200">
              Contact Support
            </Link>
            {' • '}
            <Link href="/admin/login" className="hover:text-orange-600 transition-colors duration-200">
              Admin Login
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}
