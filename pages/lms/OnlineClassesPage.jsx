
import React from 'react';
import { Video, Mic, MicOff, VideoOff, MessageCircle, Users, Settings, PhoneOff } from 'lucide-react';

const OnlineClassesPage = () => {
  const [isVideoOn, setIsVideoOn] = React.useState(true);
  const [isMicOn, setIsMicOn] = React.useState(true);

  return (
    <div className="h-full flex flex-col gap-6">
      <div className="flex items-center justify-between">
        <h1 className="text-2xl font-bold">Virtual Classroom: Mathematics</h1>
        <div className="flex items-center gap-2">
          <span className="px-3 py-1 bg-red-100 text-red-600 rounded-full text-xs font-bold animate-pulse">● LIVE</span>
          <span className="text-slate-500 text-sm">Session ID: MATH-202-A</span>
        </div>
      </div>

      <div className="flex-1 grid grid-cols-1 lg:grid-cols-4 gap-6 min-h-[500px]">
        <div className="lg:col-span-3 bg-slate-900 rounded-3xl relative overflow-hidden flex items-center justify-center">
          {/* Main Presentation / Teacher Video */}
          <div className="text-center text-slate-500 space-y-4">
             <img src="https://images.unsplash.com/photo-1544367567-0f2fcb009e0b?auto=format&fit=crop&q=80&w=800" className="w-full h-full absolute inset-0 object-cover opacity-80" />
             <div className="absolute inset-0 bg-gradient-to-t from-slate-900 via-transparent to-transparent"></div>
             <div className="absolute bottom-8 left-8 flex items-center gap-4">
                <div className="w-12 h-12 bg-white rounded-full overflow-hidden border-2 border-blue-600 shadow-xl">
                    <img src="https://i.pravatar.cc/150?u=teacher" />
                </div>
                <div>
                    <p className="text-white font-bold leading-none">Dr. Sarah Wilson</p>
                    <p className="text-slate-400 text-xs mt-1">Presenting: Unit 4 - Differentiation</p>
                </div>
             </div>
          </div>

          {/* Controls */}
          <div className="absolute bottom-8 left-1/2 -translate-x-1/2 flex items-center gap-4 bg-slate-800/80 backdrop-blur-md px-6 py-3 rounded-2xl border border-slate-700">
            <button onClick={() => setIsMicOn(!isMicOn)} className={`p-3 rounded-xl transition-all ${isMicOn ? 'bg-slate-700 text-white hover:bg-slate-600' : 'bg-red-500 text-white'}`}>
              {isMicOn ? <Mic size={20} /> : <MicOff size={20} />}
            </button>
            <button onClick={() => setIsVideoOn(!isVideoOn)} className={`p-3 rounded-xl transition-all ${isVideoOn ? 'bg-slate-700 text-white hover:bg-slate-600' : 'bg-red-500 text-white'}`}>
              {isVideoOn ? <Video size={20} /> : <VideoOff size={20} />}
            </button>
            <button className="p-3 bg-slate-700 text-white rounded-xl hover:bg-slate-600 transition-all"><Settings size={20} /></button>
            <button className="p-3 bg-red-600 text-white rounded-xl hover:bg-red-700 transition-all ml-4"><PhoneOff size={20} /></button>
          </div>
        </div>

        {/* Chat / Participants Sidebar */}
        <div className="bg-white rounded-3xl border border-slate-200 flex flex-col overflow-hidden">
          <div className="flex p-2 gap-1 border-b">
            <button className="flex-1 py-2 text-xs font-bold text-blue-600 bg-blue-50 rounded-lg">Chat</button>
            <button className="flex-1 py-2 text-xs font-bold text-slate-400 hover:bg-slate-50 rounded-lg">People (42)</button>
          </div>
          <div className="flex-1 p-4 space-y-4 overflow-y-auto">
            <div className="space-y-1">
              <p className="text-[10px] font-bold text-blue-600 uppercase">John Doe (You)</p>
              <p className="text-xs bg-slate-50 p-2 rounded-lg rounded-tl-none">Professor, can we go over the Chain Rule again?</p>
            </div>
            <div className="space-y-1">
              <p className="text-[10px] font-bold text-slate-400 uppercase">Dr. Sarah Wilson</p>
              <p className="text-xs bg-blue-50 p-2 rounded-lg rounded-tl-none">Of course, John. Let's look at the next slide.</p>
            </div>
          </div>
          <div className="p-4 border-t">
            <div className="relative">
              <input type="text" placeholder="Type a message..." className="w-full text-sm border border-slate-200 rounded-xl px-4 py-2 pr-10 focus:ring-2 focus:ring-blue-600 focus:outline-none" />
              <button className="absolute right-2 top-1/2 -translate-y-1/2 text-blue-600"><MessageCircle size={18} /></button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default OnlineClassesPage;
