import React from 'react';
import { User, Phone, MapPin, Settings, LogOut, Shield, Bell, HelpCircle, ChevronRight } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { LanguageSelector } from '@/components/LanguageSelector';
import { EmergencyButton } from '@/components/EmergencyButton';
import { useApp } from '@/contexts/AppContext';
import { t } from '@/lib/translations';

export const ProfilePage: React.FC = () => {
  const { language } = useApp();

  const menuItems = [
    { icon: Bell, label: 'Notifications', badge: '3' },
    { icon: Shield, label: t('safetyFirst', language) },
    { icon: HelpCircle, label: t('helpline', language) },
    { icon: Settings, label: t('settings', language) },
  ];

  return (
    <div className="min-h-screen pb-28 px-4 pt-6">
      {/* Profile Card */}
      <div className="glass-card p-6 mb-6 animate-fade-in-up">
        <div className="flex items-center gap-4">
          <div className="w-20 h-20 rounded-full gradient-primary flex items-center justify-center shadow-glow">
            <User size={38} className="text-white" />
          </div>
          <div className="flex-1">
            <h2 className="text-xl font-bold text-foreground">User</h2>
            <div className="flex items-center gap-2 text-muted-foreground text-sm mt-1">
              <Phone size={14} className="text-primary" />
              <span>+91 XXXXX XXXXX</span>
            </div>
            <div className="flex items-center gap-2 text-muted-foreground text-sm mt-1">
              <MapPin size={14} className="text-primary" />
              <span>Village Name</span>
            </div>
          </div>
        </div>

        {/* Stats */}
        <div className="grid grid-cols-3 gap-3 mt-6 pt-6 border-t border-border/50">
          <div className="text-center p-2 rounded-xl bg-lavender-light/30">
            <p className="text-2xl font-bold text-lavender-dark">3</p>
            <p className="text-xs text-muted-foreground mt-1">Courses</p>
          </div>
          <div className="text-center p-2 rounded-xl bg-emerald-light/30">
            <p className="text-2xl font-bold text-emerald-dark">5</p>
            <p className="text-xs text-muted-foreground mt-1">Jobs Done</p>
          </div>
          <div className="text-center p-2 rounded-xl bg-blush-light/30">
            <p className="text-2xl font-bold text-blush-dark">₹2,400</p>
            <p className="text-xs text-muted-foreground mt-1">Earned</p>
          </div>
        </div>
      </div>

      {/* Language Selector */}
      <div className="glass-card p-5 mb-6 animate-fade-in-up stagger-1">
        <h3 className="font-semibold text-foreground mb-4">
          {t('selectLanguage', language)}
        </h3>
        <LanguageSelector variant="full" />
      </div>

      {/* Menu Items */}
      <div className="glass-card mb-6 overflow-hidden animate-fade-in-up stagger-2">
        {menuItems.map((item, index) => (
          <button
            key={item.label}
            className="w-full flex items-center gap-4 p-4 hover:bg-primary/5 transition-all duration-300 border-b border-border/30 last:border-0"
          >
            <div className="p-2 rounded-xl bg-primary/10">
              <item.icon size={20} className="text-primary" />
            </div>
            <span className="flex-1 text-left font-medium text-foreground">
              {item.label}
            </span>
            {item.badge ? (
              <span className="gradient-primary text-white text-xs font-bold px-2.5 py-1 rounded-full">
                {item.badge}
              </span>
            ) : (
              <ChevronRight size={18} className="text-muted-foreground" />
            )}
          </button>
        ))}
      </div>

      {/* Emergency */}
      <div className="animate-fade-in-up stagger-3">
        <EmergencyButton className="mb-6" />
      </div>

      {/* Logout */}
      <Button 
        variant="outline" 
        className="w-full animate-fade-in-up stagger-4" 
        size="lg"
      >
        <LogOut size={20} />
        Logout
      </Button>
    </div>
  );
};