import React from 'react';
import { Button } from '@/components/ui/button';
import { ArrowRight, Zap, Shield, Award } from 'lucide-react';
import { Link } from 'react-router-dom';
import heroImage from '@/assets/logo2.jpeg';
// import heroImage from '@/assets/hero-supplement.png';



export const Hero: React.FC = () => {
  return (
    <section className="relative min-h-screen bg-gradient-hero overflow-hidden">
      {/* Background Elements */}
      <div className="absolute inset-0 bg-gradient-to-br from-fitness-navy/80 to-fitness-dark/90" />
      
      <div className="container mx-auto px-4 relative z-10">
        <div className="grid lg:grid-cols-2 gap-12 items-center min-h-screen py-20">
          {/* Content */}
          <div className="space-y-8">
            <div className="space-y-4">
              <div className="inline-flex items-center px-3 py-1 rounded-full bg-fitness-blue/20 border border-fitness-blue/30 text-fitness-blue text-sm font-medium">
                <Zap className="ml-2 h-4 w-4" />
                مكملات غذائية عالية الجودة
              </div>
              
              <h1 className="text-5xl lg:text-6xl xl:text-7xl font-bold text-white leading-tight">
                قوّي
                <span className="block text-fitness-blue">
                  تمرينك
                </span>
              </h1>
              
              <p className="text-xl lg:text-2xl text-gray-300 max-w-2xl">
                مكملات غذائية متميزة للرياضيين المحترفين وعشاق اللياقة البدنية. 
                حقق أهدافك مع تركيباتنا المدعومة علمياً.
              </p>
            </div>
            
            <div className="flex flex-col sm:flex-row gap-4">
              <Button
                asChild
                size="lg"
                className="bg-gradient-button hover:shadow-glow transition-all duration-300 text-lg px-8 py-6 h-auto"
              >
                <Link to="/products">
                  تسوق الآن
                  <ArrowRight className="mr-2 h-5 w-5 scale-x-[-1]" />
                </Link>
              </Button>
              
              <Button
                variant="outline"
                size="lg"
                className="border-white text-white hover:bg-white hover:text-fitness-navy transition-all duration-300 text-lg px-8 py-6 h-auto"
                asChild
              >
                <Link to="/contact">
                  اتصل بنا
                </Link>
              </Button>
            </div>
            
            {/* Features */}
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 mt-12">
              <div className="flex items-center space-x-3 space-x-reverse text-white">
                <Shield className="h-8 w-8 text-fitness-blue" />
                <div>
                  <p className="font-semibold">مختبر معملياً</p>
                  <p className="text-sm text-gray-300">جودة مضمونة</p>
                </div>
              </div>
              
              <div className="flex items-center space-x-3 space-x-reverse text-white">
                <Award className="h-8 w-8 text-fitness-blue" />
                <div>
                  <p className="font-semibold">درجة متميزة</p>
                  <p className="text-sm text-gray-300">مكونات عالية الجودة</p>
                </div>
              </div>
              
              <div className="flex items-center space-x-3 space-x-reverse text-white">
                <Zap className="h-8 w-8 text-fitness-blue" />
                <div>
                  <p className="font-semibold">نتائج سريعة</p>
                  <p className="text-sm text-gray-300">تركيبات مثبتة</p>
                </div>
              </div>
            </div>
          </div>
          
          {/* Image */}
          <div className="relative">
            <div className="relative z-10">
              <img
                src={heroImage}
                alt="Premium Supplements"
                className="w-full max-w-lg mx-auto drop-shadow-2xl rounded-xl"
              />
            </div>
            
            {/* Glowing effect */}
            <div className="absolute inset-0 bg-fitness-blue/30 rounded-full blur-3xl scale-75 opacity-60" />
          </div>
        </div>
      </div>
      
      {/* Scroll indicator */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 text-white animate-bounce">
        <div className="w-6 h-10 border-2 border-white rounded-full flex justify-center">
          <div className="w-1 h-3 bg-white rounded-full mt-2 animate-pulse" />
        </div>
      </div>
    </section>
  );
};
