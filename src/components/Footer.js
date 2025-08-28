// components/Footer.js
import Link from 'next/link';

export function Footer() {
  return (
    <footer className="bg-gray-100 border-t border-gray-200">
      <div className="max-w-7xl mx-auto py-12 px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          <div>
            <h3 className="text-sm font-semibold text-gray-600 tracking-wider uppercase">About</h3>
            <p className="mt-4 text-base text-gray-500">
              Massage Chair Guide is dedicated to helping you navigate the complex world of massage chairs with expert advice, buying tips, and step-by-step guidance for making an informed purchase.
            </p>
          </div>
          <div>
            <h3 className="text-sm font-semibold text-gray-600 tracking-wider uppercase">Quick Links</h3>
            <ul className="mt-4 space-y-4">
              <li>
                <Link href="/" className="text-base text-gray-500 hover:text-gray-900">
                  Home
                </Link>
              </li>
              <li>
                <Link href="/resources" className="text-base text-gray-500 hover:text-gray-900">
                  Buying Guides
                </Link>
              </li>
              <li>
                <Link href="/posts" className="text-base text-gray-500 hover:text-gray-900">
                  How-To Articles
                </Link>
              </li>
            </ul>
          </div>
          <div>
            <h3 className="text-sm font-semibold text-gray-600 tracking-wider uppercase">Connect</h3>
            <ul className="mt-4 space-y-4">
              <li>
                <a href="https://www.massagechairreview.shop/" target="_blank" rel="noopener noreferrer" className="text-base text-gray-500 hover:text-gray-900">
                  Website
                </a>
              </li>
              <li>
                <a href="https://www.facebook.com/" target="_blank" rel="noopener noreferrer" className="text-base text-gray-500 hover:text-gray-900">
                  Facebook
                </a>
              </li>
              <li>
                <a href="https://twitter.com/" target="_blank" rel="noopener noreferrer" className="text-base text-gray-500 hover:text-gray-900">
                  Twitter
                </a>
              </li>
            </ul>
          </div>
          <div>
            <h3 className="text-sm font-semibold text-gray-600 tracking-wider uppercase">Legal</h3>
            <ul className="mt-4 space-y-4">
              <li>
                <Link href="/privacy-policy" className="text-base text-gray-500 hover:text-gray-900">
                  Privacy Policy
                </Link>
              </li>
              <li>
                <Link href="/terms-of-service" className="text-base text-gray-500 hover:text-gray-900">
                  Terms of Service
                </Link>
              </li>
              <li>
                <Link href="/contact" className="text-base text-gray-500 hover:text-gray-900">
                  Contact Us
                </Link>
              </li>
            </ul>
          </div>
        </div>
        <div className="mt-8 border-t border-gray-200 pt-8">
          <p className="text-base text-gray-400 text-center">
            &copy; {new Date().getFullYear()} Massage Chair Guide. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
}