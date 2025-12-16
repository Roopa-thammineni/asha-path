import React from 'react';
import { Home, BookOpen, Briefcase, MessageCircle, User } from 'lucide-react';
import { cn } from '@/lib/utils';
import { useApp } from '@/contexts/AppContext';
import { t } from '@/lib/translations';

interface NavItem {
  id: string;
  icon: React.ElementType;
  labelKey: 'home' | 'learn' | 'jobs' | 'guide' | 'profile';
}

const navItems: NavItem[] = [
  { id: 'home', icon: Home, labelKey: 'home' },
  { id: 'learn', icon: BookOpen, labelKey: 'learn' },
  { id: 'jobs', icon: Briefcase, labelKey: 'jobs' },
  { id: 'guide', icon: MessageCircle, labelKey: 'guide' },
  { id: 'profile', icon: User, labelKey: 'profile' },
];

interface BottomNavProps {
  activeTab: string;
  onTabChange: (tab: string) => void;
}

export const BottomNav: React.FC<BottomNavProps> = ({ activeTab, onTabChange }) => {
  const { language } = useApp();

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
                'text-xs font-medium transition-all duration-300',
                isActive && 'font-semibold'
              )}>
                {t(item.labelKey, language)}
              </span>
            </button>
          );
        })}
      </div>
    </nav>
  );
};