
import React from 'react';
import { Mail, Phone, MapPin, Clock } from 'lucide-react';

const Contact = () => {
  return (
    <div className="flex-1 pb-20">
      <div className="bg-blue-600 py-24 text-center px-4">
        <h1 className="text-4xl font-bold text-white mb-4">Contact Us</h1>
        <p className="text-blue-100 max-w-2xl mx-auto">Have questions? We're here to help. Reach out to us through any of the channels below.</p>
      </div>

      <div className="max-w-7xl mx-auto px-4 -mt-16 grid grid-cols-1 lg:grid-cols-3 gap-8">
        <div className="bg-white p-10 rounded-3xl shadow-2xl border border-slate-100">
          <div className="w-16 h-16 bg-blue-100 text-blue-600 rounded-2xl flex items-center justify-center mb-6">
            <Phone size={28} />
          </div>
          <h3 className="text-xl font-bold mb-2 text-slate-900">Call Us</h3>
          <p className="text-slate-500 text-sm mb-4">Speak directly with our front office or administrative team.</p>
          <p className="text-blue-600 font-bold">+1 (555) 123-4567</p>
        </div>

        <div className="bg-white p-10 rounded-3xl shadow-2xl border border-slate-100">
          <div className="w-16 h-16 bg-blue-100 text-blue-600 rounded-2xl flex items-center justify-center mb-6">
            <Mail size={28} />
          </div>
          <h3 className="text-xl font-bold mb-2 text-slate-900">Email Us</h3>
          <p className="text-slate-500 text-sm mb-4">For admissions, career inquiries, or general support.</p>
          <p className="text-blue-600 font-bold">info@edustream.pro</p>
        </div>

        <div className="bg-white p-10 rounded-3xl shadow-2xl border border-slate-100">
          <div className="w-16 h-16 bg-blue-100 text-blue-600 rounded-2xl flex items-center justify-center mb-6">
            <MapPin size={28} />
          </div>
          <h3 className="text-xl font-bold mb-2 text-slate-900">Visit Us</h3>
          <p className="text-slate-500 text-sm mb-4">Our campus is open for visits during administrative hours.</p>
          <p className="text-blue-600 font-bold">123 Education St, Knowledge City</p>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 mt-20 grid grid-cols-1 lg:grid-cols-2 gap-16">
        <div>
          <h2 className="text-3xl font-bold mb-6 text-slate-900">Send us a message</h2>
          <form className="space-y-6">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <input type="text" placeholder="Your Name" className="w-full p-4 bg-white border border-slate-200 rounded-2xl outline-none focus:ring-2 focus:ring-blue-600 transition-all" />
              <input type="email" placeholder="Your Email" className="w-full p-4 bg-white border border-slate-200 rounded-2xl outline-none focus:ring-2 focus:ring-blue-600 transition-all" />
            </div>
            <input type="text" placeholder="Subject" className="w-full p-4 bg-white border border-slate-200 rounded-2xl outline-none focus:ring-2 focus:ring-blue-600 transition-all" />
            <textarea rows="5" placeholder="Your Message" className="w-full p-4 bg-white border border-slate-200 rounded-2xl outline-none focus:ring-2 focus:ring-blue-600 transition-all"></textarea>
            <button className="bg-blue-600 text-white px-8 py-4 rounded-2xl font-bold hover:bg-blue-700 transition-all shadow-xl">Send Message</button>
          </form>
        </div>
        <div className="space-y-8">
          <div className="bg-slate-50 p-8 rounded-3xl border border-slate-200">
            <h3 className="text-xl font-bold mb-6 flex items-center gap-2 text-slate-900"><Clock size={24} className="text-blue-600" /> Administrative Hours</h3>
            <div className="space-y-4">
              <div className="flex justify-between items-center text-sm">
                <span className="text-slate-500 font-medium">Monday - Friday</span>
                <span className="text-slate-900 font-bold">8:00 AM - 4:00 PM</span>
              </div>
              <div className="flex justify-between items-center text-sm">
                <span className="text-slate-500 font-medium">Saturday</span>
                <span className="text-slate-900 font-bold">9:00 AM - 1:00 PM</span>
              </div>
              <div className="flex justify-between items-center text-sm text-red-500 font-bold">
                <span>Sunday</span>
                <span>Closed</span>
              </div>
            </div>
          </div>
          <div className="h-64 bg-slate-200 rounded-3xl overflow-hidden relative grayscale hover:grayscale-0 transition-all">
             <div className="absolute inset-0 flex items-center justify-center text-slate-400 font-bold">
              <div>
                <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d217759.5580089488!2d74.16958103047182!3d31.483127591097944!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x39190483e58107d9%3A0xc23abe6ccc7e2462!2sLahore%2C%20Pakistan!5e0!3m2!1sen!2s!4v1769673536662!5m2!1sen!2s" width="600" height="300"   loading="lazy"></iframe>
              </div>
             </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;
