import React from 'react';
import { Button } from '@/components/ui/button';
import { ShoppingCart, Menu } from 'lucide-react';
import { Link } from 'react-router-dom';
import { useCart } from '@/hooks/useCart';
import logo from '@/assets/logo.jpg'

export const Header: React.FC = () => {
  const { items } = useCart();
  const itemCount = items.reduce((sum, item) => sum + item.quantity, 0);

  return (
    <header className="sticky top-0 z-50 bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60 border-b border-border">
      <div className="container mx-auto px-4 h-16 flex items-center justify-between">
        {/* logo */}
        <div className='flex justify-start items-center gap-2'>
          <img src={logo} alt='Iron Man' className='w-[40px] h-[40px] rounded-full'/>
          <Link to="/" className="text-2xl font-bold text-fitness-blue">
           Iron Man 
        </Link>
        </div>
        
        
        <nav className="hidden md:flex items-center space-x-6 space-x-reverse">
          <Link to="/" className="text-foreground hover:text-fitness-blue transition-colors">
            الرئيسية
          </Link>
          <Link to="/products" className="text-foreground hover:text-fitness-blue transition-colors">
            المنتجات
          </Link>
          <Link to="/contact" className="text-foreground hover:text-fitness-blue transition-colors">
            اتصل بنا
          </Link>
        </nav>

        <div className="flex items-center space-x-4">
          <Link to="/cart" className="relative">
            <Button variant="ghost" size="icon" className="hover:bg-secondary">
              <ShoppingCart className="h-5 w-5" />
              {itemCount > 0 && (
                <span className="absolute -top-2 -right-2 bg-fitness-red text-white text-xs rounded-full h-5 w-5 flex items-center justify-center">
                  {itemCount}
                </span>
              )}
            </Button>
          </Link>
          
          <Button variant="ghost" size="icon" className="md:hidden hover:bg-secondary">
            <Menu className="h-5 w-5" />
          </Button>
        </div>
      </div>
    </header>
  );
};