
import React from 'react';
import { MOCK_ASSIGNMENTS } from '../../constants';
import { FileText, Calendar, Upload, CheckCircle2, Clock } from 'lucide-react';

const AssignmentsPage = () => {
  return (
    <div className="space-y-8">
      <div className="flex justify-between items-center">
        <div>
          <h1 className="text-3xl font-bold text-slate-900">Assignments</h1>
          <p className="text-slate-500">Manage and track your coursework submissions.</p>
        </div>
        <div className="flex gap-2">
          <button className="px-4 py-2 bg-white border border-slate-200 rounded-lg text-sm font-medium">All</button>
          <button className="px-4 py-2 bg-blue-600 text-white rounded-lg text-sm font-medium">Pending</button>
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-6">
        {MOCK_ASSIGNMENTS.map(task => (
          <div key={task.id} className="bg-white p-6 rounded-3xl shadow-sm border border-slate-100 hover:shadow-md transition-all">
            <div className="flex justify-between items-start mb-4">
              <div className="w-10 h-10 bg-blue-50 text-blue-600 rounded-xl flex items-center justify-center">
                <FileText size={20} />
              </div>
              <span className={`px-3 py-1 rounded-full text-[10px] font-bold uppercase tracking-wider ${
                task.status === 'pending' ? 'bg-orange-100 text-orange-600' :
                task.status === 'submitted' ? 'bg-blue-100 text-blue-600' :
                'bg-green-100 text-green-600'
              }`}>
                {task.status}
              </span>
            </div>
            <h3 className="text-lg font-bold text-slate-900 mb-2">{task.title}</h3>
            <p className="text-sm text-slate-500 mb-6">{task.course}</p>
            
            <div className="flex items-center gap-2 text-slate-400 mb-6">
              <Calendar size={14} />
              <span className="text-xs font-medium">Due: {task.dueDate}</span>
            </div>

            <div className="pt-6 border-t border-slate-50 flex items-center justify-between">
              {task.status === 'pending' ? (
                <button className="w-full flex items-center justify-center gap-2 py-3 bg-blue-600 text-white rounded-xl font-bold text-sm hover:bg-blue-700 transition-all">
                  <Upload size={16} /> Upload Work
                </button>
              ) : (
                <button className="w-full flex items-center justify-center gap-2 py-3 bg-slate-50 text-slate-400 rounded-xl font-bold text-sm cursor-not-allowed">
                  <CheckCircle2 size={16} /> Submitted
                </button>
              )}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default AssignmentsPage;
