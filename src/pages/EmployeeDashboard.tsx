import { useState } from 'react';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { Calendar, Clock, CheckCircle, Truck, ChefHat, Star } from 'lucide-react';

const EmployeeDashboard = () => {
  const [selectedWeek, setSelectedWeek] = useState(new Date());
  
  const weeklyMenu = [
    {
      day: 'Monday',
      date: '13',
      meal: 'Jollof Rice with Grilled Chicken',
      description: 'Spicy Nigerian jollof rice served with tender grilled chicken and plantains',
      price: 'N2,500',
      image: '/src/assets/jollof-rice-featured.jpg',
      status: 'delivered',
      time: '12:30 PM'
    },
    {
      day: 'Tuesday',
      date: '14',
      meal: 'Egusi Soup with Pounded Yam',
      description: 'Traditional Nigerian soup with vegetables and your choice of protein',
      price: 'N2,800',
      image: '/src/assets/african-dishes-hero.jpg',
      status: 'preparing',
      time: '12:30 PM'
    },
    {
      day: 'Wednesday',
      date: '15',
      meal: 'Peppered Beef with Rice',
      description: 'Spicy beef stew served with steamed white rice and vegetables',
      price: 'N2,600',
      image: '/src/assets/office-lunch.jpg',
      status: 'not-ordered',
      time: '12:30 PM'
    },
    {
      day: 'Thursday',
      date: '16',
      meal: 'Fish Stew with Plantain',
      description: 'Fresh fish in tomato stew with fried plantains and salad',
      price: 'N2,700',
      image: '/src/assets/professional-kitchen.jpg',
      status: 'not-ordered',
      time: '12:30 PM'
    },
    {
      day: 'Friday',
      date: '17',
      meal: 'Chicken Curry with Coconut Rice',
      description: 'Creamy chicken curry served with aromatic coconut rice',
      price: 'N2,900',
      image: '/src/assets/vendor-kitchen.jpg',
      status: 'not-ordered',
      time: '12:30 PM'
    }
  ];

  const getStatusIcon = (status: string) => {
    switch (status) {
      case 'delivered':
        return <CheckCircle className="h-5 w-5 text-green-500" />;
      case 'preparing':
        return <ChefHat className="h-5 w-5 text-orange-500" />;
      case 'out-for-delivery':
        return <Truck className="h-5 w-5 text-blue-500" />;
      default:
        return <Clock className="h-5 w-5 text-gray-400" />;
    }
  };

  const getStatusBadge = (status: string) => {
    switch (status) {
      case 'delivered':
        return <Badge className="bg-green-100 text-green-800">Delivered</Badge>;
      case 'preparing':
        return <Badge className="bg-orange-100 text-orange-800">Preparing</Badge>;
      case 'out-for-delivery':
        return <Badge className="bg-blue-100 text-blue-800">Out for Delivery</Badge>;
      default:
        return <Badge variant="outline">Not Ordered</Badge>;
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-orange-50 to-amber-50">
      <Header />
      <main className="container mx-auto px-4 py-8">
        <div className="max-w-6xl mx-auto">
          {/* Header Section */}
          <div className="mb-8">
            <h1 className="text-3xl font-bold text-gray-900 mb-2">
              Welcome back, Sarah! 👋
            </h1>
            <p className="text-gray-600">
              Plan your weekly meals and track your orders
            </p>
          </div>

          {/* Quick Stats */}
          <div className="grid grid-cols-1 md:grid-cols-4 gap-6 mb-8">
            <Card>
              <CardContent className="p-6">
                <div className="flex items-center justify-between">
                  <div>
                    <p className="text-sm text-gray-600">This Week</p>
                    <p className="text-2xl font-bold text-orange-600">3</p>
                    <p className="text-xs text-gray-500">Meals Ordered</p>
                  </div>
                  <Calendar className="h-8 w-8 text-orange-500" />
                </div>
              </CardContent>
            </Card>
            
            <Card>
              <CardContent className="p-6">
                <div className="flex items-center justify-between">
                  <div>
                    <p className="text-sm text-gray-600">Average Rating</p>
                    <p className="text-2xl font-bold text-green-600">4.8</p>
                    <p className="text-xs text-gray-500">Your Reviews</p>
                  </div>
                  <Star className="h-8 w-8 text-yellow-500" />
                </div>
              </CardContent>
            </Card>

            <Card>
              <CardContent className="p-6">
                <div className="flex items-center justify-between">
                  <div>
                    <p className="text-sm text-gray-600">Total Meals</p>
                    <p className="text-2xl font-bold text-blue-600">47</p>
                    <p className="text-xs text-gray-500">This Month</p>
                  </div>
                  <ChefHat className="h-8 w-8 text-blue-500" />
                </div>
              </CardContent>
            </Card>

            <Card>
              <CardContent className="p-6">
                <div className="flex items-center justify-between">
                  <div>
                    <p className="text-sm text-gray-600">Next Delivery</p>
                    <p className="text-2xl font-bold text-purple-600">12:30</p>
                    <p className="text-xs text-gray-500">Today</p>
                  </div>
                  <Truck className="h-8 w-8 text-purple-500" />
                </div>
              </CardContent>
            </Card>
          </div>

          {/* Weekly Menu */}
          <Card>
            <CardHeader>
              <div className="flex items-center justify-between">
                <CardTitle className="text-xl font-semibold">This Week's Menu</CardTitle>
                <div className="flex items-center gap-2">
                  <span className="text-sm text-gray-600">Aug 13 - 17, 2024</span>
                  <Button variant="outline" size="sm">
                    <Calendar className="h-4 w-4 mr-2" />
                    Change Week
                  </Button>
                </div>
              </div>
            </CardHeader>
            <CardContent>
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5 gap-4">
                {weeklyMenu.map((meal, index) => (
                  <Card key={index} className="overflow-hidden hover:shadow-lg transition-shadow">
                    <div className="relative">
                      <img 
                        src={meal.image} 
                        alt={meal.meal}
                        className="w-full h-32 object-cover"
                      />
                      <div className="absolute top-2 right-2">
                        {getStatusIcon(meal.status)}
                      </div>
                    </div>
                    <CardContent className="p-4">
                      <div className="flex items-center justify-between mb-2">
                        <span className="text-sm font-medium text-gray-900">{meal.day}</span>
                        <span className="text-sm text-gray-600">{meal.date}</span>
                      </div>
                      <h3 className="font-semibold text-sm mb-2 line-clamp-2">{meal.meal}</h3>
                      <p className="text-xs text-gray-600 mb-3 line-clamp-2">{meal.description}</p>
                      
                      <div className="flex items-center justify-between mb-3">
                        <span className="font-bold text-orange-600">{meal.price}</span>
                        <span className="text-xs text-gray-500">{meal.time}</span>
                      </div>

                      <div className="flex items-center justify-between">
                        {getStatusBadge(meal.status)}
                        {meal.status === 'not-ordered' ? (
                          <Button size="sm" className="text-xs">
                            Order
                          </Button>
                        ) : (
                          <Button variant="outline" size="sm" className="text-xs">
                            Track
                          </Button>
                        )}
                      </div>
                    </CardContent>
                  </Card>
                ))}
              </div>
              
              <div className="mt-6 flex justify-center">
                <Button className="bg-orange-600 hover:bg-orange-700">
                  Order All Week (N12,500)
                </Button>
              </div>
            </CardContent>
          </Card>
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default EmployeeDashboard;