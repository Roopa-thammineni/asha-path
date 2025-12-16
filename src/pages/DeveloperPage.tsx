import React, { useState } from 'react';
import { MapPin, Calendar, BookOpen, Send } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { toast } from "sonner";
import { useApp } from '@/contexts/AppContext';

export const DeveloperPage: React.FC = () => {
  const { addTour } = useApp(); // This will now work correctly
  const [tourData, setTourData] = useState({ village: '', skill: '', date: '', description: '' });

  const handlePostTour = (e: React.FormEvent) => {
    e.preventDefault();
    const newTour = {
      id: Math.random().toString(36).substr(2, 9),
      village: tourData.village,
      villageHi: tourData.village, 
      skill: tourData.skill,
      skillHi: tourData.skill,
      date: tourData.date,
      description: tourData.description,
      descriptionHi: tourData.description
    };
    
    addTour(newTour);
    toast.success("Education Tour added!");
    setTourData({ village: '', skill: '', date: '', description: '' });
  };

  return (
    <div className="p-6">
      <header className="mb-8">
        <h1 className="text-3xl font-black text-gradient text-primary">Dev Portal</h1>
        <p className="text-muted-foreground">Plan Village Tours</p>
      </header>

      <div className="glass-card p-6 border-primary/20 bg-white/40 backdrop-blur-md rounded-3xl shadow-xl">
        <form onSubmit={handlePostTour} className="space-y-4">
          <div className="space-y-1">
            <label className="text-[10px] font-bold uppercase text-muted-foreground ml-1">Village Name</label>
            <div className="relative">
              <MapPin className="absolute left-3 top-3 text-primary" size={18} />
              <Input 
                placeholder="Enter village name"
                className="pl-10 h-12 rounded-xl bg-white/50 border-white/20 focus:bg-white"
                value={tourData.village}
                onChange={(e) => setTourData({...tourData, village: e.target.value})}
                required
              />
            </div>
          </div>

          <div className="space-y-1">
            <label className="text-[10px] font-bold uppercase text-muted-foreground ml-1">Skill/Topic</label>
            <div className="relative">
              <BookOpen className="absolute left-3 top-3 text-primary" size={18} />
              <Input 
                placeholder="e.g. Digital Safety"
                className="pl-10 h-12 rounded-xl bg-white/50 border-white/20 focus:bg-white"
                value={tourData.skill}
                onChange={(e) => setTourData({...tourData, skill: e.target.value})}
                required
              />
            </div>
          </div>

          <div className="space-y-1">
            <label className="text-[10px] font-bold uppercase text-muted-foreground ml-1">Event Date</label>
            <Input 
              type="date"
              className="h-12 rounded-xl bg-white/50 border-white/20 focus:bg-white px-4"
              value={tourData.date}
              onChange={(e) => setTourData({...tourData, date: e.target.value})}
              required
            />
          </div>

          <Button type="submit" className="w-full h-14 bg-primary text-white font-bold rounded-2xl shadow-glow hover:scale-[1.02] transition-transform mt-4">
            Add Tour <Send size={18} className="ml-2" />
          </Button>
        </form>
      </div>
    </div>
  );
};