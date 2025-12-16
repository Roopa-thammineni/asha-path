import React from 'react';
import { MapPin, Filter } from 'lucide-react';
import { JobCard } from '@/components/JobCard';
import { useApp } from '@/contexts/AppContext';
import { t } from '@/lib/translations';
import { jobs } from '@/data/mockData';
import { Job } from '@/types';
import { useToast } from '@/hooks/use-toast';

export const JobsPage: React.FC = () => {
  const { language } = useApp();
  const { toast } = useToast();

  const handleAcceptJob = (job: Job) => {
    const title = language === 'hi' 
      ? job.titleHi 
      : language === 'te' 
      ? job.titleTe 
      : job.title;

    toast({
      title: '✅ Job Accepted!',
      description: `${title} - ₹${job.pay}`,
    });
  };

  return (
    <div className="min-h-screen pb-24 px-4 pt-6">
      {/* Header */}
      <header className="mb-6">
        <h1 className="text-2xl font-bold text-foreground">
          {t('findWork', language)}
        </h1>
        <div className="flex items-center gap-2 text-sm text-muted-foreground mt-1">
          <MapPin size={14} />
          <span>Jobs near you</span>
        </div>
      </header>

      {/* Stats */}
      <div className="grid grid-cols-3 gap-3 mb-6">
        <div className="bg-card rounded-2xl p-3 text-center shadow-soft">
          <p className="text-xl font-bold text-primary">{jobs.length}</p>
          <p className="text-xs text-muted-foreground">Available</p>
        </div>
        <div className="bg-card rounded-2xl p-3 text-center shadow-soft">
          <p className="text-xl font-bold text-accent">{jobs.filter(j => j.verified).length}</p>
          <p className="text-xs text-muted-foreground">{t('verified', language)}</p>
        </div>
        <div className="bg-card rounded-2xl p-3 text-center shadow-soft">
          <p className="text-xl font-bold text-forest">5 km</p>
          <p className="text-xs text-muted-foreground">Radius</p>
        </div>
      </div>

      {/* Filter Tabs */}
      <div className="flex gap-2 overflow-x-auto pb-2 mb-4 -mx-4 px-4">
        {['All', '📅 Daily', '📆 Weekly', '📇 Monthly'].map((filter, i) => (
          <button
            key={filter}
            className={`px-4 py-2 rounded-full text-sm font-medium whitespace-nowrap transition-all ${
              i === 0 
                ? 'bg-primary text-primary-foreground' 
                : 'bg-secondary text-secondary-foreground hover:bg-secondary/80'
            }`}
          >
            {filter}
          </button>
        ))}
      </div>

      {/* Jobs List */}
      <div className="space-y-4">
        {jobs.map((job, index) => (
          <div 
            key={job.id}
            style={{ animationDelay: `${index * 100}ms` }}
          >
            <JobCard 
              job={job} 
              onAccept={handleAcceptJob}
            />
          </div>
        ))}
      </div>
    </div>
  );
};
