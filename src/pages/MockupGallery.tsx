import { useState } from 'react';
import { Download, Eye, Smartphone, Monitor } from 'lucide-react';
import { Card, CardContent } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import modernEmployeeDashboard from '@/assets/modern-employee-dashboard.jpg';
import modernEmployeeMenu from '@/assets/modern-employee-menu.jpg';
import modernEmployeeTracking from '@/assets/modern-employee-tracking.jpg';
import modernEmployerDashboard from '@/assets/modern-employer-dashboard.jpg';

const MockupGallery = () => {
  const [selectedMockup, setSelectedMockup] = useState<number | null>(null);
  const [viewMode, setViewMode] = useState<'grid' | 'preview'>('grid');

  const mockups = [
    {
      title: "Employee Dashboard",
      subtitle: "Smart Meal Planning",
      description: "Intuitive weekly meal planning with personalized recommendations, nutritional tracking, and seamless order management",
      image: modernEmployeeDashboard,
      filename: "modern-employee-dashboard.jpg",
      category: "Employee",
      features: ["Weekly Planning", "Nutrition Tracking", "Order History", "Preferences"]
    },
    {
      title: "Employee Menu", 
      subtitle: "Interactive Food Selection",
      description: "Beautiful menu interface with advanced filtering, dietary preferences, and real-time availability updates",
      image: modernEmployeeMenu,
      filename: "modern-employee-menu.jpg",
      category: "Employee",
      features: ["Smart Filters", "Dietary Options", "Real-time Updates", "Favorites"]
    },
    {
      title: "Order Tracking",
      subtitle: "Live Delivery Updates",
      description: "Real-time order tracking with delivery notifications, estimated times, and live status updates", 
      image: modernEmployeeTracking,
      filename: "modern-employee-tracking.jpg",
      category: "Employee",
      features: ["Live Tracking", "Push Notifications", "ETA Updates", "Driver Contact"]
    },
    {
      title: "Employer Dashboard",
      subtitle: "Business Intelligence",
      description: "Comprehensive analytics dashboard with employee insights, cost management, and operational metrics",
      image: modernEmployerDashboard,
      filename: "modern-employer-dashboard.jpg",
      category: "Employer",
      features: ["Analytics", "Cost Tracking", "Employee Insights", "Reports"]
    }
  ];

  const downloadImage = (mockup: any) => {
    const link = document.createElement('a');
    link.href = mockup.image;
    link.download = mockup.filename;
    link.click();
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-background via-background to-primary/5">
      <div className="container mx-auto px-4 py-12">
        {/* Header */}
        <div className="text-center mb-12">
          <div className="inline-flex items-center gap-2 bg-primary/10 text-primary px-4 py-2 rounded-full text-sm font-medium mb-4">
            <Smartphone className="w-4 h-4" />
            UI Mockup Gallery
          </div>
          <h1 className="text-4xl md:text-5xl font-bold bg-gradient-to-r from-foreground to-foreground/70 bg-clip-text text-transparent mb-4">
            Weechoo Platform Designs
          </h1>
          <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
            High-fidelity, interactive mockups showcasing the complete Weechoo ecosystem
          </p>
        </div>

        {/* View Toggle */}
        <div className="flex justify-center mb-8">
          <div className="inline-flex bg-muted rounded-lg p-1">
            <Button
              variant={viewMode === 'grid' ? 'default' : 'ghost'}
              size="sm"
              onClick={() => setViewMode('grid')}
              className="rounded-md"
            >
              <Monitor className="w-4 h-4 mr-2" />
              Gallery View
            </Button>
            <Button
              variant={viewMode === 'preview' ? 'default' : 'ghost'}
              size="sm"
              onClick={() => setViewMode('preview')}
              className="rounded-md"
            >
              <Eye className="w-4 h-4 mr-2" />
              Preview Mode
            </Button>
          </div>
        </div>

        {viewMode === 'grid' ? (
          /* Grid View */
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            {mockups.map((mockup, index) => (
              <Card 
                key={index} 
                className="group cursor-pointer overflow-hidden border-0 shadow-lg hover:shadow-2xl transition-all duration-500 hover:scale-[1.02] bg-card/80 backdrop-blur-sm"
                onClick={() => {
                  setSelectedMockup(index);
                  setViewMode('preview');
                }}
              >
                <CardContent className="p-0">
                  <div className="relative overflow-hidden">
                    <img 
                      src={mockup.image} 
                      alt={mockup.title}
                      className="w-full h-64 object-cover transition-transform duration-700 group-hover:scale-110"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-background/80 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                    <div className="absolute top-4 right-4">
                      <div className="bg-primary/20 backdrop-blur-sm text-primary px-3 py-1 rounded-full text-xs font-medium">
                        {mockup.category}
                      </div>
                    </div>
                  </div>
                  
                  <div className="p-6">
                    <div className="flex items-start justify-between mb-3">
                      <div>
                        <h3 className="text-xl font-bold text-foreground mb-1">
                          {mockup.title}
                        </h3>
                        <p className="text-primary font-medium text-sm">
                          {mockup.subtitle}
                        </p>
                      </div>
                      <Button
                        size="sm"
                        variant="outline"
                        onClick={(e) => {
                          e.stopPropagation();
                          downloadImage(mockup);
                        }}
                        className="shrink-0"
                      >
                        <Download className="w-4 h-4" />
                      </Button>
                    </div>
                    
                    <p className="text-muted-foreground text-sm mb-4 line-clamp-2">
                      {mockup.description}
                    </p>
                    
                    <div className="flex flex-wrap gap-2">
                      {mockup.features.map((feature, idx) => (
                        <span
                          key={idx}
                          className="inline-flex items-center px-2.5 py-1 rounded-md text-xs font-medium bg-secondary/50 text-secondary-foreground"
                        >
                          {feature}
                        </span>
                      ))}
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        ) : (
          /* Preview Mode */
          <div className="max-w-6xl mx-auto">
            {selectedMockup !== null && (
              <Card className="overflow-hidden border-0 shadow-2xl bg-card/90 backdrop-blur-sm">
                <CardContent className="p-0">
                  <div className="grid lg:grid-cols-2 gap-0">
                    <div className="relative">
                      <img 
                        src={mockups[selectedMockup].image} 
                        alt={mockups[selectedMockup].title}
                        className="w-full h-full object-cover min-h-[500px]"
                      />
                      <div className="absolute inset-0 bg-gradient-to-r from-transparent to-background/20" />
                    </div>
                    
                    <div className="p-8 lg:p-12 flex flex-col justify-center">
                      <div className="mb-6">
                        <div className="inline-flex items-center gap-2 bg-primary/10 text-primary px-3 py-1 rounded-full text-sm font-medium mb-4">
                          {mockups[selectedMockup].category} Interface
                        </div>
                        <h2 className="text-3xl font-bold text-foreground mb-2">
                          {mockups[selectedMockup].title}
                        </h2>
                        <p className="text-primary font-semibold text-lg mb-4">
                          {mockups[selectedMockup].subtitle}
                        </p>
                        <p className="text-muted-foreground leading-relaxed">
                          {mockups[selectedMockup].description}
                        </p>
                      </div>
                      
                      <div className="mb-8">
                        <h4 className="font-semibold text-foreground mb-3">Key Features</h4>
                        <div className="grid grid-cols-2 gap-3">
                          {mockups[selectedMockup].features.map((feature, idx) => (
                            <div
                              key={idx}
                              className="flex items-center gap-2 text-sm text-muted-foreground"
                            >
                              <div className="w-1.5 h-1.5 rounded-full bg-primary" />
                              {feature}
                            </div>
                          ))}
                        </div>
                      </div>
                      
                      <div className="flex gap-3">
                        <Button 
                          onClick={() => downloadImage(mockups[selectedMockup])}
                          className="flex-1"
                        >
                          <Download className="w-4 h-4 mr-2" />
                          Download Mockup
                        </Button>
                        <Button 
                          variant="outline"
                          onClick={() => setViewMode('grid')}
                        >
                          Back to Gallery
                        </Button>
                      </div>
                    </div>
                  </div>
                </CardContent>
              </Card>
            )}
            
            {/* Navigation */}
            <div className="flex justify-center mt-8 gap-2">
              {mockups.map((_, index) => (
                <button
                  key={index}
                  onClick={() => setSelectedMockup(index)}
                  className={`w-3 h-3 rounded-full transition-all duration-300 ${
                    selectedMockup === index 
                      ? 'bg-primary scale-125' 
                      : 'bg-muted-foreground/30 hover:bg-muted-foreground/60'
                  }`}
                />
              ))}
            </div>
          </div>
        )}
        
        {/* Download Instructions */}
        <div className="mt-16 text-center">
          <Card className="max-w-2xl mx-auto bg-primary/5 border-primary/20">
            <CardContent className="p-6">
              <h3 className="font-bold text-foreground mb-3 flex items-center justify-center gap-2">
                <Download className="w-5 h-5 text-primary" />
                Download Instructions
              </h3>
              <p className="text-muted-foreground text-sm leading-relaxed">
                Click the download button on any mockup to save high-resolution images perfect for 
                sharing with developers, stakeholders, and design teams. All images are optimized 
                for both digital presentations and print materials.
              </p>
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  );
};

export default MockupGallery;