import { Link } from "react-router-dom";
import { ShoppingBag, Search, User } from "lucide-react";

export default function Navbar() {
  return (
    <header className="sticky top-0 z-50 w-full border-b bg-white/80 backdrop-blur-sm">
      <div className="flex justify-center">
        <div className="w-2/4 flex h-16 items-center justify-between max-sm:w-4/5">
          <div className="flex items-center space-x-4">
            <Link to="/" className="flex items-center space-x-2">
              <ShoppingBag className="h-6 w-6 text-orange-500" />
              <span className="text-2xl font-bold text-orange-500">
                QuickBuy
              </span>
            </Link>
          </div>
          <nav className="hidden md:flex items-center space-x-6 text-sm font-medium">
            <Link
              to="/"
              className="text-foreground/60 transition-colors hover:text-foreground"
            >
              Women
            </Link>
            <Link
              to="/men"
              className="text-foreground/60 transition-colors hover:text-foreground"
            >
              Men
            </Link>
            <Link
              to="/accessories"
              className="text-foreground/60 transition-colors hover:text-foreground"
            >
              Accessories
            </Link>
            <Link
              to="/sale"
              className="text-foreground/60 transition-colors hover:text-foreground"
            >
              Sale
            </Link>
          </nav>
          <div className="flex items-center space-x-4">
            <button>
              <Search className="size-5" />
              <span className="sr-only">Search</span>
            </button>
            <button>
              <User className="size-5" />
              <span className="sr-only">Account</span>
            </button>
            <button>
              <ShoppingBag className="h-5 w-5" />
              <span className="sr-only">Cart</span>
            </button>
          </div>
        </div>
      </div>
    </header>
  );
}
