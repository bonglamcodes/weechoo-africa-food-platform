import Header from '@/components/Header';
import Footer from '@/components/Footer';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { Progress } from '@/components/ui/progress';
import { ChefHat, Truck, CheckCircle, Clock, MapPin, Phone } from 'lucide-react';

const EmployeeOrderTracking = () => {
  const currentOrder = {
    orderId: 'WCH-240813-001',
    meal: 'Jollof Rice with Grilled Chicken',
    restaurant: 'Lagos Kitchen Co.',
    estimatedTime: '12:30 PM',
    status: 'preparing',
    progress: 60
  };

  const orderSteps = [
    {
      title: 'Order Confirmed',
      time: '11:45 AM',
      status: 'completed',
      icon: CheckCircle,
      description: 'Your order has been received and confirmed'
    },
    {
      title: 'Preparing Your Meal',
      time: '12:00 PM',
      status: 'active',
      icon: ChefHat,
      description: 'Our chefs are preparing your delicious meal'
    },
    {
      title: 'Out for Delivery',
      time: 'Est. 12:20 PM',
      status: 'pending',
      icon: Truck,
      description: 'Your meal is on its way to your office'
    },
    {
      title: 'Delivered',
      time: 'Est. 12:30 PM',
      status: 'pending',
      icon: CheckCircle,
      description: 'Enjoy your meal!'
    }
  ];

  const upcomingOrders = [
    {
      day: 'Wednesday',
      date: 'Aug 15',
      meal: 'Peppered Beef with Rice',
      time: '12:30 PM',
      status: 'scheduled'
    },
    {
      day: 'Thursday',
      date: 'Aug 16',
      meal: 'Fish Stew with Plantain',
      time: '12:30 PM',
      status: 'scheduled'
    },
    {
      day: 'Friday',
      date: 'Aug 17',
      meal: 'Chicken Curry with Rice',
      time: '12:30 PM',
      status: 'scheduled'
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-orange-50 to-amber-50">
      <Header />
      <main className="container mx-auto px-4 py-8">
        <div className="max-w-4xl mx-auto">
          {/* Header */}
          <div className="mb-8">
            <h1 className="text-3xl font-bold text-gray-900 mb-2">
              Order Tracking
            </h1>
            <p className="text-gray-600">
              Track your current and upcoming meal deliveries
            </p>
          </div>

          {/* Current Order */}
          <Card className="mb-8">
            <CardHeader>
              <div className="flex items-center justify-between">
                <CardTitle>Today's Order</CardTitle>
                <Badge className="bg-orange-100 text-orange-800">In Progress</Badge>
              </div>
            </CardHeader>
            <CardContent>
              <div className="flex items-start gap-6 mb-6">
                <img 
                  src="/src/assets/jollof-rice-featured.jpg" 
                  alt="Jollof Rice" 
                  className="w-24 h-24 rounded-lg object-cover"
                />
                <div className="flex-1">
                  <h3 className="text-xl font-semibold mb-2">{currentOrder.meal}</h3>
                  <p className="text-gray-600 mb-2">from {currentOrder.restaurant}</p>
                  <p className="text-sm text-gray-500">Order ID: {currentOrder.orderId}</p>
                </div>
                <div className="text-right">
                  <p className="text-lg font-semibold text-orange-600">ETA: {currentOrder.estimatedTime}</p>
                  <p className="text-sm text-gray-500">Estimated delivery</p>
                </div>
              </div>

              {/* Progress Bar */}
              <div className="mb-6">
                <div className="flex items-center justify-between mb-2">
                  <span className="text-sm font-medium">Progress</span>
                  <span className="text-sm text-gray-600">{currentOrder.progress}%</span>
                </div>
                <Progress value={currentOrder.progress} className="h-2" />
              </div>

              {/* Order Steps */}
              <div className="space-y-4">
                {orderSteps.map((step, index) => {
                  const Icon = step.icon;
                  return (
                    <div key={index} className="flex items-start gap-4">
                      <div className={`p-2 rounded-full ${
                        step.status === 'completed' 
                          ? 'bg-green-100 text-green-600' 
                          : step.status === 'active'
                          ? 'bg-orange-100 text-orange-600'
                          : 'bg-gray-100 text-gray-400'
                      }`}>
                        <Icon className="h-5 w-5" />
                      </div>
                      <div className="flex-1">
                        <div className="flex items-center justify-between">
                          <h4 className={`font-medium ${
                            step.status === 'pending' ? 'text-gray-400' : 'text-gray-900'
                          }`}>
                            {step.title}
                          </h4>
                          <span className={`text-sm ${
                            step.status === 'pending' ? 'text-gray-400' : 'text-gray-600'
                          }`}>
                            {step.time}
                          </span>
                        </div>
                        <p className={`text-sm ${
                          step.status === 'pending' ? 'text-gray-400' : 'text-gray-600'
                        }`}>
                          {step.description}
                        </p>
                      </div>
                    </div>
                  );
                })}
              </div>

              {/* Contact Driver */}
              <div className="mt-6 p-4 bg-blue-50 rounded-lg">
                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-3">
                    <div className="p-2 bg-blue-100 rounded-full">
                      <Truck className="h-5 w-5 text-blue-600" />
                    </div>
                    <div>
                      <p className="font-medium">Delivery Driver: Adebayo M.</p>
                      <p className="text-sm text-gray-600">Honda CRV - ABC 123 XY</p>
                    </div>
                  </div>
                  <Button variant="outline" size="sm">
                    <Phone className="h-4 w-4 mr-2" />
                    Call
                  </Button>
                </div>
              </div>
            </CardContent>
          </Card>

          {/* Upcoming Orders */}
          <Card>
            <CardHeader>
              <CardTitle>Upcoming Orders</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                {upcomingOrders.map((order, index) => (
                  <div key={index} className="flex items-center justify-between p-4 bg-gray-50 rounded-lg">
                    <div className="flex items-center gap-4">
                      <div className="text-center">
                        <p className="text-sm font-medium text-gray-900">{order.day}</p>
                        <p className="text-xs text-gray-600">{order.date}</p>
                      </div>
                      <div>
                        <p className="font-medium">{order.meal}</p>
                        <p className="text-sm text-gray-600">Delivery at {order.time}</p>
                      </div>
                    </div>
                    <div className="flex items-center gap-2">
                      <Badge variant="outline">Scheduled</Badge>
                      <Button variant="ghost" size="sm">Edit</Button>
                    </div>
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default EmployeeOrderTracking;