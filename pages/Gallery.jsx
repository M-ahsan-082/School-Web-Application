
import React from 'react';

const Gallery = () => {
  const images = [
    { url: 'https://images.unsplash.com/photo-1546410531-bb4caa6b424d?auto=format&fit=crop&q=80&w=800', title: 'Annual Sports Day 2023' },
    { url: 'https://images.unsplash.com/photo-1503676260728-1c00da094a0b?auto=format&fit=crop&q=80&w=800', title: 'Science Fair' },
    { url: 'https://images.unsplash.com/photo-1509062522246-3755977927d7?auto=format&fit=crop&q=80&w=800', title: 'Classroom Tech' },
    { url: 'https://images.unsplash.com/photo-1523580494863-6f3031224c94?auto=format&fit=crop&q=80&w=800', title: 'Graduation Ceremony' },
    { url: 'https://images.unsplash.com/photo-1511632765486-a01980e01a18?auto=format&fit=crop&q=80&w=800', title: 'Library Study' },
    { url: 'https://images.unsplash.com/photo-1529333166437-7750a6dd5a70?auto=format&fit=crop&q=80&w=800', title: 'Cultural Festival' },
  ];

  return (
    <div className="flex-1 pb-20">
      <div className="bg-slate-900 py-20 text-center px-4">
        <h1 className="text-4xl font-bold text-white mb-4">Campus Gallery</h1>
        <p className="text-blue-100 max-w-2xl mx-auto">Glimpses of life, learning, and celebration at EduStream Pro Academy.</p>
      </div>

      <div className="max-w-7xl mx-auto px-4 mt-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {images.map((img, i) => (
            <div key={i} className="relative group rounded-3xl overflow-hidden cursor-pointer shadow-lg aspect-square">
              <img src={img.url} className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700" />
              <div className="absolute inset-0 bg-gradient-to-t from-slate-900/80 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity flex items-end p-8">
                <p className="text-white font-bold text-xl translate-y-4 group-hover:translate-y-0 transition-transform">{img.title}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Gallery;
