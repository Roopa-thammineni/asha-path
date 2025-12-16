import React from 'react';
import { MapPin, BookOpen, Calendar, Users } from 'lucide-react';
import { useApp } from '@/contexts/AppContext';

export const VolunteerPage: React.FC = () => {
  // IMPORTANT: Get volunteerTours from context state, not static file
  const { language, volunteerTours } = useApp();

  return (
    <div className="min-h-screen pb-28 px-4 pt-6">
      <header className="mb-6 animate-fade-in-up">
        <h1 className="text-2xl font-bold text-gradient">Volunteer Tours</h1>
        <p className="text-muted-foreground text-sm mt-1">Join an education tour and teach skills</p>
      </header>

      <div className="space-y-4">
        {volunteerTours.map((tour, index) => (
          <div 
            key={tour.id} 
            className="glass-card p-5 animate-fade-in-up"
            style={{ animationDelay: `${index * 0.1}s` }}
          >
            <div className="flex justify-between items-start mb-3">
              <div className="flex items-center gap-2 text-primary">
                <MapPin size={18} />
                <span className="font-bold text-lg">
                  {language === 'hi' ? (tour.villageHi || tour.village) : tour.village}
                </span>
              </div>
              <div className="bg-primary/10 text-primary text-[10px] font-bold px-2 py-1 rounded-full uppercase">
                Upcoming
              </div>
            </div>

            <div className="space-y-3">
              <div className="flex items-center gap-3 text-sm">
                <BookOpen size={16} className="text-muted-foreground" />
                <span className="font-semibold">
                  Skill: {language === 'hi' ? (tour.skillHi || tour.skill) : tour.skill}
                </span>
              </div>
              
              <div className="flex items-center gap-3 text-sm">
                <Calendar size={16} className="text-muted-foreground" />
                <span>{tour.date}</span>
              </div>

              {tour.description && (
                <p className="text-sm text-muted-foreground bg-white/50 p-3 rounded-xl border border-white/20">
                  {language === 'hi' ? (tour.descriptionHi || tour.description) : tour.description}
                </p>
              )}

              <button className="w-full py-3 bg-primary text-white rounded-xl font-bold shadow-soft hover:shadow-glow transition-all active:scale-95 flex items-center justify-center gap-2">
                <Users size={18} />
                Join as Volunteer
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};