import React, { useState } from 'react';
import { MapPin, Wallet, Wrench, ArrowRight, Sparkles } from 'lucide-react';
import { VoiceButton } from '@/components/VoiceButton';
import { IconCard } from '@/components/IconCard';
import { BusinessCard } from '@/components/BusinessCard';
import { Button } from '@/components/ui/button';
import { useApp } from '@/contexts/AppContext';
import { t } from '@/lib/translations';
import { businessIdeas, skills } from '@/data/mockData';
import { BusinessIdea } from '@/types';
import { useToast } from '@/hooks/use-toast';
import { cn } from '@/lib/utils';

type Step = 'start' | 'location' | 'budget' | 'skills' | 'results';

export const GuidePage: React.FC = () => {
  const { language, setVoiceState } = useApp();
  const { toast } = useToast();
  const [step, setStep] = useState<Step>('start');
  const [selections, setSelections] = useState({
    location: '',
    budget: '',
    skills: [] as string[],
  });

  const handleVoicePress = () => {
    setVoiceState({ isListening: true });
    setTimeout(() => {
      setVoiceState({ isListening: false, isSpeaking: true });
      setTimeout(() => {
        setVoiceState({ isSpeaking: false });
        setStep('location');
      }, 1500);
    }, 2000);
  };

  const handleSelectBusiness = (business: BusinessIdea) => {
    toast({
      title: '🎉 Great Choice!',
      description: 'We will guide you to start this business',
    });
  };

  const locations = [
    { id: 'village', icon: '🏘️', label: t('village', language) },
    { id: 'town', icon: '🏙️', label: t('town', language) },
    { id: 'city', icon: '🌆', label: t('city', language) },
  ];

  const budgets = [
    { id: 'low', icon: '💰', label: '₹0 - ₹1,000' },
    { id: 'medium', icon: '💰💰', label: '₹1,000 - ₹5,000' },
    { id: 'high', icon: '💰💰💰', label: '₹5,000+' },
  ];

  if (step === 'start') {
    return (
      <div className="min-h-screen pb-24 px-4 pt-6 flex flex-col items-center justify-center">
        <div className="text-center mb-8">
          <div className="w-20 h-20 rounded-full gradient-primary mx-auto mb-4 flex items-center justify-center">
            <Sparkles size={40} className="text-primary-foreground" />
          </div>
          <h1 className="text-2xl font-bold text-foreground mb-2">
            {t('businessGuide', language)}
          </h1>
          <p className="text-muted-foreground">
            {t('askMe', language)}
          </p>
        </div>
        
        <VoiceButton size="xl" onPress={handleVoicePress} />
        
        <p className="text-sm text-muted-foreground mt-6 text-center max-w-xs">
          Tap the button and tell me about yourself. I'll suggest the best business for you!
        </p>
      </div>
    );
  }

  if (step === 'location') {
    return (
      <div className="min-h-screen pb-24 px-4 pt-6">
        <header className="mb-6">
          <h1 className="text-2xl font-bold text-foreground">
            {t('location', language)}
          </h1>
          <p className="text-sm text-muted-foreground">Where do you live?</p>
        </header>

        <div className="grid grid-cols-1 gap-4">
          {locations.map((loc) => (
            <button
              key={loc.id}
              onClick={() => {
                setSelections(s => ({ ...s, location: loc.id }));
                setStep('budget');
              }}
              className={cn(
                'flex items-center gap-4 p-5 rounded-3xl bg-card shadow-soft transition-all active:scale-[0.98]',
                selections.location === loc.id && 'ring-2 ring-primary'
              )}
            >
              <span className="text-4xl">{loc.icon}</span>
              <span className="text-lg font-semibold">{loc.label}</span>
              <ArrowRight className="ml-auto text-muted-foreground" />
            </button>
          ))}
        </div>
      </div>
    );
  }

  if (step === 'budget') {
    return (
      <div className="min-h-screen pb-24 px-4 pt-6">
        <header className="mb-6">
          <h1 className="text-2xl font-bold text-foreground">
            {t('budget', language)}
          </h1>
          <p className="text-sm text-muted-foreground">How much can you invest?</p>
        </header>

        <div className="grid grid-cols-1 gap-4">
          {budgets.map((budget) => (
            <button
              key={budget.id}
              onClick={() => {
                setSelections(s => ({ ...s, budget: budget.id }));
                setStep('skills');
              }}
              className={cn(
                'flex items-center gap-4 p-5 rounded-3xl bg-card shadow-soft transition-all active:scale-[0.98]',
                selections.budget === budget.id && 'ring-2 ring-primary'
              )}
            >
              <span className="text-3xl">{budget.icon}</span>
              <span className="text-lg font-semibold">{budget.label}</span>
              <ArrowRight className="ml-auto text-muted-foreground" />
            </button>
          ))}
        </div>
      </div>
    );
  }

  if (step === 'skills') {
    return (
      <div className="min-h-screen pb-24 px-4 pt-6">
        <header className="mb-6">
          <h1 className="text-2xl font-bold text-foreground">
            {t('skills', language)}
          </h1>
          <p className="text-sm text-muted-foreground">What can you do?</p>
        </header>

        <div className="grid grid-cols-2 gap-4 mb-6">
          {skills.map((skill) => {
            const isSelected = selections.skills.includes(skill.id);
            const name = language === 'hi' ? skill.nameHi : language === 'te' ? skill.nameTe : skill.name;
            
            return (
              <button
                key={skill.id}
                onClick={() => {
                  setSelections(s => ({
                    ...s,
                    skills: isSelected 
                      ? s.skills.filter(id => id !== skill.id)
                      : [...s.skills, skill.id]
                  }));
                }}
                className={cn(
                  'flex flex-col items-center gap-2 p-5 rounded-3xl bg-card shadow-soft transition-all active:scale-[0.98]',
                  isSelected && 'ring-2 ring-accent bg-accent/10'
                )}
              >
                <span className="text-4xl">{skill.icon}</span>
                <span className="text-base font-semibold">{name}</span>
              </button>
            );
          })}
        </div>

        <Button 
          variant="default" 
          size="xl" 
          className="w-full"
          onClick={() => setStep('results')}
        >
          {t('getStarted', language)}
          <ArrowRight size={24} />
        </Button>
      </div>
    );
  }

  // Results
  return (
    <div className="min-h-screen pb-24 px-4 pt-6">
      <header className="mb-6">
        <h1 className="text-2xl font-bold text-foreground">
          {t('suggestedBusiness', language)}
        </h1>
        <p className="text-sm text-muted-foreground">
          Based on your profile
        </p>
      </header>

      <div className="space-y-4">
        {businessIdeas.slice(0, 3).map((business, index) => (
          <div 
            key={business.id}
            style={{ animationDelay: `${index * 150}ms` }}
          >
            <BusinessCard 
              business={business} 
              onSelect={handleSelectBusiness}
            />
          </div>
        ))}
      </div>

      {/* Support Options */}
      <div className="mt-6 space-y-3">
        <h3 className="font-semibold text-foreground">{t('communitySupport', language)}</h3>
        <div className="grid grid-cols-2 gap-3">
          <button className="p-4 rounded-2xl bg-accent/10 text-center">
            <span className="text-2xl block mb-1">🏛️</span>
            <span className="text-sm font-medium text-accent">{t('governmentSchemes', language)}</span>
          </button>
          <button className="p-4 rounded-2xl bg-primary/10 text-center">
            <span className="text-2xl block mb-1">💳</span>
            <span className="text-sm font-medium text-primary">{t('microLoans', language)}</span>
          </button>
        </div>
      </div>

      <Button 
        variant="outline" 
        className="w-full mt-6"
        onClick={() => setStep('start')}
      >
        Start Over
      </Button>
    </div>
  );
};
