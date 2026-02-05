import { View } from 'react-native';
import { Text } from './primitives/Text';
import { Icon, IconName } from './Icon';

export type BadgeVariant = 'default' | 'success' | 'warning' | 'error' | 'accent';
export type BadgeSize = 'sm' | 'md';

type BadgeProps = {
  label: string;
  variant?: BadgeVariant;
  size?: BadgeSize;
  icon?: IconName;
  dot?: boolean;
  className?: string;
};

const variantClasses: Record<BadgeVariant, string> = {
  default: 'bg-cream-100 border border-cream-200',
  success: 'bg-success-50 border border-success-100',
  warning: 'bg-warning-50 border border-warning-100',
  error: 'bg-error-50 border border-error-100',
  accent: 'bg-terracotta-50 border border-terracotta-100',
};

const variantTextColors: Record<BadgeVariant, string> = {
  default: 'text-cream-600',
  success: 'text-success',
  warning: 'text-warning',
  error: 'text-error',
  accent: 'text-terracotta',
};

const variantIconColors: Record<BadgeVariant, string> = {
  default: 'rgba(253, 244, 229, 0.6)',
  success: '#22c55e',
  warning: '#f59e0b',
  error: '#ef4444',
  accent: '#b55447',
};

const variantDotColors: Record<BadgeVariant, string> = {
  default: 'bg-cream-400',
  success: 'bg-success',
  warning: 'bg-warning',
  error: 'bg-error',
  accent: 'bg-terracotta',
};

const sizeClasses: Record<BadgeSize, string> = {
  sm: 'px-2 py-0.5',
  md: 'px-3 py-1',
};

const sizeTextClasses: Record<BadgeSize, string> = {
  sm: 'text-[10px]',
  md: 'text-xs',
};

const sizeIconSizes: Record<BadgeSize, number> = {
  sm: 10,
  md: 12,
};

export const Badge = ({
  label,
  variant = 'default',
  size = 'md',
  icon,
  dot = false,
  className = '',
}: BadgeProps) => {
  const iconSize = sizeIconSizes[size];

  return (
    <View
      className={`
        flex-row items-center gap-1.5 self-start rounded-full
        ${variantClasses[variant]}
        ${sizeClasses[size]}
        ${className}
      `}>
      {dot && <View className={`h-2 w-2 rounded-full ${variantDotColors[variant]}`} />}
      {icon && <Icon name={icon} size={iconSize} color={variantIconColors[variant]} />}
      <Text
        className={`font-semibold uppercase tracking-wider ${variantTextColors[variant]} ${sizeTextClasses[size]}`}>
        {label}
      </Text>
    </View>
  );
};
