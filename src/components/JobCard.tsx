import React from 'react';
import { MapPin, Clock, BadgeCheck, IndianRupee } from 'lucide-react';
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
    daily: 'bg-sky/20 text-sky',
    weekly: 'bg-forest/20 text-forest',
    monthly: 'bg-primary/20 text-primary',
  };

  return (
    <div className={cn(
      'bg-card rounded-3xl p-4 shadow-soft animate-fade-in',
      className
    )}>
      <div className="flex gap-4">
        {/* Icon */}
        <div className="flex-shrink-0 w-16 h-16 rounded-2xl bg-secondary flex items-center justify-center text-3xl">
          {job.icon}
        </div>

        {/* Content */}
        <div className="flex-1 min-w-0">
          <div className="flex items-start justify-between gap-2">
            <h3 className="font-semibold text-lg text-foreground truncate">
              {title}
            </h3>
            {job.verified && (
              <BadgeCheck size={20} className="text-accent flex-shrink-0" />
            )}
          </div>

          <p className="text-sm text-muted-foreground">{job.employer}</p>

          <div className="flex flex-wrap items-center gap-3 mt-2">
            <span className="flex items-center gap-1 text-sm text-muted-foreground">
              <MapPin size={14} />
              {job.distance}
            </span>
            <span className={cn(
              'px-2 py-0.5 rounded-full text-xs font-medium',
              typeColors[job.type]
            )}>
              {job.type}
            </span>
          </div>
        </div>
      </div>

      {/* Pay and Action */}
      <div className="flex items-center justify-between mt-4 pt-4 border-t border-border">
        <div className="flex items-center gap-1">
          <IndianRupee size={20} className="text-accent" />
          <span className="text-xl font-bold text-foreground">{job.pay}</span>
        </div>

        <Button
          variant="success"
          size="default"
          onClick={() => onAccept?.(job)}
          className="min-w-[100px]"
        >
          {t('accept', language)}
        </Button>
      </div>
    </div>
  );
};
