import React from 'react';
import { ArrowLeft, ExternalLink, Landmark, GraduationCap, Coins } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { useApp } from '@/contexts/AppContext';
import { governmentSchemes } from '@/data/mockData';

export const SchemesPage: React.FC<{ onBack: () => void }> = ({ onBack }) => {
  const { language } = useApp();

  return (
    <div className="min-h-screen pb-28 px-4 pt-6 animate-fade-in">
      <header className="flex items-center gap-4 mb-8">
        <Button variant="ghost" size="icon" onClick={onBack} className="rounded-full">
          <ArrowLeft size={24} />
        </Button>
        <h1 className="text-2xl font-bold text-gradient">Government Schemes</h1>
      </header>

      <div className="space-y-4">
        {governmentSchemes.map((scheme) => (
          <div key={scheme.id} className="glass-card p-5 relative overflow-hidden group">
            <div className="flex items-start gap-4">
              <div className="p-3 rounded-xl bg-primary/10 text-primary">
                {scheme.category === 'loan' ? <Coins size={24} /> : 
                 scheme.category === 'education' ? <GraduationCap size={24} /> : 
                 <Landmark size={24} />}
              </div>
              <div className="flex-1">
                <h3 className="font-bold text-lg text-foreground">
                  {language === 'hi' ? scheme.nameHi : language === 'te' ? scheme.nameTe : scheme.name}
                </h3>
                <p className="text-sm text-muted-foreground mt-2 line-clamp-3">
                  {language === 'hi' ? scheme.descriptionHi : language === 'te' ? scheme.descriptionTe : scheme.description}
                </p>
                <div className="mt-4 p-3 bg-emerald-500/10 rounded-lg border border-emerald-500/20">
                  <p className="text-xs font-bold text-emerald-600 uppercase tracking-wider">Benefit</p>
                  <p className="text-sm text-emerald-700 font-medium">
                    {language === 'hi' ? scheme.benefitHi : language === 'te' ? scheme.benefitTe : scheme.benefit}
                  </p>
                </div>
                <Button 
                  className="w-full mt-4 gap-2" 
                  variant="outline"
                  onClick={() => window.open(scheme.link, '_blank')}
                >
                  Apply Now <ExternalLink size={16} />
                </Button>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};