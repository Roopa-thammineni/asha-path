import React from 'react';
import { Leaf, TrendingUp, IndianRupee, Star } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { useApp } from '@/contexts/AppContext';
import { t } from '@/lib/translations';
import { BusinessIdea } from '@/types';
import { cn } from '@/lib/utils';

interface BusinessCardProps {
  business: BusinessIdea;
  onSelect?: (business: BusinessIdea) => void;
  className?: string;
}

export const BusinessCard: React.FC<BusinessCardProps> = ({
  business,
  onSelect,
  className,
}) => {
  const { language } = useApp();

  const name = language === 'hi' 
    ? business.nameHi 
    : language === 'te' 
    ? business.nameTe 
    : business.name;

  const description = language === 'hi'
    ? business.descriptionHi
    : language === 'te'
    ? business.descriptionTe
    : business.description;

  const difficultyColors = {
    low: 'bg-accent/20 text-accent',
    medium: 'bg-primary/20 text-primary',
    high: 'bg-destructive/20 text-destructive',
  };

  const demandStars = {
    low: 1,
    medium: 2,
    high: 3,
  };

  return (
    <div className={cn(
      'bg-card rounded-3xl p-5 shadow-soft animate-slide-up',
      business.sustainable && 'ring-2 ring-accent',
      className
    )}>
      {/* Header */}
      <div className="flex items-start gap-4">
        <div className="text-4xl">{business.icon}</div>
        <div className="flex-1">
          <div className="flex items-start justify-between gap-2">
            <h3 className="font-bold text-lg text-foreground">{name}</h3>
            {business.sustainable && (
              <span className="flex items-center gap-1 bg-accent/20 text-accent px-2 py-1 rounded-full text-xs font-semibold">
                <Leaf size={12} />
                {t('sustainable', language)}
              </span>
            )}
          </div>
          <p className="text-sm text-muted-foreground mt-1">{description}</p>
        </div>
      </div>

      {/* Stats */}
      <div className="grid grid-cols-3 gap-3 mt-4">
        {/* Income */}
        <div className="bg-secondary rounded-2xl p-3 text-center">
          <div className="flex items-center justify-center gap-1 text-accent">
            <IndianRupee size={16} />
            <span className="font-bold text-lg">{business.estimatedIncome}</span>
          </div>
          <p className="text-xs text-muted-foreground mt-1">/month</p>
        </div>

        {/* Difficulty */}
        <div className="bg-secondary rounded-2xl p-3 text-center">
          <span className={cn(
            'inline-block px-2 py-1 rounded-full text-xs font-semibold',
            difficultyColors[business.difficulty]
          )}>
            {t(business.difficulty, language)}
          </span>
          <p className="text-xs text-muted-foreground mt-1">Skill</p>
        </div>

        {/* Demand */}
        <div className="bg-secondary rounded-2xl p-3 text-center">
          <div className="flex items-center justify-center gap-0.5">
            {Array.from({ length: 3 }).map((_, i) => (
              <Star
                key={i}
                size={14}
                className={cn(
                  i < demandStars[business.demand]
                    ? 'text-primary fill-primary'
                    : 'text-muted'
                )}
              />
            ))}
          </div>
          <p className="text-xs text-muted-foreground mt-1">Demand</p>
        </div>
      </div>

      {/* Budget */}
      <div className="flex items-center justify-between mt-4 pt-4 border-t border-border">
        <div>
          <p className="text-xs text-muted-foreground">Required Budget</p>
          <p className="font-semibold text-foreground">{business.requiredBudget}</p>
        </div>
        <Button variant="default" onClick={() => onSelect?.(business)}>
          {t('start', language)}
        </Button>
      </div>
    </div>
  );
};
