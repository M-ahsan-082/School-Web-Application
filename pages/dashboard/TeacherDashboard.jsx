
import React from 'react';
import { Users, FileText, Video, Award, PlusCircle, MessageCircle } from 'lucide-react';
import { MOCK_COURSES } from '../../constants';

const TeacherDashboard = () => {
  return (
    <div className="space-y-8 animate-in fade-in slide-in-from-bottom-4 duration-500">
      <div className="flex flex-col md:flex-row md:items-center justify-between gap-4">
        <div>
          <h1 className="text-3xl font-bold text-slate-900">Faculty Hub 🍎</h1>
          <p className="text-slate-500">Managing Advanced Mathematics and 2 other courses.</p>
        </div>
        <button className="bg-blue-600 text-white px-6 py-3 rounded-2xl font-bold flex items-center gap-2 hover:bg-blue-700 transition-all shadow-lg">
          <PlusCircle size={20} /> Create New Lesson
        </button>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        {[
          { label: 'Total Students', value: '142', icon: Users, color: 'bg-blue-600' },
          { label: 'Active Classes', value: '3', icon: Video, color: 'bg-green-600' },
          { label: 'Unchecked Tasks', value: '28', icon: FileText, color: 'bg-orange-500' },
          { label: 'Avg Attendance', value: '94%', icon: Award, color: 'bg-purple-600' },
        ].map((stat, i) => (
          <div key={i} className="bg-white p-6 rounded-3xl shadow-sm border border-slate-100 flex items-center gap-4">
             <div className={`w-12 h-12 ${stat.color} text-white rounded-2xl flex items-center justify-center shadow-lg`}>
                <stat.icon size={24} />
             </div>
             <div>
                <p className="text-sm text-slate-500 font-medium">{stat.label}</p>
                <p className="text-2xl font-bold text-slate-900">{stat.value}</p>
             </div>
          </div>
        ))}
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
        <div className="lg:col-span-2 space-y-6">
          <div className="bg-white p-8 rounded-3xl shadow-sm border border-slate-100">
             <h3 className="text-xl font-bold mb-6 text-slate-900 flex items-center gap-2">My Active Courses</h3>
             <div className="space-y-4">
                {MOCK_COURSES.slice(0, 2).map(course => (
                  <div key={course.id} className="flex items-center justify-between p-4 rounded-2xl border border-slate-50 hover:border-blue-100 hover:bg-blue-50/30 transition-all group">
                     <div className="flex items-center gap-4">
                        <img src={course.thumbnail} className="w-16 h-12 rounded-lg object-cover" />
                        <div>
                          <p className="font-bold text-slate-900">{course.title}</p>
                          <p className="text-xs text-slate-400">{course.students} Enrolled</p>
                        </div>
                     </div>
                     <button className="text-blue-600 text-sm font-bold opacity-0 group-hover:opacity-100 transition-opacity">Manage Class</button>
                  </div>
                ))}
             </div>
          </div>
        </div>

        <div className="space-y-6">
           <div className="bg-slate-900 text-white p-8 rounded-3xl shadow-xl">
              <h3 className="text-lg font-bold mb-4 flex items-center gap-2 text-white"><MessageCircle className="text-blue-400" /> Student Feedback</h3>
              <div className="space-y-4">
                 <div className="p-4 bg-slate-800 rounded-2xl text-xs text-slate-300 leading-relaxed italic">
                    "The last quiz was challenging but fair. Looking forward to the next unit!"
                    <p className="mt-2 font-bold text-blue-400">— Alice Vance</p>
                 </div>
                 <div className="p-4 bg-slate-800 rounded-2xl text-xs text-slate-300 leading-relaxed italic">
                    "Can we have more practical examples in the Computer Science lecture?"
                    <p className="mt-2 font-bold text-blue-400">— Bob Smith</p>
                 </div>
              </div>
           </div>
        </div>
      </div>
    </div>
  );
};

export default TeacherDashboard;
