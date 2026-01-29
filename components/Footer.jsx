
import React from 'react';
import { BookOpen, Mail, Phone, MapPin, Facebook, Twitter, Instagram } from 'lucide-react';

const Footer = () => (
  <footer className="bg-slate-900 text-slate-300 py-12">
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 grid grid-cols-1 md:grid-cols-4 gap-8">
      <div className="space-y-4">
        <div className="flex items-center gap-2 text-white">
          <BookOpen className="h-8 w-8 text-blue-400" />
          <span className="text-xl font-bold">EduStream<span className="text-blue-400">Pro</span></span>
        </div>
        <p className="text-sm leading-relaxed">
          Nurturing minds, building futures. EduStream Pro is committed to excellence in education and modern learning standards.
        </p>
        <div className="flex gap-4">
          <Facebook className="h-5 w-5 cursor-pointer hover:text-blue-400" />
          <Twitter className="h-5 w-5 cursor-pointer hover:text-blue-400" />
          <Instagram className="h-5 w-5 cursor-pointer hover:text-blue-400" />
        </div>
      </div>
      <div>
        <h4 className="text-white font-bold mb-4">Quick Links</h4>
        <ul className="space-y-2 text-sm">
          <li><a href="#" className="hover:text-white">Academic Calendar</a></li>
          <li><a href="#" className="hover:text-white">Student Portal</a></li>
          <li><a href="#" className="hover:text-white">Latest News</a></li>
          <li><a href="#" className="hover:text-white">Privacy Policy</a></li>
        </ul>
      </div>
      <div>
        <h4 className="text-white font-bold mb-4">LMS Features</h4>
        <ul className="space-y-2 text-sm">
          <li><a href="#" className="hover:text-white">Online Assessments</a></li>
          <li><a href="#" className="hover:text-white">Virtual Classrooms</a></li>
          <li><a href="#" className="hover:text-white">Parent Progress</a></li>
          <li><a href="#" className="hover:text-white">Digital Library</a></li>
        </ul>
      </div>
      <div>
        <h4 className="text-white font-bold mb-4">Contact Info</h4>
        <ul className="space-y-3 text-sm">
          <li className="flex items-center gap-2"><MapPin size={16} /> 123 Education St, Knowledge City</li>
          <li className="flex items-center gap-2"><Phone size={16} /> +1 (555) 000-1234</li>
          <li className="flex items-center gap-2"><Mail size={16} /> info@edustream.pro</li>
        </ul>
      </div>
    </div>
    <div className="border-t border-slate-800 mt-12 pt-8 text-center text-xs">
      © {new Date().getFullYear()} EduStream Pro Academy. All rights reserved.
    </div>
  </footer>
);

export default Footer;
