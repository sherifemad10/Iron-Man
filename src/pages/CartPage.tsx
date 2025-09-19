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
      <div className="min-h-screen bg-background py-8 sm:py-12 md:py-20">
        <div className="container mx-auto px-4 sm:px-6">
          <div className="max-w-2xl mx-auto text-center">
            <ShoppingBag className="h-16 w-16 sm:h-20 sm:w-20 md:h-24 md:w-24 mx-auto text-muted-foreground mb-4 sm:mb-6" />
            <h1 className="text-2xl sm:text-3xl md:text-4xl font-bold mb-3 sm:mb-4 text-foreground">سلتك فارغة</h1>
            <p className="text-base sm:text-lg md:text-xl text-muted-foreground mb-6 sm:mb-8 px-4">
              يبدو أنك لم تضف أي مكملات غذائية إلى سلتك بعد.
            </p>
            <Button 
              asChild
              size="lg"
              className="bg-gradient-button hover:shadow-glow transition-all duration-300 px-6 sm:px-8 py-4 sm:py-6 h-auto text-base sm:text-lg"
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
    <div className="min-h-screen bg-background py-8 sm:py-12 md:py-20">
      <div className="container mx-auto px-4 sm:px-6">
        <h1 className="text-2xl sm:text-3xl md:text-4xl font-bold mb-6 sm:mb-8 text-foreground text-center">
          <span className="text-fitness-blue">سلة</span> التسوق
        </h1>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 sm:gap-8">
          {/* Cart Items */}
          <div className="lg:col-span-2 space-y-4 sm:space-y-6">
            {items.map((item) => (
              <Card key={item.id} className="bg-card border-border">
                <CardContent className="p-4 sm:p-6">
                  <div className="flex flex-col sm:flex-row sm:items-center space-y-4 sm:space-y-0 sm:space-x-4">
                    {/* Product Image */}
                    <div className="flex-shrink-0 mx-auto sm:mx-0">
                      <img
                        src={item.image}
                        alt={item.name}
                        className="w-16 h-16 sm:w-20 sm:h-20 object-cover rounded-lg"
                      />
                    </div>
                    
                    {/* Product Info */}
                    <div className="flex-1 text-center sm:text-right">
                      <h3 className="font-bold text-base sm:text-lg text-foreground mb-1">{item.name}</h3>
                      <p className="text-sm sm:text-base text-muted-foreground mb-1">{item.category}</p>
                      <p className="text-fitness-blue font-bold text-sm sm:text-base">{item.price} جنيه</p>
                    </div>
                    
                    {/* Quantity Controls */}
                    <div className="flex items-center justify-center space-x-3">
                      <Button
                        variant="outline"
                        size="icon"
                        onClick={() => handleQuantityChange(item.id, item.quantity - 1)}
                        className="border-border hover:bg-secondary h-8 w-8 sm:h-10 sm:w-10"
                      >
                        <Minus className="h-3 w-3 sm:h-4 sm:w-4" />
                      </Button>
                      
                      <span className="text-base sm:text-lg font-semibold min-w-[2rem] text-center text-foreground">
                        {item.quantity}
                      </span>
                      
                      <Button
                        variant="outline"
                        size="icon"
                        onClick={() => handleQuantityChange(item.id, item.quantity + 1)}
                        className="border-border hover:bg-secondary h-8 w-8 sm:h-10 sm:w-10"
                      >
                        <Plus className="h-3 w-3 sm:h-4 sm:w-4" />
                      </Button>
                    </div>
                    
                    {/* Price and Remove */}
                    <div className="text-center sm:text-right">
                      <p className="text-base sm:text-lg font-bold text-foreground mb-2">
                        {(item.price * item.quantity).toFixed(2)} جنيه
                      </p>
                      <Button
                        variant="ghost"
                        size="sm"
                        onClick={() => handleRemoveItem(item.id, item.name)}
                        className="text-destructive hover:text-destructive hover:bg-destructive/10 text-xs sm:text-sm"
                      >
                        <Trash2 className="h-3 w-3 sm:h-4 sm:w-4 ml-1" />
                        إزالة
                      </Button>
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>

          {/* Order Summary & Checkout */}
          <div className="space-y-4 sm:space-y-6">
            {/* Order Summary */}
            <Card className="bg-gradient-card border-border">
              <CardHeader className="pb-3 sm:pb-6">
                <CardTitle className="text-base sm:text-lg text-foreground">ملخص الطلب</CardTitle>
              </CardHeader>
              <CardContent className="space-y-3 sm:space-y-4">
                {items.map((item) => (
                  <div key={item.id} className="flex justify-between text-xs sm:text-sm">
                    <span className="text-muted-foreground truncate max-w-[60%]">{item.name} x{item.quantity}</span>
                    <span className="text-foreground font-medium">{(item.price * item.quantity).toFixed(2)} جنيه</span>
                  </div>
                ))}
                
                <Separator />
                
                <div className="flex justify-between text-base sm:text-lg font-bold">
                  <span className="text-foreground">الإجمالي:</span>
                  <span className="text-fitness-blue">{getTotalPrice().toFixed(2)} جنيه</span>
                </div>
              </CardContent>
            </Card>

            {/* Customer Information */}
            <Card className="bg-gradient-card border-border">
              <CardHeader className="pb-3 sm:pb-6">
                <CardTitle className="text-base sm:text-lg text-foreground">معلومات العميل</CardTitle>
              </CardHeader>
              <CardContent className="space-y-3 sm:space-y-4">
                <div>
                  <Label htmlFor="name" className="text-sm sm:text-base text-foreground">الاسم الكامل *</Label>
                  <Input
                    id="name"
                    value={customerInfo.name}
                    onChange={(e) => setCustomerInfo(prev => ({ ...prev, name: e.target.value }))}
                    placeholder="أدخل اسمك الكامل"
                    className="bg-background border-border text-sm sm:text-base h-10 sm:h-11"
                  />
                </div>
                
                <div>
                  <Label htmlFor="phone" className="text-sm sm:text-base text-foreground">رقم الهاتف *</Label>
                  <Input
                    id="phone"
                    type="tel"
                    value={customerInfo.phone}
                    onChange={(e) => setCustomerInfo(prev => ({ ...prev, phone: e.target.value }))}
                    placeholder="أدخل رقم هاتفك"
                    className="bg-background border-border text-sm sm:text-base h-10 sm:h-11"
                  />
                </div>
                
                <div>
                  <Label htmlFor="address" className="text-sm sm:text-base text-foreground">عنوان التوصيل *</Label>
                  <Input
                    id="address"
                    value={customerInfo.address}
                    onChange={(e) => setCustomerInfo(prev => ({ ...prev, address: e.target.value }))}
                    placeholder="أدخل عنوان التوصيل"
                    className="bg-background border-border text-sm sm:text-base h-10 sm:h-11"
                  />
                </div>
              </CardContent>
            </Card>

            {/* Checkout Button */}
            <Button
              onClick={handleCheckout}
              size="lg"
              className="w-full bg-gradient-button hover:shadow-glow transition-all duration-300 text-sm sm:text-lg py-4 sm:py-6 h-auto"
            >
              <MessageCircle className="ml-2 h-4 w-4 sm:h-5 sm:w-5" />
              الدفع عبر الواتساب
            </Button>

            <p className="text-xs sm:text-sm text-muted-foreground text-center px-2">
              سيتم تحويلك إلى تطبيق الواتساب لإرسال الطلب والتأكيد.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};
