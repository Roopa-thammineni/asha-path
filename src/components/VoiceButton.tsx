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
    xl: 'h-24 w-24',
  };

  const iconSizes = {
    default: 24,
    lg: 32,
    xl: 40,
  };

  return (
    <div className="relative flex flex-col items-center gap-3">
      {/* Pulse rings */}
      {(isListening || isSpeaking) && (
        <>
          <span
            className={cn(
              'absolute inset-0 rounded-full animate-pulse-ring',
              isListening ? 'bg-voice-listening' : 'bg-voice-speaking'
            )}
          />
          <span
            className={cn(
              'absolute inset-0 rounded-full animate-pulse-ring [animation-delay:0.5s]',
              isListening ? 'bg-voice-listening' : 'bg-voice-speaking'
            )}
          />
        </>
      )}
      
      <Button
        variant="voice"
        onClick={onPress}
        className={cn(
          sizeClasses[size],
          'relative z-10',
          isListening && 'bg-sky shadow-[0_0_30px_hsl(200_80%_55%_/_0.5)]',
          isSpeaking && 'bg-primary shadow-glow',
          className
        )}
      >
        {isSpeaking ? (
          <Volume2 size={iconSizes[size]} className="text-primary-foreground" />
        ) : isListening ? (
          <Mic size={iconSizes[size]} className="text-primary-foreground animate-pulse" />
        ) : (
          <Mic size={iconSizes[size]} className="text-primary-foreground" />
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
