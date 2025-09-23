import React from "react";
import { useParams, useNavigate } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { ShoppingCart, ArrowRight } from "lucide-react";
import { products } from "@/data/products";
import { useCart } from "@/hooks/useCart";
import { useToast } from "@/hooks/use-toast";

export const ProductDetailsPage: React.FC = () => {
  const { id } = useParams<{ id: string }>();
  const navigate = useNavigate();
  const { addItem } = useCart();
  const { toast } = useToast();

  const product = products.find((p) => p.id === id);

  if (!product) {
    return (
      <div className="min-h-screen bg-background py-20">
        <div className="container mx-auto px-4 text-center">
          <h1 className="text-2xl font-bold text-foreground mb-4">
            المنتج غير موجود
          </h1>
          <Button onClick={() => navigate("/products")} variant="outline">
            <ArrowRight className="ml-2 h-4 w-4" />
            العودة للمنتجات
          </Button>
        </div>
      </div>
    );
  }

  const handleAddToCart = () => {
    addItem(product);
    toast({
      title: "تم الإضافة للسلة",
      description: `تم إضافة ${product.name} إلى سلتك.`,
    });
  };

  return (
    <div className="min-h-screen bg-background py-20">
      <div className="container mx-auto px-4">
        {/* Back Button */}
        <Button
          onClick={() => navigate("/products")}
          variant="outline"
          className="mb-8 border-border hover:bg-secondary"
        >
          <ArrowRight className="ml-2 h-4 w-4" />
          العودة للمنتجات
        </Button>

        <div className="grid lg:grid-cols-2 gap-12">
          {/* Product Image */}
          <div className="space-y-4">
            <div className="relative overflow-hidden rounded-lg bg-card border border-border">
              <img
                src={product.image}
                alt={product.name}
                className="w-full h-96 lg:h-[500px] object-cover"
              />
              <Badge className="absolute top-4 left-4 bg-fitness-blue text-white text-lg px-4 py-2">
                {product.category}
              </Badge>
            </div>
          </div>

          {/* Product Info */}
          <div className="space-y-8">
            <div>
              <h1 className="text-3xl lg:text-4xl font-bold text-foreground mb-4">
                {product.name}
              </h1>
              <p className="text-4xl font-bold text-fitness-blue mb-6">
                {product.price} جنيه
              </p>
            </div>

            <div>
              <h2 className="text-xl font-semibold mb-4 text-foreground">
                الوصف
              </h2>
              <p className="text-muted-foreground leading-relaxed text-lg">
                {product.description}
              </p>
            </div>

            <div>
              <h2 className="text-xl font-semibold mb-4 text-foreground">
                الفوائد الرئيسية
              </h2>
              <ul className="space-y-3 text-muted-foreground">
                {product.benfite.map((item, index) => (
                  <li key={index} className="flex items-start">
                    <span className="text-fitness-blue ml-3 mt-1">•</span>
                    {item}
                  </li>
                ))}
              </ul>
            </div>

            <div>
              <h2 className="text-xl font-semibold mb-4 text-foreground">
                طريقة الاستخدام
              </h2>
              <p className="text-muted-foreground leading-relaxed">
                {product.usage}
              </p>
            </div>

            {/* Add to Cart Button */}
            <Button
              onClick={handleAddToCart}
              size="lg"
              className="w-full bg-gradient-button hover:shadow-button transition-all duration-300 text-lg py-6"
            >
              <ShoppingCart className="ml-2 h-5 w-5" />
              أضف للسلة
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
};
