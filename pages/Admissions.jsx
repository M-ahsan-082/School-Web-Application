
import React from 'react';
import { Send, CheckCircle } from 'lucide-react';

const Admissions = () => {
  return (
    <div className="flex-1 pb-20">
      <div className="bg-blue-600 py-24 text-center px-4">
        <h1 className="text-4xl md:text-6xl font-bold text-white mb-6">Join Our Community</h1>
        <p className="text-blue-100 max-w-2xl mx-auto text-lg">Admissions for the 2024-25 Academic Year are now open.</p>
      </div>

      <div className="max-w-7xl mx-auto px-4 -mt-16 grid grid-cols-1 lg:grid-cols-3 gap-12">
        <div className="lg:col-span-2 bg-white rounded-3xl shadow-xl p-8 md:p-12">
          <h2 className="text-3xl font-bold mb-8">Inquiry Form</h2>
          <form className="space-y-6">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <input type="text" placeholder="Student Full Name" className="p-4 bg-slate-50 border rounded-xl outline-none focus:ring-2 focus:ring-blue-600" />
              <input type="date" className="p-4 bg-slate-50 border rounded-xl outline-none focus:ring-2 focus:ring-blue-600" />
            </div>
            <input type="email" placeholder="Parent Email Address" className="w-full p-4 bg-slate-50 border rounded-xl outline-none focus:ring-2 focus:ring-blue-600" />
            <select className="w-full p-4 bg-slate-50 border rounded-xl outline-none focus:ring-2 focus:ring-blue-600">
              <option>Applying for Grade 9</option>
              <option>Applying for Grade 10</option>
              <option>Applying for Grade 11</option>
            </select>
            <textarea rows="4" placeholder="Additional Notes" className="w-full p-4 bg-slate-50 border rounded-xl outline-none focus:ring-2 focus:ring-blue-600"></textarea>
            <button className="w-full py-4 bg-blue-600 text-white rounded-xl font-bold flex items-center justify-center gap-2 hover:bg-blue-700 transition-all">
              <Send size={20} /> Submit Application
            </button>
          </form>
        </div>
        <div className="space-y-8">
          <div className="bg-slate-900 p-8 rounded-3xl text-white shadow-lg">
            <h3 className="text-xl font-bold mb-6">Steps to Apply</h3>
            <ul className="space-y-6">
              <li className="flex gap-4">
                <div className="w-8 h-8 bg-blue-600 rounded-full flex items-center justify-center font-bold text-sm">1</div>
                <p className="text-sm text-slate-300">Submit inquiry form online.</p>
              </li>
              <li className="flex gap-4">
                <div className="w-8 h-8 bg-blue-600 rounded-full flex items-center justify-center font-bold text-sm">2</div>
                <p className="text-sm text-slate-300">Schedule a campus visit.</p>
              </li>
              <li className="flex gap-4">
                <div className="w-8 h-8 bg-blue-600 rounded-full flex items-center justify-center font-bold text-sm">3</div>
                <p className="text-sm text-slate-300">Entrance assessment session.</p>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Admissions;
