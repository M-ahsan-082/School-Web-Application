
import React from 'react';
import { MOCK_TEACHERS } from '../constants';
import { Mail, Linkedin } from 'lucide-react';

const Teachers = () => {
  return (
    <div className="flex-1 bg-slate-50 pb-20">
      <div className="bg-blue-600 py-20 text-center px-4">
        <h1 className="text-4xl font-bold text-white mb-4">Meet Our Educators</h1>
        <p className="text-blue-100 max-w-xl mx-auto">Learn from world-class faculty dedicated to student success and academic innovation.</p>
      </div>

      <div className="max-w-7xl mx-auto px-4 mt-[-40px] grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
        {MOCK_TEACHERS.map((teacher, i) => (
          <div key={i} className="bg-white p-6 rounded-3xl shadow-lg border border-slate-100 text-center group hover:scale-105 transition-all">
            <div className="relative mb-6">
              <img src={teacher.image} className="w-32 h-32 rounded-full mx-auto border-4 border-blue-50 group-hover:border-blue-600 transition-colors" />
            </div>
            <h3 className="text-xl font-bold text-slate-900">{teacher.name}</h3>
            <p className="text-blue-600 text-sm font-medium mb-6">{teacher.role}</p>
            <div className="flex justify-center gap-4 text-slate-400">
               <button className="hover:text-blue-600 transition-colors"><Mail size={20} /></button>
               <button className="hover:text-blue-600 transition-colors"><Linkedin size={20} /></button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Teachers;
