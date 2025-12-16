import React from 'react';
import { Globe } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { useApp } from '@/contexts/AppContext';
import { Language } from '@/types';
import { cn } from '@/lib/utils';

const languages: { code: Language; label: string; native: string }[] = [
  { code: 'en', label: 'English', native: 'English' },
  { code: 'hi', label: 'Hindi', native: 'हिंदी' },
  { code: 'te', label: 'Telugu', native: 'తెలుగు' },
];

interface LanguageSelectorProps {
  variant?: 'compact' | 'full';
  className?: string;
}

export const LanguageSelector: React.FC<LanguageSelectorProps> = ({
  variant = 'compact',
  className,
}) => {
  const { language, setLanguage } = useApp();

  if (variant === 'compact') {
    const currentIndex = languages.findIndex(l => l.code === language);
    const nextLang = languages[(currentIndex + 1) % languages.length];

    return (
      <Button
        variant="icon"
        size="icon"
        onClick={() => setLanguage(nextLang.code)}
        className={cn('gap-2', className)}
      >
        <Globe size={20} />
        <span className="text-sm font-semibold">{languages.find(l => l.code === language)?.native}</span>
      </Button>
    );
  }

  return (
    <div className={cn('flex gap-3', className)}>
      {languages.map((lang) => (
        <Button
          key={lang.code}
          variant={language === lang.code ? 'default' : 'outline'}
          onClick={() => setLanguage(lang.code)}
          className="flex-1 h-16"
        >
          <span className="text-lg font-semibold">{lang.native}</span>
        </Button>
      ))}
    </div>
  );
};
