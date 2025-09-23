import React from 'react';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { MessageCircle, Phone, Mail, MapPin, Clock, Send } from 'lucide-react';

export const ContactPage: React.FC = () => {
  const handleWhatsAppContact = () => {
    const message = "مرحباً! لدي سؤال حول مكملاتكم الغذائية. هل يمكنكم مساعدتي؟";
    const whatsappUrl = `https://wa.me/201030251505?text=${encodeURIComponent(message)}`;
    window.open(whatsappUrl, '_blank');
  };

  return (
    <div className="min-h-screen bg-background py-20">
      <div className="container mx-auto px-4">
        {/* Header */}
        <div className="text-center mb-16">
          <h1 className="text-4xl lg:text-5xl font-bold mb-6 text-foreground">
            <span className="text-fitness-blue">اتصل</span> بنا
          </h1>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            لديك سؤال حول مكملاتنا الغذائية؟ نحن هنا للمساعدة! 
            تواصل معنا مباشرة عبر الواتساب للحصول على الدعم الفوري.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12 max-w-6xl mx-auto">
          {/* Contact Information */}
          <div className="space-y-8">
            <Card className="bg-gradient-card border-border hover:shadow-glow transition-all duration-300">
              <CardHeader>
                <CardTitle className="text-2xl text-foreground flex items-center">
                  <MessageCircle className="ml-3 h-6 w-6 text-fitness-blue" />
                  دعم الواتساب
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <p className="text-muted-foreground">
                  احصل على إجابات فورية لأسئلتك! فريقنا جاهز لمساعدتك في اختيار 
                  المكملات الغذائية المناسبة لأهدافك في اللياقة البدنية.
                </p>
                <Button
                  onClick={handleWhatsAppContact}
                  size="lg"
                  className="w-full bg-gradient-accent hover:shadow-button transition-all duration-300"
                >
                  <MessageCircle className="ml-2 h-5 w-5" />
                  دردشة على الواتساب
                </Button>
              </CardContent>
            </Card>

            <div className="grid sm:grid-cols-2 gap-6">
              <Card className="bg-gradient-card border-border">
                <CardContent className="p-6 text-center">
                  <Phone className="h-8 w-8 text-fitness-blue mx-auto mb-3" />
                  <h3 className="font-bold mb-2 text-foreground">الهاتف</h3>
                  <p className="text-muted-foreground">01553423925</p>
                </CardContent>
              </Card>

              <Card className="bg-gradient-card border-border">
                <CardContent className="p-6 text-center">
                  <Mail className="h-8 w-8 text-fitness-blue mx-auto mb-3" />
                  <h3 className="font-bold mb-2 text-foreground">الإيميل</h3>
                  <p className="text-muted-foreground">info@fitsupps.com</p>
                </CardContent>
              </Card>

              {/* <Card className="bg-gradient-card border-border">
                <CardContent className="p-6 text-center">
                  <MapPin className="h-8 w-8 text-fitness-blue mx-auto mb-3" />
                  <h3 className="font-bold mb-2 text-foreground">العنوان</h3>
                  <p className="text-muted-foreground">123 شارع اللياقة، مدينة العضلات، MC 12345</p>
                </CardContent>
              </Card> */}

              {/* <Card className="bg-gradient-card border-border">
                <CardContent className="p-6 text-center">
                  <Clock className="h-8 w-8 text-fitness-blue mx-auto mb-3" />
                  <h3 className="font-bold mb-2 text-foreground">ساعات العمل</h3>
                  <p className="text-muted-foreground">الإثنين-الجمعة: 9ص-6م<br/>السبت-الأحد: 10ص-4م</p>
                </CardContent>
              </Card> */}
            </div>
          </div>

          {/* FAQ Section */}
          <div className="space-y-8">
            <Card className="bg-gradient-card border-border">
              <CardHeader>
                <CardTitle className="text-2xl text-foreground">
                  الأسئلة الشائعة
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-6">
                <div>
                  <h4 className="font-bold text-fitness-blue mb-2">كيف أضع طلباً؟</h4>
                  <p className="text-muted-foreground">
                    ببساطة تصفح منتجاتنا، أضف العناصر إلى سلتك، وادفع عبر الواتساب. 
                    سنؤكد طلبك ونقدم تفاصيل الدفع.
                  </p>
                </div>

                <div>
                  <h4 className="font-bold text-fitness-blue mb-2">ما طرق الدفع التي تقبلونها؟</h4>
                  <p className="text-muted-foreground">
                    نقبل طرق دفع متنوعة بما في ذلك التحويل البنكي، والدفع بالموبايل، 
                    والدفع عند التسليم. ستتم مشاركة التفاصيل أثناء تأكيد الطلب.
                  </p>
                </div>

                <div>
                  <h4 className="font-bold text-fitness-blue mb-2">كم تستغرق مدة التوصيل؟</h4>
                  <p className="text-muted-foreground">
                    التوصيل عادة يستغرق 2-5 أيام عمل حسب موقعك. 
                    سنقدم معلومات التتبع بمجرد شحن طلبك.
                  </p>
                </div>

                <div>
                  <h4 className="font-bold text-fitness-blue mb-2">هل منتجاتكم أصلية؟</h4>
                  <p className="text-muted-foreground">
                    نعم! جميع منتجاتنا أصلية 100% ومصدرها مباشرة من 
                    موزعين معتمدين. نقدم ضمانات الأصالة.
                  </p>
                </div>
              </CardContent>
            </Card>

            <Card className="bg-gradient-hero border-border text-white">
              <CardContent className="p-8 text-center">
                <Send className="h-12 w-12 mx-auto mb-4 text-white" />
                <h3 className="text-2xl font-bold mb-4">جاهز للبدء؟</h3>
                <p className="mb-6 opacity-90">
                  انضم إلى آلاف العملاء الراضين الذين يثقون في فيت سابس لرحلة اللياقة البدنية.
                </p>
                <Button
                  onClick={handleWhatsAppContact}
                  variant="outline"
                  size="lg"
                  className="border-white text-white hover:bg-white hover:text-fitness-navy transition-all duration-300"
                >
                  <MessageCircle className="ml-2 h-5 w-5" />
                  ابدأ المحادثة
                </Button>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </div>
  );
};