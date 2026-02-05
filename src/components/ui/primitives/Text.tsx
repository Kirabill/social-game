import { Text as RNText, TextProps as RNTextProps } from 'react-native';

export type TextVariant = 'h1' | 'h2' | 'h3' | 'body' | 'caption' | 'label';
export type TextColor = 'default' | 'muted' | 'accent' | 'success' | 'warning' | 'error';

type TextProps = RNTextProps & {
  variant?: TextVariant;
  color?: TextColor;
};

const variantClasses: Record<TextVariant, string> = {
  h1: 'text-4xl font-extrabold tracking-tight',
  h2: 'text-2xl font-bold',
  h3: 'text-lg font-semibold',
  body: 'text-base',
  caption: 'text-xs',
  label: 'text-xs font-semibold uppercase tracking-wider',
};

const colorClasses: Record<TextColor, string> = {
  default: 'text-cream',
  muted: 'text-cream-400',
  accent: 'text-terracotta',
  success: 'text-success',
  warning: 'text-warning',
  error: 'text-error',
};

export const Text = ({
  variant = 'body',
  color = 'default',
  className = '',
  ...props
}: TextProps) => {
  return (
    <RNText
      className={`${variantClasses[variant]} ${colorClasses[color]} ${className}`}
      {...props}
    />
  );
};
