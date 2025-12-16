import React, { useState } from 'react';
import { PlusCircle, Building2, MapPin, Briefcase, IndianRupee, Send } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { toast } from "sonner";
import { useApp } from '@/contexts/AppContext';

export const RecruiterPage: React.FC = () => {
  const { addJob } = useApp();
  const [jobData, setJobData] = useState({
    title: '',
    company: '',
    location: '',
    pay: '',
    type: 'daily'
  });

  const handlePostJob = (e: React.FormEvent) => {
    e.preventDefault();
    
    // Construct a new job object based on types
    const newJob = {
      id: Math.random().toString(36).substr(2, 9),
      title: jobData.title,
      employer: jobData.company,
      location: jobData.location,
      pay: jobData.pay,
      type: jobData.type as any,
      distance: '0 km',
      verified: true,
      icon: '💼'
    };

    addJob(newJob);
    toast.success("Job is now live for all users!");
    setJobData({ title: '', company: '', location: '', pay: '', type: 'daily' });
  };

  return (
    <div className="min-h-screen pb-28 px-4 pt-6">
      <header className="mb-8 animate-fade-in-up">
        <h1 className="text-3xl font-bold text-blue-700 text-gradient">Recruiter Portal</h1>
        <p className="text-muted-foreground mt-1">Hire talent for your business</p>
      </header>

      <div className="glass-card p-6 shadow-xl border-blue-100">
        <div className="flex items-center gap-2 mb-6 text-primary">
          <PlusCircle size={24} />
          <h2 className="text-xl font-bold">Post a New Work Opportunity</h2>
        </div>

        <form onSubmit={handlePostJob} className="space-y-5">
          <div className="space-y-2">
            <label className="text-sm font-semibold ml-1">What is the work?</label>
            <div className="relative">
              <Briefcase className="absolute left-3 top-3 text-primary/60" size={20} />
              <Input 
                placeholder="e.g. Delivery Partner, Tailor" 
                className="pl-10 h-12 rounded-xl"
                value={jobData.title}
                onChange={(e) => setJobData({...jobData, title: e.target.value})}
                required
              />
            </div>
          </div>

          <div className="space-y-2">
            <label className="text-sm font-semibold ml-1">Company/Shop Name</label>
            <div className="relative">
              <Building2 className="absolute left-3 top-3 text-primary/60" size={20} />
              <Input 
                placeholder="Name" 
                className="pl-10 h-12 rounded-xl"
                value={jobData.company}
                onChange={(e) => setJobData({...jobData, company: e.target.value})}
                required
              />
            </div>
          </div>

          <div className="grid grid-cols-2 gap-4">
            <div className="space-y-2">
              <label className="text-sm font-semibold ml-1">Location</label>
              <div className="relative">
                <MapPin className="absolute left-3 top-3 text-primary/60" size={20} />
                <Input 
                  placeholder="Area" 
                  className="pl-10 h-12 rounded-xl"
                  value={jobData.location}
                  onChange={(e) => setJobData({...jobData, location: e.target.value})}
                  required
                />
              </div>
            </div>
            <div className="space-y-2">
              <label className="text-sm font-semibold ml-1">Pay (₹)</label>
              <div className="relative">
                <IndianRupee className="absolute left-3 top-3 text-primary/60" size={20} />
                <Input 
                  type="number"
                  placeholder="Amount" 
                  className="pl-10 h-12 rounded-xl"
                  value={jobData.pay}
                  onChange={(e) => setJobData({...jobData, pay: e.target.value})}
                  required
                />
              </div>
            </div>
          </div>

          <div className="space-y-2">
            <label className="text-sm font-semibold ml-1">Payment Cycle</label>
            <select 
              className="w-full h-12 rounded-xl border border-border bg-white/50 backdrop-blur-sm px-3 outline-none"
              value={jobData.type}
              onChange={(e) => setJobData({...jobData, type: e.target.value})}
            >
              <option value="daily">Daily Pay</option>
              <option value="weekly">Weekly Pay</option>
              <option value="monthly">Monthly Salary</option>
            </select>
          </div>

          <Button type="submit" className="w-full h-14 bg-primary hover:bg-primary/90 rounded-xl text-lg font-bold shadow-glow mt-4 transition-all">
            Post Job Now
            <Send size={20} className="ml-2" />
          </Button>
        </form>
      </div>
    </div>
  );
};