import React from 'react';
import { Briefcase, BookOpen, MessageCircle, Sparkles, TrendingUp, Heart } from 'lucide-react';
import { IconCard } from '@/components/IconCard';
import { VoiceButton } from '@/components/VoiceButton';
import { EmergencyButton } from '@/components/EmergencyButton';
import { LanguageSelector } from '@/components/LanguageSelector';
import { useApp } from '@/contexts/AppContext';
import { t } from '@/lib/translations';
import { impactStats } from '@/data/mockData';

interface HomePageProps {
  onNavigate: (tab: string) => void;
}

export const HomePage: React.FC<HomePageProps> = ({ onNavigate }) => {
  const { language, setVoiceState } = useApp();

  const handleVoicePress = () => {
    setVoiceState({ isListening: true });
    // Simulate voice interaction
    setTimeout(() => {
      setVoiceState({ isListening: false, isSpeaking: true });
      setTimeout(() => {
        setVoiceState({ isSpeaking: false });
      }, 2000);
    }, 2000);
  };

  return (
    <div className="min-h-screen pb-28 px-4 pt-6">
      {/* Header */}
      <header className="flex items-center justify-between mb-8 animate-fade-in-up">
        <div>
          <h1 className="text-2xl font-bold text-gradient">
            {t('welcome', language)}
          </h1>
          <p className="text-sm text-muted-foreground mt-1">
            {t('welcomeMessage', language)}
          </p>
        </div>
        <LanguageSelector />
      </header>

      {/* Voice Button - Central Feature */}
      <div className="flex justify-center my-10 animate-fade-in-up stagger-1">
        <VoiceButton size="xl" onPress={handleVoicePress} />
      </div>

      {/* Quick Actions */}
      <div className="grid grid-cols-2 gap-4 mb-8">
        <div className="animate-fade-in-up stagger-2">
          <IconCard
            icon={MessageCircle}
            label={t('businessGuide', language)}
            variant="primary"
            size="lg"
            onClick={() => onNavigate('guide')}
          />
        </div>
        <div className="animate-fade-in-up stagger-3">
          <IconCard
            icon={Briefcase}
            label={t('findWork', language)}
            variant="success"
            size="lg"
            onClick={() => onNavigate('jobs')}
          />
        </div>
        <div className="animate-fade-in-up stagger-4">
          <IconCard
            icon={BookOpen}
            label={t('learnSkills', language)}
            variant="outline"
            size="lg"
            onClick={() => onNavigate('learn')}
          />
        </div>
        <div className="animate-fade-in-up stagger-5">
          <IconCard
            icon={Sparkles}
            label={t('governmentSchemes', language)}
            variant="default"
            size="lg"
            badge="New"
            onClick={() => onNavigate('guide')}
          />
        </div>
      </div>

      {/* Impact Stats */}
      <div className="glass-card p-6 mb-6 animate-fade-in-up" style={{ animationDelay: '0.6s' }}>
        <div className="flex items-center gap-2 mb-5">
          <div className="p-2 rounded-xl bg-primary/10">
            <TrendingUp size={20} className="text-primary" />
          </div>
          <h2 className="font-semibold text-foreground">Community Impact</h2>
        </div>
        <div className="grid grid-cols-3 gap-4">
          <div className="text-center p-3 rounded-2xl bg-lavender-light/30">
            <p className="text-2xl font-bold text-lavender-dark">
              {(impactStats.totalUsers / 1000).toFixed(1)}K
            </p>
            <p className="text-xs text-muted-foreground mt-1">Women</p>
          </div>
          <div className="text-center p-3 rounded-2xl bg-emerald-light/30">
            <p className="text-2xl font-bold text-emerald-dark">
              {(impactStats.businessesStarted / 1000).toFixed(1)}K
            </p>
            <p className="text-xs text-muted-foreground mt-1">Businesses</p>
          </div>
          <div className="text-center p-3 rounded-2xl bg-blush-light/30">
            <p className="text-2xl font-bold text-blush-dark">
              {impactStats.incomeGenerated}
            </p>
            <p className="text-xs text-muted-foreground mt-1">Earned</p>
          </div>
        </div>
      </div>

      {/* Emergency Button */}
      <div className="animate-fade-in-up" style={{ animationDelay: '0.7s' }}>
        <EmergencyButton />
      </div>
    </div>
  );
};