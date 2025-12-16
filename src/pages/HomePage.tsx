import React from 'react';
import { Briefcase, BookOpen, MessageCircle, Sparkles, TrendingUp } from 'lucide-react';
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
    <div className="min-h-screen pb-24 px-4 pt-6 gradient-hero">
      {/* Header */}
      <header className="flex items-center justify-between mb-6">
        <div>
          <h1 className="text-2xl font-bold text-foreground">
            {t('welcome', language)}
          </h1>
          <p className="text-sm text-muted-foreground">
            {t('welcomeMessage', language)}
          </p>
        </div>
        <LanguageSelector />
      </header>

      {/* Voice Button - Central Feature */}
      <div className="flex justify-center my-8">
        <VoiceButton size="xl" onPress={handleVoicePress} />
      </div>

      {/* Quick Actions */}
      <div className="grid grid-cols-2 gap-4 mb-6">
        <IconCard
          icon={MessageCircle}
          label={t('businessGuide', language)}
          variant="primary"
          size="lg"
          onClick={() => onNavigate('guide')}
        />
        <IconCard
          icon={Briefcase}
          label={t('findWork', language)}
          variant="success"
          size="lg"
          onClick={() => onNavigate('jobs')}
        />
        <IconCard
          icon={BookOpen}
          label={t('learnSkills', language)}
          variant="outline"
          size="lg"
          onClick={() => onNavigate('learn')}
        />
        <IconCard
          icon={Sparkles}
          label={t('governmentSchemes', language)}
          variant="default"
          size="lg"
          badge="New"
          onClick={() => onNavigate('guide')}
        />
      </div>

      {/* Impact Stats */}
      <div className="bg-card rounded-3xl p-5 shadow-soft mb-6">
        <div className="flex items-center gap-2 mb-4">
          <TrendingUp size={20} className="text-accent" />
          <h2 className="font-semibold text-foreground">Community Impact</h2>
        </div>
        <div className="grid grid-cols-3 gap-3">
          <div className="text-center">
            <p className="text-2xl font-bold text-primary">
              {(impactStats.totalUsers / 1000).toFixed(1)}K
            </p>
            <p className="text-xs text-muted-foreground">Women</p>
          </div>
          <div className="text-center">
            <p className="text-2xl font-bold text-accent">
              {(impactStats.businessesStarted / 1000).toFixed(1)}K
            </p>
            <p className="text-xs text-muted-foreground">Businesses</p>
          </div>
          <div className="text-center">
            <p className="text-2xl font-bold text-forest">
              {impactStats.incomeGenerated}
            </p>
            <p className="text-xs text-muted-foreground">Earned</p>
          </div>
        </div>
      </div>

      {/* Emergency Button */}
      <EmergencyButton />
    </div>
  );
};
