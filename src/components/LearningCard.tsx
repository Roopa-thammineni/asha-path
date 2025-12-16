import React, { useState } from 'react';
import {
  Play,
  Headphones,
  Image as ImageIcon,
  CheckCircle2,
  Star,
  ArrowLeft,
} from 'lucide-react';
import { Button } from '@/components/ui/button';
import { useApp } from '@/contexts/AppContext';
import { t } from '@/lib/translations';
import { cn } from '@/lib/utils';

/* =========================
   TYPES
========================= */

export interface LearningModule {
  id: string | number;
  title: string;
  titleHi?: string;
  titleTe?: string;
  type: 'video' | 'audio' | 'visual';
  duration: string;
  videoUrl?: string;
  steps?: string[]; // Made optional for safety
  progress: number;
  completed: boolean;
}

/* =========================
   MAIN COMPONENT
========================= */

interface LearningCardProps {
  module: LearningModule;
  className?: string;
}

export const LearningCard: React.FC<LearningCardProps> = ({
  module,
  className,
}) => {
  const { language } = useApp();

  const [stage, setStage] = useState<
    'card' | 'learn' | 'practice' | 'upload' | 'feedback' | 'earn'
  >('card');

  const [currentStep, setCurrentStep] = useState(0);
  const [uploadedImage, setUploadedImage] = useState<File | null>(null);

  const title =
    language === 'hi'
      ? module.titleHi || module.title
      : language === 'te'
      ? module.titleTe || module.title
      : module.title;

  const speak = (text: string) => {
    if (!text) return;
    const utterance = new SpeechSynthesisUtterance(text);
    speechSynthesis.speak(utterance);
  };

  const typeIcons = {
    video: Play,
    audio: Headphones,
    visual: ImageIcon,
  };

  const TypeIcon = typeIcons[module.type] || ImageIcon;

  // Use optional chaining and default to empty array to prevent .length crashes
  const steps = module.steps || [];

  /* =========================
      PRACTICE FLOW
  ========================= */

  const nextPracticeStep = () => {
    if (currentStep < steps.length - 1) {
      setCurrentStep(currentStep + 1);
    } else {
      setStage('upload');
    }
  };

  /* =========================
      RENDER: LEARNING CARD
  ========================= */

  if (stage === 'card') {
    return (
      <div
        className={cn(
          'glass-card p-4 hover-lift transition-all duration-300',
          module.completed && 'ring-2 ring-emerald',
          className
        )}
      >
        <div className="flex gap-4">
          <div
            className={cn(
              'flex-shrink-0 w-14 h-14 rounded-2xl flex items-center justify-center',
              module.type === 'video' && 'bg-lavender-light/50',
              module.type === 'audio' && 'bg-blush-light/50',
              module.type === 'visual' && 'bg-emerald-light/50'
            )}
          >
            <TypeIcon size={28} />
          </div>

          <div className="flex-1">
            <div className="flex justify-between items-start">
              <h3 className="font-semibold">{title}</h3>
              {module.completed && (
                <CheckCircle2 size={20} className="text-emerald" />
              )}
            </div>
            <p className="text-sm text-muted-foreground">
              {module.duration}
            </p>

            {module.progress > 0 && !module.completed && (
              <div className="mt-3">
                <div className="h-2 bg-muted rounded-full overflow-hidden">
                  <div
                    className="h-full gradient-primary rounded-full transition-all duration-500"
                    style={{ width: `${module.progress}%` }}
                  />
                </div>
                <p className="text-xs mt-1">
                  {module.progress}% {t('complete', language)}
                </p>
              </div>
            )}
          </div>
        </div>

        <div className="mt-4 pt-4 border-t">
          <Button
            className="w-full"
            onClick={() => setStage('learn')}
          >
            {t('start', language)}
          </Button>
        </div>
      </div>
    );
  }

  /* =========================
      RENDER: LEARN
  ========================= */

  if (stage === 'learn') {
    return (
      <div className="glass-card p-6 space-y-4 animate-fade-in">
        <button onClick={() => setStage('card')} className="flex items-center text-sm text-muted-foreground gap-1">
            <ArrowLeft size={16} /> Back
        </button>
        <h2 className="font-bold text-lg">{title}</h2>

        {module.videoUrl ? (
          <video controls className="w-full rounded-xl shadow-lg">
            <source src={module.videoUrl} />
          </video>
        ) : (
          <div className="aspect-video bg-muted rounded-xl flex flex-col items-center justify-center text-muted-foreground border-2 border-dashed">
             <Play size={48} className="mb-2 opacity-20" />
             <p>No video available</p>
          </div>
        )}

        <Button
          className="w-full py-6 text-lg"
          onClick={() => {
            speak(`Now start practicing ${title}`);
            setStage('practice');
          }}
        >
          Start Practice
        </Button>
      </div>
    );
  }

  /* =========================
      RENDER: PRACTICE
  ========================= */

  if (stage === 'practice') {
    return (
      <div className="glass-card p-6 space-y-4 animate-fade-in">
        <div className="flex justify-between items-center">
            <button onClick={() => setStage('learn')} className="flex items-center text-sm text-muted-foreground gap-1">
                <ArrowLeft size={16} /> Back
            </button>
            <h3 className="font-semibold text-primary">
                Step {steps.length > 0 ? currentStep + 1 : 0} of {steps.length}
            </h3>
        </div>

        <div className="min-h-[120px] flex items-center justify-center p-4 bg-muted/30 rounded-2xl border border-primary/10">
            <p className="text-xl text-center font-medium leading-relaxed">
                {steps[currentStep] || "Setting up practice environment..."}
            </p>
        </div>

        <div className="grid grid-cols-1 gap-3">
            <Button
              variant="outline"
              className="py-6 border-primary/20"
              onClick={() => speak(steps[currentStep])}
              disabled={steps.length === 0}
            >
              🔊 Repeat Instruction
            </Button>

            <Button 
                className="w-full py-6 text-lg" 
                onClick={nextPracticeStep}
                disabled={steps.length === 0}
            >
              {currentStep === steps.length - 1
                ? 'Finish Practice'
                : 'Next Step'}
            </Button>
        </div>
      </div>
    );
  }

  /* =========================
      RENDER: UPLOAD WORK
  ========================= */

  if (stage === 'upload') {
    return (
      <div className="glass-card p-6 space-y-4 animate-fade-in">
        <h3 className="font-bold text-lg">Upload Your Work</h3>
        <p className="text-sm text-muted-foreground">Take a photo of your finished task so mentors can guide you.</p>

        <div className="border-2 border-dashed border-primary/20 rounded-2xl p-4 text-center bg-primary/5">
            <input
              type="file"
              id="file-upload"
              accept="image/*"
              className="hidden"
              onChange={(e) =>
                setUploadedImage(e.target.files?.[0] || null)
              }
            />
            <label htmlFor="file-upload" className="cursor-pointer block py-8">
                <ImageIcon size={48} className="mx-auto mb-2 text-primary/40" />
                <span className="text-primary font-medium underline">Click to take photo</span>
            </label>
        </div>

        {uploadedImage && (
          <div className="relative group">
            <img
                src={URL.createObjectURL(uploadedImage)}
                className="rounded-xl w-full max-h-60 object-cover shadow-md"
            />
            <div className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 transition-opacity rounded-xl flex items-center justify-center">
                <p className="text-white text-sm font-bold">Image Selected</p>
            </div>
          </div>
        )}

        <Button
          className="w-full py-6"
          disabled={!uploadedImage}
          onClick={() => setStage('feedback')}
        >
          Submit for Feedback
        </Button>
      </div>
    );
  }

  /* =========================
      RENDER: FEEDBACK
  ========================= */

  if (stage === 'feedback') {
    return (
      <div className="glass-card p-6 space-y-4 animate-fade-in text-center">
        <div className="w-16 h-16 bg-yellow-100 rounded-full flex items-center justify-center mx-auto mb-2">
            <Star className="text-yellow-600 fill-yellow-600" size={32} />
        </div>
        <h3 className="font-bold text-xl">Mentor Feedback</h3>

        <div className="flex justify-center text-yellow-500 gap-1">
          <Star fill="currentColor" /><Star fill="currentColor" /><Star fill="currentColor" /><Star fill="currentColor" /><Star />
        </div>

        <p className="text-muted-foreground italic bg-muted/50 p-4 rounded-xl">
          "Great effort! Your stitching is very neat. Next time, try to keep the spacing slightly more even for a professional look."
        </p>

        <Button className="w-full py-6 text-lg" onClick={() => setStage('earn')}>
          Get My Certificate
        </Button>
      </div>
    );
  }

  /* =========================
      RENDER: EARN
  ========================= */

  return (
    <div className="glass-card p-8 text-center space-y-4 animate-fade-in border-2 border-emerald/20">
      <div className="w-20 h-20 bg-emerald/10 rounded-full flex items-center justify-center mx-auto">
          <CheckCircle2 size={48} className="text-emerald" />
      </div>
      <h3 className="text-emerald font-bold text-2xl">
        🎉 Skill Verified!
      </h3>
      <p className="text-muted-foreground">
          Congratulations! You have successfully completed this module. You can now start accepting jobs related to this skill.
      </p>
      <Button variant="outline" className="w-full" onClick={() => setStage('card')}>
          Back to Course List
      </Button>
    </div>
  );
};