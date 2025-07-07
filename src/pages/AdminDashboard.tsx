import { useState } from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Badge } from '@/components/ui/badge';
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from '@/components/ui/table';
import { 
  LayoutDashboard, 
  Users, 
  UserCheck, 
  MapPin, 
  Calendar, 
  Package, 
  Megaphone, 
  TrendingUp, 
  Settings,
  Search,
  Bell,
  User,
  DollarSign,
  Activity,
  Eye,
  AlertCircle
} from 'lucide-react';

const AdminDashboard = () => {
  const [activeSection, setActiveSection] = useState('dashboard');

  const sidebarItems = [
    { id: 'dashboard', name: 'Dashboard', icon: LayoutDashboard },
    { id: 'customers', name: 'Customers', icon: Users },
    { id: 'partners', name: 'Partners', icon: UserCheck },
    { id: 'centers', name: 'Centers', icon: MapPin },
    { id: 'bookings', name: 'Bookings', icon: Calendar },
    { id: 'inventory', name: 'Inventory', icon: Package },
    { id: 'ads', name: 'Ads', icon: Megaphone },
    { id: 'reports', name: 'Reports', icon: TrendingUp },
    { id: 'settings', name: 'Settings', icon: Settings },
  ];

  const stats = [
    { 
      title: 'Total Revenue', 
      value: '$125,430', 
      change: '+12.5%', 
      icon: DollarSign,
      color: 'text-fresh-success',
      bgColor: 'bg-fresh-success/10'
    },
    { 
      title: 'Active Bookings', 
      value: '342', 
      change: '+8.2%', 
      icon: Activity,
      color: 'text-primary',
      bgColor: 'bg-primary/10'
    },
    { 
      title: 'Partner Performance', 
      value: '94.2%', 
      change: '+2.1%', 
      icon: UserCheck,
      color: 'text-fresh-aqua',
      bgColor: 'bg-fresh-aqua/10'
    },
    { 
      title: 'Ad Views', 
      value: '1.2M', 
      change: '+15.3%', 
      icon: Eye,
      color: 'text-fresh-warning',
      bgColor: 'bg-fresh-warning/10'
    },
  ];

  const recentBookings = [
    { id: 'BK001', customer: 'John Doe', service: 'Premium Wash', amount: '$35', status: 'Completed', date: '2024-01-15' },
    { id: 'BK002', customer: 'Sarah Wilson', service: 'Express Wash', amount: '$20', status: 'In Progress', date: '2024-01-15' },
    { id: 'BK003', customer: 'Mike Johnson', service: 'Interior Detail', amount: '$45', status: 'Scheduled', date: '2024-01-16' },
    { id: 'BK004', customer: 'Emma Davis', service: 'Full Service', amount: '$60', status: 'Completed', date: '2024-01-14' },
    { id: 'BK005', customer: 'Chris Brown', service: 'Basic Wash', amount: '$15', status: 'Cancelled', date: '2024-01-13' },
  ];

  const complaints = [
    { id: 'C001', customer: 'Alice Parker', issue: 'Service not completed', priority: 'High', status: 'Open' },
    { id: 'C002', customer: 'Bob Smith', issue: 'Payment issue', priority: 'Medium', status: 'Resolved' },
    { id: 'C003', customer: 'Carol White', issue: 'Washer was late', priority: 'Low', status: 'In Progress' },
  ];

  const getStatusColor = (status: string) => {
    switch (status.toLowerCase()) {
      case 'completed': return 'bg-fresh-success/10 text-fresh-success';
      case 'in progress': return 'bg-fresh-warning/10 text-fresh-warning';
      case 'scheduled': return 'bg-primary/10 text-primary';
      case 'cancelled': return 'bg-destructive/10 text-destructive';
      default: return 'bg-muted text-muted-foreground';
    }
  };

  const getPriorityColor = (priority: string) => {
    switch (priority.toLowerCase()) {
      case 'high': return 'bg-destructive/10 text-destructive';
      case 'medium': return 'bg-fresh-warning/10 text-fresh-warning';
      case 'low': return 'bg-fresh-success/10 text-fresh-success';
      default: return 'bg-muted text-muted-foreground';
    }
  };

  return (
    <div className="min-h-screen bg-fresh-gray-light flex">
      {/* Sidebar */}
      <div className="w-64 bg-card shadow-soft">
        <div className="p-6 border-b border-border">
          <h1 className="text-xl font-bold text-foreground">Fresh Finish</h1>
          <p className="text-sm text-muted-foreground">Admin Dashboard</p>
        </div>
        
        <nav className="p-4">
          <ul className="space-y-2">
            {sidebarItems.map((item) => {
              const IconComponent = item.icon;
              return (
                <li key={item.id}>
                  <button
                    onClick={() => setActiveSection(item.id)}
                    className={`w-full flex items-center gap-3 px-3 py-2 rounded-lg text-left transition-colors ${
                      activeSection === item.id
                        ? 'bg-primary text-white'
                        : 'text-muted-foreground hover:bg-muted hover:text-foreground'
                    }`}
                  >
                    <IconComponent className="h-5 w-5" />
                    {item.name}
                  </button>
                </li>
              );
            })}
          </ul>
        </nav>
      </div>

      {/* Main Content */}
      <div className="flex-1 flex flex-col">
        {/* Top Bar */}
        <header className="bg-card shadow-soft p-4 flex items-center justify-between">
          <div className="flex items-center gap-4">
            <h2 className="text-2xl font-semibold text-foreground capitalize">
              {activeSection === 'dashboard' ? 'Dashboard Overview' : activeSection}
            </h2>
          </div>
          
          <div className="flex items-center gap-4">
            <div className="relative">
              <Search className="h-4 w-4 absolute left-3 top-1/2 transform -translate-y-1/2 text-muted-foreground" />
              <Input placeholder="Search..." className="pl-9 w-64" />
            </div>
            <Button variant="ghost" size="icon">
              <Bell className="h-5 w-5" />
            </Button>
            <Button variant="ghost" size="icon">
              <User className="h-5 w-5" />
            </Button>
          </div>
        </header>

        {/* Dashboard Content */}
        <main className="flex-1 p-6">
          {activeSection === 'dashboard' && (
            <div className="space-y-6">
              {/* Stats Cards */}
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
                {stats.map((stat, index) => {
                  const IconComponent = stat.icon;
                  return (
                    <Card key={index}>
                      <CardContent className="p-6">
                        <div className="flex items-center justify-between">
                          <div>
                            <p className="text-sm text-muted-foreground">{stat.title}</p>
                            <p className="text-2xl font-bold text-foreground">{stat.value}</p>
                            <p className={`text-sm ${stat.color}`}>{stat.change}</p>
                          </div>
                          <div className={`w-12 h-12 ${stat.bgColor} rounded-lg flex items-center justify-center`}>
                            <IconComponent className={`h-6 w-6 ${stat.color}`} />
                          </div>
                        </div>
                      </CardContent>
                    </Card>
                  );
                })}
              </div>

              {/* Charts Section */}
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
                <Card>
                  <CardHeader>
                    <CardTitle>Revenue Overview</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <div className="h-64 bg-gradient-to-br from-primary/10 to-fresh-aqua/10 rounded-lg flex items-center justify-center">
                      <div className="text-center">
                        <TrendingUp className="h-12 w-12 text-primary mx-auto mb-4" />
                        <p className="text-muted-foreground">Revenue chart visualization</p>
                      </div>
                    </div>
                  </CardContent>
                </Card>

                <Card>
                  <CardHeader>
                    <CardTitle>Active Users</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <div className="h-64 bg-gradient-to-br from-fresh-aqua/10 to-primary/10 rounded-lg flex items-center justify-center">
                      <div className="text-center">
                        <Users className="h-12 w-12 text-fresh-aqua mx-auto mb-4" />
                        <p className="text-muted-foreground">User activity chart</p>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </div>

              {/* Tables Section */}
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
                {/* Recent Bookings */}
                <Card>
                  <CardHeader>
                    <CardTitle>Latest Bookings</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <Table>
                      <TableHeader>
                        <TableRow>
                          <TableHead>ID</TableHead>
                          <TableHead>Customer</TableHead>
                          <TableHead>Service</TableHead>
                          <TableHead>Status</TableHead>
                          <TableHead>Amount</TableHead>
                        </TableRow>
                      </TableHeader>
                      <TableBody>
                        {recentBookings.map((booking) => (
                          <TableRow key={booking.id}>
                            <TableCell className="font-medium">{booking.id}</TableCell>
                            <TableCell>{booking.customer}</TableCell>
                            <TableCell>{booking.service}</TableCell>
                            <TableCell>
                              <Badge className={getStatusColor(booking.status)}>
                                {booking.status}
                              </Badge>
                            </TableCell>
                            <TableCell className="font-semibold">{booking.amount}</TableCell>
                          </TableRow>
                        ))}
                      </TableBody>
                    </Table>
                  </CardContent>
                </Card>

                {/* Complaints */}
                <Card>
                  <CardHeader>
                    <CardTitle className="flex items-center gap-2">
                      <AlertCircle className="h-5 w-5 text-fresh-warning" />
                      Recent Complaints
                    </CardTitle>
                  </CardHeader>
                  <CardContent>
                    <div className="space-y-4">
                      {complaints.map((complaint) => (
                        <div key={complaint.id} className="border border-border rounded-lg p-4">
                          <div className="flex items-center justify-between mb-2">
                            <h4 className="font-medium text-foreground">{complaint.customer}</h4>
                            <Badge className={getPriorityColor(complaint.priority)}>
                              {complaint.priority}
                            </Badge>
                          </div>
                          <p className="text-sm text-muted-foreground mb-2">{complaint.issue}</p>
                          <div className="flex items-center justify-between">
                            <span className="text-xs text-muted-foreground">#{complaint.id}</span>
                            <Badge variant="outline">{complaint.status}</Badge>
                          </div>
                        </div>
                      ))}
                    </div>
                  </CardContent>
                </Card>
              </div>
            </div>
          )}

          {/* Other sections placeholder */}
          {activeSection !== 'dashboard' && (
            <Card>
              <CardHeader>
                <CardTitle className="capitalize">{activeSection} Management</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground">
                  {activeSection} management interface would be implemented here.
                </p>
              </CardContent>
            </Card>
          )}
        </main>
      </div>
    </div>
  );
};

export default AdminDashboard;
