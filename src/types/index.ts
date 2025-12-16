export type Language = 'en' | 'hi' | 'te';

export interface BusinessIdea {
  id: string;
  name: string;
  nameHi: string;
  nameTe: string;
  icon: string;
  estimatedIncome: string;
  difficulty: 'low' | 'medium' | 'high';
  demand: 'low' | 'medium' | 'high';
  sustainable: boolean;
  requiredBudget: string;
  description: string;
  descriptionHi: string;
  descriptionTe: string;
}

export interface Skill {
  id: string;
  name: string;
  nameHi: string;
  nameTe: string;
  icon: string;
}

export interface Job {
  id: string;
  title: string;
  titleHi: string;
  titleTe: string;
  employer: string;
  pay: string;
  location: string;
  distance: string;
  icon: string;
  verified: boolean;
  type: 'daily' | 'weekly' | 'monthly';
}

export interface LearningModule {
  id: string;
  title: string;
  titleHi: string;
  titleTe: string;
  icon: string;
  duration: string;
  type: 'video' | 'audio' | 'visual';
  progress: number;
  completed: boolean;
}

export interface UserProfile {
  id: string;
  name: string;
  phone: string;
  location: string;
  budget: string;
  skills: string[];
  completedModules: string[];
  savedJobs: string[];
  language: Language;
}

export interface VoiceState {
  isListening: boolean;
  isSpeaking: boolean;
  transcript: string;
  error: string | null;
}

export interface AppState {
  currentLanguage: Language;
  isOnboarded: boolean;
  voiceEnabled: boolean;
}
