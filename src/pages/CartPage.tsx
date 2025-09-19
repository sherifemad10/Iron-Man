import React, { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Separator } from '@/components/ui/separator';
import { Minus, Plus, Trash2, ShoppingBag, MessageCircle } from 'lucide-react';
import { useCart } from '@/hooks/useCart';
import { Link } from 'react-router-dom';
import { useToast } from '@/hooks/use-toast';

export const CartPage: React.FC = () => {
  const { items, updateQuantity, removeItem, getTotalPrice, clearCart } = useCart();
  const { toast } = useToast();
  const [customerInfo, setCustomerInfo] = useState({
    name: '',
    phone: '',
    address: ''
  });

  const handleQuantityChange = (productId: string, newQuantity: number) => {
    if (newQuantity < 1) return;
    updateQuantity(productId, newQuantity);
  };

  const handleRemoveItem = (productId: string, productName: string) => {
    removeItem(productId);
    toast({
      title: "تم إزالة العنصر",
      description: `تم إزالة ${productName} من سلتك.`,
    });
  };

  const handleCheckout = () => {
    if (!customerInfo.name || !customerInfo.phone || !customerInfo.address) {
      toast({
        title: "معلومات ناقصة",
        description: "برجاء ملء جميع الحقول المطلوبة.",
        variant: "destructive"
      });
      return;
    }

    // تجهيز تفاصيل الطلب
    const orderDetails = items.map(item => 
      `• ${item.name} x${item.quantity} - ${item.price * item.quantity} جنيه`
    ).join('\n');

    const message = `🛍️ طلب جديد\n\n👤 الاسم: ${customerInfo.name}\n📱 الهاتف: ${customerInfo.phone}\n📍 العنوان: ${customerInfo.address}\n\n📦 تفاصيل الطلب:\n${orderDetails}\n\n💰 الإجمالي: ${getTotalPrice()} جنيه\n\n✅ برجاء تأكيد الطلب.`;

    const phoneNumber = "201553423925"; 
    const encodedMessage = encodeURIComponent(message);

    const whatsappUrl = `https://wa.me/${phoneNumber}?text=${encodedMessage}`;
    window.open(whatsappUrl, "_blank");

    // إفراغ السلة بعد الإرسال
    clearCart();
    setCustomerInfo({ name: '', phone: '', address: '' });

    toast({
      title: "تم إرسال الطلب!",
      description: "تم تحويلك إلى الواتساب لتأكيد الطلب.",
    });
  };

  if (items.length === 0) {
    return (
      <div className="min-h-screen bg-background py-20">
        <div className="container mx-auto px-4">
          <div className="max-w-2xl mx-auto text-center">
            <ShoppingBag className="h-24 w-24 mx-auto text-muted-foreground mb-6" />
            <h1 className="text-4xl font-bold mb-4 text-foreground">سلتك فارغة</h1>
            <p className="text-xl text-muted-foreground mb-8">
              يبدو أنك لم تضف أي مكملات غذائية إلى سلتك بعد.
            </p>
            <Button 
              asChild
              size="lg"
              className="bg-gradient-button hover:shadow-glow transition-all duration-300 px-8 py-6 h-auto text-lg"
            >
              <Link to="/products">
                ابدأ التسوق
              </Link>
            </Button>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-background py-20">
      <div className="container mx-auto px-4">
        <h1 className="text-4xl font-bold mb-8 text-foreground text-center">
          <span className="text-fitness-blue">سلة</span> التسوق
        </h1>

        <div className="grid lg:grid-cols-3 gap-8">
          {/* Cart Items */}
          <div className="lg:col-span-2 space-y-6">
            {items.map((item) => (
              <Card key={item.id} className="bg-card border-border">
                <CardContent className="p-6">
                  <div className="flex items-center space-x-4">
                    <img
                      src={item.image}
                      alt={item.name}
                      className="w-20 h-20 object-cover rounded-lg"
                    />
                    
                    <div className="flex-1">
                      <h3 className="font-bold text-lg text-foreground">{item.name}</h3>
                      <p className="text-muted-foreground">{item.category}</p>
                      <p className="text-fitness-blue font-bold">{item.price} جنيه</p>
                    </div>
                    
                    <div className="flex items-center space-x-3">
                      <Button
                        variant="outline"
                        size="icon"
                        onClick={() => handleQuantityChange(item.id, item.quantity - 1)}
                        className="border-border hover:bg-secondary"
                      >
                        <Minus className="h-4 w-4" />
                      </Button>
                      
                      <span className="text-lg font-semibold min-w-[2rem] text-center text-foreground">
                        {item.quantity}
                      </span>
                      
                      <Button
                        variant="outline"
                        size="icon"
                        onClick={() => handleQuantityChange(item.id, item.quantity + 1)}
                        className="border-border hover:bg-secondary"
                      >
                        <Plus className="h-4 w-4" />
                      </Button>
                    </div>
                    
                    <div className="text-right">
                      <p className="text-lg font-bold text-foreground">
                        {(item.price * item.quantity).toFixed(2)} جنيه
                      </p>
                      <Button
                        variant="ghost"
                        size="sm"
                        onClick={() => handleRemoveItem(item.id, item.name)}
                        className="text-destructive hover:text-destructive hover:bg-destructive/10 mt-2"
                      >
                        <Trash2 className="h-4 w-4 ml-1" />
                        إزالة
                      </Button>
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>

          {/* Order Summary & Checkout */}
          <div className="space-y-6">
            {/* Order Summary */}
            <Card className="bg-gradient-card border-border">
              <CardHeader>
                <CardTitle className="text-foreground">ملخص الطلب</CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                {items.map((item) => (
                  <div key={item.id} className="flex justify-between text-sm">
                    <span className="text-muted-foreground">{item.name} x{item.quantity}</span>
                    <span className="text-foreground">{(item.price * item.quantity).toFixed(2)} جنيه</span>
                  </div>
                ))}
                
                <Separator />
                
                <div className="flex justify-between text-lg font-bold">
                  <span className="text-foreground">الإجمالي:</span>
                  <span className="text-fitness-blue">{getTotalPrice().toFixed(2)} جنيه</span>
                </div>
              </CardContent>
            </Card>

            {/* Customer Information */}
            <Card className="bg-gradient-card border-border">
              <CardHeader>
                <CardTitle className="text-foreground">معلومات العميل</CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <div>
                  <Label htmlFor="name" className="text-foreground">الاسم الكامل *</Label>
                  <Input
                    id="name"
                    value={customerInfo.name}
                    onChange={(e) => setCustomerInfo(prev => ({ ...prev, name: e.target.value }))}
                    placeholder="أدخل اسمك الكامل"
                    className="bg-background border-border"
                  />
                </div>
                
                <div>
                  <Label htmlFor="phone" className="text-foreground">رقم الهاتف *</Label>
                  <Input
                    id="phone"
                    value={customerInfo.phone}
                    onChange={(e) => setCustomerInfo(prev => ({ ...prev, phone: e.target.value }))}
                    placeholder="أدخل رقم هاتفك"
                    className="bg-background border-border"
                  />
                </div>
                
                <div>
                  <Label htmlFor="address" className="text-foreground">عنوان التوصيل *</Label>
                  <Input
                    id="address"
                    value={customerInfo.address}
                    onChange={(e) => setCustomerInfo(prev => ({ ...prev, address: e.target.value }))}
                    placeholder="أدخل عنوان التوصيل"
                    className="bg-background border-border"
                  />
                </div>
              </CardContent>
            </Card>

            {/* Checkout Button */}
            <Button
              onClick={handleCheckout}
              size="lg"
              className="w-full bg-gradient-button hover:shadow-glow transition-all duration-300 text-lg py-6 h-auto"
            >
              <MessageCircle className="ml-2 h-5 w-5" />
              الدفع عبر الواتساب
            </Button>

            <p className="text-sm text-muted-foreground text-center">
              سيتم تحويلك إلى تطبيق الواتساب لإرسال الطلب والتأكيد.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};
