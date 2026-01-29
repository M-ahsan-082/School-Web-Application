
import React from 'react';
import { Target, Eye, Heart } from 'lucide-react';

const About = () => {
  return (
    <div className="flex-1 pb-20">
      <div className="bg-slate-900 py-24 text-center px-4">
        <h1 className="text-4xl md:text-6xl font-bold text-white mb-6">Our Legacy & Mission</h1>
        <p className="text-blue-100 max-w-2xl mx-auto text-lg">Since 1995, we have been dedicated to providing a transformative educational experience for students from around the world.</p>
      </div>

      <div className="max-w-7xl mx-auto px-4 mt-[-40px]">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
           {[
             { title: 'Our Mission', icon: Target, desc: 'To empower students with the knowledge and skills necessary to excel in an ever-changing world.' },
             { title: 'Our Vision', icon: Eye, desc: 'To be a global leader in academic excellence and character development.' },
             { title: 'Our Values', icon: Heart, desc: 'Integrity, Respect, Excellence, and Community are at the core of everything we do.' },
           ].map((item, i) => (
             <div key={i} className="bg-white p-10 rounded-3xl shadow-xl border border-slate-100 text-center">
                <div className="w-16 h-16 bg-blue-600 text-white rounded-2xl flex items-center justify-center mx-auto mb-6">
                   <item.icon size={32} />
                </div>
                <h3 className="text-2xl font-bold mb-4">{item.title}</h3>
                <p className="text-slate-600 leading-relaxed">{item.desc}</p>
             </div>
           ))}
        </div>
      </div>

      <section className="mt-20 max-w-7xl mx-auto px-4 grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
        <div>
          <h2 className="text-4xl font-bold text-slate-900 mb-6">Educating the Whole Child</h2>
          <p className="text-slate-600 mb-6 text-lg leading-relaxed">
            EduStream Pro Academy believes that education goes beyond textbooks. We focus on developing critical thinking, emotional intelligence, and physical well-being through a balanced curriculum that includes arts, sports, and community service.
          </p>
          <div className="space-y-4">
            <div className="flex items-center gap-3">
               <div className="w-2 h-2 bg-blue-600 rounded-full"></div>
               <span className="font-bold text-slate-800">Global Curriculum Standards</span>
            </div>
            <div className="flex items-center gap-3">
               <div className="w-2 h-2 bg-blue-600 rounded-full"></div>
               <span className="font-bold text-slate-800">Holistic Mentorship Programs</span>
            </div>
            <div className="flex items-center gap-3">
               <div className="w-2 h-2 bg-blue-600 rounded-full"></div>
               <span className="font-bold text-slate-800">State-of-the-art Infrastructure</span>
            </div>
          </div>
        </div>
        <div className="relative">
           <img src="https://images.unsplash.com/photo-1577896851231-70ef1469759e?auto=format&fit=crop&q=80&w=800" className="rounded-3xl shadow-2xl" />
           <div className="absolute -bottom-6 -left-6 bg-white p-6 rounded-2xl shadow-xl border border-slate-100 hidden md:block">
              <p className="text-blue-600 font-bold text-3xl">28+</p>
              <p className="text-slate-500 text-sm">Years of Excellence</p>
           </div>
        </div>
      </section>
    </div>
  );
};

export default About;
