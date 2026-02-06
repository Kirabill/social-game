import { IconButton } from './IconButton';

type HelpButtonProps = {
  onPress: () => void;
  className?: string;
};

export const HelpButton = ({ onPress, className = '' }: HelpButtonProps) => {
  return (
    <IconButton
      icon="help-circle"
      onPress={onPress}
      variant="primary"
      size="lg"
      accessibilityLabel="Comment jouer"
      className={`shadow-lg shadow-terracotta-300 ${className}`}
    />
  );
};
