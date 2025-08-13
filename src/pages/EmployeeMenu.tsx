import { useState } from 'react';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { Input } from '@/components/ui/input';
import { 
  Search, 
  Filter, 
  Star, 
  Clock, 
  Users,
  Leaf,
  Flame,
  Heart,
  ShoppingCart
} from 'lucide-react';
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from '@/components/ui/select';

const EmployeeMenu = () => {
  const [selectedCategory, setSelectedCategory] = useState('all');
  const [searchQuery, setSearchQuery] = useState('');

  const categories = [
    { id: 'all', name: 'All Meals', count: 24 },
    { id: 'nigerian', name: 'Nigerian', count: 12 },
    { id: 'continental', name: 'Continental', count: 8 },
    { id: 'healthy', name: 'Healthy Options', count: 4 }
  ];

  const meals = [
    {
      id: 1,
      name: 'Jollof Rice with Grilled Chicken',
      description: 'Aromatic Nigerian jollof rice served with perfectly grilled chicken, fried plantains, and fresh salad',
      price: 2500,
      image: '/src/assets/jollof-rice-featured.jpg',
      category: 'nigerian',
      rating: 4.8,
      reviews: 156,
      prepTime: 25,
      tags: ['Spicy', 'Popular'],
      dietary: ['Gluten-Free'],
      restaurant: 'Lagos Kitchen Co.',
      nutrition: {
        calories: 650,
        protein: 45,
        carbs: 72,
        fat: 18
      }
    },
    {
      id: 2,
      name: 'Egusi Soup with Pounded Yam',
      description: 'Traditional Nigerian soup made with ground melon seeds, vegetables, and your choice of protein',
      price: 2800,
      image: '/src/assets/african-dishes-hero.jpg',
      category: 'nigerian',
      rating: 4.7,
      reviews: 89,
      prepTime: 30,
      tags: ['Traditional', 'Vegetarian Option'],
      dietary: ['Vegetarian Option'],
      restaurant: 'Mama\'s Kitchen',
      nutrition: {
        calories: 580,
        protein: 25,
        carbs: 85,
        fat: 15
      }
    },
    {
      id: 3,
      name: 'Grilled Salmon with Quinoa',
      description: 'Fresh Atlantic salmon grilled to perfection, served with quinoa pilaf and steamed vegetables',
      price: 3200,
      image: '/src/assets/professional-kitchen.jpg',
      category: 'healthy',
      rating: 4.9,
      reviews: 112,
      prepTime: 20,
      tags: ['Healthy', 'Low-Carb', 'Premium'],
      dietary: ['Keto-Friendly', 'High-Protein'],
      restaurant: 'Wellness Kitchen',
      nutrition: {
        calories: 480,
        protein: 38,
        carbs: 22,
        fat: 24
      }
    },
    {
      id: 4,
      name: 'Chicken Caesar Salad',
      description: 'Crisp romaine lettuce with grilled chicken, parmesan cheese, croutons, and classic Caesar dressing',
      price: 2200,
      image: '/src/assets/office-lunch.jpg',
      category: 'continental',
      rating: 4.6,
      reviews: 78,
      prepTime: 15,
      tags: ['Light', 'Quick'],
      dietary: ['Low-Carb Option'],
      restaurant: 'Fresh Bites',
      nutrition: {
        calories: 420,
        protein: 32,
        carbs: 18,
        fat: 22
      }
    },
    {
      id: 5,
      name: 'Peppered Beef with Rice',
      description: 'Tender beef chunks in spicy pepper sauce served with steamed white rice and vegetables',
      price: 2600,
      image: '/src/assets/vendor-kitchen.jpg',
      category: 'nigerian',
      rating: 4.5,
      reviews: 94,
      prepTime: 28,
      tags: ['Spicy', 'Hearty'],
      dietary: ['Gluten-Free'],
      restaurant: 'Spice Route',
      nutrition: {
        calories: 620,
        protein: 42,
        carbs: 68,
        fat: 20
      }
    },
    {
      id: 6,
      name: 'Mediterranean Bowl',
      description: 'Quinoa bowl with hummus, grilled vegetables, feta cheese, olives, and tahini dressing',
      price: 2400,
      image: '/src/assets/office-workers-lunch.jpg',
      category: 'healthy',
      rating: 4.7,
      reviews: 65,
      prepTime: 18,
      tags: ['Vegetarian', 'Mediterranean'],
      dietary: ['Vegetarian', 'High-Fiber'],
      restaurant: 'Green Garden',
      nutrition: {
        calories: 450,
        protein: 18,
        carbs: 52,
        fat: 20
      }
    }
  ];

  const [cart, setCart] = useState([]);

  const addToCart = (meal) => {
    setCart([...cart, meal]);
  };

  const filteredMeals = meals.filter(meal => {
    const matchesCategory = selectedCategory === 'all' || meal.category === selectedCategory;
    const matchesSearch = meal.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
                         meal.description.toLowerCase().includes(searchQuery.toLowerCase());
    return matchesCategory && matchesSearch;
  });

  const getDietaryIcon = (dietary) => {
    if (dietary.includes('Vegetarian')) return <Leaf className="h-4 w-4 text-green-600" />;
    if (dietary.includes('Keto-Friendly')) return <Flame className="h-4 w-4 text-red-600" />;
    if (dietary.includes('High-Protein')) return <Heart className="h-4 w-4 text-purple-600" />;
    return null;
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-orange-50 to-amber-50">
      <Header />
      <main className="container mx-auto px-4 py-8">
        <div className="max-w-7xl mx-auto">
          {/* Header */}
          <div className="mb-8">
            <h1 className="text-3xl font-bold text-gray-900 mb-2">
              Today's Menu
            </h1>
            <p className="text-gray-600">
              Choose from our carefully curated selection of delicious meals
            </p>
          </div>

          {/* Search and Filters */}
          <div className="flex flex-col lg:flex-row gap-4 mb-8">
            <div className="relative flex-1">
              <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 h-4 w-4 text-gray-400" />
              <Input 
                placeholder="Search for meals..." 
                className="pl-10"
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
              />
            </div>
            <div className="flex gap-2">
              <Select>
                <SelectTrigger className="w-[180px]">
                  <SelectValue placeholder="Dietary" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="all">All Dietary</SelectItem>
                  <SelectItem value="vegetarian">Vegetarian</SelectItem>
                  <SelectItem value="keto">Keto-Friendly</SelectItem>
                  <SelectItem value="gluten-free">Gluten-Free</SelectItem>
                </SelectContent>
              </Select>
              <Select>
                <SelectTrigger className="w-[180px]">
                  <SelectValue placeholder="Price Range" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="all">All Prices</SelectItem>
                  <SelectItem value="budget">Under ₦2,500</SelectItem>
                  <SelectItem value="mid">₦2,500 - ₦3,000</SelectItem>
                  <SelectItem value="premium">Above ₦3,000</SelectItem>
                </SelectContent>
              </Select>
              <Button variant="outline">
                <Filter className="h-4 w-4 mr-2" />
                More Filters
              </Button>
            </div>
          </div>

          <div className="flex flex-col lg:flex-row gap-8">
            {/* Categories Sidebar */}
            <div className="lg:w-64">
              <Card>
                <CardHeader>
                  <CardTitle className="text-lg">Categories</CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="space-y-2">
                    {categories.map((category) => (
                      <button
                        key={category.id}
                        onClick={() => setSelectedCategory(category.id)}
                        className={`w-full flex items-center justify-between p-3 rounded-lg text-left transition-colors ${
                          selectedCategory === category.id
                            ? 'bg-orange-100 text-orange-700 border border-orange-200'
                            : 'hover:bg-gray-50'
                        }`}
                      >
                        <span className="font-medium">{category.name}</span>
                        <Badge variant="secondary" className="text-xs">
                          {category.count}
                        </Badge>
                      </button>
                    ))}
                  </div>
                </CardContent>
              </Card>

              {/* Cart Summary */}
              {cart.length > 0 && (
                <Card className="mt-6">
                  <CardHeader>
                    <CardTitle className="text-lg flex items-center">
                      <ShoppingCart className="h-5 w-5 mr-2" />
                      Your Order ({cart.length})
                    </CardTitle>
                  </CardHeader>
                  <CardContent>
                    <div className="space-y-2 mb-4">
                      {cart.map((item, index) => (
                        <div key={index} className="flex justify-between text-sm">
                          <span className="truncate">{item.name}</span>
                          <span>₦{item.price.toLocaleString()}</span>
                        </div>
                      ))}
                    </div>
                    <div className="border-t pt-2 mb-4">
                      <div className="flex justify-between font-bold">
                        <span>Total</span>
                        <span>₦{cart.reduce((sum, item) => sum + item.price, 0).toLocaleString()}</span>
                      </div>
                    </div>
                    <Button className="w-full">
                      Proceed to Checkout
                    </Button>
                  </CardContent>
                </Card>
              )}
            </div>

            {/* Meals Grid */}
            <div className="flex-1">
              <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-6">
                {filteredMeals.map((meal) => (
                  <Card key={meal.id} className="overflow-hidden hover:shadow-lg transition-shadow">
                    <div className="relative">
                      <img 
                        src={meal.image} 
                        alt={meal.name}
                        className="w-full h-48 object-cover"
                      />
                      <div className="absolute top-3 left-3">
                        {meal.dietary.map((diet, index) => (
                          <div key={index} className="inline-flex items-center bg-white rounded-full px-2 py-1 mr-1">
                            {getDietaryIcon([diet])}
                          </div>
                        ))}
                      </div>
                      <div className="absolute top-3 right-3">
                        <Badge className="bg-white text-gray-900">
                          ₦{meal.price.toLocaleString()}
                        </Badge>
                      </div>
                    </div>
                    
                    <CardContent className="p-4">
                      <div className="mb-2">
                        <h3 className="font-semibold text-lg mb-1">{meal.name}</h3>
                        <p className="text-sm text-gray-600 mb-2">{meal.restaurant}</p>
                        <p className="text-sm text-gray-700 line-clamp-2">{meal.description}</p>
                      </div>

                      <div className="flex items-center justify-between mb-3">
                        <div className="flex items-center gap-2">
                          <div className="flex items-center">
                            <Star className="h-4 w-4 text-yellow-500 fill-current" />
                            <span className="text-sm font-medium ml-1">{meal.rating}</span>
                            <span className="text-sm text-gray-600 ml-1">({meal.reviews})</span>
                          </div>
                        </div>
                        <div className="flex items-center text-sm text-gray-600">
                          <Clock className="h-4 w-4 mr-1" />
                          {meal.prepTime}min
                        </div>
                      </div>

                      <div className="flex flex-wrap gap-1 mb-3">
                        {meal.tags.map((tag, index) => (
                          <Badge key={index} variant="secondary" className="text-xs">
                            {tag}
                          </Badge>
                        ))}
                      </div>

                      <div className="grid grid-cols-4 gap-2 text-xs text-gray-600 mb-4">
                        <div>
                          <p className="font-medium">{meal.nutrition.calories}</p>
                          <p>cal</p>
                        </div>
                        <div>
                          <p className="font-medium">{meal.nutrition.protein}g</p>
                          <p>protein</p>
                        </div>
                        <div>
                          <p className="font-medium">{meal.nutrition.carbs}g</p>
                          <p>carbs</p>
                        </div>
                        <div>
                          <p className="font-medium">{meal.nutrition.fat}g</p>
                          <p>fat</p>
                        </div>
                      </div>

                      <Button 
                        className="w-full"
                        onClick={() => addToCart(meal)}
                      >
                        Add to Order
                      </Button>
                    </CardContent>
                  </Card>
                ))}
              </div>
            </div>
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default EmployeeMenu;