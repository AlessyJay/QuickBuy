import { ShoppingBag } from "lucide-react";
import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <footer className="border-t bg-gray-100">
      <div className="flex justify-center">
        <div className="container px-4 py-12 md:px-6">
          <div className="grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-4">
            <div className="space-y-4">
              <Link to="/" className="flex items-center space-x-2">
                <ShoppingBag className="h-6 w-6 text-orange-500" />
                <span className="text-lg font-bold text-orange-500">
                  QuickBuy
                </span>
              </Link>
              <p className="text-sm text-gray-500">
                Experience luxury shopping at your fingertips. QuickBuy brings
                you the latest trends with unmatched convenience.
              </p>
            </div>
            <div>
              <h3 className="mb-4 text-lg font-semibold">Services</h3>
              <ul className="space-y-2">
                <li>
                  <Link
                    to="#"
                    className="text-sm text-gray-600 hover:text-orange-500"
                  >
                    Delivery
                  </Link>
                </li>
                <li>
                  <Link
                    to="#"
                    className="text-sm text-gray-600 hover:text-orange-500"
                  >
                    Returns & Exchanges
                  </Link>
                </li>
                <li>
                  <Link
                    to="#"
                    className="text-sm text-gray-600 hover:text-orange-500"
                  >
                    Payment Options
                  </Link>
                </li>
                <li>
                  <Link
                    to="#"
                    className="text-sm text-gray-600 hover:text-orange-500"
                  >
                    Gift Wrapping
                  </Link>
                </li>
              </ul>
            </div>
            <div>
              <h3 className="mb-4 text-lg font-semibold">About QuickBuy</h3>
              <ul className="space-y-2">
                <li>
                  <Link
                    to="#"
                    className="text-sm text-gray-600 hover:text-orange-500"
                  >
                    Our Story
                  </Link>
                </li>
                <li>
                  <Link
                    to="#"
                    className="text-sm text-gray-600 hover:text-orange-500"
                  >
                    Careers
                  </Link>
                </li>
                <li>
                  <Link
                    to="#"
                    className="text-sm text-gray-600 hover:text-orange-500"
                  >
                    Sustainability
                  </Link>
                </li>
                <li>
                  <Link
                    to="#"
                    className="text-sm text-gray-600 hover:text-orange-500"
                  >
                    Press
                  </Link>
                </li>
              </ul>
            </div>
            <div>
              <h3 className="mb-4 text-lg font-semibold">Connect</h3>
              <ul className="space-y-2">
                <li>
                  <Link
                    to="#"
                    className="text-sm text-gray-600 hover:text-orange-500"
                  >
                    Contact Us
                  </Link>
                </li>
                <li>
                  <Link
                    to="#"
                    className="text-sm text-gray-600 hover:text-orange-500"
                  >
                    FAQ
                  </Link>
                </li>
                <li>
                  <Link
                    to="#"
                    className="text-sm text-gray-600 hover:text-orange-500"
                  >
                    Store Locator
                  </Link>
                </li>
                <li>
                  <Link
                    to="#"
                    className="text-sm text-gray-600 hover:text-orange-500"
                  >
                    Request a Catalog
                  </Link>
                </li>
              </ul>
            </div>
          </div>
          <div className="mt-8 border-t border-gray-200 pt-8">
            <div className="flex flex-col items-center justify-between md:flex-row">
              <p className="text-sm text-gray-500">
                © 2024 QuickBuy. All rights reserved.
              </p>
              <nav className="mt-4 flex gap-4 md:mt-0">
                <Link
                  className="text-sm text-gray-600 hover:text-orange-500"
                  to="#"
                >
                  Terms of Service
                </Link>
                <Link
                  className="text-sm text-gray-600 hover:text-orange-500"
                  to="#"
                >
                  Privacy Policy
                </Link>
                <Link
                  className="text-sm text-gray-600 hover:text-orange-500"
                  to="#"
                >
                  Accessibility
                </Link>
              </nav>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
