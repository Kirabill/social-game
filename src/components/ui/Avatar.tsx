import { View, Image } from 'react-native';
import { Text } from './primitives/Text';

export type AvatarSize = 'sm' | 'md' | 'lg' | 'xl';
export type AvatarStatus = 'online' | 'offline' | 'busy' | 'away';

type AvatarProps = {
  source?: string;
  name?: string;
  size?: AvatarSize;
  status?: AvatarStatus;
  className?: string;
};

const sizeClasses: Record<AvatarSize, string> = {
  sm: 'w-8 h-8',
  md: 'w-11 h-11',
  lg: 'w-15 h-15',
  xl: 'w-18 h-18',
};

const sizeFontClasses: Record<AvatarSize, string> = {
  sm: 'text-xs',
  md: 'text-base',
  lg: 'text-xl',
  xl: 'text-2xl',
};

const statusColors: Record<AvatarStatus, string> = {
  online: 'bg-success',
  offline: 'bg-cream-300',
  busy: 'bg-error',
  away: 'bg-warning',
};

const statusSizeClasses: Record<AvatarSize, string> = {
  sm: 'w-2 h-2 -right-0.5 -bottom-0.5 border',
  md: 'w-3 h-3 -right-0.5 -bottom-0.5 border-2',
  lg: 'w-3.5 h-3.5 -right-0.5 -bottom-0.5 border-2',
  xl: 'w-4 h-4 -right-1 -bottom-1 border-2',
};

const getInitials = (name: string): string => {
  const parts = name.trim().split(/\s+/);
  if (parts.length === 1) {
    return parts[0].charAt(0).toUpperCase();
  }
  return (parts[0].charAt(0) + parts[parts.length - 1].charAt(0)).toUpperCase();
};

export const Avatar = ({ source, name, size = 'md', status, className = '' }: AvatarProps) => {
  const initials = name ? getInitials(name) : '?';

  return (
    <View className={`relative ${className}`}>
      <View
        className={`
          items-center justify-center rounded-full bg-terracotta
          ${sizeClasses[size]}
        `}>
        {source ? (
          <Image
            source={{ uri: source }}
            className={`rounded-full ${sizeClasses[size]}`}
            resizeMode="cover"
          />
        ) : (
          <Text className={`font-bold text-cream ${sizeFontClasses[size]}`}>{initials}</Text>
        )}
      </View>
      {status && (
        <View
          className={`
            absolute rounded-full border-background
            ${statusColors[status]}
            ${statusSizeClasses[size]}
          `}
        />
      )}
    </View>
  );
};
