import { useState } from 'react';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { Input } from '@/components/ui/input';
import { 
  Users, 
  DollarSign, 
  TrendingUp, 
  Calendar,
  Search,
  Filter,
  Download,
  UserPlus,
  Upload,
  MoreHorizontal,
  CheckCircle,
  AlertCircle
} from 'lucide-react';
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from '@/components/ui/table';

const EmployerDashboard = () => {
  const [selectedTab, setSelectedTab] = useState('overview');

  const dashboardStats = [
    {
      title: 'Active Employees',
      value: '247',
      change: '+12 this month',
      trend: 'up',
      icon: Users,
      color: 'text-blue-600'
    },
    {
      title: 'This Week\'s Orders',
      value: '1,235',
      change: '+8.2% from last week',
      trend: 'up',
      icon: Calendar,
      color: 'text-orange-600'
    },
    {
      title: 'Monthly Spend',
      value: '₦987,500',
      change: '+15.3% vs last month',
      trend: 'up',
      icon: DollarSign,
      color: 'text-green-600'
    },
    {
      title: 'Satisfaction Rate',
      value: '4.8/5',
      change: '96% employee satisfaction',
      trend: 'up',
      icon: TrendingUp,
      color: 'text-purple-600'
    }
  ];

  const employees = [
    {
      id: 1,
      name: 'Sarah Johnson',
      email: 'sarah.johnson@company.com',
      department: 'Engineering',
      status: 'active',
      ordersThisWeek: 5,
      lastOrder: '2024-08-13',
      totalSpent: '₦12,500'
    },
    {
      id: 2,
      name: 'Michael Chen',
      email: 'michael.chen@company.com',
      department: 'Marketing',
      status: 'active',
      ordersThisWeek: 4,
      lastOrder: '2024-08-13',
      totalSpent: '₦10,000'
    },
    {
      id: 3,
      name: 'Aisha Abdullahi',
      email: 'aisha.abdullahi@company.com',
      department: 'Sales',
      status: 'inactive',
      ordersThisWeek: 0,
      lastOrder: '2024-08-10',
      totalSpent: '₦8,750'
    },
    {
      id: 4,
      name: 'David Okafor',
      email: 'david.okafor@company.com',
      department: 'Engineering',
      status: 'active',
      ordersThisWeek: 5,
      lastOrder: '2024-08-13',
      totalSpent: '₦15,600'
    },
    {
      id: 5,
      name: 'Grace Adebayo',
      email: 'grace.adebayo@company.com',
      department: 'HR',
      status: 'active',
      ordersThisWeek: 3,
      lastOrder: '2024-08-12',
      totalSpent: '₦9,200'
    }
  ];

  const recentActivity = [
    {
      type: 'employee_added',
      message: '5 new employees added to meal program',
      time: '2 hours ago',
      icon: UserPlus,
      color: 'text-green-600'
    },
    {
      type: 'order_completed',
      message: '247 meals delivered successfully today',
      time: '4 hours ago',
      icon: CheckCircle,
      color: 'text-blue-600'
    },
    {
      type: 'invoice_ready',
      message: 'Monthly invoice for July is ready',
      time: '1 day ago',
      icon: DollarSign,
      color: 'text-orange-600'
    },
    {
      type: 'alert',
      message: '3 employees haven\'t set dietary preferences',
      time: '2 days ago',
      icon: AlertCircle,
      color: 'text-red-600'
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-orange-50 to-amber-50">
      <Header />
      <main className="container mx-auto px-4 py-8">
        <div className="max-w-7xl mx-auto">
          {/* Header */}
          <div className="mb-8">
            <h1 className="text-3xl font-bold text-gray-900 mb-2">
              Employer Dashboard
            </h1>
            <p className="text-gray-600">
              Manage your company's meal program and employee experience
            </p>
          </div>

          {/* Navigation Tabs */}
          <div className="flex space-x-6 mb-8">
            {[
              { id: 'overview', label: 'Overview' },
              { id: 'employees', label: 'Employee Management' },
              { id: 'billing', label: 'Billing & Reports' },
              { id: 'settings', label: 'Program Settings' }
            ].map((tab) => (
              <button
                key={tab.id}
                onClick={() => setSelectedTab(tab.id)}
                className={`pb-2 px-1 border-b-2 transition-colors ${
                  selectedTab === tab.id
                    ? 'border-orange-600 text-orange-600 font-medium'
                    : 'border-transparent text-gray-600 hover:text-gray-900'
                }`}
              >
                {tab.label}
              </button>
            ))}
          </div>

          {/* Overview Tab */}
          {selectedTab === 'overview' && (
            <div className="space-y-8">
              {/* Stats Grid */}
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
                {dashboardStats.map((stat, index) => {
                  const Icon = stat.icon;
                  return (
                    <Card key={index}>
                      <CardContent className="p-6">
                        <div className="flex items-center justify-between mb-4">
                          <div className={`p-2 rounded-lg bg-gray-100 ${stat.color}`}>
                            <Icon className="h-6 w-6" />
                          </div>
                        </div>
                        <p className="text-2xl font-bold text-gray-900 mb-1">{stat.value}</p>
                        <p className="text-sm text-gray-600 mb-1">{stat.title}</p>
                        <p className="text-xs text-green-600">{stat.change}</p>
                      </CardContent>
                    </Card>
                  );
                })}
              </div>

              {/* Charts and Activity */}
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
                {/* Weekly Orders Chart */}
                <Card>
                  <CardHeader>
                    <CardTitle>Weekly Orders Overview</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <div className="h-64 flex items-center justify-center bg-gray-50 rounded-lg">
                      <p className="text-gray-500">Chart visualization would go here</p>
                    </div>
                  </CardContent>
                </Card>

                {/* Recent Activity */}
                <Card>
                  <CardHeader>
                    <CardTitle>Recent Activity</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <div className="space-y-4">
                      {recentActivity.map((activity, index) => {
                        const Icon = activity.icon;
                        return (
                          <div key={index} className="flex items-start gap-3">
                            <div className={`p-1 rounded-full ${activity.color}`}>
                              <Icon className="h-4 w-4" />
                            </div>
                            <div className="flex-1">
                              <p className="text-sm text-gray-900">{activity.message}</p>
                              <p className="text-xs text-gray-500">{activity.time}</p>
                            </div>
                          </div>
                        );
                      })}
                    </div>
                  </CardContent>
                </Card>
              </div>
            </div>
          )}

          {/* Employee Management Tab */}
          {selectedTab === 'employees' && (
            <div className="space-y-6">
              {/* Actions Bar */}
              <div className="flex items-center justify-between">
                <div className="flex items-center gap-4">
                  <div className="relative">
                    <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 h-4 w-4 text-gray-400" />
                    <Input 
                      placeholder="Search employees..." 
                      className="pl-10 w-64"
                    />
                  </div>
                  <Button variant="outline" size="sm">
                    <Filter className="h-4 w-4 mr-2" />
                    Filter
                  </Button>
                </div>
                <div className="flex items-center gap-2">
                  <Button variant="outline" size="sm">
                    <Upload className="h-4 w-4 mr-2" />
                    Bulk Import
                  </Button>
                  <Button size="sm">
                    <UserPlus className="h-4 w-4 mr-2" />
                    Add Employee
                  </Button>
                </div>
              </div>

              {/* Employee Table */}
              <Card>
                <CardContent className="p-0">
                  <Table>
                    <TableHeader>
                      <TableRow>
                        <TableHead>Employee</TableHead>
                        <TableHead>Department</TableHead>
                        <TableHead>Status</TableHead>
                        <TableHead>This Week</TableHead>
                        <TableHead>Last Order</TableHead>
                        <TableHead>Total Spent</TableHead>
                        <TableHead className="w-[50px]"></TableHead>
                      </TableRow>
                    </TableHeader>
                    <TableBody>
                      {employees.map((employee) => (
                        <TableRow key={employee.id}>
                          <TableCell>
                            <div>
                              <p className="font-medium">{employee.name}</p>
                              <p className="text-sm text-gray-600">{employee.email}</p>
                            </div>
                          </TableCell>
                          <TableCell>{employee.department}</TableCell>
                          <TableCell>
                            <Badge 
                              className={
                                employee.status === 'active' 
                                  ? 'bg-green-100 text-green-800' 
                                  : 'bg-gray-100 text-gray-800'
                              }
                            >
                              {employee.status}
                            </Badge>
                          </TableCell>
                          <TableCell>{employee.ordersThisWeek} orders</TableCell>
                          <TableCell>{employee.lastOrder}</TableCell>
                          <TableCell>{employee.totalSpent}</TableCell>
                          <TableCell>
                            <Button variant="ghost" size="sm">
                              <MoreHorizontal className="h-4 w-4" />
                            </Button>
                          </TableCell>
                        </TableRow>
                      ))}
                    </TableBody>
                  </Table>
                </CardContent>
              </Card>
            </div>
          )}

          {/* Billing Tab */}
          {selectedTab === 'billing' && (
            <div className="space-y-6">
              <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
                <Card className="lg:col-span-2">
                  <CardHeader>
                    <div className="flex items-center justify-between">
                      <CardTitle>Monthly Invoice - July 2024</CardTitle>
                      <Button variant="outline" size="sm">
                        <Download className="h-4 w-4 mr-2" />
                        Download PDF
                      </Button>
                    </div>
                  </CardHeader>
                  <CardContent>
                    <div className="space-y-4">
                      <div className="flex justify-between items-center py-2 border-b">
                        <span>Total Meals Ordered</span>
                        <span className="font-medium">1,247 meals</span>
                      </div>
                      <div className="flex justify-between items-center py-2 border-b">
                        <span>Average Cost per Meal</span>
                        <span className="font-medium">₦2,650</span>
                      </div>
                      <div className="flex justify-between items-center py-2 border-b">
                        <span>Subtotal</span>
                        <span className="font-medium">₦3,304,550</span>
                      </div>
                      <div className="flex justify-between items-center py-2 border-b">
                        <span>Platform Fee (5%)</span>
                        <span className="font-medium">₦165,228</span>
                      </div>
                      <div className="flex justify-between items-center py-2 text-lg font-bold">
                        <span>Total Amount</span>
                        <span>₦3,469,778</span>
                      </div>
                    </div>
                  </CardContent>
                </Card>

                <Card>
                  <CardHeader>
                    <CardTitle>Payment Status</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <div className="space-y-4">
                      <div className="flex items-center justify-between">
                        <span className="text-sm">July Invoice</span>
                        <Badge className="bg-green-100 text-green-800">Paid</Badge>
                      </div>
                      <div className="flex items-center justify-between">
                        <span className="text-sm">August Invoice</span>
                        <Badge className="bg-orange-100 text-orange-800">Pending</Badge>
                      </div>
                      <div className="flex items-center justify-between">
                        <span className="text-sm">Next Payment</span>
                        <span className="text-sm text-gray-600">Aug 31, 2024</span>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </div>
            </div>
          )}

          {/* Settings Tab */}
          {selectedTab === 'settings' && (
            <div className="space-y-6">
              <Card>
                <CardHeader>
                  <CardTitle>Meal Program Settings</CardTitle>
                </CardHeader>
                <CardContent className="space-y-6">
                  <div>
                    <label className="block text-sm font-medium mb-2">Daily Meal Budget</label>
                    <Input type="number" placeholder="2500" className="w-full" />
                    <p className="text-sm text-gray-600 mt-1">Maximum amount per employee per day</p>
                  </div>
                  
                  <div>
                    <label className="block text-sm font-medium mb-2">Meal Days</label>
                    <div className="flex gap-2">
                      {['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun'].map((day) => (
                        <Button 
                          key={day} 
                          variant={day !== 'Sat' && day !== 'Sun' ? 'default' : 'outline'} 
                          size="sm"
                        >
                          {day}
                        </Button>
                      ))}
                    </div>
                  </div>

                  <div>
                    <label className="block text-sm font-medium mb-2">Order Cutoff Time</label>
                    <Input type="time" defaultValue="11:00" className="w-full" />
                    <p className="text-sm text-gray-600 mt-1">Latest time employees can place orders</p>
                  </div>

                  <Button>Save Settings</Button>
                </CardContent>
              </Card>
            </div>
          )}
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default EmployerDashboard;