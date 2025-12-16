import React, { createContext, useContext, useState, useCallback, ReactNode } from 'react';
import { Language, AppState, VoiceState } from '@/types';

interface AppContextType {
  language: Language;
  setLanguage: (lang: Language) => void;
  isOnboarded: boolean;
  setIsOnboarded: (value: boolean) => void;
  voiceEnabled: boolean;
  setVoiceEnabled: (value: boolean) => void;
  voiceState: VoiceState;
  setVoiceState: (state: Partial<VoiceState>) => void;
}

const AppContext = createContext<AppContextType | undefined>(undefined);

export const AppProvider: React.FC<{ children: ReactNode }> = ({ children }) => {
  const [language, setLanguage] = useState<Language>('en');
  const [isOnboarded, setIsOnboarded] = useState(false);
  const [voiceEnabled, setVoiceEnabled] = useState(true);
  const [voiceState, setVoiceStateInternal] = useState<VoiceState>({
    isListening: false,
    isSpeaking: false,
    transcript: '',
    error: null,
  });

  const setVoiceState = useCallback((state: Partial<VoiceState>) => {
    setVoiceStateInternal(prev => ({ ...prev, ...state }));
  }, []);

  return (
    <AppContext.Provider
      value={{
        language,
        setLanguage,
        isOnboarded,
        setIsOnboarded,
        voiceEnabled,
        setVoiceEnabled,
        voiceState,
        setVoiceState,
      }}
    >
      {children}
    </AppContext.Provider>
  );
};

export const useApp = (): AppContextType => {
  const context = useContext(AppContext);
  if (!context) {
    throw new Error('useApp must be used within an AppProvider');
  }
  return context;
};
