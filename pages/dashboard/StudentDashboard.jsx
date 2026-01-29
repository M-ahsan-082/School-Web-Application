
import React from 'react';
import { BookOpen, Clock, FileText, CheckCircle, TrendingUp } from 'lucide-react';
import { MOCK_COURSES, MOCK_ASSIGNMENTS } from '../../constants';

const StudentDashboard = () => {
  return (
    <div className="space-y-8 animate-in fade-in duration-500">
      <div className="flex justify-between items-center">
        <div>
          <h1 className="text-3xl font-bold text-slate-900">Welcome, Student! 👋</h1>
          <p className="text-slate-500">Track your progress and upcoming tasks.</p>
        </div>
        <div className="bg-white p-4 rounded-xl shadow-sm border flex items-center gap-4">
          <TrendingUp className="text-green-600" />
          <div>
            <p className="text-xs text-slate-400 font-bold">Overall GPA</p>
            <p className="text-xl font-bold">3.8 / 4.0</p>
          </div>
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
        {[
          { label: 'Courses', value: '6', icon: BookOpen, color: 'text-blue-600', bg: 'bg-blue-50' },
          { label: 'Assignments', value: '4', icon: Clock, color: 'text-orange-600', bg: 'bg-orange-50' },
          { label: 'Avg Grade', value: 'A-', icon: FileText, color: 'text-purple-600', bg: 'bg-purple-50' },
          { label: 'Attendance', value: '98%', icon: CheckCircle, color: 'text-green-600', bg: 'bg-green-50' },
        ].map((stat, i) => (
          <div key={i} className="bg-white p-6 rounded-2xl shadow-sm border flex items-center gap-4">
            <div className={`p-3 rounded-xl ${stat.bg} ${stat.color}`}>
              <stat.icon size={24} />
            </div>
            <div>
              <p className="text-sm text-slate-500">{stat.label}</p>
              <p className="text-2xl font-bold">{stat.value}</p>
            </div>
          </div>
        ))}
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
        <div className="lg:col-span-2 bg-white p-8 rounded-2xl shadow-sm border">
          <h3 className="text-xl font-bold mb-6">Your Courses</h3>
          <div className="space-y-4">
            {MOCK_COURSES.slice(0, 3).map(course => (
              <div key={course.id} className="flex items-center gap-4 p-4 rounded-xl border hover:bg-slate-50 transition-all">
                <img src={course.thumbnail} className="w-20 h-14 rounded-lg object-cover" />
                <div className="flex-1">
                  <h4 className="font-bold">{course.title}</h4>
                  <p className="text-xs text-slate-500">{course.teacher}</p>
                </div>
                <div className="text-right">
                  <p className="text-sm font-bold text-blue-600">75% Done</p>
                </div>
              </div>
            ))}
          </div>
        </div>
        <div className="bg-white p-8 rounded-2xl shadow-sm border">
          <h3 className="text-xl font-bold mb-6">Next Deadlines</h3>
          <div className="space-y-6">
            {MOCK_ASSIGNMENTS.map(task => (
              <div key={task.id} className="flex gap-4">
                <div className="w-12 h-12 bg-slate-100 rounded-lg flex flex-col items-center justify-center font-bold text-slate-400">
                  <span className="text-[10px]">MAY</span>
                  <span>20</span>
                </div>
                <div>
                  <h4 className="text-sm font-bold">{task.title}</h4>
                  <p className="text-xs text-slate-500">{task.course}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default StudentDashboard;
