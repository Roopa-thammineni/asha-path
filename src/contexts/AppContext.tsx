import React, { createContext, useContext, useState, useCallback, ReactNode } from 'react';
import { Language, VoiceState, Job } from '@/types';
import { jobs as initialJobs, volunteerTours as initialTours } from '@/data/mockData';

interface AppContextType {
  language: Language;
  setLanguage: (lang: Language) => void;
  isOnboarded: boolean;
  setIsOnboarded: (value: boolean) => void;
  voiceEnabled: boolean;
  setVoiceEnabled: (value: boolean) => void;
  voiceState: VoiceState;
  setVoiceState: (state: Partial<VoiceState>) => void;
  jobs: Job[];
  addJob: (newJob: Job) => void;
  // Live State for Volunteer Tours
  volunteerTours: any[];
  addTour: (newTour: any) => void;
}

const AppContext = createContext<AppContextType | undefined>(undefined);

export const AppProvider: React.FC<{ children: ReactNode }> = ({ children }) => {
  const [language, setLanguage] = useState<Language>('en');
  const [isOnboarded, setIsOnboarded] = useState(false);
  const [voiceEnabled, setVoiceEnabled] = useState(true);
  const [jobs, setJobs] = useState<Job[]>(initialJobs);
  
  // Initialize state with the mock data
  const [volunteerTours, setVolunteerTours] = useState<any[]>(initialTours);

  const [voiceState, setVoiceStateInternal] = useState<VoiceState>({
    isListening: false,
    isSpeaking: false,
    transcript: '',
    error: null,
  });

  const setVoiceState = useCallback((state: Partial<VoiceState>) => {
    setVoiceStateInternal(prev => ({ ...prev, ...state }));
  }, []);

  const addJob = (newJob: Job) => {
    setJobs(prev => [newJob, ...prev]);
  };

  // Logic to add a tour to the live list
  const addTour = (newTour: any) => {
    setVolunteerTours(prev => [newTour, ...prev]);
  };

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
        jobs,
        addJob,
        volunteerTours,
        addTour,
      }}
    >
      {children}
    </AppContext.Provider>
  );
};

export const useApp = (): AppContextType => {
  const context = useContext(AppContext);
  if (!context) throw new Error('useApp must be used within an AppProvider');
  return context;
};