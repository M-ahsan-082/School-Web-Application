
import React from 'react';
import { MOCK_ATTENDANCE } from '../../constants';
import { Calendar as CalendarIcon, CheckCircle, XCircle, Clock } from 'lucide-react';

const AttendancePage = () => {
  return (
    <div className="space-y-8">
      <div className="flex justify-between items-center">
        <div>
          <h1 className="text-3xl font-bold text-slate-900">My Attendance</h1>
          <p className="text-slate-500">View your presence history across all enrolled courses.</p>
        </div>
        <div className="bg-white px-6 py-4 rounded-2xl shadow-sm border border-slate-100 text-center">
           <p className="text-[10px] font-bold text-slate-400 uppercase">Average Rate</p>
           <p className="text-2xl font-bold text-blue-600">96.4%</p>
        </div>
      </div>

      <div className="bg-white rounded-3xl shadow-sm border border-slate-100 overflow-hidden">
        <div className="p-6 border-b border-slate-50 flex items-center gap-2">
          <CalendarIcon size={20} className="text-blue-600" />
          <h3 className="font-bold text-slate-900">Attendance Log</h3>
        </div>
        <table className="w-full text-left">
          <thead className="bg-slate-50">
            <tr>
              <th className="px-6 py-4 text-xs font-bold text-slate-400 uppercase">Date</th>
              <th className="px-6 py-4 text-xs font-bold text-slate-400 uppercase">Subject</th>
              <th className="px-6 py-4 text-xs font-bold text-slate-400 uppercase">Status</th>
            </tr>
          </thead>
          <tbody className="divide-y divide-slate-50">
            {MOCK_ATTENDANCE.map((record, i) => (
              <tr key={i} className="hover:bg-slate-50 transition-colors">
                <td className="px-6 py-4 text-sm text-slate-600 font-medium">{record.date}</td>
                <td className="px-6 py-4 text-sm text-slate-900 font-bold">{record.subject}</td>
                <td className="px-6 py-4">
                  {record.status === 'present' && (
                    <span className="inline-flex items-center gap-1 px-3 py-1 bg-green-100 text-green-600 rounded-full text-xs font-bold">
                      <CheckCircle size={14} /> Present
                    </span>
                  )}
                  {record.status === 'absent' && (
                    <span className="inline-flex items-center gap-1 px-3 py-1 bg-red-100 text-red-600 rounded-full text-xs font-bold">
                      <XCircle size={14} /> Absent
                    </span>
                  )}
                  {record.status === 'late' && (
                    <span className="inline-flex items-center gap-1 px-3 py-1 bg-orange-100 text-orange-600 rounded-full text-xs font-bold">
                      <Clock size={14} /> Late
                    </span>
                  )}
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default AttendancePage;
