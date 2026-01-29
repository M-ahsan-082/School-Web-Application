
import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { useAuth } from '../App';
import { LogIn, GraduationCap, Users, ShieldCheck } from 'lucide-react';

const Login = () => {
  const { login } = useAuth();
  const navigate = useNavigate();
  const [loading, setLoading] = useState(false);

  const handleRoleLogin = (role) => {
    setLoading(true);
    setTimeout(() => {
      login(role);
      navigate('/dashboard');
      setLoading(false);
    }, 800);
  };

  return (
    <div className="min-h-screen bg-slate-50 flex items-center justify-center p-4">
      <div className="max-w-4xl w-full grid grid-cols-1 md:grid-cols-2 bg-white rounded-3xl shadow-2xl overflow-hidden border border-slate-100">
        <div className="p-12 bg-blue-600 text-white flex flex-col justify-center items-center text-center">
          <GraduationCap size={80} className="mb-6 animate-bounce" />
          <h2 className="text-3xl font-bold mb-4">Welcome Back!</h2>
          <p className="text-blue-100">Access your digital classroom and manage your academic journey with EduStream Pro.</p>
        </div>
        <div className="p-12">
          <h3 className="text-2xl font-bold text-slate-900 mb-8 text-center">Choose Your Portal</h3>
          <div className="space-y-4">
            <button
              onClick={() => handleRoleLogin('student')}
              className="w-full flex items-center justify-between p-4 rounded-xl border-2 border-slate-100 hover:border-blue-600 hover:bg-blue-50 transition-all group"
            >
              <div className="flex items-center gap-4">
                <div className="w-12 h-12 bg-blue-100 text-blue-600 rounded-full flex items-center justify-center group-hover:scale-110 transition-transform">
                  <GraduationCap size={24} />
                </div>
                <div className="text-left">
                  <p className="font-bold text-slate-900">Student Portal</p>
                  <p className="text-xs text-slate-500">Access courses, assignments & results</p>
                </div>
              </div>
              <LogIn size={20} className="text-slate-300 group-hover:text-blue-600" />
            </button>

            <button
              onClick={() => handleRoleLogin('teacher')}
              className="w-full flex items-center justify-between p-4 rounded-xl border-2 border-slate-100 hover:border-blue-600 hover:bg-blue-50 transition-all group"
            >
              <div className="flex items-center gap-4">
                <div className="w-12 h-12 bg-slate-100 text-slate-600 rounded-full flex items-center justify-center group-hover:scale-110 transition-transform">
                  <Users size={24} />
                </div>
                <div className="text-left">
                  <p className="font-bold text-slate-900">Faculty Portal</p>
                  <p className="text-xs text-slate-500">Manage classes, grades & materials</p>
                </div>
              </div>
              <LogIn size={20} className="text-slate-300 group-hover:text-blue-600" />
            </button>

            <button
              onClick={() => handleRoleLogin('admin')}
              className="w-full flex items-center justify-between p-4 rounded-xl border-2 border-slate-100 hover:border-blue-600 hover:bg-blue-50 transition-all group"
            >
              <div className="flex items-center gap-4">
                <div className="w-12 h-12 bg-slate-800 text-white rounded-full flex items-center justify-center group-hover:scale-110 transition-transform">
                  <ShieldCheck size={24} />
                </div>
                <div className="text-left">
                  <p className="font-bold text-slate-900">Administrator</p>
                  <p className="text-xs text-slate-500">Full system & campus control</p>
                </div>
              </div>
              <LogIn size={20} className="text-slate-300 group-hover:text-blue-600" />
            </button>
          </div>

          <div className="mt-8 text-center text-sm text-slate-400">
            Forgot Password? <a href="#" className="text-blue-600 font-bold hover:underline">Contact IT Support</a>
          </div>
        </div>
      </div>
      {loading && (
        <div className="fixed inset-0 bg-white/80 backdrop-blur-sm z-[100] flex items-center justify-center">
          <div className="w-16 h-16 border-4 border-blue-600 border-t-transparent rounded-full animate-spin"></div>
        </div>
      )}
    </div>
  );
};

export default Login;
