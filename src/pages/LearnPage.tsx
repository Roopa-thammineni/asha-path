import React from 'react';
import { Search, Filter } from 'lucide-react';
import { LearningCard } from '@/components/LearningCard';
import { useApp } from '@/contexts/AppContext';
import { t } from '@/lib/translations';
import { learningModules } from '@/data/mockData';
import { LearningModule } from '@/types';
import { useToast } from '@/hooks/use-toast';

export const LearnPage: React.FC = () => {
  const { language } = useApp();
  const { toast } = useToast();

  const handleStartModule = (module: LearningModule) => {
    const title = language === 'hi' 
      ? module.titleHi 
      : language === 'te' 
      ? module.titleTe 
      : module.title;

    toast({
      title: module.completed ? '✅ Already Completed!' : '▶️ Starting...',
      description: title,
    });
  };

  const completedCount = learningModules.filter(m => m.completed).length;
  const progressPercent = Math.round((completedCount / learningModules.length) * 100);

  return (
    <div className="min-h-screen pb-28 px-4 pt-6">
      {/* Header */}
      <header className="mb-6 animate-fade-in-up">
        <h1 className="text-2xl font-bold text-gradient">
          {t('learnSkills', language)}
        </h1>
        <p className="text-sm text-muted-foreground mt-1">
          Video, Audio & Visual Learning
        </p>
      </header>

      {/* Progress Overview */}
      <div className="glass-card p-5 mb-6 animate-fade-in-up stagger-1">
        <div className="flex items-center justify-between mb-3">
          <span className="font-semibold text-foreground">{t('progress', language)}</span>
          <span className="text-sm text-muted-foreground">
            {completedCount}/{learningModules.length}
          </span>
        </div>
        <div className="h-3 bg-muted rounded-full overflow-hidden">
          <div 
            className="h-full gradient-accent rounded-full transition-all duration-500"
            style={{ width: `${progressPercent}%` }}
          />
        </div>
        <p className="text-sm text-emerald font-medium mt-2">
          {progressPercent}% Complete
        </p>
      </div>

      {/* Filter Tabs */}
      <div className="flex gap-2 overflow-x-auto pb-2 mb-4 -mx-4 px-4 animate-fade-in-up stagger-2">
        {['All', '📹 Video', '🎧 Audio', '🖼️ Visual'].map((filter, i) => (
          <button
            key={filter}
            className={`px-4 py-2.5 rounded-full text-sm font-medium whitespace-nowrap transition-all duration-300 ${
              i === 0 
                ? 'gradient-primary text-white shadow-soft' 
                : 'glass-card text-foreground hover:shadow-soft'
            }`}
          >
            {filter}
          </button>
        ))}
      </div>

      {/* Modules List */}
      <div className="space-y-4">
        {learningModules.map((module, index) => (
          <div 
            key={module.id}
            className="animate-fade-in-up"
            style={{ animationDelay: `${(index + 3) * 0.1}s` }}
          >
            <LearningCard 
              module={module} 
              onStart={handleStartModule}
            />
          </div>
        ))}
      </div>
    </div>
  );
};