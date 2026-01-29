
import React from 'react';
import { MOCK_EXAMS } from '../../constants';
import { Award, TrendingUp, Calendar, ArrowRight } from 'lucide-react';

const ExamsPage = () => {
  return (
    <div className="space-y-8">
      <div>
        <h1 className="text-3xl font-bold text-slate-900">Exams & Results</h1>
        <p className="text-slate-500">Track your performance and upcoming assessments.</p>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
        <div className="lg:col-span-2 space-y-6">
           <div className="bg-white rounded-3xl border border-slate-100 overflow-hidden shadow-sm">
             <table className="w-full text-left">
               <thead className="bg-slate-50 border-b">
                 <tr>
                   <th className="px-6 py-4 text-xs font-bold text-slate-400 uppercase tracking-wider">Subject</th>
                   <th className="px-6 py-4 text-xs font-bold text-slate-400 uppercase tracking-wider">Score</th>
                   <th className="px-6 py-4 text-xs font-bold text-slate-400 uppercase tracking-wider">Grade</th>
                   <th className="px-6 py-4 text-xs font-bold text-slate-400 uppercase tracking-wider">Status</th>
                 </tr>
               </thead>
               <tbody className="divide-y divide-slate-50">
                 {MOCK_EXAMS.map((exam, i) => (
                   <tr key={i} className="hover:bg-slate-50 transition-colors">
                     <td className="px-6 py-4 font-bold text-slate-900">{exam.subject}</td>
                     <td className="px-6 py-4 text-slate-600">{exam.score} / {exam.total}</td>
                     <td className="px-6 py-4">
                       <span className="px-3 py-1 bg-blue-100 text-blue-600 rounded-full font-bold text-xs">{exam.grade}</span>
                     </td>
                     <td className="px-6 py-4">
                        <span className="flex items-center gap-1.5 text-green-600 text-xs font-bold">
                           <Award size={14} /> Passed
                        </span>
                     </td>
                   </tr>
                 ))}
               </tbody>
             </table>
           </div>
        </div>

        <div className="space-y-6">
           <div className="bg-blue-600 rounded-3xl p-8 text-white">
              <div className="flex items-center justify-between mb-6">
                <TrendingUp size={32} />
                <span className="text-xs font-bold uppercase tracking-widest opacity-80">Rank: 04/45</span>
              </div>
              <h3 className="text-2xl font-bold mb-2">Performance Boost</h3>
              <p className="text-blue-100 text-sm mb-6 leading-relaxed">Your scores have improved by 12% since the last semester. Keep it up!</p>
              <button className="w-full py-3 bg-white text-blue-600 rounded-xl font-bold hover:bg-blue-50 transition-all flex items-center justify-center gap-2">
                 Full Analytics <ArrowRight size={18} />
              </button>
           </div>

           <div className="bg-white rounded-3xl p-8 border border-slate-100 shadow-sm">
              <h3 className="font-bold text-lg mb-4">Upcoming Schedule</h3>
              <div className="space-y-4">
                 {[
                   { date: 'June 05', event: 'Midterm Science' },
                   { date: 'June 12', event: 'Computer Lab Test' }
                 ].map((ev, i) => (
                   <div key={i} className="flex items-center gap-4">
                      <div className="w-12 h-12 bg-slate-50 rounded-xl flex items-center justify-center shrink-0">
                         <Calendar size={20} className="text-slate-400" />
                      </div>
                      <div>
                        <p className="text-sm font-bold text-slate-900">{ev.event}</p>
                        <p className="text-xs text-slate-400">{ev.date}, 10:00 AM</p>
                      </div>
                   </div>
                 ))}
              </div>
           </div>
        </div>
      </div>
    </div>
  );
};

export default ExamsPage;
