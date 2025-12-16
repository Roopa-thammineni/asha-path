import React from 'react';
import { User, Phone, MapPin, Settings, LogOut, Shield, Bell, HelpCircle } from 'lucide-react';
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
    <div className="min-h-screen pb-24 px-4 pt-6">
      {/* Profile Card */}
      <div className="bg-card rounded-3xl p-6 shadow-soft mb-6">
        <div className="flex items-center gap-4">
          <div className="w-20 h-20 rounded-full gradient-primary flex items-center justify-center">
            <User size={40} className="text-primary-foreground" />
          </div>
          <div className="flex-1">
            <h2 className="text-xl font-bold text-foreground">User</h2>
            <div className="flex items-center gap-2 text-muted-foreground text-sm mt-1">
              <Phone size={14} />
              <span>+91 XXXXX XXXXX</span>
            </div>
            <div className="flex items-center gap-2 text-muted-foreground text-sm mt-1">
              <MapPin size={14} />
              <span>Village Name</span>
            </div>
          </div>
        </div>

        {/* Stats */}
        <div className="grid grid-cols-3 gap-3 mt-6 pt-6 border-t border-border">
          <div className="text-center">
            <p className="text-2xl font-bold text-primary">3</p>
            <p className="text-xs text-muted-foreground">Courses</p>
          </div>
          <div className="text-center">
            <p className="text-2xl font-bold text-accent">5</p>
            <p className="text-xs text-muted-foreground">Jobs Done</p>
          </div>
          <div className="text-center">
            <p className="text-2xl font-bold text-forest">₹2,400</p>
            <p className="text-xs text-muted-foreground">Earned</p>
          </div>
        </div>
      </div>

      {/* Language Selector */}
      <div className="bg-card rounded-3xl p-5 shadow-soft mb-6">
        <h3 className="font-semibold text-foreground mb-4">
          {t('selectLanguage', language)}
        </h3>
        <LanguageSelector variant="full" />
      </div>

      {/* Menu Items */}
      <div className="bg-card rounded-3xl shadow-soft mb-6 overflow-hidden">
        {menuItems.map((item, index) => (
          <button
            key={item.label}
            className="w-full flex items-center gap-4 p-4 hover:bg-muted/50 transition-colors border-b border-border last:border-0"
          >
            <item.icon size={24} className="text-muted-foreground" />
            <span className="flex-1 text-left font-medium text-foreground">
              {item.label}
            </span>
            {item.badge && (
              <span className="bg-primary text-primary-foreground text-xs font-bold px-2 py-0.5 rounded-full">
                {item.badge}
              </span>
            )}
          </button>
        ))}
      </div>

      {/* Emergency */}
      <EmergencyButton className="mb-6" />

      {/* Logout */}
      <Button variant="outline" className="w-full" size="lg">
        <LogOut size={20} />
        Logout
      </Button>
    </div>
  );
};
