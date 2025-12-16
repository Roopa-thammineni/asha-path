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
    default: 'bg-card hover:bg-card/80',
    primary: 'gradient-primary text-primary-foreground',
    success: 'gradient-success text-accent-foreground',
    outline: 'bg-transparent border-2 border-primary text-primary hover:bg-primary/10',
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
        'relative flex flex-col items-center justify-center rounded-3xl shadow-soft transition-all duration-200',
        'min-h-touch min-w-touch',
        'active:scale-[0.98] focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2',
        variants[variant],
        sizes[size],
        disabled && 'opacity-50 pointer-events-none',
        className
      )}
    >
      {badge && (
        <span className="absolute -top-2 -right-2 bg-accent text-accent-foreground text-xs font-bold px-2 py-0.5 rounded-full">
          {badge}
        </span>
      )}
      
      <Icon 
        size={iconSizes[size]} 
        className={cn(
          variant === 'default' && 'text-primary',
          variant === 'outline' && 'text-primary'
        )} 
      />
      
      <span className={cn(
        'font-semibold text-center leading-tight',
        size === 'sm' && 'text-sm',
        size === 'default' && 'text-base',
        size === 'lg' && 'text-lg',
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
