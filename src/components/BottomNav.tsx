import React from 'react';
import { Home, BookOpen, Briefcase, MessageCircle, User, Heart } from 'lucide-react';
import { cn } from '@/lib/utils';
import { useApp } from '@/contexts/AppContext';
import { t } from '@/lib/translations';

interface NavItem {
  id: string;
  icon: React.ElementType;
  labelKey: string; // Changed to string to allow 'volunteer'
}

interface BottomNavProps {
  activeTab: string;
  onTabChange: (tab: string) => void;
  isRecruiter?: boolean; // Prop to handle different layouts
}

export const BottomNav: React.FC<BottomNavProps> = ({ activeTab, onTabChange, isRecruiter }) => {
  const { language } = useApp();

  // Define dynamic nav items based on role
  const navItems: NavItem[] = isRecruiter 
    ? [
        { id: 'home', icon: Home, labelKey: 'home' },
        { id: 'profile', icon: User, labelKey: 'profile' },
      ]
    : [
        { id: 'home', icon: Home, labelKey: 'home' },
        { id: 'learn', icon: BookOpen, labelKey: 'learn' },
        { id: 'volunteer', icon: Heart, labelKey: 'volunteer' }, // New Volunteer Tab
        { id: 'jobs', icon: Briefcase, labelKey: 'jobs' },
        { id: 'profile', icon: User, labelKey: 'profile' },
      ];

  return (
    <nav className="fixed bottom-0 left-0 right-0 z-50 glass-card rounded-t-3xl border-t-0 safe-area-pb">
      <div className="flex items-center justify-around px-2 py-3">
        {navItems.map((item) => {
          const isActive = activeTab === item.id;
          const Icon = item.icon;

          return (
            <button
              key={item.id}
              onClick={() => onTabChange(item.id)}
              className={cn(
                'flex flex-col items-center gap-1 px-4 py-2 rounded-2xl transition-all duration-300 min-w-[64px]',
                'active:scale-95 focus:outline-none',
                isActive
                  ? 'bg-primary/15 text-primary shadow-soft'
                  : 'text-muted-foreground hover:text-primary hover:bg-primary/5'
              )}
            >
              <Icon
                size={24}
                className={cn(
                  'transition-all duration-300',
                  isActive && 'scale-110 drop-shadow-md'
                )}
              />
              <span className={cn(
                'text-[10px] font-medium transition-all duration-300',
                isActive && 'font-semibold'
              )}>
                {/* Fallback to ID if translation key is missing */}
                {t(item.labelKey as any, language) || item.id}
              </span>
            </button>
          );
        })}
      </div>
    </nav>
  );
};