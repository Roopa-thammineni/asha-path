import React, { useState } from 'react';
import { User, Briefcase, Code, Phone, Mail, Lock, ArrowRight } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { cn } from '@/lib/utils';
import { UserRole } from '@/types';

type AuthMode = 'login' | 'register';

export const AuthPage: React.FC<{ onAuthComplete: (role: UserRole) => void }> = ({ onAuthComplete }) => {
  const [mode, setMode] = useState<AuthMode>('login');
  const [role, setRole] = useState<UserRole>('woman');
  const [formData, setFormData] = useState({
    name: '',
    phone: '',
    email: '',
    username: '',
    password: ''
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Pass the selected role back to App.tsx
    onAuthComplete(role);
  };

  const roleConfigs = [
    { id: 'woman', label: 'Woman', icon: User },
    { id: 'recruiter', label: 'Recruiter', icon: Briefcase },
    { id: 'developer', label: 'Developer', icon: Code },
  ];

  return (
    <div className="flex min-h-screen bg-white overflow-hidden">
      {/* LEFT SIDE: SHAKTI BRANDING IMAGE (Desktop Only) */}
      <div className="hidden lg:flex lg:w-1/2 relative bg-[#4A1D1D]">
        <img 
          src="/shakti.png" 
          alt="Shakti Empowerment" 
          className="absolute inset-0 w-full h-full object-cover opacity-90 transition-transform duration-1000 hover:scale-105"
        />
        {/* Visual Overlay for Text Clarity */}
        <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent flex flex-col justify-end p-12 text-white">
          <h2 className="text-5xl font-bold mb-4 tracking-tight">Shakti</h2>
          <p className="text-xl text-white/80 max-w-md leading-relaxed font-light">
            Empowering women through literacy, sustainable skills, and meaningful career connections.
          </p>
        </div>
      </div>

      {/* RIGHT SIDE: AUTHENTICATION FORM */}
      <div className="w-full lg:w-1/2 flex items-center justify-center p-8 lg:p-16 bg-gradient-to-br from-lavender-light/10 to-white">
        <div className="w-full max-w-md animate-fade-in">
          {/* Mobile View: Logo appears at top */}
          <div className="lg:hidden text-center mb-8">
            <img 
              src="/shakti.png" 
              alt="Shakti Logo" 
              className="w-28 h-28 mx-auto rounded-full shadow-2xl border-4 border-white" 
            />
          </div>

          <div className="mb-8">
            <h1 className="text-3xl font-bold text-gradient">
              {mode === 'login' ? 'Welcome Back' : 'Create Account'}
            </h1>
            <p className="text-muted-foreground mt-2">
              Select your category and enter your details
            </p>
          </div>

          {/* Role Selector Tabs */}
          <div className="flex gap-2 mb-8 p-1 bg-gray-100/60 rounded-2xl">
            {roleConfigs.map((config) => (
              <button
                key={config.id}
                onClick={() => setRole(config.id as UserRole)}
                className={cn(
                  "flex-1 flex flex-col items-center gap-1 py-3 rounded-xl transition-all duration-300",
                  role === config.id 
                    ? "bg-white shadow-md text-primary" 
                    : "text-muted-foreground hover:bg-white/40"
                )}
              >
                <config.icon size={20} />
                <span className="text-[10px] font-bold uppercase tracking-tighter">{config.label}</span>
              </button>
            ))}
          </div>

          <form onSubmit={handleSubmit} className="space-y-4">
            {/* Fields for Women: Name & Phone */}
            {role === 'woman' && (
              <>
                {mode === 'register' && (
                  <div className="space-y-1">
                    <label className="text-xs font-bold uppercase ml-1 text-muted-foreground">Full Name</label>
                    <Input 
                      placeholder="Enter your name" 
                      className="h-12 rounded-xl border-gray-200 focus:ring-primary"
                      onChange={(e) => setFormData({...formData, name: e.target.value})}
                      required
                    />
                  </div>
                )}
                <div className="space-y-1">
                  <label className="text-xs font-bold uppercase ml-1 text-muted-foreground">Phone Number</label>
                  <div className="relative">
                    <Phone className="absolute left-3 top-3.5 text-muted-foreground" size={18} />
                    <Input 
                      type="tel"
                      placeholder="Mobile number" 
                      className="pl-10 h-12 rounded-xl border-gray-200 focus:ring-primary"
                      onChange={(e) => setFormData({...formData, phone: e.target.value})}
                      required
                    />
                  </div>
                </div>
              </>
            )}

            {/* Fields for Recruiter & Developer: Username & Email */}
            {(role === 'recruiter' || role === 'developer') && (
              <>
                <div className="space-y-1">
                  <label className="text-xs font-bold uppercase ml-1 text-muted-foreground">Username</label>
                  <Input 
                    placeholder="Choose a username" 
                    className="h-12 rounded-xl border-gray-200 focus:ring-primary"
                    onChange={(e) => setFormData({...formData, username: e.target.value})}
                    required
                  />
                </div>
                <div className="space-y-1">
                  <label className="text-xs font-bold uppercase ml-1 text-muted-foreground">Email Address</label>
                  <div className="relative">
                    <Mail className="absolute left-3 top-3.5 text-muted-foreground" size={18} />
                    <Input 
                      type="email"
                      placeholder="example@gmail.com" 
                      className="pl-10 h-12 rounded-xl border-gray-200 focus:ring-primary"
                      onChange={(e) => setFormData({...formData, email: e.target.value})}
                      required
                    />
                  </div>
                </div>
              </>
            )}

            {/* Common Password Field */}
            <div className="space-y-1">
              <label className="text-xs font-bold uppercase ml-1 text-muted-foreground">Password</label>
              <div className="relative">
                <Lock className="absolute left-3 top-3.5 text-muted-foreground" size={18} />
                <Input 
                  type="password"
                  placeholder="••••••••" 
                  className="pl-10 h-12 rounded-xl border-gray-200 focus:ring-primary"
                  onChange={(e) => setFormData({...formData, password: e.target.value})}
                  required
                />
              </div>
            </div>

            <Button type="submit" className="w-full h-14 rounded-xl text-lg font-bold shadow-glow mt-4 bg-primary hover:bg-primary/90 transition-all">
              {mode === 'login' ? 'Sign In' : 'Get Started'}
              <ArrowRight size={20} className="ml-2" />
            </Button>

            <p className="text-center mt-6 text-sm">
              {mode === 'login' ? "New here?" : "Already have an account?"}
              <button
                type="button"
                onClick={() => setMode(mode === 'login' ? 'register' : 'login')}
                className="ml-2 text-primary font-bold hover:underline"
              >
                {mode === 'login' ? 'Create an account' : 'Login now'}
              </button>
            </p>
          </form>
        </div>
      </div>
    </div>
  );
};