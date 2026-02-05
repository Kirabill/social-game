import { Pressable } from './primitives/Pressable';
import { Icon, IconName } from './Icon';
import { HapticType } from '../../hooks/useHaptics';

export type IconButtonVariant = 'default' | 'primary' | 'ghost' | 'outline';
export type IconButtonSize = 'sm' | 'md' | 'lg';

type IconButtonProps = {
  icon: IconName;
  onPress: () => void;
  variant?: IconButtonVariant;
  size?: IconButtonSize;
  disabled?: boolean;
  haptic?: HapticType | false;
  accessibilityLabel: string;
  className?: string;
};

const variantClasses: Record<IconButtonVariant, string> = {
  default: 'bg-cream-50 border border-cream-100',
  primary: 'bg-terracotta',
  ghost: 'bg-transparent',
  outline: 'bg-transparent border border-cream-200',
};

const variantIconColors: Record<IconButtonVariant, string> = {
  default: 'rgba(253, 244, 229, 0.6)',
  primary: '#fdf4e5',
  ghost: 'rgba(253, 244, 229, 0.45)',
  outline: 'rgba(253, 244, 229, 0.6)',
};

const sizeClasses: Record<IconButtonSize, string> = {
  sm: 'w-9 h-9',
  md: 'w-11 h-11 min-w-touch min-h-touch',
  lg: 'w-13 h-13',
};

const sizeIconSizes: Record<IconButtonSize, number> = {
  sm: 18,
  md: 20,
  lg: 24,
};

export const IconButton = ({
  icon,
  onPress,
  variant = 'default',
  size = 'md',
  disabled = false,
  haptic = 'light',
  accessibilityLabel,
  className = '',
}: IconButtonProps) => {
  const iconSize = sizeIconSizes[size];
  const iconColor = variantIconColors[variant];

  return (
    <Pressable
      onPress={onPress}
      disabled={disabled}
      haptic={disabled ? false : haptic}
      accessibilityLabel={accessibilityLabel}
      accessibilityRole="button"
      className={`
        items-center justify-center rounded-xl
        ${variantClasses[variant]}
        ${sizeClasses[size]}
        ${disabled ? 'opacity-50' : ''}
        ${className}
      `}>
      <Icon name={icon} size={iconSize} color={iconColor} />
    </Pressable>
  );
};
