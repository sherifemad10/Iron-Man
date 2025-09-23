import React, { useState } from "react";
import { Button } from "@/components/ui/button";
import { ShoppingCart, Menu, X } from "lucide-react";
import { Link } from "react-router-dom";
import { useCart } from "@/hooks/useCart";
import logo from "@/assets/logo.jpg";

export const Header: React.FC = () => {
  const { items } = useCart();
  const itemCount = items.reduce((sum, item) => sum + item.quantity, 0);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  const closeMobileMenu = () => {
    setIsMobileMenuOpen(false);
  };

  return (
    <header className="sticky top-0 z-50 bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60 border-b border-border">
      <div className="container mx-auto px-3 sm:px-4 h-14 sm:h-16 flex items-center justify-between">
        {/* Logo */}
        <div className="flex justify-start items-center gap-1 sm:gap-2">
          <img
            src={logo}
            alt="Iron Man"
            className="w-8 h-8 sm:w-10 sm:h-10 rounded-full object-cover"
          />
          <Link
            to="/"
            className="text-lg sm:text-xl md:text-2xl font-bold text-fitness-blue"
            onClick={closeMobileMenu}
          >
            Iron Man
          </Link>
        </div>

        {/* Desktop Navigation */}
        <nav className="hidden md:flex items-center space-x-6 space-x-reverse">
          <Link
            to="/"
            className="text-foreground hover:text-fitness-blue transition-colors text-sm lg:text-base"
          >
            الرئيسية
          </Link>
          <Link
            to="/products"
            className="text-foreground hover:text-fitness-blue transition-colors text-sm lg:text-base"
          >
            المنتجات
          </Link>
          <Link
            to="/contact"
            className="text-foreground hover:text-fitness-blue transition-colors text-sm lg:text-base"
          >
            اتصل بنا
          </Link>
        </nav>

        {/* Right Side Actions */}
        <div className="flex items-center space-x-2 sm:space-x-4">
          <Link to="/cart" className="relative" onClick={closeMobileMenu}>
            <Button
              variant="ghost"
              size="icon"
              className="hover:bg-secondary h-9 w-9 sm:h-10 sm:w-10"
            >
              <ShoppingCart className="h-4 w-4 sm:h-5 sm:w-5" />
              {itemCount > 0 && (
                <span className="absolute -top-1 -right-1 sm:-top-2 sm:-right-2 bg-fitness-red text-white text-xs rounded-full h-4 w-4 sm:h-5 sm:w-5 flex items-center justify-center font-bold">
                  {itemCount > 99 ? "99+" : itemCount}
                </span>
              )}
            </Button>
          </Link>

          {/* Mobile Menu Button */}
          <Button
            variant="ghost"
            size="icon"
            className="md:hidden hover:bg-secondary h-9 w-9 sm:h-10 sm:w-10"
            onClick={toggleMobileMenu}
          >
            {isMobileMenuOpen ? (
              <X className="h-4 w-4 sm:h-5 sm:w-5" />
            ) : (
              <Menu className="h-4 w-4 sm:h-5 sm:w-5" />
            )}
          </Button>
        </div>
      </div>

      {/* Mobile Menu */}
      {isMobileMenuOpen && (
        <div className="md:hidden bg-background/95 backdrop-blur border-b border-border">
          <nav className="container mx-auto px-3 sm:px-4 py-4 space-y-3">
            <Link
              to="/"
              className="block text-foreground hover:text-fitness-blue transition-colors text-base py-2"
              onClick={closeMobileMenu}
            >
              الرئيسية
            </Link>
            <Link
              to="/products"
              className="block text-foreground hover:text-fitness-blue transition-colors text-base py-2"
              onClick={closeMobileMenu}
            >
              المنتجات
            </Link>
            <Link
              to="/contact"
              className="block text-foreground hover:text-fitness-blue transition-colors text-base py-2"
              onClick={closeMobileMenu}
            >
              اتصل بنا
            </Link>
          </nav>
        </div>
      )}
    </header>
  );
};
