
import React from 'react';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import { 
  LayoutDashboard, 
  BookOpen, 
  ClipboardList, 
  Video, 
  CalendarCheck, 
  BarChart3, 
  Settings, 
  LogOut,
  Bell,
  Search,
  Menu,
  X
} from 'lucide-react';
import { useAuth } from '../App';

const DashboardLayout = ({ children }) => {
  const { user, logout } = useAuth();
  const location = useLocation();
  const navigate = useNavigate();
  const [isSidebarOpen, setIsSidebarOpen] = React.useState(true);

  const menuItems = [
    { name: 'Overview', icon: LayoutDashboard, path: '/dashboard' },
    { name: 'Assignments', icon: ClipboardList, path: '/dashboard/assignments' },
    { name: 'Online Classes', icon: Video, path: '/dashboard/online-classes' },
    { name: 'Exams & Results', icon: BarChart3, path: '/dashboard/exams' },
    { name: 'Attendance', icon: CalendarCheck, path: '/dashboard/attendance' },
  ];

  const handleLogout = () => {
    logout();
    navigate('/');
  };

  return (
    <div className="flex h-screen bg-slate-50 overflow-hidden">
      {/* Sidebar */}
      <aside 
        className={`${
          isSidebarOpen ? 'w-64' : 'w-20'
        } bg-white border-r border-slate-200 transition-all duration-300 flex flex-col hidden md:flex`}
      >
        <div className="p-6 flex items-center gap-3">
          <BookOpen className="text-blue-600 h-8 w-8 flex-shrink-0" />
          {isSidebarOpen && <span className="font-bold text-xl tracking-tight">LMS <span className="text-blue-600">Pro</span></span>}
        </div>

        <nav className="flex-1 px-4 space-y-2 mt-4">
          {menuItems.map((item) => {
            const isActive = location.pathname === item.path;
            return (
              <Link
                key={item.name}
                to={item.path}
                className={`flex items-center gap-4 p-3 rounded-xl transition-all ${
                  isActive 
                    ? 'bg-blue-600 text-white shadow-lg' 
                    : 'text-slate-500 hover:bg-slate-50 hover:text-blue-600'
                }`}
              >
                <item.icon size={22} className="flex-shrink-0" />
                {isSidebarOpen && <span className="font-medium">{item.name}</span>}
              </Link>
            );
          })}
        </nav>

        <div className="p-4 border-t border-slate-100">
          <button
            onClick={handleLogout}
            className="flex items-center gap-4 p-3 w-full rounded-xl text-slate-500 hover:bg-red-50 hover:text-red-600 transition-all"
          >
            <LogOut size={22} className="flex-shrink-0" />
            {isSidebarOpen && <span className="font-medium">Sign Out</span>}
          </button>
        </div>
      </aside>

      {/* Main Content Area */}
      <div className="flex-1 flex flex-col overflow-hidden">
        {/* Header */}
        <header className="h-16 bg-white border-b border-slate-200 flex items-center justify-between px-8 shadow-sm">
          <div className="flex items-center gap-4">
            <button 
              onClick={() => setIsSidebarOpen(!isSidebarOpen)}
              className="p-2 hover:bg-slate-100 rounded-lg text-slate-500 hidden md:block"
            >
              <Menu size={20} />
            </button>
            <div className="relative max-w-md hidden lg:block">
              <Search className="absolute left-3 top-1/2 -translate-y-1/2 text-slate-400" size={18} />
              <input 
                type="text" 
                placeholder="Search classes, materials..." 
                className="pl-10 pr-4 py-2 bg-slate-50 border-none rounded-full text-sm focus:ring-2 focus:ring-blue-500 w-64 transition-all focus:w-80" 
              />
            </div>
          </div>

          <div className="flex items-center gap-6">
            <button className="relative p-2 text-slate-500 hover:bg-slate-50 rounded-full transition-all">
              <Bell size={20} />
              <span className="absolute top-2 right-2 w-2 h-2 bg-red-500 rounded-full border-2 border-white"></span>
            </button>
            <div className="flex items-center gap-3">
              <div className="text-right hidden sm:block">
                <p className="text-sm font-bold text-slate-900 leading-none mb-1">{user.name}</p>
                <p className="text-xs text-slate-500 capitalize">{user.role}</p>
              </div>
              <img src={user.avatar} className="w-10 h-10 rounded-full border-2 border-blue-100" />
            </div>
          </div>
        </header>

        {/* Dynamic Page Content */}
        <main className="flex-1 overflow-y-auto p-8">
          {children}
        </main>
      </div>
    </div>
  );
};

export default DashboardLayout;
