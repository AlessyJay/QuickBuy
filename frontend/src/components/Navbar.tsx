import { useState } from "react";
import { Link } from "react-router-dom";
import { ShoppingBag, Search, User } from "lucide-react";
import ShoppingCart from "./ShoppingCart";
import SearchBox from "./SearchBox";

export default function Navbar() {
  const [isOpen, setIsOpen] = useState<boolean>(false);
  const [isSearchOpen, setIsSearchOpen] = useState<boolean>(false);

  return (
    <header className="sticky top-0 z-50 w-full border-b bg-white/80 backdrop-blur-sm">
      <div className="flex justify-center">
        <div className="flex h-16 w-2/4 items-center justify-between max-sm:w-4/5">
          <div className="flex items-center space-x-4">
            <Link to="/" className="flex items-center space-x-2">
              <ShoppingBag className="h-6 w-6 text-orange-500" />
              <span className="text-2xl font-bold text-orange-500">
                QuickBuy
              </span>
            </Link>
          </div>
          <nav className="hidden items-center space-x-6 text-sm font-medium md:flex">
            <Link
              to="/women"
              className="text-foreground/60 hover:text-foreground transition-colors"
            >
              Women
            </Link>
            <Link
              to="/men"
              className="text-foreground/60 hover:text-foreground transition-colors"
            >
              Men
            </Link>
            <Link
              to="/accessories"
              className="text-foreground/60 hover:text-foreground transition-colors"
            >
              Accessories
            </Link>
            <Link
              to="/sales"
              className="text-foreground/60 hover:text-foreground transition-colors"
            >
              Sale
            </Link>
            <Link
              to="/gifts"
              className="text-foreground/60 hover:text-foreground transition-colors"
            >
              Gifts
            </Link>
          </nav>
          <div className="relative flex items-center space-x-4">
            <button onClick={() => setIsSearchOpen(!isSearchOpen)}>
              <Search className="size-5" />
              <span className="sr-only">Search</span>
            </button>
            <Link to="profile">
              <User className="size-5" />
              <span className="sr-only">Account</span>
            </Link>
            <button onClick={() => setIsOpen(!isOpen)}>
              <ShoppingBag className="h-5 w-5" />
              <span className="sr-only">Cart</span>
            </button>
            {isSearchOpen && <SearchBox />}
          </div>
        </div>
      </div>
      {isOpen && <ShoppingCart isOpen={isOpen} setIsOpen={setIsOpen} />}
    </header>
  );
}
