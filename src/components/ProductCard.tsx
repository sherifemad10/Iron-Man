import React from "react";
import { useNavigate } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardFooter } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { ShoppingCart, Eye } from "lucide-react";
import { Product, useCart } from "@/hooks/useCart";
import { useToast } from "@/hooks/use-toast";

interface ProductCardProps {
  product: Product;
}

export const ProductCard: React.FC<ProductCardProps> = ({ product }) => {
  const navigate = useNavigate();
  const { addItem } = useCart();
  const { toast } = useToast();

  const handleAddToCart = () => {
    addItem(product);
    toast({
      title: "تم الإضافة للسلة",
      description: `تم إضافة ${product.name} إلى سلتك.`,
    });
  };

  return (
    <Card className="group bg-gradient-card shadow-card hover:shadow-glow transition-all duration-300 hover:scale-105 border-border cursor-pointer">
      <CardContent
        className="p-0"
        onClick={() => navigate(`/product/${product.id}`)}
      >
        <div className="relative overflow-hidden rounded-t-lg">
          <img
            src={product.image}
            alt={product.name}
            className="w-full h-64 object-cover transition-transform duration-300 group-hover:scale-110"
          />
          <Badge className="absolute top-3 left-3 bg-fitness-blue text-white">
            {product.category}
          </Badge>
          <Button
            size="icon"
            variant="secondary"
            className="absolute top-3 right-3 opacity-0 group-hover:opacity-100 transition-opacity duration-300"
          >
            <Eye className="h-4 w-4" />
          </Button>
        </div>

        <div className="p-6">
          <h3 className="font-bold text-center text-lg text-foreground mb-2 line-clamp-2">
            {product.name}
          </h3>
          <p className="text-muted-foreground text-sm mb-4 line-clamp-3">
            {product.description}
          </p>
          <p className="text-2xl font-bold text-fitness-blue">
            {product.price} جنيه
          </p>
        </div>
      </CardContent>

      <CardFooter className="p-6 pt-0">
        <Button
          onClick={handleAddToCart}
          className="w-full bg-gradient-button hover:shadow-button transition-all duration-300"
          size="lg"
        >
          <ShoppingCart className="ml-2 h-4 w-4" />
          أضف للسلة
        </Button>
      </CardFooter>
    </Card>
  );
};
