import { View, ActivityIndicator } from 'react-native';
import { Pressable } from './primitives/Pressable';
import { Text } from './primitives/Text';
import { Icon, IconName } from './Icon';
import { HapticType } from '../../hooks/useHaptics';

export type ButtonVariant = 'primary' | 'secondary' | 'ghost' | 'outline';
export type ButtonSize = 'sm' | 'md' | 'lg';

type ButtonProps = {
  title: string;
  onPress: () => void;
  variant?: ButtonVariant;
  size?: ButtonSize;
  leftIcon?: IconName;
  rightIcon?: IconName;
  disabled?: boolean;
  loading?: boolean;
  fullWidth?: boolean;
  haptic?: HapticType | false;
  className?: string;
};

const variantClasses: Record<ButtonVariant, string> = {
  primary: 'bg-terracotta',
  secondary: 'bg-cream-100',
  ghost: 'bg-transparent',
  outline: 'bg-transparent border border-cream-200',
};

const variantTextClasses: Record<ButtonVariant, string> = {
  primary: 'text-cream',
  secondary: 'text-cream-700',
  ghost: 'text-cream-400',
  outline: 'text-cream-600',
};

const variantIconColors: Record<ButtonVariant, string> = {
  primary: '#fdf4e5',
  secondary: 'rgba(253, 244, 229, 0.8)',
  ghost: 'rgba(253, 244, 229, 0.45)',
  outline: 'rgba(253, 244, 229, 0.6)',
};

const sizeClasses: Record<ButtonSize, string> = {
  sm: 'px-3 py-2 min-h-[36px]',
  md: 'px-4 py-2.5 min-h-touch',
  lg: 'px-6 py-3.5 min-h-[52px]',
};

const sizeTextClasses: Record<ButtonSize, string> = {
  sm: 'text-xs',
  md: 'text-sm',
  lg: 'text-base',
};

const sizeIconSizes: Record<ButtonSize, number> = {
  sm: 16,
  md: 18,
  lg: 20,
};

export const Button = ({
  title,
  onPress,
  variant = 'primary',
  size = 'md',
  leftIcon,
  rightIcon,
  disabled = false,
  loading = false,
  fullWidth = false,
  haptic = 'medium',
  className = '',
}: ButtonProps) => {
  const iconSize = sizeIconSizes[size];
  const iconColor = variantIconColors[variant];

  return (
    <Pressable
      onPress={onPress}
      disabled={disabled || loading}
      haptic={disabled || loading ? false : haptic}
      className={`
        flex-row items-center justify-center rounded-xl
        ${variantClasses[variant]}
        ${sizeClasses[size]}
        ${fullWidth ? 'w-full' : ''}
        ${disabled ? 'opacity-50' : ''}
        ${className}
      `}>
      {loading ? (
        <ActivityIndicator size="small" color={iconColor} />
      ) : (
        <>
          {leftIcon && (
            <View className="mr-2">
              <Icon name={leftIcon} size={iconSize} color={iconColor} />
            </View>
          )}
          <Text className={`font-semibold ${variantTextClasses[variant]} ${sizeTextClasses[size]}`}>
            {title}
          </Text>
          {rightIcon && (
            <View className="ml-2">
              <Icon name={rightIcon} size={iconSize} color={iconColor} />
            </View>
          )}
        </>
      )}
    </Pressable>
  );
};
