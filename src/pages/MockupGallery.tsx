import employeeDashboardMockup from '@/assets/employee-dashboard-mockup.jpg';
import employeeMenuMockup from '@/assets/employee-menu-mockup.jpg';
import employeeTrackingMockup from '@/assets/employee-tracking-mockup.jpg';
import employerDashboardMockup from '@/assets/employer-dashboard-mockup.jpg';

const MockupGallery = () => {
  const mockups = [
    {
      title: "Employee Dashboard",
      description: "Weekly meal planning and order overview",
      image: employeeDashboardMockup,
      filename: "employee-dashboard-mockup.jpg"
    },
    {
      title: "Employee Menu", 
      description: "Browse and select meals interface",
      image: employeeMenuMockup,
      filename: "employee-menu-mockup.jpg"
    },
    {
      title: "Employee Order Tracking",
      description: "Live order status and delivery tracking", 
      image: employeeTrackingMockup,
      filename: "employee-tracking-mockup.jpg"
    },
    {
      title: "Employer Dashboard",
      description: "Business management and analytics interface",
      image: employerDashboardMockup,
      filename: "employer-dashboard-mockup.jpg"
    }
  ];

  return (
    <div className="min-h-screen bg-gray-50 py-8">
      <div className="container mx-auto px-4">
        <div className="text-center mb-8">
          <h1 className="text-3xl font-bold text-gray-900 mb-2">
            Weechoo Platform UI Mockups
          </h1>
          <p className="text-gray-600">
            Right-click on any image below and "Save image as" to download
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {mockups.map((mockup, index) => (
            <div key={index} className="bg-white rounded-lg shadow-lg overflow-hidden">
              <div className="p-6">
                <h2 className="text-xl font-semibold text-gray-900 mb-2">
                  {mockup.title}
                </h2>
                <p className="text-gray-600 mb-4">
                  {mockup.description}
                </p>
                <p className="text-sm text-gray-500 mb-4">
                  Filename: {mockup.filename}
                </p>
              </div>
              <div className="border-t">
                <img 
                  src={mockup.image} 
                  alt={mockup.title}
                  className="w-full h-auto"
                  style={{ maxHeight: '600px', objectFit: 'contain' }}
                />
              </div>
            </div>
          ))}
        </div>

        <div className="mt-8 text-center">
          <div className="bg-blue-50 border border-blue-200 rounded-lg p-4 max-w-2xl mx-auto">
            <h3 className="font-semibold text-blue-900 mb-2">How to Download:</h3>
            <p className="text-blue-800 text-sm">
              Right-click on any image above and select "Save image as..." to download it to your computer.
              These mockups are perfect for sharing with developers and stakeholders.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default MockupGallery;