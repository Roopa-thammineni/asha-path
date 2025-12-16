import React from 'react';
import { Leaf, IndianRupee, Star } from 'lucide-react';
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

export const BusinessCard: React.FC<BusinessCardProps> = ({ business, onSelect, className }) => {
  const { language } = useApp();
  const name = language === 'hi' ? business.nameHi : language === 'te' ? business.nameTe : business.name;
  const description = language === 'hi' ? business.descriptionHi : language === 'te' ? business.descriptionTe : business.description;

  const difficultyColors = {
    low: 'bg-emerald-light/50 text-emerald-dark',
    medium: 'bg-lavender-light/50 text-lavender-dark',
    high: 'bg-destructive/20 text-destructive',
  };

  const demandStars = { low: 1, medium: 2, high: 3 };

  return (
    <div className={cn('glass-card p-5 hover-lift transition-all duration-300', business.sustainable && 'ring-2 ring-emerald', className)}>
      <div className="flex items-start gap-4">
        <div className="text-4xl">{business.icon}</div>
        <div className="flex-1">
          <div className="flex items-start justify-between gap-2">
            <h3 className="font-bold text-lg text-foreground">{name}</h3>
            {business.sustainable && (
              <span className="flex items-center gap-1 bg-emerald-light/50 text-emerald-dark px-2 py-1 rounded-full text-xs font-semibold">
                <Leaf size={12} />
                {t('sustainable', language)}
              </span>
            )}
          </div>
          <p className="text-sm text-muted-foreground mt-1">{description}</p>
        </div>
      </div>

      <div className="grid grid-cols-3 gap-3 mt-4">
        <div className="bg-muted/30 rounded-2xl p-3 text-center">
          <div className="flex items-center justify-center gap-1 text-emerald-dark">
            <IndianRupee size={16} />
            <span className="font-bold text-lg">{business.estimatedIncome}</span>
          </div>
          <p className="text-xs text-muted-foreground mt-1">/month</p>
        </div>
        <div className="bg-muted/30 rounded-2xl p-3 text-center">
          <span className={cn('inline-block px-2 py-1 rounded-full text-xs font-semibold', difficultyColors[business.difficulty])}>
            {t(business.difficulty, language)}
          </span>
          <p className="text-xs text-muted-foreground mt-1">Skill</p>
        </div>
        <div className="bg-muted/30 rounded-2xl p-3 text-center">
          <div className="flex items-center justify-center gap-0.5">
            {Array.from({ length: 3 }).map((_, i) => (
              <Star key={i} size={14} className={cn(i < demandStars[business.demand] ? 'text-primary fill-primary' : 'text-muted')} />
            ))}
          </div>
          <p className="text-xs text-muted-foreground mt-1">Demand</p>
        </div>
      </div>

      <div className="flex items-center justify-between mt-4 pt-4 border-t border-border/30">
        <div>
          <p className="text-xs text-muted-foreground">Required Budget</p>
          <p className="font-semibold text-foreground">{business.requiredBudget}</p>
        </div>
        <Button variant="default" onClick={() => onSelect?.(business)}>{t('start', language)}</Button>
      </div>
    </div>
  );
};