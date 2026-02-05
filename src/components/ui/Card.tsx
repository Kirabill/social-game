import { View, ViewProps } from 'react-native';
import { ReactNode } from 'react';

export type CardVariant = 'default' | 'glass' | 'elevated';

type CardProps = ViewProps & {
  variant?: CardVariant;
  children: ReactNode;
  padding?: 'none' | 'sm' | 'md' | 'lg';
};

const variantClasses: Record<CardVariant, string> = {
  default: 'bg-surface border border-cream-50',
  glass: 'bg-surface/75 border border-cream-50 backdrop-blur-lg',
  elevated: 'bg-surface shadow-xl shadow-black/25',
};

const paddingClasses: Record<'none' | 'sm' | 'md' | 'lg', string> = {
  none: '',
  sm: 'p-3',
  md: 'p-4',
  lg: 'p-6',
};

export const Card = ({
  variant = 'default',
  padding = 'md',
  children,
  className = '',
  ...props
}: CardProps) => {
  return (
    <View
      className={`rounded-xl ${variantClasses[variant]} ${paddingClasses[padding]} ${className}`}
      {...props}>
      {children}
    </View>
  );
};
