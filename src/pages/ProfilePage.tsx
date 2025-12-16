// src/pages/ProfilePage.tsx
import React from 'react';
import { LogOut, User, Settings, Shield } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { UserRole } from '@/types';

interface ProfilePageProps {
  userRole: UserRole | null;
  onLogout: () => void; // Define the prop type
}

export const ProfilePage: React.FC<ProfilePageProps> = ({ userRole, onLogout }) => {
  return (
    <div className="animate-fade-in-up">
      <header className="mb-8">
        <h1 className="text-3xl font-bold text-gradient">My Profile</h1>
        <p className="text-muted-foreground uppercase text-xs font-bold tracking-widest mt-1">
          Role: {userRole}
        </p>
      </header>

      <div className="space-y-4">
        {/* Profile Details (Placeholder) */}
        <div className="glass-card p-6 flex items-center gap-4">
          <div className="w-16 h-16 rounded-full bg-primary/20 flex items-center justify-center">
            <User className="text-primary" size={32} />
          </div>
          <div>
            <h2 className="font-bold text-lg">User Name</h2>
            <p className="text-sm text-muted-foreground">Location, India</p>
          </div>
        </div>

        {/* Menu Items */}
        <div className="glass-card overflow-hidden">
          <button className="w-full p-4 flex items-center gap-3 hover:bg-white/10 transition-colors border-b border-white/10">
            <Settings size={20} className="text-muted-foreground" />
            <span className="font-medium">Account Settings</span>
          </button>
          <button className="w-full p-4 flex items-center gap-3 hover:bg-white/10 transition-colors border-b border-white/10">
            <Shield size={20} className="text-muted-foreground" />
            <span className="font-medium">Privacy & Safety</span>
          </button>
          
          {/* THE LOGOUT BUTTON */}
          <button 
            onClick={onLogout} // Triggers the logout function
            className="w-full p-4 flex items-center gap-3 text-destructive hover:bg-destructive/10 transition-colors"
          >
            <LogOut size={20} />
            <span className="font-bold">Logout</span>
          </button>
        </div>
      </div>
    </div>
  );
};