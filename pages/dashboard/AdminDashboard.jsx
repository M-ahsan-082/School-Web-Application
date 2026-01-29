
import React from 'react';
import { ShieldCheck, Users, GraduationCap, DollarSign, TrendingUp, Settings, Activity } from 'lucide-react';

const AdminDashboard = () => {
  return (
    <div className="space-y-8 animate-in fade-in slide-in-from-bottom-4 duration-500">
      <div className="flex flex-col md:flex-row md:items-center justify-between gap-4">
        <div>
          <h1 className="text-3xl font-bold text-slate-900">System Command Center 🏛️</h1>
          <p className="text-slate-500">Comprehensive overview of campus operations and system health.</p>
        </div>
        <div className="flex gap-3">
           <button className="p-3 bg-white border border-slate-200 text-slate-600 rounded-xl hover:bg-slate-50 transition-all shadow-sm">
             <Settings size={20} />
           </button>
           <button className="px-6 py-3 bg-slate-900 text-white rounded-xl font-bold text-sm shadow-xl flex items-center gap-2">
             <Activity size={18} /> Generate System Report
           </button>
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
         {[
           { label: 'Total Enrollment', value: '1,248', icon: GraduationCap, color: 'bg-blue-600' },
           { label: 'Faculty Members', value: '84', icon: Users, color: 'bg-green-600' },
           { label: 'Monthly Revenue', value: '$42,500', icon: DollarSign, color: 'bg-purple-600' },
           { label: 'Active Sessions', value: '312', icon: Activity, color: 'bg-orange-600' }
         ].map((stat, i) => (
           <div key={i} className="bg-white p-8 rounded-[2rem] shadow-sm border border-slate-100 group hover:border-blue-200 transition-all">
              <div className={`w-14 h-14 ${stat.color} text-white rounded-2xl flex items-center justify-center shadow-xl mb-6 group-hover:rotate-6 transition-transform`}>
                 <stat.icon size={28} />
              </div>
              <p className="text-sm text-slate-400 font-bold uppercase tracking-widest">{stat.label}</p>
              <p className="text-3xl font-bold text-slate-900 mt-1">{stat.value}</p>
           </div>
         ))}
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
        <div className="bg-white p-8 rounded-[2rem] shadow-sm border border-slate-100">
          <div className="flex items-center justify-between mb-8">
            <h3 className="text-xl font-bold text-slate-900">Attendance Trends</h3>
            <span className="text-xs font-bold text-green-600 bg-green-50 px-3 py-1 rounded-full">+4.2% from last week</span>
          </div>
          <div className="h-64 flex items-end gap-2 px-2">
             {[40, 60, 45, 80, 70, 90, 85].map((h, i) => (
               <div key={i} className="flex-1 bg-blue-100 rounded-t-xl relative group">
                  <div className="absolute bottom-0 left-0 right-0 bg-blue-600 rounded-t-xl transition-all duration-1000" style={{ height: `${h}%` }}></div>
                  <div className="absolute -top-8 left-1/2 -translate-x-1/2 opacity-0 group-hover:opacity-100 transition-opacity text-[10px] font-bold text-slate-900">{h}%</div>
               </div>
             ))}
          </div>
          <div className="flex justify-between mt-4 text-[10px] font-bold text-slate-400 uppercase">
             <span>Mon</span><span>Tue</span><span>Wed</span><span>Thu</span><span>Fri</span><span>Sat</span><span>Sun</span>
          </div>
        </div>

        <div className="bg-white p-8 rounded-[2rem] shadow-sm border border-slate-100">
           <h3 className="text-xl font-bold text-slate-900 mb-8">Recent System Logs</h3>
           <div className="space-y-6">
              {[
                { event: 'New Teacher Onboarded', user: 'Admin Sarah', time: '2 mins ago', icon: ShieldCheck },
                { event: 'Database Backup Completed', user: 'System', time: '1 hour ago', icon: TrendingUp },
                { event: 'Security Alert: Failed Login', user: 'User 102.x.x', time: '3 hours ago', icon: Activity }
              ].map((log, i) => (
                <div key={i} className="flex items-center gap-4">
                   <div className="w-10 h-10 bg-slate-50 text-slate-400 rounded-xl flex items-center justify-center">
                     <log.icon size={20} />
                   </div>
                   <div className="flex-1">
                      <p className="text-sm font-bold text-slate-900">{log.event}</p>
                      <p className="text-xs text-slate-500">{log.user} • {log.time}</p>
                   </div>
                </div>
              ))}
           </div>
        </div>
      </div>
    </div>
  );
};

export default AdminDashboard;
