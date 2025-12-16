import React from 'react';
import { Mic, MicOff, Volume2 } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { cn } from '@/lib/utils';
import { useApp } from '@/contexts/AppContext';
import { t } from '@/lib/translations';

interface VoiceButtonProps {
  onPress?: () => void;
  size?: 'default' | 'lg' | 'xl';
  className?: string;
}

export const VoiceButton: React.FC<VoiceButtonProps> = ({
  onPress,
  size = 'default',
  className,
}) => {
  const { voiceState, language } = useApp();
  const { isListening, isSpeaking } = voiceState;

  const sizeClasses = {
    default: 'h-16 w-16',
    lg: 'h-20 w-20',
    xl: 'h-28 w-28',
  };

  const iconSizes = {
    default: 24,
    lg: 32,
    xl: 44,
  };

  return (
    <div className="relative flex flex-col items-center gap-4">
      {/* Pulse rings */}
      {(isListening || isSpeaking) && (
        <>
          <span
            className={cn(
              'absolute inset-0 rounded-full animate-pulse-ring',
              isListening ? 'bg-lavender' : 'bg-blush'
            )}
          />
          <span
            className={cn(
              'absolute inset-0 rounded-full animate-pulse-ring [animation-delay:0.5s]',
              isListening ? 'bg-lavender' : 'bg-blush'
            )}
          />
        </>
      )}
      
      <Button
        variant="voice"
        onClick={onPress}
        className={cn(
          sizeClasses[size],
          'relative z-10 gradient-primary shadow-glow animate-glow',
          'hover:shadow-[0_0_50px_hsl(262_83%_75%_/_0.5)] transition-all duration-300',
          isListening && 'bg-lavender shadow-[0_0_40px_hsl(262_83%_75%_/_0.6)]',
          isSpeaking && 'gradient-blush shadow-[0_0_40px_hsl(350_70%_75%_/_0.6)]',
          className
        )}
      >
        {isSpeaking ? (
          <Volume2 size={iconSizes[size]} className="text-white" />
        ) : isListening ? (
          <Mic size={iconSizes[size]} className="text-white animate-pulse" />
        ) : (
          <Mic size={iconSizes[size]} className="text-white" />
        )}
      </Button>

      <span className="text-sm font-medium text-muted-foreground">
        {isSpeaking
          ? t('speaking', language)
          : isListening
          ? t('listening', language)
          : t('tapToSpeak', language)}
      </span>
    </div>
  );
};