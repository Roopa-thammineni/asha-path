import React, { useState } from 'react';
import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { AppProvider } from '@/contexts/AppContext';
import { BottomNav } from '@/components/BottomNav';
import { HomePage } from '@/pages/HomePage';
import { LearnPage } from '@/pages/LearnPage';
import { JobsPage } from '@/pages/JobsPage';
import { GuidePage } from '@/pages/GuidePage';
import { ProfilePage } from '@/pages/ProfilePage';

const queryClient = new QueryClient();

const AppContent: React.FC = () => {
  const [activeTab, setActiveTab] = useState('home');

  const renderPage = () => {
    switch (activeTab) {
      case 'home':
        return <HomePage onNavigate={setActiveTab} />;
      case 'learn':
        return <LearnPage />;
      case 'jobs':
        return <JobsPage />;
      case 'guide':
        return <GuidePage />;
      case 'profile':
        return <ProfilePage />;
      default:
        return <HomePage onNavigate={setActiveTab} />;
    }
  };

  return (
    <div className="min-h-screen bg-background">
      {renderPage()}
      <BottomNav activeTab={activeTab} onTabChange={setActiveTab} />
    </div>
  );
};

const App = () => (
  <QueryClientProvider client={queryClient}>
    <AppProvider>
      <TooltipProvider>
        <Toaster />
        <Sonner />
        <AppContent />
      </TooltipProvider>
    </AppProvider>
  </QueryClientProvider>
);

export default App;
