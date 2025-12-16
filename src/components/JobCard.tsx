import React from 'react';
import { MapPin, BadgeCheck, IndianRupee } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { useApp } from '@/contexts/AppContext';
import { t } from '@/lib/translations';
import { Job } from '@/types';
import { cn } from '@/lib/utils';

interface JobCardProps {
  job: Job;
  onAccept?: (job: Job) => void;
  className?: string;
}

export const JobCard: React.FC<JobCardProps> = ({ job, onAccept, className }) => {
  const { language } = useApp();
  const title = language === 'hi' ? job.titleHi : language === 'te' ? job.titleTe : job.title;

  const typeColors = {
    daily: 'bg-blush-light/50 text-blush-dark',
    weekly: 'bg-emerald-light/50 text-emerald-dark',
    monthly: 'bg-lavender-light/50 text-lavender-dark',
  };

  return (
    <div className={cn('glass-card p-4 hover-lift transition-all duration-300', className)}>
      <div className="flex gap-4">
        <div className="flex-shrink-0 w-16 h-16 rounded-2xl bg-muted/50 flex items-center justify-center text-3xl">
          {job.icon}
        </div>
        <div className="flex-1 min-w-0">
          <div className="flex items-start justify-between gap-2">
            <h3 className="font-semibold text-lg text-foreground truncate">{title}</h3>
            {job.verified && <BadgeCheck size={20} className="text-emerald flex-shrink-0" />}
          </div>
          <p className="text-sm text-muted-foreground">{job.employer}</p>
          <div className="flex flex-wrap items-center gap-3 mt-2">
            <span className="flex items-center gap-1 text-sm text-muted-foreground">
              <MapPin size={14} className="text-primary" />
              {job.distance}
            </span>
            <span className={cn('px-2 py-0.5 rounded-full text-xs font-medium', typeColors[job.type])}>
              {job.type}
            </span>
          </div>
        </div>
      </div>

      <div className="flex items-center justify-between mt-4 pt-4 border-t border-border/30">
        <div className="flex items-center gap-1">
          <IndianRupee size={20} className="text-emerald" />
          <span className="text-xl font-bold text-foreground">{job.pay}</span>
        </div>
        <Button variant="success" size="default" onClick={() => onAccept?.(job)} className="min-w-[100px]">
          {t('accept', language)}
        </Button>
      </div>
    </div>
  );
};