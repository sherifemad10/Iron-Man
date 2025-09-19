import React from 'react';
import { Hero } from '@/components/Hero';
import { ProductCard } from '@/components/ProductCard';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import { Star, Users, Package, Truck } from 'lucide-react';
import { Link } from 'react-router-dom';
import { featuredProducts } from '@/data/products';

export const HomePage: React.FC = () => {
  const testimonials = [
    {
      name: ' محمد احمد',
      // role: 'لاعب كمال أجسام محترف',
      rating: 5,
      text: "خدمة ممتازة ومنتجات بجودة عالية، فعلاً فرق واضح في الأداء والطاقة!",
      avatar: '💪'
    },
    {
      name: ' مازن على',
      // role: 'عاشقة اللياقة البدنية',
      rating: 5,
      text: "أفضل شركة مكملات تعاملت معها، اهتمام بالتفاصيل ورضا العملاء أولويتهم.",
      avatar: '🏋️‍♀️'
    },
    {
      name: 'كمال السيد',
      // role: 'رياضي كروس فيت',
      rating: 5,
      text: "كل تجربة شراء كانت سهلة وسريعة، أنتم الأفضل بلا منازع!",
      avatar: '🚴‍♂️'
    }
  ];

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <Hero />
      
      {/* About Section */}
      <section className="py-20 bg-card">
        <div className="container mx-auto px-4">
          <div className="text-center max-w-4xl mx-auto mb-16">
            <h2 className="text-4xl lg:text-5xl font-bold mb-6 text-foreground">
              لماذا تختار <span className="text-fitness-blue">Iron Man </span>؟
            </h2>
            <p className="text-xl text-muted-foreground leading-relaxed">
              نحن ملتزمون بتوفير أعلى جودة من المكملات الغذائية لمساعدتك على تحقيق أهدافك في اللياقة البدنية. 
              منتجاتنا مصممة علمياً، مختبرة معملياً، وموثوقة من قبل الرياضيين حول العالم.
            </p>
          </div>
          
          <div className="flex flex-wrap justify-around items-center gap-3">
            <Card className="text-center bg-gradient-card border-border hover:shadow-glow transition-all duration-300">
              <CardContent className="p-8">
                <div className="w-16 h-16 bg-fitness-blue/20 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Package className="h-8 w-8 text-fitness-blue" />
                </div>
                <h3 className="text-xl font-bold mb-2 text-foreground">جودة متميزة</h3>
                <p className="text-muted-foreground">مكونات مختبرة معملياً من موردين موثوقين</p>
              </CardContent>
            </Card>
            
            {/* <Card className="text-center bg-gradient-card border-border hover:shadow-glow transition-all duration-300">
              <CardContent className="p-8">
                <div className="w-16 h-16 bg-fitness-blue/20 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Users className="h-8 w-8 text-fitness-blue" />
                </div>
                <h3 className="text-xl font-bold mb-2 text-foreground">معتمدة من الخبراء</h3>
                <p className="text-muted-foreground">مصممة من قبل علماء التغذية وخبراء اللياقة البدنية</p>
              </CardContent>
            </Card> */}
            
            <Card className="text-center bg-gradient-card border-border hover:shadow-glow transition-all duration-300">
              <CardContent className="p-8">
                <div className="w-16 h-16 bg-fitness-blue/20 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Truck className="h-8 w-8 text-fitness-blue" />
                </div>
                <h3 className="text-xl font-bold mb-2 text-foreground">توصيل سريع</h3>
                <p className="text-muted-foreground">معالجة سريعة وشحن موثوق في جميع أنحاء العالم</p>
              </CardContent>
            </Card>
            
            <Card className="text-center bg-gradient-card border-border hover:shadow-glow transition-all duration-300">
              <CardContent className="p-8">
                <div className="w-16 h-16 bg-fitness-blue/20 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Star className="h-8 w-8 text-fitness-blue" />
                </div>
                <h3 className="text-xl font-bold mb-2 text-foreground">نتائج مثبتة</h3>
                <p className="text-muted-foreground">آلاف العملاء الراضين وقصص النجاح</p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>
      
      {/* Featured Products */}
      <section className="py-20 bg-background">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl lg:text-5xl font-bold mb-6 text-foreground">
              المنتجات <span className="text-fitness-blue">المميزة</span>
            </h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              اكتشف أشهر مكملاتنا، مختارة بعناية لمساعدتك على تحقيق أهدافك في اللياقة البدنية.
            </p>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 mb-12">
            {featuredProducts.map((product) => (
              <ProductCard key={product.id} product={product} />
            ))}
          </div>
          
          <div className="text-center">
            <Button
              asChild
              size="lg"
              className="bg-gradient-button hover:shadow-glow transition-all duration-300 px-8 py-6 h-auto text-lg"
            >
              <Link to="/products">
                عرض جميع المنتجات
              </Link>
            </Button>
          </div>
        </div>
      </section>
      
      {/* Customer Reviews */}
      <section className="py-20 bg-card">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl lg:text-5xl font-bold mb-6 text-foreground">
              ماذا يقول <span className="text-fitness-blue">عملاؤنا</span>
            </h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              نتائج حقيقية من أشخاص حقيقيين يثقون في فيت سابس لرحلة اللياقة البدنية.
            </p>
          </div>
          
          <div className="grid md:grid-cols-3 gap-8">
            {testimonials.map((testimonial, index) => (
              <Card key={index} className="bg-gradient-card border-border hover:shadow-glow transition-all duration-300">
                <CardContent className="p-8">
                  <div className="flex items-center mb-4">
                    <div className="w-12 h-12 rounded-full bg-fitness-blue/20 flex items-center justify-center text-2xl mr-4">
                      {testimonial.avatar}
                    </div>
                    <div>
                      <h4 className="font-bold text-foreground">{testimonial.name}</h4>
                      <p className="text-sm text-muted-foreground">{testimonial.role}</p>
                    </div>
                  </div>
                  
                  <div className="flex mb-4">
                    {[...Array(testimonial.rating)].map((_, i) => (
                      <Star key={i} className="h-5 w-5 fill-fitness-blue text-fitness-blue" />
                    ))}
                  </div>
                  
                  <p className="text-muted-foreground italic">"{testimonial.text}"</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};