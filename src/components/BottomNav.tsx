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
    <nav className="fixed bottom-0 left-0 right-0 z-50 bg-card/95 backdrop-blur-lg border-t border-border safe-area-pb">
      <div className="flex items-center justify-around px-2 py-2">
        {navItems.map((item) => {
          const isActive = activeTab === item.id;
          const Icon = item.icon;

          return (
            <button
              key={item.id}
              onClick={() => onTabChange(item.id)}
              className={cn(
                'flex flex-col items-center gap-1 px-4 py-2 rounded-2xl transition-all duration-200 min-w-[64px]',
                'active:scale-95 focus:outline-none',
                isActive
                  ? 'bg-primary/10 text-primary'
                  : 'text-muted-foreground hover:text-foreground hover:bg-muted/50'
              )}
            >
              <Icon
                size={24}
                className={cn(
                  'transition-transform duration-200',
                  isActive && 'scale-110'
                )}
              />
              <span className={cn(
                'text-xs font-medium',
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
