import React, { useState } from 'react';
import { Sparkles, Loader2, ArrowRight, Play, CheckCircle2 } from 'lucide-react';
import { BusinessCard } from '@/components/BusinessCard';
import { Button } from '@/components/ui/button';
import { useApp } from '@/contexts/AppContext';
import { t } from '@/lib/translations';
import { skills as mockSkills } from '@/data/mockData';
import { BusinessIdea } from '@/types';
import { useToast } from '@/hooks/use-toast';
import { cn } from '@/lib/utils';
import { getBusinessSuggestions } from '@/lib/gemini'; 

type Step = 'start' | 'location' | 'budget' | 'skills' | 'results';

export const GuidePage: React.FC = () => {
  const { language } = useApp();
  const { toast } = useToast();
  const [step, setStep] = useState<Step>('start');
  const [isLoading, setIsLoading] = useState(false);
  const [aiSuggestions, setAiSuggestions] = useState<Partial<BusinessIdea>[]>([]);
  const [selections, setSelections] = useState({
    location: '',
    budget: '',
    skills: [] as string[],
  });

  const handleGenerateBusiness = async () => {
    setIsLoading(true);
    setStep('results');
    
    try {
      const suggestions = await getBusinessSuggestions(
        selections.location,
        selections.budget,
        selections.skills,
        language
      );
      setAiSuggestions(suggestions);
    } catch (error: any) {
      console.warn("AI logic failed, using local fallback data:", error.message);
      
      // Fallback logic using if/else blocks based on selected skills
      let fallbackData: Partial<BusinessIdea>[] = [];

      if (selections.skills.includes('cooking')) {
        fallbackData = [
          {
            name: language === 'hi' ? 'टिफिन सर्विस' : 'Home Tiffin Service',
            estimatedIncome: "₹8,000 - ₹12,000",
            difficulty: "low",
            demand: "high",
            description: "Cook healthy meals for workers and students in your area."
          },
          {
            name: language === 'hi' ? 'अचार बनाना' : 'Pickle Making',
            estimatedIncome: "₹4,000 - ₹7,000",
            difficulty: "low",
            demand: "medium",
            description: "Prepare traditional snacks and sell at local markets."
          }
        ];
      } else if (selections.skills.includes('stitching')) {
        fallbackData = [
          {
            name: language === 'hi' ? 'सिलाई केंद्र' : 'Boutique & Tailoring',
            estimatedIncome: "₹6,000 - ₹15,000",
            difficulty: "medium",
            demand: "high",
            description: "Start a tailoring unit for dresses and alterations."
          }
        ];
      } else {
        fallbackData = [
          {
            name: language === 'hi' ? 'किराना दुकान' : 'Provision Store',
            estimatedIncome: "₹10,000 - ₹15,000",
            difficulty: "medium",
            demand: "high",
            description: "Open a small shop for daily essentials."
          }
        ];
      }
      setAiSuggestions(fallbackData);
    } finally {
      setIsLoading(false);
    }
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
      <div className="min-h-screen pb-28 px-4 pt-6 flex flex-col items-center justify-center">
        <div className="text-center mb-10 animate-fade-in-up">
          <div className="w-24 h-24 rounded-full gradient-primary mx-auto mb-5 flex items-center justify-center shadow-glow animate-glow">
            <Sparkles size={44} className="text-white" />
          </div>
          <h1 className="text-2xl font-bold text-gradient mb-2">{t('businessGuide', language)}</h1>
          <p className="text-muted-foreground px-6">Answer 3 questions to get your personalized plan.</p>
        </div>
        <Button size="xl" className="w-full max-w-xs gap-3" onClick={() => setStep('location')}>
          <Play fill="currentColor" size={20} />
          Start Now
        </Button>
      </div>
    );
  }

  if (step === 'location') {
    return (
      <div className="min-h-screen pb-28 px-4 pt-6">
        <header className="mb-6 animate-fade-in-up">
          <h1 className="text-2xl font-bold text-gradient">{t('location', language)}</h1>
          <p className="text-sm text-muted-foreground mt-1">Where do you live?</p>
        </header>
        <div className="grid grid-cols-1 gap-4">
          {locations.map((loc, index) => (
            <button
              key={loc.id}
              onClick={() => {
                setSelections(s => ({ ...s, location: loc.id }));
                setStep('budget');
              }}
              className="flex items-center gap-4 p-5 glass-card transition-all duration-300 hover-lift animate-fade-in-up"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <span className="text-4xl">{loc.icon}</span>
              <span className="text-lg font-semibold text-foreground">{loc.label}</span>
              <ArrowRight className="ml-auto text-muted-foreground" />
            </button>
          ))}
        </div>
      </div>
    );
  }

  if (step === 'budget') {
    return (
      <div className="min-h-screen pb-28 px-4 pt-6">
        <header className="mb-6 animate-fade-in-up">
          <h1 className="text-2xl font-bold text-gradient">{t('budget', language)}</h1>
          <p className="text-sm text-muted-foreground mt-1">What is your investment budget?</p>
        </header>
        <div className="grid grid-cols-1 gap-4">
          {budgets.map((budget, index) => (
            <button
              key={budget.id}
              onClick={() => {
                setSelections(s => ({ ...s, budget: budget.label }));
                setStep('skills');
              }}
              className="flex items-center gap-4 p-5 glass-card transition-all duration-300 hover-lift animate-fade-in-up"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <span className="text-3xl">{budget.icon}</span>
              <span className="text-lg font-semibold text-foreground">{budget.label}</span>
              <ArrowRight className="ml-auto text-muted-foreground" />
            </button>
          ))}
        </div>
      </div>
    );
  }

  if (step === 'skills') {
    return (
      <div className="min-h-screen pb-28 px-4 pt-6">
        <header className="mb-6 animate-fade-in-up">
          <h1 className="text-2xl font-bold text-gradient">{t('skills', language)}</h1>
          <p className="text-sm text-muted-foreground mt-1">What are you good at?</p>
        </header>
        <div className="grid grid-cols-2 gap-4 mb-6">
          {mockSkills.map((skill, index) => {
            const isSelected = selections.skills.includes(skill.id);
            const name = language === 'hi' ? skill.nameHi : language === 'te' ? skill.nameTe : skill.name;
            return (
              <button
                key={skill.id}
                onClick={() => {
                  setSelections(s => ({
                    ...s,
                    skills: isSelected ? s.skills.filter(id => id !== skill.id) : [...s.skills, skill.id]
                  }));
                }}
                className={cn(
                  'flex flex-col items-center gap-2 p-5 glass-card transition-all duration-300',
                  isSelected && 'ring-2 ring-primary bg-primary/5 shadow-glow'
                )}
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <span className="text-4xl">{skill.icon}</span>
                <span className="text-base font-semibold">{name}</span>
                {isSelected && <CheckCircle2 size={16} className="text-primary mt-1" />}
              </button>
            );
          })}
        </div>
        <Button className="w-full gap-2" size="lg" onClick={handleGenerateBusiness} disabled={selections.skills.length === 0}>
          Find My Business <ArrowRight size={20} />
        </Button>
      </div>
    );
  }

  if (step === 'results') {
    return (
      <div className="min-h-screen pb-28 px-4 pt-6">
        <header className="mb-6">
          <h1 className="text-2xl font-bold text-gradient flex items-center gap-2">
            <Sparkles className="text-primary" /> {t('suggestedBusiness', language)}
          </h1>
        </header>
        {isLoading ? (
          <div className="flex flex-col items-center justify-center py-20 gap-4 text-center">
            <Loader2 className="h-12 w-12 text-primary animate-spin" />
            <p className="text-lg font-medium animate-pulse text-muted-foreground">Consulting AI experts...</p>
          </div>
        ) : (
          <div className="space-y-4">
            {aiSuggestions.map((biz, index) => (
              <BusinessCard 
                key={index}
                business={{
                  ...biz,
                  id: `ai-${index}`,
                  icon: '💡',
                  sustainable: true,
                  requiredBudget: selections.budget,
                  nameHi: biz.name || '',
                  nameTe: biz.name || '',
                  descriptionHi: biz.description || '',
                  descriptionTe: biz.description || '',
                } as BusinessIdea}
              />
            ))}
            <Button variant="outline" className="w-full mt-6" onClick={() => setStep('start')}>
              Start Over
            </Button>
          </div>
        )}
      </div>
    );
  }

  return null; 
};