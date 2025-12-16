import React from 'react';
import { Globe } from 'lucide-react';
import { useApp } from '@/contexts/AppContext';
import { Button } from '@/components/ui/button';
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from '@/components/ui/dropdown-menu';

export const LanguageSelector: React.FC = () => {
  const { language, setLanguage } = useApp();

  const languages = [
    { code: 'en', name: 'English' },
    { code: 'hi', name: 'हिंदी' }, // Native names for instant recognition
    { code: 'te', name: 'తెలుగు' },
  ];

  return (
    <DropdownMenu>
      <DropdownMenuTrigger asChild>
        <Button 
          variant="outline" 
          size="default"
          // Ensures a minimum 44px touch target on mobile
          className="h-11 px-4 gap-2 rounded-2xl glass-card border-lavender-light/50 hover:bg-lavender-light/20"
        >
          <Globe size={20} className="text-primary" />
          <span className="font-medium text-sm">
            {languages.find((l) => l.code === language)?.name}
          </span>
        </Button>
      </DropdownMenuTrigger>
      <DropdownMenuContent align="end" className="glass-card border-lavender-light/50">
        {languages.map((lang) => (
          <DropdownMenuItem
            key={lang.code}
            onClick={() => setLanguage(lang.code as 'en' | 'hi' | 'te')}
            className={`cursor-pointer px-6 py-3 text-base ${
              language === lang.code ? 'bg-primary/10 text-primary font-bold' : ''
            }`}
          >
            {lang.name}
          </DropdownMenuItem>
        ))}
      </DropdownMenuContent>
    </DropdownMenu>
  );
};