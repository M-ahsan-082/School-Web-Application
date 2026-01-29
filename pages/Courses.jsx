
import React, { useState } from 'react';
import { Search, BookOpen, Clock, Users } from 'lucide-react';
import { MOCK_COURSES } from '../constants';

const Courses = () => {
  const [searchTerm, setSearchTerm] = useState('');

  const filteredCourses = MOCK_COURSES.filter(course =>
    course.title.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <div className="flex-1 pb-20">
      <div className="bg-slate-900 py-20 text-center px-4">
        <h1 className="text-4xl font-bold text-white mb-4">Academic Programs</h1>
        <p className="text-blue-100 max-w-2xl mx-auto">Explore our wide range of courses designed to prepare students for the challenges of the future.</p>
      </div>

      <div className="max-w-7xl mx-auto px-4 -mt-8">
        <div className="bg-white p-4 rounded-2xl shadow-xl flex items-center gap-4 max-w-2xl mx-auto">
          <Search className="text-slate-400" size={24} />
          <input
            type="text"
            placeholder="Search for a course or subject..."
            className="flex-1 outline-none text-slate-700"
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
          />
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mt-16">
          {filteredCourses.map(course => (
            <div key={course.id} className="bg-white rounded-3xl overflow-hidden shadow-lg border border-slate-100 hover:shadow-2xl transition-all group">
              <div className="relative h-56 overflow-hidden">
                <img src={course.thumbnail} className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500" />
                <div className="absolute top-4 right-4 bg-blue-600 text-white text-xs font-bold px-3 py-1 rounded-full shadow-lg">
                  Level: Advanced
                </div>
              </div>
              <div className="p-8">
                <h3 className="text-2xl font-bold text-slate-900 mb-2">{course.title}</h3>
                <p className="text-slate-500 mb-6 text-sm line-clamp-2">{course.description}</p>
                
                <div className="flex items-center justify-between py-4 border-t border-slate-50 text-sm">
                  <div className="flex items-center gap-2 text-slate-600">
                    <Users size={18} className="text-blue-600" />
                    <span>{course.students} Students</span>
                  </div>
                  <div className="flex items-center gap-2 text-slate-600">
                    <Clock size={18} className="text-blue-600" />
                    <span>6 Months</span>
                  </div>
                </div>

                <button className="w-full mt-6 py-3 bg-blue-600 text-white rounded-xl font-bold hover:bg-blue-700 transition-all shadow-md">
                  View Syllabus
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Courses;
