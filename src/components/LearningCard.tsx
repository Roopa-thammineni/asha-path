import React from 'react';
import { Play, Headphones, Image, CheckCircle2 } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { useApp } from '@/contexts/AppContext';
import { t } from '@/lib/translations';
import { LearningModule } from '@/types';
import { cn } from '@/lib/utils';

interface LearningCardProps {
  module: LearningModule;
  onStart?: (module: LearningModule) => void;
  className?: string;
}

export const LearningCard: React.FC<LearningCardProps> = ({
  module,
  onStart,
  className,
}) => {
  const { language } = useApp();

  const title = language === 'hi' 
    ? module.titleHi 
    : language === 'te' 
    ? module.titleTe 
    : module.title;

  const typeIcons = {
    video: Play,
    audio: Headphones,
    visual: Image,
  };

  const TypeIcon = typeIcons[module.type];

  return (
    <div className={cn(
      'glass-card p-4 hover-lift transition-all duration-300',
      module.completed && 'ring-2 ring-emerald',
      className
    )}>
      <div className="flex gap-4">
        <div className={cn(
          'flex-shrink-0 w-14 h-14 rounded-2xl flex items-center justify-center',
          module.type === 'video' && 'bg-lavender-light/50',
          module.type === 'audio' && 'bg-blush-light/50',
          module.type === 'visual' && 'bg-emerald-light/50',
        )}>
          <TypeIcon 
            size={28} 
            className={cn(
              module.type === 'video' && 'text-lavender-dark',
              module.type === 'audio' && 'text-blush-dark',
              module.type === 'visual' && 'text-emerald-dark',
            )}
          />
        </div>

        <div className="flex-1 min-w-0">
          <div className="flex items-start justify-between gap-2">
            <h3 className="font-semibold text-foreground">{title}</h3>
            {module.completed && (
              <CheckCircle2 size={20} className="text-emerald flex-shrink-0" />
            )}
          </div>
          <p className="text-sm text-muted-foreground mt-1">{module.duration}</p>

          {module.progress > 0 && !module.completed && (
            <div className="mt-3">
              <div className="h-2 bg-muted rounded-full overflow-hidden">
                <div 
                  className="h-full gradient-primary rounded-full transition-all duration-300"
                  style={{ width: `${module.progress}%` }}
                />
              </div>
              <p className="text-xs text-muted-foreground mt-1">{module.progress}% {t('complete', language)}</p>
            </div>
          )}
        </div>
      </div>

      <div className="mt-4 pt-4 border-t border-border/30">
        <Button
          variant={module.completed ? 'outline' : 'default'}
          size="default"
          onClick={() => onStart?.(module)}
          className="w-full"
        >
          {module.completed ? t('complete', language) : module.progress > 0 ? t('continue', language) : t('start', language)}
        </Button>
      </div>
    </div>
  );
};