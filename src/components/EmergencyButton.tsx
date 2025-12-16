import React from 'react';
import { Phone, Shield } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { useApp } from '@/contexts/AppContext';
import { t } from '@/lib/translations';
import { cn } from '@/lib/utils';

interface EmergencyButtonProps {
  className?: string;
}

export const EmergencyButton: React.FC<EmergencyButtonProps> = ({ className }) => {
  const { language } = useApp();

  const handleEmergency = () => {
    // In a real app, this would trigger emergency protocols
    window.location.href = 'tel:181'; // Women Helpline India
  };

  return (
    <Button
      variant="emergency"
      size="lg"
      onClick={handleEmergency}
      className={cn('w-full gap-3', className)}
    >
      <Shield size={24} />
      <span className="flex flex-col items-start">
        <span className="text-base font-bold">{t('emergency', language)}</span>
        <span className="text-xs opacity-80">{t('callNow', language)} - 181</span>
      </span>
      <Phone size={20} className="ml-auto" />
    </Button>
  );
};
