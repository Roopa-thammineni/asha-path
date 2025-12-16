import React from 'react';
import { MapPin } from 'lucide-react';
import { JobCard } from '@/components/JobCard';
import { useApp } from '@/contexts/AppContext';
import { t } from '@/lib/translations';
import { Job } from '@/types';
import { useToast } from '@/hooks/use-toast';

export const JobsPage: React.FC = () => {
  const { language, jobs } = useApp(); // Access global jobs list
  const { toast } = useToast();

  const handleAcceptJob = (job: Job) => {
    const title = language === 'hi' ? job.titleHi : language === 'te' ? job.titleTe : job.title;
    toast({
      title: '✅ Job Accepted!',
      description: `${title || job.title} - ₹${job.pay}`,
    });
  };

  return (
    <div className="min-h-screen pb-28 px-4 pt-6">
      <header className="mb-6 animate-fade-in-up">
        <h1 className="text-2xl font-bold text-gradient">
          {t('findWork', language)}
        </h1>
        <div className="flex items-center gap-2 text-sm text-muted-foreground mt-1">
          <MapPin size={14} className="text-primary" />
          <span>Jobs near you</span>
        </div>
      </header>

      {/* Stats Table */}
      <div className="grid grid-cols-3 gap-3 mb-6 animate-fade-in-up stagger-1">
        <div className="glass-card p-4 text-center">
          <p className="text-xl font-bold text-lavender-dark">{jobs.length}</p>
          <p className="text-xs text-muted-foreground mt-1">Available</p>
        </div>
        <div className="glass-card p-4 text-center">
          <p className="text-xl font-bold text-emerald-dark">{jobs.filter(j => j.verified).length}</p>
          <p className="text-xs text-muted-foreground mt-1">{t('verified', language)}</p>
        </div>
        <div className="glass-card p-4 text-center">
          <p className="text-xl font-bold text-blush-dark">5 km</p>
          <p className="text-xs text-muted-foreground mt-1">Radius</p>
        </div>
      </div>

      {/* Filter Tabs */}
      <div className="flex gap-2 overflow-x-auto pb-2 mb-4 -mx-4 px-4 animate-fade-in-up stagger-2">
        {['All', '📅 Daily', '📆 Weekly', '📇 Monthly'].map((filter, i) => (
          <button
            key={filter}
            className={`px-4 py-2.5 rounded-full text-sm font-medium whitespace-nowrap transition-all duration-300 ${
              i === 0 ? 'gradient-primary text-white' : 'glass-card text-foreground'
            }`}
          >
            {filter}
          </button>
        ))}
      </div>

      {/* Jobs List - Reads from Shared Context */}
      <div className="space-y-4">
        {jobs.length > 0 ? (
          jobs.map((job, index) => (
            <div 
              key={job.id}
              className="animate-fade-in-up"
              style={{ animationDelay: `${(index + 3) * 0.1}s` }}
            >
              <JobCard job={job} onAccept={handleAcceptJob} />
            </div>
          ))
        ) : (
          <div className="text-center py-10 glass-card">
            <p className="text-muted-foreground">No jobs posted yet.</p>
          </div>
        )}
      </div>
    </div>
  );
};