
import React from 'react';
import { Link } from 'react-router-dom';
import { Trophy, Users, Star, ArrowRight, Bell } from 'lucide-react';
import { MOCK_COURSES } from '../constants';

const Home = () => {
  React.useEffect(() => {
    if (window.Swiper) {
      new window.Swiper('.hero-slider', {
        autoplay: { delay: 5000 },
        loop: true,
        pagination: { el: '.swiper-pagination', clickable: true },
        navigation: { nextEl: '.swiper-button-next', prevEl: '.swiper-button-prev' },
      });
    }
  }, []);

  return (
    <div className="flex-1">
      <div className="bg-blue-600 text-white py-2 overflow-hidden whitespace-nowrap">
        <div className="flex items-center gap-4 animate-marquee">
          <span className="flex items-center gap-2 font-bold uppercase text-xs">
            <Bell size={14} /> Breaking News:
          </span>
          <span className="text-sm">Admissions open for Academic Year 2024-25! | Summer Camp starts next week.</span>
        </div>
      </div>

      <div className="swiper hero-slider h-[500px] md:h-[650px] relative">
        <div className="swiper-wrapper">
          <div className="swiper-slide relative bg-slate-900">
            <img src="https://images.unsplash.com/photo-1763973559043-ee687e8df328?q=80&w=1332&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" className="w-full h-full object-cover opacity-60" />
            <div className="absolute inset-0 flex flex-col justify-center items-center text-white text-center px-4">
              <h1 className="text-4xl md:text-7xl font-bold mb-4">Shaping Future Leaders</h1>
              <p className="text-lg md:text-2xl max-w-2xl mb-8">Excellence in education and character building since 1995.</p>
              <div className="flex gap-4">
                <Link to="/admissions" className="bg-blue-600 hover:bg-blue-700 text-white px-8 py-3 rounded-full font-bold">Apply Now</Link>
                <Link to="/about" className="bg-white hover:bg-slate-100 text-slate-900 px-8 py-3 rounded-full font-bold">Learn More</Link>
              </div>
            </div>
          </div>
          <div className="swiper-slide relative bg-slate-900">
            <img src="https://images.unsplash.com/photo-1758551059627-e891d671e010?q=80&w=1400&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" className="w-full h-full object-cover opacity-60" />
            <div className="absolute inset-0 flex flex-col justify-center items-center text-white text-center px-4">
              <h1 className="text-4xl md:text-7xl font-bold mb-4">Modern STEM Labs</h1>
              <p className="text-lg md:text-2xl max-w-2xl mb-8">Hands-on experience with cutting-edge technology.</p>
              <Link to="/courses" className="bg-blue-600 hover:bg-blue-700 text-white px-8 py-3 rounded-full font-bold">Our Courses</Link>
            </div>
          </div>
           <div className="swiper-slide relative bg-slate-900">
            <img src="https://images.unsplash.com/photo-1726824766919-da693390ee0e?q=80&w=1332&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" className="w-full h-full object-cover opacity-60" />
            <div className="absolute inset-0 flex flex-col justify-center items-center text-white text-center px-4">
              <h1 className="text-4xl md:text-7xl font-bold mb-4">Modern STEM Labs</h1>
              <p className="text-lg md:text-2xl max-w-2xl mb-8">Hands-on experience with cutting-edge technology.</p>
              <Link to="/courses" className="bg-blue-600 hover:bg-blue-700 text-white px-8 py-3 rounded-full font-bold">Our Courses</Link>
            </div>
          </div>
        </div>
        <div className="swiper-pagination"></div>
        <div className="swiper-button-next !text-white"></div>
        <div className="swiper-button-prev !text-white"></div>
      </div>

      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold mb-16">Why Choose EduStream?</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
            <div className="p-8 rounded-2xl bg-blue-50">
              <Trophy size={48} className="text-blue-600 mx-auto mb-6" />
              <h3 className="text-xl font-bold mb-4">Award Winning</h3>
              <p className="text-slate-600">Ranked #1 for holistic education in the region.</p>
            </div>
            <div className="p-8 rounded-2xl bg-slate-50">
              <Users size={48} className="text-blue-600 mx-auto mb-6" />
              <h3 className="text-xl font-bold mb-4">Expert Faculty</h3>
              <p className="text-slate-600">Passionate mentors dedicated to student success.</p>
            </div>
            <div className="p-8 rounded-2xl bg-blue-50">
              <Star size={48} className="text-blue-600 mx-auto mb-6" />
              <h3 className="text-xl font-bold mb-4">Digital LMS</h3>
              <p className="text-slate-600">Seamless online learning and progress tracking.</p>
            </div>
          </div>
        </div>
      </section>

      <section className="py-20 bg-slate-50">
        <div className="max-w-7xl mx-auto px-4">
          <div className="flex justify-between items-end mb-12">
            <h2 className="text-3xl font-bold">Featured Courses</h2>
            <Link to="/courses" className="text-blue-600 font-bold flex items-center gap-2">
              View All <ArrowRight size={18} />
            </Link>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
            {MOCK_COURSES.map(course => (
              <div key={course.id} className="bg-white rounded-xl overflow-hidden shadow-sm hover:shadow-md transition-all">
                <img src={course.thumbnail} className="w-full h-40 object-cover" />
                <div className="p-4">
                  <h4 className="font-bold mb-1">{course.title}</h4>
                  <p className="text-xs text-slate-500 mb-4">{course.teacher}</p>
                  <div className="flex justify-between items-center text-xs text-blue-600 font-bold">
                    <span>{course.students} Students</span>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};

export default Home;
