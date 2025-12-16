import React from 'react';
import { cn } from '@/lib/utils';
import { LucideIcon } from 'lucide-react';

interface IconCardProps {
  icon: LucideIcon;
  label: string;
  sublabel?: string;
  onClick?: () => void;
  variant?: 'default' | 'primary' | 'success' | 'outline';
  size?: 'sm' | 'default' | 'lg';
  badge?: string;
  disabled?: boolean;
  className?: string;
}

export const IconCard: React.FC<IconCardProps> = ({
  icon: Icon,
  label,
  sublabel,
  onClick,
  variant = 'default',
  size = 'default',
  badge,
  disabled = false,
  className,
}) => {
  const variants = {
    default: 'glass-card hover:shadow-medium hover:border-lavender-light/50',
    primary: 'gradient-primary text-white border-0 hover:shadow-glow',
    success: 'gradient-accent text-white border-0 hover:shadow-glow-emerald',
    outline: 'glass-card border-2 border-primary/30 text-primary hover:bg-primary/10 hover:border-primary/50',
  };

  const sizes = {
    sm: 'p-3 gap-2',
    default: 'p-4 gap-3',
    lg: 'p-6 gap-4',
  };

  const iconSizes = {
    sm: 24,
    default: 32,
    lg: 40,
  };

  return (
    <button
      onClick={onClick}
      disabled={disabled}
      className={cn(
        'relative flex flex-col items-center justify-center rounded-3xl transition-all duration-300',
        'min-h-touch min-w-touch hover-lift',
        'active:scale-[0.98] focus:outline-none focus:ring-2 focus:ring-primary/30 focus:ring-offset-2',
        variants[variant],
        sizes[size],
        disabled && 'opacity-50 pointer-events-none',
        className
      )}
    >
      {badge && (
        <span className="absolute -top-2 -right-2 bg-accent text-white text-xs font-bold px-2.5 py-1 rounded-full shadow-soft animate-bounce-soft">
          {badge}
        </span>
      )}
      
      <Icon 
        size={iconSizes[size]} 
        className={cn(
          'transition-transform duration-300',
          variant === 'default' && 'text-primary',
          variant === 'outline' && 'text-primary'
        )} 
      />
      
      <span className={cn(
        'font-semibold text-center leading-tight',
        size === 'sm' && 'text-sm',
        size === 'default' && 'text-base',
        size === 'lg' && 'text-lg',
        variant === 'default' && 'text-foreground'
      )}>
        {label}
      </span>
      
      {sublabel && (
        <span className={cn(
          'text-sm opacity-80 text-center',
          variant === 'default' && 'text-muted-foreground'
        )}>
          {sublabel}
        </span>
      )}
    </button>
  );
};