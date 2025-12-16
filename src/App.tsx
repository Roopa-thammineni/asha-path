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
import { SchemesPage } from '@/pages/SchemesPage';
import { AuthPage } from '@/pages/AuthPage';
import { RecruiterPage } from '@/pages/RecruiterPage';
import { VolunteerPage } from '@/pages/VolunteerPage';
import { DeveloperPage } from '@/pages/DeveloperPage'; 
import { UserRole } from '@/types';

const queryClient = new QueryClient();

const AppContent: React.FC = () => {
  const [activeTab, setActiveTab] = useState('home');
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const [userRole, setUserRole] = useState<UserRole | null>(null);

  const handleLogout = () => {
    setIsAuthenticated(false);
    setUserRole(null);
    setActiveTab('home');
  };

  if (!isAuthenticated) {
    return (
      <AuthPage 
        onAuthComplete={(role) => {
          setIsAuthenticated(true);
          setUserRole(role);
          setActiveTab('home');
        }} 
      />
    );
  }

  const renderPage = () => {
    if (userRole === 'recruiter') {
      return activeTab === 'profile' ? <ProfilePage userRole={userRole} onLogout={handleLogout} /> : <RecruiterPage />;
    }

    if (userRole === 'developer') {
      return activeTab === 'profile' ? <ProfilePage userRole={userRole} onLogout={handleLogout} /> : <DeveloperPage />;
    }

    switch (activeTab) {
      case 'home': return <HomePage onNavigate={setActiveTab} />;
      case 'learn': return <LearnPage />;
      case 'jobs': return <JobsPage />;
      case 'volunteer': return <VolunteerPage />;
      case 'guide': return <GuidePage />;
      case 'schemes': return <SchemesPage onBack={() => setActiveTab('home')} />;
      case 'profile': return <ProfilePage userRole={userRole} onLogout={handleLogout} />;
      default: return <HomePage onNavigate={setActiveTab} />;
    }
  };

  return (
    <div className="min-h-screen bg-background">
      <main className="pb-20">
        {renderPage()}
      </main>
      
      <BottomNav 
        activeTab={activeTab} 
        onTabChange={setActiveTab} 
        isRecruiter={userRole === 'recruiter' || userRole === 'developer'} 
      />
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